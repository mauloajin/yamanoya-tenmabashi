import { site } from './store';

export default function robots() {
  return { rules: { userAgent: '*', allow: '/' }, sitemap: site + '/sitemap.xml' };
}
