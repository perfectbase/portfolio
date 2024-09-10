import { Link } from "@/i18n/routing";

export default function Page() {
  const disclosureSections: {
    title: string;
    content: React.ReactNode;
  }[] = [
    {
      title: "サービス内容",
      content:
        "新規プロジェクトのセットアップ、技術コンサルティング、ウェブ開発、アナリティクスのセットアップ、CI/CDのセットアップ、パフォーマンス最適化などのウェブ開発関連サービスを提供しています。",
    },
    {
      title: "料金",
      content:
        "料金は、プロジェクトの規模や複雑さに応じて個別に設定されます。具体的な料金は、別途契約書または提案書で協議し、合意の上で決定されます。",
    },
    {
      title: "追加料金",
      content:
        "プロジェクトの範囲を超える追加作業や変更要求には、追加料金が発生する場合があります。追加料金は事前に協議し、合意の上で請求されます。",
    },
    {
      title: "返金ポリシー",
      content:
        "サービス開始後のキャンセルや返金については、個別の状況に応じて対応いたします。ただし、すでに完了した作業分については原則として返金対象外となります。",
    },
    {
      title: "納期",
      content:
        "納期はプロジェクトの規模や複雑さによって異なります。具体的な納期は、契約時に協議の上で設定され、プロジェクト計画に記載されます。",
    },
    {
      title: "支払い方法",
      content:
        "支払いは、Stripeを通じたクレジットカード決済または銀行振込にて承ります。具体的な支払い方法は、契約時に合意の上で決定されます。",
    },
    {
      title: "支払い期間",
      content:
        "支払い期間は、プロジェクトの規模や期間に応じて設定されます。一般的に、前払い、マイルストーンごとの支払い、または完了時の一括支払いなどの方式を採用しています。具体的な支払いスケジュールは契約時に合意の上で決定されます。",
    },
    {
      title: "連絡情報",
      content: (
        <ul>
          <li>メール: contact@perfectbase.dev</li>
          <li>電話: 070-4439-4122</li>
        </ul>
      ),
    },
    {
      title: "ビジネス情報",
      content: (
        <ul>
          <li>ビジネス名: パーフェクトベース</li>
          <li>代表取締役: ソウザ ハヴィー</li>
          <li>住所: 要請があれば遅滞なく開示いたします。</li>
        </ul>
      ),
    },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Link
        href="/"
        className="inline-block mb-6 text-blue-600 hover:underline"
      >
        &larr; ホームに戻る
      </Link>

      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        特定商取引法に基づく表記
      </h1>

      {disclosureSections.map((section, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            {`${section.title}`}
          </h2>
          <div className="text-base text-gray-700">{section.content}</div>
        </div>
      ))}

      <div className="mt-8 text-center">
        <Link href="/" className="text-blue-600 hover:underline">
          ホームに戻る
        </Link>
      </div>
    </div>
  );
}
