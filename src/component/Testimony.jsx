// App owns activeIndex. This component receives both the value and its event handler.
export default function Testimony({ testimonials, activeIndex, onChange }) {
  const testimony = testimonials[activeIndex];
  return (
    <section className="community-section" id="community">
      <div className="container community-layout">
        <div className="community-intro">
          <p className="eyebrow">BETTER WITH GOOD COMPANY</p>
          <h2>
            Different journeys.
            <br />A shared spark.
          </h2>
          <p>
            Big dreams grow from small beginnings.
            <br />
            Here’s what that looks like in our community.
          </p>
          <span className="community-flower" aria-hidden="true">
            ✳
          </span>
        </div>
        <div className="testimonial-panel">
          <div
            className="testimonial-copy"
            aria-live="polite"
            aria-atomic="true"
          >
            <span className="quote-mark" aria-hidden="true">
              “
            </span>
            <span className="stars" aria-label="5 out of 5 stars">
              ★★★★★
            </span>
            <blockquote>{testimony.quote}</blockquote>
            <div className="testimony-author">
              <span
                className={`person-avatar ${testimony.color}`}
                aria-hidden="true"
              >
                {testimony.initials}
              </span>
              <div>
                <strong>{testimony.name}</strong>
                <span>{testimony.role}</span>
              </div>
            </div>
          </div>
          <div className="testimonial-controls">
            <div className="testimonial-dots">
              {testimonials.map((item, index) => (
                <button
                  type="button"
                  key={item.id}
                  className={index === activeIndex ? "active" : ""}
                  aria-label={`Show testimonial ${index + 1}`}
                  aria-pressed={index === activeIndex}
                  onClick={() => onChange(index)}
                />
              ))}
            </div>
            <div className="arrow-controls">
              <button
                type="button"
                onClick={() =>
                  onChange(
                    (activeIndex - 1 + testimonials.length) %
                      testimonials.length,
                  )
                }
                aria-label="Previous testimonial"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() =>
                  onChange((activeIndex + 1) % testimonials.length)
                }
                aria-label="Next testimonial"
              >
                →
              </button>
            </div>
          </div>
          <small className="demo-note">
            Illustrative stories for this practice project.
          </small>
        </div>
      </div>
    </section>
  );
}
