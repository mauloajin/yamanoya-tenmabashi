export const name = '最強鮨居酒屋 やまのや 天満橋店';
export const roman = 'Yamanoya Tenmabashi';
export const address = '大阪府大阪市中央区大手前1-5-4 大手前ハイツ 2F';
export const phone = '06-4790-8788';
export const tel = 'tel:+81647908788';
export const hours = '月〜土 17:00〜23:00（料理L.O. 22:00、ドリンクL.O. 22:30）';
export const closed = '日曜・祝日';
export const access = 'Osaka Metro 谷町線 天満橋駅 3番出口、京阪 天満橋駅からそれぞれ徒歩5分。';
export const site = 'https://yamanoya-tenmabashi.vercel.app';
export const book = 'https://tabelog.com/osaka/A2701/A270104/27087568/';
export const instagram = 'https://www.instagram.com/yamanoya.tenmabashi22/';
export const map = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(name + ' ' + address);
export const description = '大阪・天満橋駅から徒歩5分の最強鮨居酒屋 やまのや 天満橋店。握り鮨、魚の一品料理、おまかせコースと日本酒。営業時間、アクセス、ネット予約をご案内します。';

export const faq = [
  ['お店はどこにありますか？', address + '。' + access],
  ['営業時間と定休日は？', hours + '。定休日は' + closed + 'です。'],
  ['予約はできますか？', '食べログからネット予約できます。電話でのお問い合わせは ' + phone + ' へ。'],
  ['どんな料理が食べられますか？', '握り鮨やお造り、魚の焼き物などの一品料理と、鮨を中心としたおまかせコースをご用意しています。'],
  ['Where is Yamanoya Tenmabashi?', 'On the second floor of Otemae Heights, 1-5-4 Otemae, Chuo-ku, Osaka. It is a five-minute walk from Tenmabashi Station.'],
  ['How do I book a table?', 'Check availability on Tabelog or call +81 6-4790-8788.'],
];

const jaAreas = ['やまのや 天満橋店', '天満橋', '天満橋駅', '天満橋駅 3番出口', '京阪天満橋', '谷町線 天満橋', '大手前', '大阪市中央区', '大阪', '大阪府'];
const jaTerms = ['鮨', '寿司', '鮨居酒屋', '海鮮居酒屋', '握り鮨', '大きなネタの鮨', 'お造り', '魚料理', '一品料理', '焼き物', '揚げ物', '日本酒', '地酒', '焼酎', '夜ごはん', 'おまかせ鮨', '鮨コース', 'ネット予約', '営業時間', 'アクセス'];
const enAreas = ['Yamanoya Tenmabashi', 'Tenmabashi', 'Tenmabashi Station', 'Exit 3 Tenmabashi', 'Keihan Tenmabashi', 'Tanimachi Line Tenmabashi', 'Otemae', 'Chuo Ward Osaka', 'Osaka City', 'Osaka'];
const enTerms = ['sushi restaurant', 'sushi izakaya', 'seafood izakaya', 'Japanese dinner', 'nigiri sushi', 'large sushi toppings', 'sashimi', 'seafood small plates', 'grilled fish', 'fried dishes', 'Japanese sake', 'local sake', 'shochu', 'evening dining', 'omakase sushi', 'sushi course', 'online reservations', 'opening hours', 'restaurant directions', 'restaurant address'];
export const searchTerms = [
  ['日本語', 'ja', jaAreas.flatMap(area => jaTerms.map(term => area + ' ' + term))],
  ['English', 'en', enAreas.flatMap(area => enTerms.map(term => term + ' · ' + area))],
];
