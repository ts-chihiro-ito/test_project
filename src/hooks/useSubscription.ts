import { useState, useCallback } from 'react';
import { SubscriptionPlan } from '@/types/subscription';
import toast from 'react-hot-toast';

export function useSubscription() {
  const [selectedPlan, setSelectedPlan] = useState<SubscriptionPlan | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSelectPlan = useCallback((plan: SubscriptionPlan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  }, []);

  const handleConfirm = useCallback(() => {
    if (!selectedPlan) return;
    toast.success(`${selectedPlan.displayName}が確定しました！`);
    setIsModalOpen(false);
  }, [selectedPlan]);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, [])

  return {
    selectedPlan,
    isModalOpen,
    handleSelectPlan,
    handleConfirm,
    handleCloseModal
  };
}
