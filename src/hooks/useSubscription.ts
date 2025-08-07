import { useState } from 'react';
import { SubscriptionPlan } from '@/types/subscription';

export function useSubscription() {
  const [selectedPlan, setSelectedPlan] = useState<SubscriptionPlan | null>(null);

  const handleSelectPlan = (plan: SubscriptionPlan) => {
    setSelectedPlan(plan);
    // In a real app, you might show a confirmation modal here.
    console.log('Selected Plan:', plan.displayName);
  };

  return {
    selectedPlan,
    handleSelectPlan,
  };
}
