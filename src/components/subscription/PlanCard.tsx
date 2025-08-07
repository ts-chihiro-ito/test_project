import { SubscriptionPlan } from "@/types/subscription";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

interface PlanCardProps {
  plan: SubscriptionPlan;
  onSelectPlan: () => void;
}

export function PlanCard({ plan, onSelectPlan }: PlanCardProps) {
  return (
    <Card
      className={cn(
        "flex flex-col",
        plan.isPopular && "border-purple-500"
      )}
    >
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>{plan.displayName}</CardTitle>
          {plan.isPopular && <Badge className="bg-purple-500 text-white">人気</Badge>}
        </div>
        <CardDescription>{plan.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="mb-4">
          <span className="text-3xl sm:text-4xl font-bold">
            ¥{plan.price.toLocaleString()}
          </span>
          <span className="text-muted-foreground">/月</span>
        </div>
        <ul className="space-y-2">
          {plan.features.map((feature) => (
            <li key={feature.id} className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-green-500 mr-2 shrink-0"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{feature.name}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 text-sm text-muted-foreground">
          {plan.limitations.map(limitation => (
            <p key={limitation.type}>{`${limitation.unit}: ${limitation.value === 'unlimited' ? '無制限' : limitation.value}`}</p>
          ))}
        </div>
        {plan.isEnterprise && (
            <div className="mt-4">
                <Badge variant="outline">エンタープライズプラン</Badge>
            </div>
        )}
      </CardContent>
      <CardFooter>
        <Button onClick={onSelectPlan} className="w-full">
          選択する
        </Button>
      </CardFooter>
    </Card>
  );
}
