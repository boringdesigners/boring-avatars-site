import Pricing from '@/components/ui/Pricing/Pricing';

const products = [
  {
    id: 'basic_plan',
    name: 'Basic Plan',
    description: 'Up to 100K monthly requests',
    prices: [
      {
        id: 'price_1PwIta0350y7MMvDT7FIUSMS',
        interval: 'month' as const,
        currency: 'USD',
        unit_amount: 499,
        trial_period_days: 0,
        type: 'recurring' as const
      },
      {
        id: 'price_1PwJ8a0350y7MMvDaQEhD3Ar',
        interval: 'year' as const,
        currency: 'USD',
        unit_amount: 4999,
        trial_period_days: 0,
        type: 'recurring' as const
      }
    ]
  },
  {
    id: 'pro_plan',
    name: 'Pro Plan',
    description: 'Up to 500K monthly requests',
    prices: [
      {
        id: 'price_1PwIvh0350y7MMvDnXi9fyiu',
        interval: 'month' as const,
        currency: 'USD',
        unit_amount: 999,
        trial_period_days: 0,
        type: 'recurring' as const
      },
      {
        id: 'price_1PwJ9r0350y7MMvDFjojjbAj',
        interval: 'year' as const,
        currency: 'USD',
        unit_amount: 9999,
        trial_period_days: 0,
        type: 'recurring' as const
      }
    ]
  }
];

export default async function PricingPage() {
  return <Pricing products={products} />;
}
