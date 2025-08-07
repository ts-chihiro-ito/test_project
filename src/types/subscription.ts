export interface SubscriptionPlan {
  id: string;
  name: string;
  displayName: string;
  price: number;
  currency: string;
  billingPeriod: 'monthly' | 'yearly';
  description: string;
  features: PlanFeature[];
  limitations: PlanLimitation[];
  isPopular?: boolean;
  isEnterprise?: boolean;
}

export interface PlanFeature {
  id: string;
  name: string;
  description?: string;
  included: boolean;
}

export interface PlanLimitation {
  type: 'users' | 'storage' | 'projects' | 'api_calls';
  value: number | 'unlimited';
  unit: string;
}
