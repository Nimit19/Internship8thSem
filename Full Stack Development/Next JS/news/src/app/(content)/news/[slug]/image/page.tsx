import { notFound } from "next/navigation";

import { getNewsItem } from "@/lib/news";

export default async function ImagePage({ params }: { params: any }) {
  const newsItemSlug = params.slug;
  const newsItem: any = await getNewsItem(newsItemSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
}
