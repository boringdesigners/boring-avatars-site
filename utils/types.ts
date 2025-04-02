export type Product = {
  id: string;
  name: string;
  description: string;
  prices: Price[];
};

export type BillingInterval = 'year' | 'month';
export type Price = {
  id: string;
  interval: BillingInterval;
  currency: string;
  unit_amount: number;
  trial_period_days: number;
  type: 'recurring' | 'one_time';
};
