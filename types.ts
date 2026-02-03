
export interface ServiceFeature {
  title: string;
  description: string;
}

export interface PricingPlan {
  name: string;
  monthlyPrice: string;
  setupFee: string;
  features: string[];
}
