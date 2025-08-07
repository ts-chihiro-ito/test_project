import { memo } from 'react';
import { SubscriptionPlan } from "@/types/subscription";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";

interface ConfirmationModalProps {
  plan: SubscriptionPlan | null;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
}

function ConfirmationModal({
  plan,
  isOpen,
  onOpenChange,
  onConfirm,
}: ConfirmationModalProps) {
  if (!plan) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>プランの確認</DialogTitle>
          <DialogDescription>
            以下のプランでサブスクリプションを開始します。よろしいですか？
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="flex justify-between items-center bg-muted p-4 rounded-lg">
            <span className="font-semibold">{plan.displayName}</span>
            <span className="font-bold">
              ¥{plan.price.toLocaleString()}/月
            </span>
          </div>
          <div>
            <h4 className="font-semibold mb-2">主な機能:</h4>
            <ul className="list-disc list-inside text-muted-foreground">
              {plan.features.map((feature) => (
                <li key={feature.id}>{feature.name}</li>
              ))}
            </ul>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost">キャンセル</Button>
          </DialogClose>
          <Button onClick={onConfirm}>同意して進む</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default memo(ConfirmationModal);
