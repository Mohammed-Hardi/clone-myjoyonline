import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NewsletterCard } from "@/components/newsletter-card";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StoryCard } from "@/components/story-card";
import { getSectionPage, getStoryHref, mostRecent, sectionPages } from "@/lib/news-data";
import Link from "next/link";

type SectionRouteProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return sectionPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: SectionRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getSectionPage(slug);

  if (!page) {
    return {};
  }

  return {
    title: `${page.title} | Joy Online Clone`,
    description: page.description
  };
}

export default async function SectionPage({ params }: SectionRouteProps) {
  const { slug } = await params;
  const page = getSectionPage(slug);

  if (!page) {
    notFound();
  }

  const supportingStories = page.stories.filter((story) => story.title !== page.featured.title);

  return (
    <>
      <SiteHeader />
      <main>
        <div className="page-shell">
          <section className="section-hero" aria-labelledby="section-title">
            <div>
              <span>{page.title}</span>
              <h1 id="section-title">{page.title}</h1>
              <p>{page.description}</p>
            </div>
          </section>

          <section className="section-page-grid" aria-label={`${page.title} stories`}>
            <div>
              <StoryCard story={page.featured} variant="hero" />
              <div className="section-story-list">
                {supportingStories.map((story) => (
                  <StoryCard key={story.title} story={story} variant="list" />
                ))}
              </div>
            </div>
            <aside className="recent-panel" aria-labelledby="section-recent-heading">
              <h2 id="section-recent-heading">Most Recent</h2>
              <ol>
                {mostRecent.slice(0, 8).map((item) => (
                  <li key={item.title}>
                    <Link href={getStoryHref(item)}>{item.title}</Link>
                  </li>
                ))}
              </ol>
            </aside>
          </section>

          <NewsletterCard />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
