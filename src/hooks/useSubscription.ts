import { useState } from 'react';
import { SubscriptionPlan } from '@/types/subscription';

export function useSubscription() {
  const [selectedPlan, setSelectedPlan] = useState<SubscriptionPlan | null>(null);

  const handleSelectPlan = (plan: SubscriptionPlan) => {
    setSelectedPlan(plan);
    // In a real app, you would typically trigger further actions here,
    // such as showing a confirmation modal or proceeding to checkout.
  };

  return {
    selectedPlan,
    handleSelectPlan,
  };
}
