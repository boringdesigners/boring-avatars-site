'use server';

import Stripe from 'stripe';
import type { Price } from '@/utils/types';
import { stripe } from '@/utils/stripe/config';
import {
  getURL,
  getErrorRedirect,
  calculateTrialEndUnixTimestamp
} from '@/utils/helpers';

type CheckoutResponse = {
  errorRedirect?: string;
  sessionId?: string;
};

export async function checkoutWithStripe({
  price,
  redirectPath = '/success',
  email,
  domain,
  testDomain
}: {
  price: Price;
  redirectPath: string;
  email: string;
  domain: string;
  testDomain: string;
}): Promise<CheckoutResponse> {
  try {
    // Retrieve or create the customer in Stripe
    let customer: string;
    try {
      customer = await createOrRetrieveCustomer({
        email: email,
        domain,
        testDomain
      });
    } catch (err) {
      console.error(err);
      throw new Error('Unable to access customer record.');
    }

    let params: Stripe.Checkout.SessionCreateParams = {
      allow_promotion_codes: true,
      billing_address_collection: 'required',
      customer,
      customer_update: {
        address: 'auto'
      },
      line_items: [
        {
          price: price.id,
          quantity: 1
        }
      ],
      cancel_url: getURL(),
      success_url: getURL(
        `${redirectPath}?email=${email}&domain=${domain}&testDomain=${testDomain}`
      )
    };

    console.log(
      'Trial end:',
      calculateTrialEndUnixTimestamp(price.trial_period_days)
    );
    if (price.type === 'recurring') {
      params = {
        ...params,
        mode: 'subscription',
        subscription_data: {
          trial_end: calculateTrialEndUnixTimestamp(price.trial_period_days)
        }
      };
    } else if (price.type === 'one_time') {
      params = {
        ...params,
        mode: 'payment'
      };
    }

    // Create a checkout session in Stripe
    let session;
    try {
      session = await stripe.checkout.sessions.create(params);
    } catch (err) {
      console.error(err);
      throw new Error('Unable to create checkout session.');
    }

    // Instead of returning a Response, just return the data or error.
    if (session) {
      return { sessionId: session.id };
    } else {
      throw new Error('Unable to create checkout session.');
    }
  } catch (error) {
    if (error instanceof Error) {
      return {
        errorRedirect: getErrorRedirect(
          redirectPath,
          error.message,
          'Please try again later or contact a system administrator.'
        )
      };
    } else {
      return {
        errorRedirect: getErrorRedirect(
          redirectPath,
          'An unknown error occurred.',
          'Please try again later or contact a system administrator.'
        )
      };
    }
  }
}

export async function createStripePortal(currentPath: string) {
  try {
    let customer;
    try {
      customer = await createOrRetrieveCustomer({
        email: '',
        domain: '',
        testDomain: ''
      });
    } catch (err) {
      console.error(err);
      throw new Error('Unable to access customer record.');
    }

    if (!customer) {
      throw new Error('Could not get customer.');
    }

    try {
      const { url } = await stripe.billingPortal.sessions.create({
        customer,
        return_url: getURL('/account')
      });
      if (!url) {
        throw new Error('Could not create billing portal');
      }
      return url;
    } catch (err) {
      console.error(err);
      throw new Error('Could not create billing portal');
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      return getErrorRedirect(
        currentPath,
        error.message,
        'Please try again later or contact a system administrator.'
      );
    } else {
      return getErrorRedirect(
        currentPath,
        'An unknown error occurred.',
        'Please try again later or contact a system administrator.'
      );
    }
  }
}

const createOrRetrieveCustomer = async ({
  email,
  domain,
  testDomain
}: {
  email: string;
  domain: string;
  testDomain: string;
}): Promise<string> => {
  const stripeCustomers = await stripe.customers.list({ email: email });
  const stripeCustomerId =
    stripeCustomers.data.length > 0 ? stripeCustomers.data[0].id : undefined;

  // If still no stripeCustomerId, create a new customer in Stripe
  const customerId = stripeCustomerId
    ? stripeCustomerId
    : await createCustomerInStripe({ email, domain, testDomain });

  if (!customerId) {
    throw new Error('Stripe customer creation failed.');
  }

  return customerId;
};

const createCustomerInStripe = async ({
  email,
  domain,
  testDomain
}: {
  email: string;
  domain: string;
  testDomain: string;
}) => {
  const customerData = { metadata: { domain, testDomain }, email: email };
  const newCustomer = await stripe.customers.create(customerData);
  if (!newCustomer) throw new Error('Stripe customer creation failed.');

  return newCustomer.id;
};
