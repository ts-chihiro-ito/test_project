import { SUBSCRIPTION_PLANS } from "@/data/plans";

const CheckIcon = () => (
  <svg
    className="h-6 w-6 text-green-500"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const MinusIcon = () => (
    <svg
      className="h-6 w-6 text-gray-400"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
    </svg>
  );

export function PlanComparison() {
  const allFeatures = SUBSCRIPTION_PLANS.reduce((acc, plan) => {
    plan.features.forEach((feature) => {
      if (!acc.find((f) => f.id === feature.id)) {
        acc.push(feature);
      }
    });
    return acc;
  }, [] as { id: string; name: string }[]);

  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-center mb-8">機能比較</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                機能
              </th>
              {SUBSCRIPTION_PLANS.map((plan) => (
                <th key={plan.id} scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {plan.displayName}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {allFeatures.map((feature) => (
              <tr key={feature.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{feature.name}</td>
                {SUBSCRIPTION_PLANS.map((plan) => {
                  const hasFeature = plan.features.some(f => f.id === feature.id && f.included);
                  return (
                    <td key={plan.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex justify-center">
                        {hasFeature ? <CheckIcon /> : <MinusIcon />}
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
