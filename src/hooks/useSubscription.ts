import { useState } from 'react';
import { SubscriptionPlan } from '@/types/subscription';

export function useSubscription() {
  const [selectedPlan, setSelectedPlan] = useState<SubscriptionPlan | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSelectPlan = (plan: SubscriptionPlan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const handleConfirm = () => {
    // Here you would proceed to the next step, e.g., payment
    console.log('Plan confirmed:', selectedPlan?.displayName);
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  }

  return {
    selectedPlan,
    isModalOpen,
    handleSelectPlan,
    handleConfirm,
    handleCloseModal
  };
}
