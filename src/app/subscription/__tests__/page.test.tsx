import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import SubscriptionPage from '../page';

describe('SubscriptionPage Integration Test', () => {
  // Helper function to get a specific plan card by its name
  const getPlanCard = (planName: string) => {
    const heading = screen.getByRole('heading', { name: planName, level: 3 });
    const card = heading.closest('div.rounded-lg.border');
    if (!card) {
      throw new Error(`Could not find parent card for plan: ${planName}`);
    }
    return card;
  };

  it('should open a confirmation modal with the correct plan details when selecting a plan', async () => {
    render(<SubscriptionPage />);

    // Find and click the 'ツーベースプラン' card's select button
    const planCard = getPlanCard('ツーベースプラン');
    const selectButton = within(planCard).getByRole('button', { name: '選択する' });
    fireEvent.click(selectButton);

    // The modal should now be visible. We find it by its role 'dialog'.
    const modal = await screen.findByRole('dialog');
    expect(modal).toBeInTheDocument();

    // Check that the modal contains the correct information
    expect(within(modal).getByRole('heading', { name: 'プランの確認' })).toBeInTheDocument();
    expect(within(modal).getByText('ツーベースプラン')).toBeInTheDocument();
    expect(within(modal).getByText('¥1,980/月')).toBeInTheDocument();
  });

  it('should close the modal when the cancel button is clicked', async () => {
    render(<SubscriptionPage />);

    // Open the modal first
    const planCard = getPlanCard('ホームランプラン');
    const selectButton = within(planCard).getByRole('button', { name: '選択する' });
    fireEvent.click(selectButton);

    // Modal should be open
    const modal = await screen.findByRole('dialog');
    expect(modal).toBeInTheDocument();

    // Click the cancel button inside the modal
    const cancelButton = within(modal).getByRole('button', { name: 'キャンセル' });
    fireEvent.click(cancelButton);

    // The modal should now be closed
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('should close the modal when the confirm button is clicked', async () => {
    render(<SubscriptionPage />);

    // Open the modal
    const planCard = getPlanCard('スリーベースプラン');
    const selectButton = within(planCard).getByRole('button', { name: '選択する' });
    fireEvent.click(selectButton);

    const modal = await screen.findByRole('dialog');
    expect(modal).toBeInTheDocument();

    // Click the confirm button
    const confirmButton = within(modal).getByRole('button', { name: '同意して進む' });
    fireEvent.click(confirmButton);

    // The modal should close
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});
