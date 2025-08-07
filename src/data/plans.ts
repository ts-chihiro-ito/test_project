import { SubscriptionPlan } from '@/types/subscription';

export const SUBSCRIPTION_PLANS: SubscriptionPlan[] = [
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
