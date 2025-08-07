import { useState } from 'react';
import { SubscriptionPlan } from '@/types/subscription';
import toast from 'react-hot-toast';

export function useSubscription() {
  const [selectedPlan, setSelectedPlan] = useState<SubscriptionPlan | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSelectPlan = (plan: SubscriptionPlan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const handleConfirm = () => {
    if (!selectedPlan) return;
    // Here you would proceed to the next step, e.g., payment
    toast.success(`${selectedPlan.displayName}が確定しました！`);
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
