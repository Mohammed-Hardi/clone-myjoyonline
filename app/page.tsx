import Link from "next/link";
import { AdBanner } from "@/components/ad-banner";
import { CategorySection } from "@/components/category-section";
import { NewsletterCard } from "@/components/newsletter-card";
import { ShortsRail } from "@/components/shorts-rail";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StoryCard } from "@/components/story-card";
import { categoryBlocks, getStoryHref, inFocus, mostRecent, newsStories, podcasts, shorts, topStory, videos } from "@/lib/news-data";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <div className="page-shell">
          <AdBanner />

          <section className="lead-grid" aria-label="Lead stories">
            <div className="lead-main">
              <StoryCard story={topStory} variant="hero" />
            </div>
            <aside className="lead-side" aria-label="Featured stories">
              <AdBanner compact />
              <article className="focus-card">
                <span>{inFocus.category}</span>
                <Link href={getStoryHref(inFocus)}>{inFocus.title}</Link>
                <p>{inFocus.summary}</p>
              </article>
            </aside>
          </section>

          <section className="news-layout" id="news" aria-label="News stream">
            <div className="news-column">
              <div className="section-heading">
                <h2>News</h2>
                <Link href="/news">Latest</Link>
              </div>
              <div className="news-list">
                {newsStories.map((story) => (
                  <StoryCard key={story.title} story={story} variant="list" />
                ))}
              </div>
            </div>
            <aside className="recent-panel" aria-labelledby="recent-heading">
              <h2 id="recent-heading">Most Recent</h2>
              <ol>
                {mostRecent.map((item) => (
                  <li key={item}>
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ol>
            </aside>
          </section>

          <ShortsRail shorts={shorts} />

          <section className="podcast-strip" id="live" aria-labelledby="podcasts-heading">
            <div className="section-heading">
              <h2 id="podcasts-heading">Podcasts</h2>
              <Link href="/live">Listen live</Link>
            </div>
            <div className="podcast-grid">
              {podcasts.map((podcast) => (
                <a href="#" key={podcast}>
                  {podcast}
                </a>
              ))}
            </div>
          </section>

          <section className="video-section" id="media" aria-labelledby="videos-heading">
            <div className="section-heading">
              <h2 id="videos-heading">Videos</h2>
              <Link href="/media">Watch all</Link>
            </div>
            <div className="video-grid">
              {videos.map((story) => (
                <StoryCard key={story.title} story={story} variant="media" />
              ))}
            </div>
          </section>

          <div className="category-board">
            {categoryBlocks.map((block) => (
              <CategorySection key={block.title} block={block} />
            ))}
          </div>

          <NewsletterCard />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
