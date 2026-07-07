import Link from "next/link";
import { getStoryHref, type CategoryBlock } from "@/lib/news-data";
import { StoryCard } from "@/components/story-card";

type CategorySectionProps = {
  block: CategoryBlock;
};

export function CategorySection({ block }: CategorySectionProps) {
  const slug = block.title === "Arts and Culture" ? "arts-culture" : block.title.toLowerCase().replace(/\s+/g, "-");

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
            <Link key={story.title} href={getStoryHref(story)}>
              {story.title}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
