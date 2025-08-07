import React from 'react';
import { render, screen } from '@testing-library/react';
import { PlanComparison } from '../PlanComparison';
import { SUBSCRIPTION_PLANS } from '@/data/plans';

describe('PlanComparison', () => {
  it('renders the comparison table with all plans and features', () => {
    render(<PlanComparison />);

    // Check for the title
    expect(screen.getByRole('heading', { name: '機能比較' })).toBeInTheDocument();

    // Check for table headers (plan names)
    SUBSCRIPTION_PLANS.forEach(plan => {
      expect(screen.getByText(plan.displayName)).toBeInTheDocument();
    });

    // Check for a few key features to be in the table
    expect(screen.getByText('基本機能')).toBeInTheDocument();
    expect(screen.getByText('API アクセス')).toBeInTheDocument();
    expect(screen.getByText('専任サポート')).toBeInTheDocument();

    // Check for the correct number of rows (1 header row + number of unique features)
    const allFeatures = SUBSCRIPTION_PLANS.reduce((acc, plan) => {
        plan.features.forEach((feature) => {
          if (!acc.find((f) => f.id === feature.id)) {
            acc.push(feature);
          }
        });
        return acc;
      }, [] as { id: string; name: string }[]);

    const rows = screen.getAllByRole('row');
    // Header row + feature rows
    expect(rows).toHaveLength(1 + allFeatures.length);
  });
});
