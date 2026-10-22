import type { Course } from "@/utils/types";

export const courses: Course[] = [
  {
    courseNumber: "ECE 380",
    department: "ECE",
    level: "undergraduate",
    title: "Signals and Systems",
    whenOffered: "Fall, Winter",
    relationshipToRobotics:
      "Laplace and Fourier transforms. Fundamental to many robotics algorithms.",
  },
  {
    courseNumber: "ECE 424",
    department: "ECE",
    level: "undergraduate",
    title: "Computer Systems",
    whenOffered: "Winter",
    relationshipToRobotics:
      "An understanding of how computers work at a deep level is essential to developing real-world robotic systems.",
  },
  {
    courseNumber: "ECE 425",
    department: "ECE",
    level: "undergraduate",
    title: "Real-time Operating Systems",
    whenOffered: "Fall",
    relationshipToRobotics:
      "At the lowest level, robots require a real-time operating system.",
  },
  {
    courseNumber: "ECE 483 / ME 431",
    department: "ECE",
    level: "undergraduate",
    title: "Feedback Control",
    whenOffered: "Fall, Winter",
    relationshipToRobotics:
      "Robot motion is enabled by feedback controllers that use actuators to act on sensor data.",
  },
  {
    courseNumber: "ME 330",
    department: "ME",
    level: "undergraduate",
    title: "Mechatronics",
    whenOffered: "Fall, Winter",
    relationshipToRobotics:
      "Design and build a robotic system that accomplishes a task.",
  },
  {
    courseNumber: "ME 335",
    department: "ME",
    level: "undergraduate",
    title: "Dynamic Systems Modeling",
    whenOffered: "Fall, Winter",
    relationshipToRobotics:
      "Develop models of mechanical systems.",
  },
  {
    courseNumber: "ME 415",
    department: "ME",
    level: "undergraduate",
    title: "Flight Vehicle Design",
    whenOffered: "Fall",
    relationshipToRobotics:
      "Vehicle design for aircraft and rockets.",
  },
  {
    courseNumber: "ME 437",
    department: "ME",
    level: "undergraduate",
    title: "Kinematics",
    whenOffered: "Winter",
    relationshipToRobotics:
      "Modeling of mechanical systems.",
  },
  {
    courseNumber: "CS 240",
    department: "CS",
    level: "undergraduate",
    title: "Advanced Programming",
    whenOffered: "Fall, Winter, Spring, Summer",
    relationshipToRobotics:
      "This is where you will learn to program.",
  },
  {
    courseNumber: "CS 412",
    department: "CS",
    level: "undergraduate",
    title: "Convex Optimization",
    whenOffered: "Unknown",
    relationshipToRobotics:
      "Optimization techniques are used extensively in robotics.",
  },
  {
    courseNumber: "CS 450",
    department: "CS",
    level: "undergraduate",
    title: "Computer Vision",
    whenOffered: "Winter",
    relationshipToRobotics:
      "Introduction to vision with a focus on image processing.",
  },
  {
    courseNumber: "CS 455",
    department: "CS",
    level: "undergraduate",
    title: "Computer Graphics",
    whenOffered: "Fall",
    relationshipToRobotics:
      "The math in this class is closely related to that used in robotics.",
  },
  {
    courseNumber: "CS 470",
    department: "CS",
    level: "undergraduate",
    title: "Artificial Intelligence",
    whenOffered: "Fall",
    relationshipToRobotics:
      "Introduction to techniques that are widely used in robotics.",
  },
  {
    courseNumber: "CS 472",
    department: "CS",
    level: "undergraduate",
    title: "Machine Learning",
    whenOffered: "Fall, Winter",
    relationshipToRobotics:
      "Neural networks are extensively used in robotics.",
  },
  {
    courseNumber: "CS 474",
    department: "CS",
    level: "undergraduate",
    title: "Deep Learning",
    whenOffered: "Fall",
    relationshipToRobotics:
      "Deep learning techniques are extensively used in robotics.",
  },
  {
    courseNumber: "ME 533",
    department: "ME",
    level: "graduate",
    title: "Autonomous Systems",
    whenOffered: "Fall, odd years",
    relationshipToRobotics:
      "Probabilistic robotics.",
  },
  {
    courseNumber: "ME 534",
    department: "ME",
    level: "graduate",
    title: "Dynamics of Mechanical Systems",
    whenOffered: "Winter",
    relationshipToRobotics:
      "Euler-Lagrange modeling techniques.",
  },
  {
    courseNumber: "ME 537",
    department: "ME",
    level: "graduate",
    title: "Robotics - Kinematics, Dynamics, Control",
    whenOffered: "Fall",
    relationshipToRobotics:
      "Robotic manipulators.",
  },
  {
    courseNumber: "ME 570",
    department: "ME",
    level: "graduate",
    title: "Software Development",
    whenOffered: "Fall",
    relationshipToRobotics:
      "Take this if you are a graduate student and did not take CS 240.",
  },
  {
    courseNumber: "ME 575",
    department: "ME",
    level: "graduate",
    title: "Optimization",
    whenOffered: "Winter",
    relationshipToRobotics:
      "Optimization techniques are used extensively in robotics.",
  },
  {
    courseNumber: "ECE 631",
    department: "ECE",
    level: "graduate",
    title: "Robotic Vision",
    whenOffered: "Winter",
    relationshipToRobotics:
      "Vision applied to robotic systems.",
  },
  {
    courseNumber: "ECE 670",
    department: "ECE",
    level: "graduate",
    title: "Stochastic Processes",
    whenOffered: "Fall",
    relationshipToRobotics:
      "Mathematical tools used extensively in robotics.",
  },
  {
    courseNumber: "ECE 671",
    department: "ECE",
    level: "graduate",
    title: "Math of Signals and Systems",
    whenOffered: "Fall",
    relationshipToRobotics:
      "Mathematical tools used extensively in robotics.",
  },
  {
    courseNumber: "ECE 672",
    department: "ECE",
    level: "graduate",
    title: "Detection and Estimation",
    whenOffered: "Winter",
    relationshipToRobotics:
      "Estimation techniques, including an introduction to Kalman filtering.",
  },
  {
    courseNumber: "ECE 674 / ME 634",
    department: "ECE",
    level: "graduate",
    title: "Flight Dynamics and Control",
    whenOffered: "Winter",
    relationshipToRobotics:
      "Build a complete UAV simulation including control, Kalman filtering, and path planning.",
  },
  {
    courseNumber: "ECE 682R",
    department: "ECE",
    level: "graduate",
    title: "Vision Based Flight of Multirotors",
    whenOffered: "Spring",
    relationshipToRobotics:
      "Both control and vision for multirotors.",
  },
  {
    courseNumber: "ECE 773 / ME 733",
    department: "ECE",
    level: "graduate",
    title: "Linear Systems Theory",
    whenOffered: "Winter, odd years",
    relationshipToRobotics:
      "Linear control techniques including LQR and LQR/LTR.",
  },
  {
    courseNumber: "ECE 774 / ME 734",
    department: "ECE",
    level: "graduate",
    title: "Nonlinear Systems Theory",
    whenOffered: "Winter, even years",
    relationshipToRobotics:
      "Nonlinear control techniques.",
  },
  {
    courseNumber: "CS 513",
    department: "CS",
    level: "graduate",
    title: "Robust Control",
    whenOffered: "Winter",
    relationshipToRobotics:
      "Control techniques used to maneuver robots.",
  },
  {
    courseNumber: "CS 650R",
    department: "CS",
    level: "graduate",
    title: "Advanced Computer Vision",
    whenOffered: "Fall, Winter",
    relationshipToRobotics: "Unknown",
  },
  {
    courseNumber: "CS 651",
    department: "CS",
    level: "graduate",
    title: "Computational Inference and Recognition in Visual Domains",
    whenOffered: "Unknown",
    relationshipToRobotics: "Unknown",
  },
  {
    courseNumber: "CS 671",
    department: "CS",
    level: "graduate",
    title: "Multi-Agent Systems",
    whenOffered: "Unknown",
    relationshipToRobotics:
      "Theory of multi-robot teams.",
  },
  {
    courseNumber: "CS 674",
    department: "CS",
    level: "graduate",
    title: "Advanced Deep Learning",
    whenOffered: "Winter",
    relationshipToRobotics: "Unknown",
  },
  {
    courseNumber: "CS 677",
    department: "CS",
    level: "graduate",
    title: "Bayesian Methods in Computer Science",
    whenOffered: "Spring",
    relationshipToRobotics:
      "Mathematical techniques used extensively in robotics.",
  },
]
