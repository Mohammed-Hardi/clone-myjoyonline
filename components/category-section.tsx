import type { CategoryBlock } from "@/lib/news-data";
import { StoryCard } from "@/components/story-card";

type CategorySectionProps = {
  block: CategoryBlock;
};

export function CategorySection({ block }: CategorySectionProps) {
  return (
    <section className="category-section" aria-labelledby={`${block.title.toLowerCase().replace(/\s+/g, "-")}-heading`}>
      <div className="section-heading">
        <h2 id={`${block.title.toLowerCase().replace(/\s+/g, "-")}-heading`}>{block.title}</h2>
        <a href="#">More</a>
      </div>
      <div className="category-grid">
        <StoryCard story={block.lead} variant="media" />
        <div className="category-links">
          {block.stories.map((story) => (
            <a key={story.title} href={story.href}>
              {story.title}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
