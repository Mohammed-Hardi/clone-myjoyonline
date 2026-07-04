import Link from "next/link";
import type { CategoryBlock } from "@/lib/news-data";
import { StoryCard } from "@/components/story-card";

type CategorySectionProps = {
  block: CategoryBlock;
};

export function CategorySection({ block }: CategorySectionProps) {
  const slug = block.title.toLowerCase().replace(/\s+/g, "-");

  return (
    <section className="category-section" id={slug} aria-labelledby={`${slug}-heading`}>
      <div className="section-heading">
        <h2 id={`${slug}-heading`}>{block.title}</h2>
        <Link href={`/${slug}`}>More</Link>
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
