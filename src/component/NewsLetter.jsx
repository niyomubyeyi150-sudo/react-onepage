export default function Newsletter({
  content,
  email,
  onEmailChange,
  isSubscribed,
  onSubmit,
}) {
  return (
    <section className="newsletter container" id="join">
      <div>
        <p className="eyebrow">{content.eyebrow}</p>
        <h2>{content.title}</h2>
        <p>{content.description}</p>
      </div>
      <div className="signup-area">
        <form onSubmit={onSubmit}>
          <label htmlFor="email">Your email address</label>
          <div className="email-field">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={email}
              onChange={(event) => onEmailChange(event.target.value)}
              required
            />
            <button className="button button-dark" type="submit">
              Count me in <span aria-hidden="true">↗</span>
            </button>
          </div>
        </form>
        <p className="signup-message" role="status">
          {isSubscribed
            ? "You’re on the demo list! Keep that curiosity going."
            : "Just the good stuff. This demo doesn’t send or store your email."}
        </p>
      </div>
    </section>
  );
}
