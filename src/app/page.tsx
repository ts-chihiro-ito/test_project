import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
      <main className="flex flex-col items-center gap-8">
        <h1 className="text-5xl font-bold tracking-tight">
          SaaS Subscription Demo
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl">
          これは、要件定義書、設計書、実装計画書に基づいて構築されたデモアプリケーションです。
          下のボタンをクリックして、サブスクリプションプラン選択ページをご覧ください。
        </p>
        <Link href="/subscription">
          <Button size="lg">
            プラン選択ページへ
          </Button>
        </Link>
      </main>
      <footer className="mt-16 text-sm text-muted-foreground">
        <p>Jules by Kiro Team.</p>
      </footer>
    </div>
  );
}
