import { memo } from 'react';

function TermsAndConditions() {
  return (
    <div className="mt-16 border-t pt-8">
      <h2 className="text-2xl font-bold text-center mb-8">
        ご契約にあたって
      </h2>
      <div className="max-w-4xl mx-auto text-sm text-muted-foreground space-y-6">
        <section>
          <h3 className="font-semibold text-foreground mb-2">契約期間と更新</h3>
          <p>
            すべてのプランは月単位の契約となり、毎月自動で更新されます。契約期間の縛りはなく、いつでも解約手続きが可能です。
          </p>
        </section>
        <section>
          <h3 className="font-semibold text-foreground mb-2">プランの変更</h3>
          <p>
            プランのアップグレードはいつでも可能です。ダウングレードは次回の請求期間から適用されます。プラン変更による差額は日割りで計算されます。
          </p>
        </section>
        <section>
          <h3 className="font-semibold text-foreground mb-2">解約と返金ポリシー</h3>
          <p>
            解約手続きはアカウント設定ページからいつでも行えます。解約された場合、現在の請求期間の末日までサービスをご利用いただけます。一度お支払いいただいた料金についての返金は、原則として行っておりませんのでご了承ください。
          </p>
        </section>
        <section>
          <h3 className="font-semibold text-foreground mb-2">無料トライアル</h3>
          <p>
            現在、無料トライアル期間は提供しておりません。サービスのデモについては、お問い合わせフォームよりご依頼ください。
          </p>
        </section>
      </div>
    </div>
  );
}

export default memo(TermsAndConditions);
