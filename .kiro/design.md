# 設計書

## 概要

SaaSプロジェクト向けのサブスクリプションプラン選択ページの設計書です。React/Next.jsベースのモダンなWebアプリケーションとして実装し、レスポンシブデザインとアクセシビリティに配慮した設計とします。

## アーキテクチャ

### 技術スタック
- **フロントエンド**: React 18 + TypeScript
- **フレームワーク**: Next.js 14 (App Router)
- **スタイリング**: Tailwind CSS
- **状態管理**: React Context API + useReducer
- **フォーム管理**: React Hook Form
- **アニメーション**: Framer Motion
- **アイコン**: Lucide React

### ディレクトリ構造
```
src/
├── app/
│   └── subscription/
│       ├── page.tsx
│       └── layout.tsx
├── components/
│   ├── subscription/
│   │   ├── PlanCard.tsx
│   │   ├── PlanComparison.tsx
│   │   ├── PlanSelector.tsx
│   │   └── ConfirmationModal.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       └── Badge.tsx
├── types/
│   └── subscription.ts
├── data/
│   └── plans.ts
└── hooks/
    └── useSubscription.ts
```

## コンポーネントとインターフェース

### データモデル

```typescript
interface SubscriptionPlan {
  id: string;
  name: string;
  displayName: string;
  price: number;
  currency: string;
  billingPeriod: 'monthly' | 'yearly';
  description: string;
  features: PlanFeature[];
  limitations: PlanLimitation[];
  isPopular?: boolean;
  isEnterprise?: boolean;
}

interface PlanFeature {
  id: string;
  name: string;
  description?: string;
  included: boolean;
}

interface PlanLimitation {
  type: 'users' | 'storage' | 'projects' | 'api_calls';
  value: number | 'unlimited';
  unit: string;
}
```

### 主要コンポーネント

#### 1. PlanSelector (メインコンポーネント)
- 4つのプランカードを横並びで表示
- レスポンシブ対応（モバイルでは縦並び）
- プラン選択状態の管理

#### 2. PlanCard
- 個別プランの詳細表示
- 価格、機能、制限事項の表示
- 選択ボタンとポピュラーバッジ

#### 3. PlanComparison
- プラン比較テーブル
- 機能の有無を視覚的に表示
- スクロール可能なレスポンシブテーブル

#### 4. ConfirmationModal
- プラン選択確認モーダル
- 選択されたプランの詳細表示
- 次ステップへの遷移

## データモデル

### プラン定義
```typescript
const SUBSCRIPTION_PLANS: SubscriptionPlan[] = [
  {
    id: 'single-base',
    name: 'single-base',
    displayName: 'シングルベースプラン',
    price: 980,
    currency: 'JPY',
    billingPeriod: 'monthly',
    description: '個人利用に最適なベーシックプラン',
    features: [
      { id: 'basic-features', name: '基本機能', included: true },
      { id: 'email-support', name: 'メールサポート', included: true },
      { id: 'basic-analytics', name: '基本分析', included: true }
    ],
    limitations: [
      { type: 'users', value: 1, unit: 'ユーザー' },
      { type: 'storage', value: 10, unit: 'GB' },
      { type: 'projects', value: 3, unit: 'プロジェクト' }
    ]
  },
  {
    id: 'two-base',
    name: 'two-base',
    displayName: 'ツーベースプラン',
    price: 1980,
    currency: 'JPY',
    billingPeriod: 'monthly',
    description: '小規模チーム向けプラン',
    features: [
      { id: 'basic-features', name: '基本機能', included: true },
      { id: 'email-support', name: 'メールサポート', included: true },
      { id: 'advanced-analytics', name: '高度な分析', included: true },
      { id: 'team-collaboration', name: 'チーム連携', included: true }
    ],
    limitations: [
      { type: 'users', value: 5, unit: 'ユーザー' },
      { type: 'storage', value: 50, unit: 'GB' },
      { type: 'projects', value: 10, unit: 'プロジェクト' }
    ],
    isPopular: true
  },
  {
    id: 'three-base',
    name: 'three-base',
    displayName: 'スリーベースプラン',
    price: 3980,
    currency: 'JPY',
    billingPeriod: 'monthly',
    description: '成長企業向けプロフェッショナルプラン',
    features: [
      { id: 'basic-features', name: '基本機能', included: true },
      { id: 'priority-support', name: '優先サポート', included: true },
      { id: 'advanced-analytics', name: '高度な分析', included: true },
      { id: 'team-collaboration', name: 'チーム連携', included: true },
      { id: 'api-access', name: 'API アクセス', included: true },
      { id: 'custom-integrations', name: 'カスタム連携', included: true }
    ],
    limitations: [
      { type: 'users', value: 20, unit: 'ユーザー' },
      { type: 'storage', value: 200, unit: 'GB' },
      { type: 'projects', value: 50, unit: 'プロジェクト' }
    ]
  },
  {
    id: 'homerun',
    name: 'homerun',
    displayName: 'ホームランプラン',
    price: 9800,
    currency: 'JPY',
    billingPeriod: 'monthly',
    description: 'エンタープライズ向け最上位プラン',
    features: [
      { id: 'all-features', name: '全機能利用可能', included: true },
      { id: 'dedicated-support', name: '専任サポート', included: true },
      { id: 'custom-analytics', name: 'カスタム分析', included: true },
      { id: 'advanced-security', name: '高度なセキュリティ', included: true },
      { id: 'sso', name: 'SSO連携', included: true },
      { id: 'custom-development', name: 'カスタム開発', included: true }
    ],
    limitations: [
      { type: 'users', value: 'unlimited', unit: 'ユーザー' },
      { type: 'storage', value: 'unlimited', unit: 'ストレージ' },
      { type: 'projects', value: 'unlimited', unit: 'プロジェクト' }
    ],
    isEnterprise: true
  }
];
```

## エラーハンドリング

### エラーケース
1. **ネットワークエラー**: プラン情報の取得失敗
2. **バリデーションエラー**: 不正なプラン選択
3. **認証エラー**: ユーザー認証の失敗
4. **支払いエラー**: 決済処理の失敗

### エラー表示戦略
- Toast通知による非侵入的なエラー表示
- フォームフィールドレベルでのバリデーションエラー
- 致命的エラー時のフォールバック画面

## テスト戦略

### 単体テスト
- コンポーネントの描画テスト
- プラン選択ロジックのテスト
- データ変換関数のテスト

### 統合テスト
- プラン選択フローの端到端テスト
- モーダル表示・非表示のテスト
- レスポンシブ表示のテスト

### アクセシビリティテスト
- キーボードナビゲーション
- スクリーンリーダー対応
- カラーコントラスト比の確認

### パフォーマンステスト
- 初期読み込み時間の測定
- 画像最適化の確認
- Core Web Vitalsの測定