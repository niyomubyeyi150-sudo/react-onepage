function handleImageError(event) {
  event.currentTarget.onerror = null;
  event.currentTarget.src = "/images/learning-studio.svg";
}

export default function Hero({ content, stats }) {
  return (
    <section className="hero container" id="home">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="tiny-spark">✳</span> {content.eyebrow}
        </p>
        <h1>
          {content.title}
          <br />
          <span>{content.highlight}</span>
        </h1>
        <p className="hero-description">{content.description}</p>
        <div className="hero-actions">
          <a className="button button-dark" href="#courses">
            {content.primaryLabel} <span aria-hidden="true">↗</span>
          </a>
          <a className="text-link" href="#community">
            {content.secondaryLabel} <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="hero-social">
          <div className="avatar-stack" aria-hidden="true">
            <span>AM</span>
            <span>JC</span>
            <span>ST</span>
            <span>+</span>
          </div>
          <div>
            <span className="stars" aria-label="5 out of 5 stars">
              ★★★★★
            </span>
            <p>A good place to grow, together.</p>
          </div>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-photo">
          <img
            src={content.image}
            alt={content.imageAlt}
            onError={handleImageError}
            fetchPriority="high"
          />
          <span className="photo-label">
            <span /> YOUR PEOPLE. YOUR POTENTIAL.
          </span>
        </div>
        <span className="hero-spark" aria-hidden="true">
          ✳
        </span>
        <div className="progress-note">
          <span className="note-icon">↗</span>
          <div>
            <strong>A little better, every day.</strong>
            <span>Your next chapter is yours to create.</span>
          </div>
        </div>
        <div className="image-note">
          <img
            src={content.detailImage}
            alt="Learners working together on a laptop"
            onError={handleImageError}
          />
          <span>
            Less scrolling.
            <br />
            <strong>More creating.</strong>
          </span>
        </div>
        <span className="visual-caption">
          GOOD THINGS START WITH “LET’S TRY.”
        </span>
      </div>
      <div className="stats-strip">
        {stats.map((stat) => (
          <div className="stat" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
        <p>
          Built for the
          <br />
          <strong>beautifully curious.</strong>{" "}
          <span aria-hidden="true">✳</span>
        </p>
      </div>
    </section>
  );
}
