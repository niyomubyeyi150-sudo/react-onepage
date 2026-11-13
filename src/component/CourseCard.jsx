// Data props describe this card. Callback props let it update state in App.
export default function CourseCard({ course, isSaved, onSave }) {
  return (
    <article className="course-card">
      <div className={`course-art ${course.color}`}>
        <span className="course-tag">{course.tag}</span>
        <span className="course-symbol" aria-hidden="true">
          {course.icon}
        </span>
        <span className="art-line" aria-hidden="true" />
        <span className="art-dot" aria-hidden="true" />
        <span className="art-caption">
          a little practice. a lot of possibility.
        </span>
        <button
          type="button"
          className={`save-button ${isSaved ? "is-saved" : ""}`}
          aria-label={`${isSaved ? "Unsave" : "Save"} ${course.title}`}
          aria-pressed={isSaved}
          onClick={() => onSave(course.id)}
        >
          {isSaved ? "♥" : "♡"}
        </button>
      </div>
      <div className="course-body">
        <span className="course-category">{course.category}</span>
        <h3>{course.title}</h3>
        <p>{course.description}</p>
        <div className="course-meta">
          <span>
            {course.lessons} lessons <span aria-hidden="true">·</span>{" "}
            {course.level}
          </span>
          <a href="#join" aria-label={`Get updates about ${course.title}`}>
            ↗
          </a>
        </div>
      </div>
    </article>
  );
}
