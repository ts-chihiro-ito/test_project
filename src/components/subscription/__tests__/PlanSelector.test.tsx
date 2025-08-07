import React from 'react';
import { render, screen } from '@testing-library/react';
import { PlanSelector } from '../PlanSelector';
import { SUBSCRIPTION_PLANS } from '@/data/plans';

// Mock the useSubscription hook
jest.mock('@/hooks/useSubscription', () => ({
  useSubscription: () => ({
    selectedPlan: null,
    handleSelectPlan: jest.fn(),
  }),
}));

describe('PlanSelector', () => {
  it('renders all subscription plans', () => {
    render(<PlanSelector />);

    // Check that a card is rendered for each plan
    SUBSCRIPTION_PLANS.forEach(plan => {
      expect(screen.getByText(plan.displayName)).toBeInTheDocument();
    });

    // Check the total number of "選択する" buttons to infer the number of cards
    const selectButtons = screen.getAllByRole('button', { name: /選択する|選択中/ });
    expect(selectButtons).toHaveLength(SUBSCRIPTION_PLANS.length);
  });
});
