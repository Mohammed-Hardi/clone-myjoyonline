import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { NewsletterCard } from "@/components/newsletter-card";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StoryCard } from "@/components/story-card";
import { getAllStories, getStoryBySlug, slugifyStoryTitle } from "@/lib/news-data";

type StoryRouteProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getAllStories().map((story) => ({ slug: slugifyStoryTitle(story.title) }));
}

export async function generateMetadata({ params }: StoryRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const story = getStoryBySlug(slug);

  if (!story) {
    return {};
  }

  return {
    title: `${story.title} | Joy Online Clone`,
    description: story.summary ?? `${story.category} story from the Joy Online clone archive.`
  };
}

export default async function StoryPage({ params }: StoryRouteProps) {
  const { slug } = await params;
  const story = getStoryBySlug(slug);

  if (!story) {
    notFound();
  }

  const relatedStories = getAllStories()
    .filter((item) => item.category === story.category && item.title !== story.title)
    .slice(0, 3);

  return (
    <>
      <SiteHeader />
      <main>
        <article className="page-shell article-shell">
          <header className="article-header">
            <span>{story.category}</span>
            <h1>{story.title}</h1>
            <p>{story.summary ?? "Follow the latest updates, context, and reactions from this developing story."}</p>
            {story.time ? <time>{story.time}</time> : null}
          </header>

          <div className="article-image">
            <Image src={story.image} alt={story.title} fill sizes="(max-width: 900px) 100vw, 940px" priority />
          </div>

          <div className="article-copy">
            <p>
              This report brings together the key details, public reaction, and background needed to understand the story as it develops.
            </p>
            <p>
              Editors are tracking updates from officials, eyewitnesses, and affected communities to keep readers informed with clear and verified context.
            </p>
            <p>
              More information will be added as new details become available through the Joy Online clone archive.
            </p>
          </div>

          {relatedStories.length > 0 ? (
            <section className="related-stories" aria-labelledby="related-heading">
              <div className="section-heading">
                <h2 id="related-heading">Related Stories</h2>
              </div>
              <div className="video-grid">
                {relatedStories.map((item) => (
                  <StoryCard key={item.title} story={item} variant="media" />
                ))}
              </div>
            </section>
          ) : null}

          <NewsletterCard />
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
