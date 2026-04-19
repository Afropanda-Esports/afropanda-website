import eventsRaw from "./events.json";
import articlesRaw from "./articles.json";
import merchRaw from "./merch.json";
import { resolveImageKey } from "./assetRegistry";

export type CmsEvent = {
  id: number;
  title: string;
  date: string;
  time: string | null;
  type: string;
  description: string;
  location: string;
  imageKey: string;
  link: string | null;
  btnText: string | null;
};

export type CmsMerch = {
  id: number;
  name: string;
  description: string;
  price?: number;
  originalPrice?: number;
  imageKey: string;
};

export type CmsArticlePost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  coverImageKey: string;
  tags: string[];
};

/** Event cards expect `image` URL + `category` (same as legacy). */
export function getEvents() {
  return (eventsRaw as CmsEvent[]).map((e) => ({
    id: e.id,
    title: e.title,
    date: e.date,
    time: e.time ?? undefined,
    location: e.location,
    description: e.description,
    image: resolveImageKey(e.imageKey),
    category: e.type,
    link: e.link ?? undefined,
    btnText: e.btnText ?? undefined,
  }));
}

export function getMerchProducts() {
  return (merchRaw as CmsMerch[]).map((p) => ({
    id: p.id,
    name: p.name,
    description: p.description,
    price: p.price,
    originalPrice: p.originalPrice,
    image: resolveImageKey(p.imageKey),
  }));
}

export function getArticles(): CmsArticlePost[] {
  return articlesRaw as CmsArticlePost[];
}

export function getArticleBySlug(slug: string): CmsArticlePost | undefined {
  return getArticles().find((p) => p.slug === slug);
}

/** Newest first by `date` (ISO-like strings). */
export function getLatestArticles(count: number): CmsArticlePost[] {
  const posts = [...getArticles()];
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return posts.slice(0, count);
}
