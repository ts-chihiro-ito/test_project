import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import SubscriptionPage from '../page';

describe('SubscriptionPage Integration Test', () => {
  // Helper function to get a specific plan card by its name
  const getPlanCard = (planName: string) => {
    // Find the heading with the plan name. We specify it's a level 3 heading (h3)
    // which is unique to the PlanCard component in this page's context.
    const heading = screen.getByRole('heading', { name: planName, level: 3 });

    // The card is the closest ancestor div with these specific classes.
    // This is a bit brittle, but helps distinguish it from other divs.
    const card = heading.closest('div.rounded-lg.border');

    if (!card) {
      throw new Error(`Could not find parent card for plan: ${planName}`);
    }
    return card;
  };

  it('should allow a user to select a plan', () => {
    render(<SubscriptionPage />);

    // Find the 'ツーベースプラン' card using the helper
    const twoBasePlanCard = getPlanCard('ツーベースプラン');

    // Find and click the select button within that specific card
    const selectButton = within(twoBasePlanCard).getByRole('button', { name: '選択する' });
    fireEvent.click(selectButton);

    // After clicking, the button text within that card should change to '選択中'
    const selectedButton = within(twoBasePlanCard).getByRole('button', { name: '選択中' });
    expect(selectedButton).toBeInTheDocument();

    // Verify that another card (e.g., シングルベースプラン) is not selected
    const singleBasePlanCard = getPlanCard('シングルベースプラン');
    expect(within(singleBasePlanCard).getByRole('button', { name: '選択する' })).toBeInTheDocument();
  });

  it('should change selection when another plan is chosen', () => {
    render(<SubscriptionPage />);

    // Find and click the button for 'ツーベースプラン'
    const twoBasePlanCard = getPlanCard('ツーベースプラン');
    const twoBaseSelectButton = within(twoBasePlanCard).getByRole('button', { name: '選択する' });
    fireEvent.click(twoBaseSelectButton);

    // Verify it's selected
    expect(within(twoBasePlanCard).getByRole('button', { name: '選択中' })).toBeInTheDocument();

    // Now, find and click the button for 'スリーベースプラン'
    const threeBasePlanCard = getPlanCard('スリーベースプラン');
    const threeBaseSelectButton = within(threeBasePlanCard).getByRole('button', { name: '選択する' });
    fireEvent.click(threeBaseSelectButton);

    // Verify the new plan is selected
    expect(within(threeBasePlanCard).getByRole('button', { name: '選択中' })).toBeInTheDocument();

    // Verify the old plan is no longer selected
    expect(within(twoBasePlanCard).getByRole('button', { name: '選択する' })).toBeInTheDocument();
  });
});
