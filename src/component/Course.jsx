import CourseCard from "./CourseCard";

export default function Courses({
  courses,
  categories,
  activeCategory,
  onCategoryChange,
  savedIds,
  onSave,
}) {
  const visibleCourses =
    activeCategory === "All courses"
      ? courses
      : courses.filter((course) => course.category === activeCategory);
  return (
    <section className="courses-section container" id="courses">
      <div className="section-heading">
        <div>
          <p className="eyebrow">FIND YOUR NEXT “I MADE THIS”</p>
          <h2>
            Follow your curiosity<span className="orange-text">.</span>
          </h2>
        </div>
        <p>
          Something new to learn.
          <br />
          Something real to make.
        </p>
      </div>
      <div className="course-filters" aria-label="Filter courses by category">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={activeCategory === category ? "active" : ""}
            aria-pressed={activeCategory === category}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <p className="sr-only" role="status">
        Showing {visibleCourses.length} courses. {savedIds.length} saved.
      </p>
      <div className="course-grid">
        {visibleCourses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            isSaved={savedIds.includes(course.id)}
            onSave={onSave}
          />
        ))}
      </div>
    </section>
  );
}
