import './style.css';
import { name, description, site } from './store';

export const metadata = {
  metadataBase: new URL(site),
  title: name + '｜大阪・天満橋の鮨居酒屋',
  description,
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: name, description, url: '/', siteName: name, locale: 'ja_JP', type: 'website',
    images: [{ url: '/sushi.jpg', width: 1440, height: 1440, alt: name + 'の鮨の盛り合わせ' }],
  },
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export default function Layout({ children }) {
  return <html lang="ja"><body>{children}</body></html>;
}
