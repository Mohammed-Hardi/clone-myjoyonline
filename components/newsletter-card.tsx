export function NewsletterCard() {
  return (
    <section className="newsletter-card" aria-labelledby="newsletter-heading">
      <div>
        <span>News updates</span>
        <h2 id="newsletter-heading">Receive the biggest stories on the go.</h2>
        <p>Choose the topics that matter to you and get a compact daily briefing.</p>
      </div>
      <form>
        <label htmlFor="email">Email address</label>
        <div>
          <input id="email" name="email" type="email" placeholder="you@example.com" />
          <button type="submit">Subscribe</button>
        </div>
      </form>
    </section>
  );
}
