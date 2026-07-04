import type { Metadata } from "next";
import { NewsletterCard } from "@/components/newsletter-card";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StoryCard } from "@/components/story-card";
import { categoryBlocks, newsStories, shorts, topStory, videos } from "@/lib/news-data";

export const metadata: Metadata = {
  title: "Search | Joy Online Clone",
  description: "Search the Joy Online clone story archive."
};

const searchStories = [topStory, ...newsStories, ...shorts, ...videos, ...categoryBlocks.flatMap((block) => [block.lead, ...block.stories])];

export default function SearchPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <div className="page-shell">
          <section className="section-hero" aria-labelledby="search-title">
            <div>
              <span>Search</span>
              <h1 id="search-title">Search Joy Online</h1>
              <p>Find news, video, business, sport, opinion, and culture stories in this clone archive.</p>
            </div>
            <form className="search-form" action="/search">
              <label htmlFor="q">Search term</label>
              <div>
                <input id="q" name="q" type="search" placeholder="Search stories" />
                <button type="submit">Search</button>
              </div>
            </form>
          </section>

          <section className="search-results" aria-label="Suggested search results">
            {searchStories.slice(0, 10).map((story) => (
              <StoryCard key={story.title} story={story} variant="list" />
            ))}
          </section>

          <NewsletterCard />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
