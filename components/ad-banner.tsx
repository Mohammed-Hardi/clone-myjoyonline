type AdBannerProps = {
  compact?: boolean;
};

export function AdBanner({ compact = false }: AdBannerProps) {
  return (
    <aside className={compact ? "ad-banner ad-banner-compact" : "ad-banner"}>
      <div>
        <span>Advertiser</span>
        <strong>{compact ? "Your brand, every hour" : "Apartments for Sale in Accra"}</strong>
        <p>{compact ? "Reach Ghana's most engaged news audience." : "A premium placement styled like a leaderboard ad slot."}</p>
      </div>
      <a href="#" aria-label="Open advertiser placement">
        Open
      </a>
    </aside>
  );
}
