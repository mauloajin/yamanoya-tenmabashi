import { name, roman, address, phone, tel, hours, closed, access, site, book, instagram, map, description, faq, searchTerms } from './store';

const courses = book + 'party/';
const menu = book + 'dtlmenu/';
const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Restaurant', '@id': site + '/#restaurant', name, alternateName: roman,
      url: site + '/', description, telephone: phone, servesCuisine: ['鮨', '海鮮', '居酒屋'],
      image: site + '/sushi.jpg', acceptsReservations: book, hasMenu: menu, hasMap: map,
      sameAs: [book, instagram],
      address: { '@type': 'PostalAddress', addressCountry: 'JP', addressRegion: '大阪府', addressLocality: '大阪市中央区', postalCode: '540-0008', streetAddress: '大手前１丁目５−４ 大手前ハイツ 2F' },
      openingHoursSpecification: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '17:00', closes: '23:00' },
      paymentAccepted: 'クレジットカード、PayPay',
    },
    {
      '@type': 'FAQPage', mainEntity: faq.map(([question, answer]) => ({
        '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer },
      })),
    },
  ],
};

function Actions() {
  return <div className="actions"><a className="button primary" href={book}>食べログで予約 <span aria-hidden="true">↗</span></a><a className="button" href={tel}>{phone}</a></div>;
}

function Heading({ en, children }) {
  return <><p className="eyebrow" lang="en">{en}</p><h2>{children}</h2></>;
}

