import { learner } from "./data";
import Profile from "./Profile";

export default function Study() {
  return (
    <div className="bg-gray-500 w-full">
      <h1>Hello these is Study</h1>
      {learner.map((person, index) => (
        <Profile key={index} person={person} showCity={true} />
      ))}{" "}
      {/* main lifting of the data */}
    </div>
  );
}
