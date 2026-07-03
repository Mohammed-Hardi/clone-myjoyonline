import Image from "next/image";
import type { Story } from "@/lib/news-data";

type StoryCardProps = {
  story: Story;
  variant?: "hero" | "list" | "compact" | "media";
};

export function StoryCard({ story, variant = "compact" }: StoryCardProps) {
  if (variant === "hero") {
    return (
      <article className="story-hero">
        <a href={story.href} className="story-hero-image">
          <Image src={story.image} alt={story.title} fill sizes="(max-width: 900px) 100vw, 52vw" priority />
          <span>{story.category}</span>
        </a>
        <div className="story-hero-copy">
          <a href={story.href}>{story.title}</a>
          {story.summary ? <p>{story.summary}</p> : null}
        </div>
      </article>
    );
  }

  if (variant === "list") {
    return (
      <article className="story-list-card">
        <a href={story.href} className="story-list-image">
          <Image src={story.image} alt={story.title} fill sizes="120px" />
        </a>
        <div>
          <span>{story.category}</span>
          <a href={story.href}>{story.title}</a>
          {story.time ? <time>{story.time}</time> : null}
        </div>
      </article>
    );
  }

  if (variant === "media") {
    return (
      <article className="media-card">
        <a href={story.href} className="media-image">
          <Image src={story.image} alt={story.title} fill sizes="(max-width: 700px) 90vw, 270px" />
        </a>
        <a href={story.href}>{story.title}</a>
      </article>
    );
  }

  return (
    <article className="story-compact-card">
      <a href={story.href} className="story-compact-image">
        <Image src={story.image} alt={story.title} fill sizes="(max-width: 700px) 45vw, 220px" />
      </a>
      <a href={story.href}>{story.title}</a>
    </article>
  );
}