export default function Page() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
    <header className="bar">
      <a className="brand" href="#top">やまのや <small>天満橋店</small></a>
      <nav aria-label="サイト内ナビゲーション"><a href="#menu">料理</a><a href="#info">店舗情報</a><a href="#access">アクセス</a><a href="#english" lang="en">English</a></nav>
      <a className="header-book" href={book}>ネット予約 ↗</a>
    </header>
    <main id="top">
      <section className="hero" aria-labelledby="hero-title">
        <img src="/sushi.jpg" alt="大阪・天満橋のやまのや 天満橋店の鮨の盛り合わせ" width="1440" height="1440" fetchPriority="high" />
        <div className="hero-copy wrap">
          <p className="eyebrow">大阪・天満橋 ／ 鮨居酒屋</p>
          <h1 id="hero-title"><span>最強鮨居酒屋</span> やまのや <span className="branch">天満橋店</span></h1>
          <p className="roman" lang="en">{roman}</p>
          <p className="hero-text">大ぶりの握り、魚の一品、地酒を一献。</p>
          <p className="hero-hours">天満橋駅 徒歩5分 <span>月〜土 17:00〜23:00</span></p>
          <Actions />
        </div>
      </section>
      <section className="section paper"><div className="wrap split">
        <div><Heading en="YAMANOYA">鮨と肴を、<br />天満橋で。</Heading></div>
        <div className="body-copy"><p>大阪・大手前の鮨居酒屋。大ぶりのネタを使った握りから、定番の鮨、お造りや焼き物まで。鮨と魚の一品を、その日の気分に合わせてお楽しみいただけます。</p><p>おまかせのコースも、一品ずつのご注文も。吟醸酒や純米酒などの地酒を、料理と一緒にどうぞ。</p></div>
      </div></section>
      <section className="section dark" id="menu"><div className="wrap">
        <Heading en="SUSHI & SMALL PLATES">料理・お飲み物</Heading>
        <div className="menu-grid">
          <figure><img src="/nigiri.jpg" alt="やまのや 天満橋店の薬味を添えた握り鮨" width="1440" height="1440" loading="lazy" /><figcaption><h3>握り鮨</h3><p>大ぶりのネタを使った鮨や定番の握り。</p></figcaption></figure>
          <figure><img src="/small-plates.jpg" alt="やまのや 天満橋店の酒の肴の盛り合わせ" width="1440" height="1440" loading="lazy" /><figcaption><h3>魚の一品と地酒</h3><p>お造り、揚げ物、焼き物に、日本酒や焼酎を合わせて。</p></figcaption></figure>
        </div>
        <a className="text-link" href={menu}>料理メニューを見る ↗</a>
      </div></section>
      <section className="section paper"><div className="wrap split">
        <div><Heading en="OMAKASE">おまかせコース</Heading><p>握り鮨と一品料理を、当日のおすすめで。</p></div>
        <div><dl className="rows">{[['雪', '6,000円'], ['月', '8,000円'], ['花', '10,000円']].map(([course, price]) => <div key={course}><dt>おまかせ {course}</dt><dd>{price}（税込）</dd></div>)}</dl><a className="text-link" href={courses}>コース詳細・予約 ↗</a></div>
      </div></section>
      <section className="section sand" id="info"><div className="wrap split">
        <div><Heading en="VISIT & RESERVATIONS">店舗情報・ご予約</Heading><p>カウンター席とテーブル席をご用意しています。2名でテーブル席をご予約の場合、当日の状況によりカウンター席へご案内することがあります。</p><Actions /></div>
        <dl className="rows">
          <div><dt>店名</dt><dd>{name}</dd></div><div><dt>住所</dt><dd>{address}</dd></div><div><dt>電話</dt><dd><a href={tel}>{phone}</a></dd></div><div><dt>営業時間</dt><dd>{hours}</dd></div><div><dt>定休日</dt><dd>{closed}</dd></div><div><dt>お支払い</dt><dd>クレジットカード・PayPay 対応</dd></div><div><dt>喫煙</dt><dd>全席禁煙</dd></div>
        </dl>
      </div></section>
      <section className="section paper" id="access"><div className="wrap split">
        <div><Heading en="DIRECTIONS">天満橋駅から徒歩5分</Heading></div><div><p>{address}</p><p>{access}</p><p>大手前ハイツの外階段から2階へお上がりください。</p><a className="button" href={map}>Google マップで見る ↗</a></div>
      </div></section>
      <section className="section dark" id="english" lang="en"><div className="wrap split">
        <div><p className="eyebrow">ENGLISH GUIDE</p><h2>{roman}</h2><p>A sushi izakaya in Otemae, Osaka, serving nigiri, sashimi, seafood small plates and Japanese sake. Choose an omakase course or order à la carte.</p></div>
        <div><dl className="rows"><div><dt>Address</dt><dd>Otemae Heights 2F, 1-5-4 Otemae, Chuo-ku, Osaka, Japan</dd></div><div><dt>Hours</dt><dd>Mon–Sat, 17:00–23:00. Last orders 22:00 for food and 22:30 for drinks. Closed Sundays and Japanese public holidays.</dd></div><div><dt>Getting here</dt><dd>Five minutes on foot from Exit 3 of Tenmabashi Station on the Osaka Metro Tanimachi Line or from Keihan Tenmabashi Station. Use the outdoor stairs to the second floor.</dd></div><div><dt>Phone</dt><dd><a href={tel}>+81 6-4790-8788</a></dd></div></dl><a className="text-link" href={book}>Book on Tabelog ↗</a> <a className="text-link" href={map}>Google Maps ↗</a></div>
      </div></section>
      <section className="section paper" id="faq"><div className="wrap split"><div><Heading en="FAQ">よくある質問</Heading></div><div className="disclosures">{faq.map(([question, answer], index) => <details key={question} lang={index >= 4 ? 'en' : 'ja'}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>
      <section className="section sand"><div className="wrap split"><div><Heading en="LINKS">関連リンク</Heading><div className="links"><a href={book}>食べログ・予約 ↗</a><a href={instagram}>公式 Instagram ↗</a><a href={map}>Google マップ ↗</a></div></div>
        <div className="disclosures">{searchTerms.map(([label, lang, terms]) => <details key={lang} lang={lang}><summary>{lang === 'ja' ? '関連検索語' : 'Related searches'} · {label}</summary><p className="terms">{terms.join(' ／ ')}</p></details>)}</div>
      </div></section>
    </main>
    <footer className="dark section"><div className="wrap"><h2>{name}</h2><p>{address}</p><Actions /></div></footer>
  </>;
}
