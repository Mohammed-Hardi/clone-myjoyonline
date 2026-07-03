import type { Story } from "@/lib/news-data";
import { StoryCard } from "@/components/story-card";

type ShortsRailProps = {
  shorts: Story[];
};

export function ShortsRail({ shorts }: ShortsRailProps) {
  return (
    <section className="shorts-rail" aria-labelledby="shorts-heading">
      <div className="section-heading">
        <h2 id="shorts-heading">Shorts</h2>
        <a href="#">View all</a>
      </div>
      <div className="shorts-scroll">
        {shorts.map((story) => (
          <StoryCard key={story.title} story={story} variant="compact" />
        ))}
      </div>
    </section>
  );
}
