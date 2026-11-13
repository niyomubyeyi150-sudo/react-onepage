// This file holds content only. Components receive these objects through props.
export const navigation = [
  { label: "Home", href: "#home" },
  { label: "Courses", href: "#courses" },
  { label: "Our community", href: "#community" },
];

export const hero = {
  eyebrow: "A LITTLE CURIOSITY. A WORLD OF POSSIBILITY.",
  title: "Small steps.",
  highlight: "Big possibilities.",
  description:
    "Turn your curiosity into something real. Learn practical skills, build things you’re proud of, and find your people along the way.",
  primaryLabel: "Find your next skill",
  secondaryLabel: "Meet the community",
  image:
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=85",
  imageAlt:
    "A group of learners collaborating around a table in a bright studio",
  detailImage:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=450&q=80",
};

export const stats = [
  { value: "12k+", label: "curious minds" },
  { value: "40+", label: "hands-on courses" },
  { value: "4.9/5", label: "from our community" },
];

export const categories = ["All courses", "Development", "Design", "Creative"];

export const courses = [
  {
    id: "react",
    category: "Development",
    icon: "</>",
    title: "React, one component at a time",
    description:
      "Make the leap from static pages to interactive experiences with props, state, and events.",
    lessons: 12,
    level: "Beginner",
    color: "mint",
    tag: "COMMUNITY FAVORITE",
  },
  {
    id: "design",
    category: "Design",
    icon: "◈",
    title: "A good eye for great design",
    description:
      "Explore the little details that make a big difference: layout, color, and typography.",
    lessons: 10,
    level: "Beginner",
    color: "peach",
    tag: "MAKE SOMETHING BEAUTIFUL",
  },
  {
    id: "creative",
    category: "Creative",
    icon: "✳",
    title: "Bring your next idea to life",
    description:
      "Find your creative rhythm and turn that “what if” into a project worth sharing.",
    lessons: 8,
    level: "All levels",
    color: "lilac",
    tag: "ROOM TO EXPERIMENT",
  },
];

// Fictional sample testimonials for this learning project.
export const testimonials = [
  {
    id: 1,
    quote:
      "I used to watch tutorials without knowing where to start. Now I’m building my own projects, one small win at a time.",
    name: "Alex Morgan",
    role: "React learner",
    initials: "AM",
    color: "peach",
  },
  {
    id: 2,
    quote:
      "The hands-on approach made everything click. Learning feels so much easier when you can try an idea and see it work.",
    name: "Jamie Chen",
    role: "Design learner",
    initials: "JC",
    color: "lilac",
  },
  {
    id: 3,
    quote:
      "I came for a new skill and stayed for the community. There’s always someone cheering you on to take the next step.",
    name: "Sam Taylor",
    role: "Creative learner",
    initials: "ST",
    color: "mint",
  },
];

export const signupContent = {
  eyebrow: "YOUR NEXT CHAPTER STARTS HERE",
  title: "Make room for a little growth.",
  description:
    "Join our learning list for fresh ideas, new courses, and a gentle nudge to keep going.",
};

export const footerContent = {
  brand: "forma",
  tagline: "Stay curious. Keep growing.",
  copyright: "A React learning project. Made with curiosity.",
};

export const learner = [
  {
    id: 1,
    name: "Aline",
    city: "Kigali",
    skills: ["React", "JavaScript"],
    available: true,
  },
  {
    id: 2,
    name: "Derrick",
    city: "Kigali",
    skills: ["React", "JavaScript"],
    available: true,
  },
  {
    id: 3,
    name: "John",
    city: "Kigali",
    skills: ["React", "JavaScript"],
    available: true,
  },
];
