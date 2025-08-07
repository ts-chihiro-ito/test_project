import { renderHook, act } from '@testing-library/react';
import { useSubscription } from '../useSubscription';
import { SUBSCRIPTION_PLANS } from '@/data/plans';

describe('useSubscription', () => {
  it('should have a null initial selected plan', () => {
    const { result } = renderHook(() => useSubscription());
    expect(result.current.selectedPlan).toBeNull();
  });

  it('should update the selected plan when handleSelectPlan is called', () => {
    const { result } = renderHook(() => useSubscription());
    const planToSelect = SUBSCRIPTION_PLANS[1]; // Select 'ツーベースプラン'

    act(() => {
      result.current.handleSelectPlan(planToSelect);
    });

    expect(result.current.selectedPlan).not.toBeNull();
    expect(result.current.selectedPlan?.id).toBe(planToSelect.id);
    expect(result.current.selectedPlan?.displayName).toBe('ツーベースプラン');
  });

  it('should be able to change the selected plan', () => {
    const { result } = renderHook(() => useSubscription());
    const firstPlan = SUBSCRIPTION_PLANS[0];
    const secondPlan = SUBSCRIPTION_PLANS[2];

    act(() => {
      result.current.handleSelectPlan(firstPlan);
    });

    expect(result.current.selectedPlan?.id).toBe(firstPlan.id);

    act(() => {
      result.current.handleSelectPlan(secondPlan);
    });

    expect(result.current.selectedPlan?.id).toBe(secondPlan.id);
    expect(result.current.selectedPlan?.displayName).toBe('スリーベースプラン');
  });
});
