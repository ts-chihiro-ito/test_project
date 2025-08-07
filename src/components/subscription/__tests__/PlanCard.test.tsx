import React from 'react';
import { render, screen } from '@testing-library/react';
import { PlanCard } from '../PlanCard';
import { SubscriptionPlan } from '@/types/subscription';

const mockPlan: SubscriptionPlan = {
  id: 'test-plan',
  name: 'test-plan',
  displayName: 'テストプラン',
  price: 1000,
  currency: 'JPY',
  billingPeriod: 'monthly',
  description: 'これはテストプランです。',
  features: [
    { id: 'f1', name: '機能1', included: true },
    { id: 'f2', name: '機能2', included: true },
  ],
  limitations: [{ type: 'users', value: 1, unit: 'ユーザー' }],
  isPopular: true,
};

describe('PlanCard', () => {
  it('renders plan details correctly', () => {
    render(<PlanCard plan={mockPlan} isSelected={false} onSelect={() => {}} />);

    // Check for display name
    expect(screen.getByText('テストプラン')).toBeInTheDocument();

    // Check for price
    expect(screen.getByText('¥1,000')).toBeInTheDocument();

    // Check for description
    expect(screen.getByText('これはテストプランです。')).toBeInTheDocument();

    // Check for features
    expect(screen.getByText('機能1')).toBeInTheDocument();
    expect(screen.getByText('機能2')).toBeInTheDocument();

    // Check for limitations
    expect(screen.getByText('ユーザー: 1')).toBeInTheDocument();
  });

  it('displays popular badge when isPopular is true', () => {
    render(<PlanCard plan={mockPlan} isSelected={false} onSelect={() => {}} />);
    expect(screen.getByText('人気')).toBeInTheDocument();
  });

  it('does not display popular badge when isPopular is false', () => {
    const planWithoutPopular = { ...mockPlan, isPopular: false };
    render(<PlanCard plan={planWithoutPopular} isSelected={false} onSelect={() => {}} />);
    expect(screen.queryByText('人気')).not.toBeInTheDocument();
  });

  it('shows "選択中" when isSelected is true', () => {
    render(<PlanCard plan={mockPlan} isSelected={true} onSelect={() => {}} />);
    expect(screen.getByRole('button', { name: '選択中' })).toBeInTheDocument();
  });
});
