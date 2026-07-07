import Image from "next/image";
import Link from "next/link";
import { getStoryHref, type Story } from "@/lib/news-data";

type StoryCardProps = {
  story: Story;
  variant?: "hero" | "list" | "compact" | "media";
};

export function StoryCard({ story, variant = "compact" }: StoryCardProps) {
  const href = getStoryHref(story);

  if (variant === "hero") {
    return (
      <article className="story-hero">
        <Link href={href} className="story-hero-image">
          <Image src={story.image} alt={story.title} fill sizes="(max-width: 900px) 100vw, 52vw" priority />
          <span>{story.category}</span>
        </Link>
        <div className="story-hero-copy">
          <Link href={href}>{story.title}</Link>
          {story.summary ? <p>{story.summary}</p> : null}
        </div>
      </article>
    );
  }

  if (variant === "list") {
    return (
      <article className="story-list-card">
        <Link href={href} className="story-list-image">
          <Image src={story.image} alt={story.title} fill sizes="120px" />
        </Link>
        <div>
          <span>{story.category}</span>
          <Link href={href}>{story.title}</Link>
          {story.time ? <time>{story.time}</time> : null}
        </div>
      </article>
    );
  }

  if (variant === "media") {
    return (
      <article className="media-card">
        <Link href={href} className="media-image">
          <Image src={story.image} alt={story.title} fill sizes="(max-width: 700px) 90vw, 270px" />
        </Link>
        <Link href={href}>{story.title}</Link>
      </article>
    );
  }

  return (
    <article className="story-compact-card">
      <Link href={href} className="story-compact-image">
        <Image src={story.image} alt={story.title} fill sizes="(max-width: 700px) 45vw, 220px" />
      </Link>
      <Link href={href}>{story.title}</Link>
    </article>
  );
}
