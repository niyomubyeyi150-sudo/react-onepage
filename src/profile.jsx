import photo from "./assets/hero.png";

export default function Profile() {
  const student = { name: "Aline", score: 85 };
  return (
    <article>
      <h2>{student.name.toUpperCase()}</h2>
      <p>Score: {student.score} / 100</p>
      <p>Result: {student.score >= 60 ? "Pass" : "Retry"}</p>
      <img src={photo} alt={`${student.name}'s portrait`} />
    </article>
  );
}
