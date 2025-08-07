import { PlanSelector } from "@/components/subscription/PlanSelector";
import PlanComparison from "@/components/subscription/PlanComparison";
import TermsAndConditions from "@/components/subscription/TermsAndConditions";

export default function SubscriptionPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">料金プラン</h1>
        <p className="text-lg text-muted-foreground mt-3">
          あなたのニーズに合ったプランをお選びください。
        </p>
      </header>
      <main>
        <PlanSelector />
        <PlanComparison />
        <TermsAndConditions />
      </main>
    </div>
  );
}
