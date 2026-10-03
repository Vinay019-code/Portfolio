export interface Education {
  degree: string;
  field: string;
  period: string;
  institution: string;
  location: string;
  coursework: string[];
}

export interface ProfileData {
  name: string;
  role: string;
  tagline: string;
  summary: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  education: Education;
  focusAreas: string[];
  dsaTopics: string[];
  primaryDsaLanguage: string;
  principles: string[];
}

export const profileData: ProfileData = {
  name: "Vinay Yadav",
  role: "Software Engineer | Full-Stack Developer",
  tagline: "Building scalable web applications with MERN, Java and Python.",
  summary:
    "Software developer focused on building scalable and user-friendly web applications using MERN, Java, and Python. Strong foundation in Data Structures and Algorithms, object-oriented programming, REST APIs, databases, authentication, and full-stack application development. Interested in solving real-world problems through clean, maintainable, and production-oriented software.",
  email: "vinayyadav00190@gmail.com",
  phone: "+91-6397157910",
  location: "India",
  github: "https://github.com/Vinay019-code",
  linkedin: "https://www.linkedin.com/in/vinay-yadav",
  resumeUrl: "/resume.pdf",
  education: {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science & Engineering",
    period: "2023 – 2027",
    institution: "Shri Ram Murti College of engineering, Bareilly / AKTU",
    location: "India",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering",
    ],
  },
  focusAreas: [
    "Software Engineering",
    "Full-Stack Development",
    "Java Backend Development",
    "Data Engineering & Analysis",
  ],
  dsaTopics: [
    "Arrays",
    "Strings",
    "Hashing",
    "Two Pointers",
    "Sliding Window",
    "Recursion",
    "Sorting",
    "Searching",
    "Linked Lists",
    "Stacks",
    "Queues",
  ],
  primaryDsaLanguage: "Java",
  principles: [
    "Clean Architecture",
    "Reusable Components",
    "Secure Authentication",
    "Maintainable Code",
    "Responsive Interfaces",
    "RESTful APIs",
    "Scalable Systems",
    "Pattern-Based Problem Solving",
  ],
};
