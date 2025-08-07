import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ConfirmationModal } from '../ConfirmationModal';
import { SubscriptionPlan } from '@/types/subscription';

const mockPlan: SubscriptionPlan = {
  id: 'test-plan',
  name: 'test-plan',
  displayName: 'テストプラン',
  price: 1000,
  currency: 'JPY',
  billingPeriod: 'monthly',
  description: 'This is a test plan.',
  features: [{ id: 'f1', name: 'Feature 1', included: true }],
  limitations: [{ type: 'users', value: 1, unit: 'user' }],
};

describe('ConfirmationModal', () => {
  it('does not render when plan is null', () => {
    const { container } = render(
      <ConfirmationModal
        plan={null}
        isOpen={true}
        onOpenChange={() => {}}
        onConfirm={() => {}}
      />
    );
    expect(container.firstChild).toBeNull();
  });

  it('renders correctly when open with a plan', () => {
    render(
      <ConfirmationModal
        plan={mockPlan}
        isOpen={true}
        onOpenChange={() => {}}
        onConfirm={() => {}}
      />
    );

    expect(screen.getByText('プランの確認')).toBeInTheDocument();
    expect(screen.getByText('テストプラン')).toBeInTheDocument();
    expect(screen.getByText('¥1,000/月')).toBeInTheDocument();
    expect(screen.getByText('Feature 1')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '同意して進む' })).toBeInTheDocument();
  });

  it('calls onConfirm when the confirm button is clicked', () => {
    const handleConfirm = jest.fn();
    render(
      <ConfirmationModal
        plan={mockPlan}
        isOpen={true}
        onOpenChange={() => {}}
        onConfirm={handleConfirm}
      />
    );

    fireEvent.click(screen.getByRole('button', { name: '同意して進む' }));
    expect(handleConfirm).toHaveBeenCalledTimes(1);
  });
});
