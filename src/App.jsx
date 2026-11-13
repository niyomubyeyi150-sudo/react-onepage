import { useState } from "react";

import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Navigation from "./component/Navigation";
import Courses from "./component/Course";
import Testimony from "./component/Testimony";
import Newsletter from "./component/NewsLetter";

import {
  navigation,
  hero,
  stats,
  categories,
  courses,
  testimonials,
  signupContent,
  footerContent,
} from "./component/data";
// import Study from './component/Study';
// import Test from './component/Test';

export default function App() {
  // State remembers values between renders. Props pass values down to children.
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All courses");
  const [savedIds, setSavedIds] = useState([]);
  const [activeTestimony, setActiveTestimony] = useState(0);
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Pass this handler as a prop. A child calls it when its save button is clicked.
  function handleSave(courseId) {
    setSavedIds((previous) =>
      previous.includes(courseId)
        ? previous.filter((id) => id !== courseId)
        : [...previous, courseId],
    );
  }

  function handleEmailChange(value) {
    setEmail(value);
    setIsSubscribed(false);
  }

  function handleSubscribe(event) {
    event.preventDefault(); // Keep the form from reloading the page.
    setIsSubscribed(true); // Local demo only: no backend or email service.
    setEmail("");
  }

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navigation
        brand={footerContent.brand}
        items={navigation}
        isOpen={isMenuOpen}
        onToggle={() => setIsMenuOpen((previous) => !previous)}
        onNavigate={() => setIsMenuOpen(false)}
        savedCount={savedIds.length}
      />
      <main id="main-content">
        <Hero content={hero} stats={stats} />
        <Courses
          courses={courses}
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          savedIds={savedIds}
          onSave={handleSave}
        />
        <Testimony
          testimonials={testimonials}
          activeIndex={activeTestimony}
          onChange={setActiveTestimony}
        />
        <Newsletter
          content={signupContent}
          email={email}
          onEmailChange={handleEmailChange}
          isSubscribed={isSubscribed}
          onSubmit={handleSubscribe}
        />
        {/* <Study  />
        <Test /> */}
      </main>
      <Footer
        content={footerContent}
        links={navigation}
        year={new Date().getFullYear()}
      />
    </>
  );
}
