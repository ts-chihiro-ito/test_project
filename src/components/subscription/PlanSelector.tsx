'use client';

import { SUBSCRIPTION_PLANS } from "@/data/plans";
import { useSubscription } from "@/hooks/useSubscription";
import PlanCard from "./PlanCard";
import ConfirmationModal from "./ConfirmationModal";

export function PlanSelector() {
  const {
    selectedPlan,
    isModalOpen,
    handleSelectPlan,
    handleConfirm,
    handleCloseModal
  } = useSubscription();

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SUBSCRIPTION_PLANS.map((plan) => (
          <PlanCard
            key={plan.id}
            plan={plan}
            onSelectPlan={() => handleSelectPlan(plan)}
          />
        ))}
      </div>
      <ConfirmationModal
        plan={selectedPlan}
        isOpen={isModalOpen}
        onOpenChange={handleCloseModal}
        onConfirm={handleConfirm}
      />
    </>
  );
}
