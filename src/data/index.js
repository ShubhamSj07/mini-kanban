import Avatar1 from "../assets/Avatar1.svg";
import Avatar2 from "../assets/Avatar2.svg";
import Avatar3 from "../assets/Avatar3.svg";
import Avatar4 from "../assets/Avatar4.svg";
import Avatar5 from "../assets/Avatar5.svg";
import Avatar6 from "../assets/Avatar6.svg";

import Onboarding from "../assets/onboarding.svg";
import Research1 from "../assets/research-1.svg";
import Research2 from "../assets/research-2.svg";
import MobileAppDesign from "../assets/mobile-app-design.svg";

export const avatarList = [
  { id: 1, avatar: Avatar1 },
  { id: 2, avatar: Avatar2 },
  { id: 3, avatar: Avatar3 },
  { id: 4, avatar: Avatar4 },
  { id: 5, avatar: Avatar5 },
];

export const kanbanData = [
  {
    id: "todo",
    title: "To Do",
    cards: [
      {
        id: "1",
        title: "Brainstorming",
        priority: "Low",
        desc: "Brainstorming brings team members' diverse experience into play.",
        images: null,
        comments: 12,
        files: 0,
        avatars: [Avatar1, Avatar4, Avatar3],
      },
      {
        id: "2",
        title: "Research",
        priority: "High",
        desc: "User research helps you to create an optimal product for users.",
        images: null,
        comments: 10,
        files: 3,
        avatars: [Avatar2, Avatar6],
      },
      {
        id: "3",
        title: "Wireframes",
        priority: "High",
        desc: "Low fidelity wireframes include the most basic content and visuals.",
        images: null,
        comments: 3,
        files: 2,
        avatars: [Avatar1, Avatar6, Avatar4],
      },
    ],
  },
  {
    id: "inProgress",
    title: "In Progress",
    cards: [
      {
        id: "4",
        title: "Onboarding Illustrations",
        priority: "Low",
        desc: null,
        images: [Onboarding],
        comments: 14,
        files: 15,
        avatars: [Avatar3, Avatar4, Avatar1],
      },
      {
        id: "5",
        title: "Moodboard",
        priority: "Low",
        desc: null,
        images: [Research1, Research2],
        comments: 9,
        files: 10,
        avatars: [Avatar3],
      },
    ],
  },
  {
    id: "done",
    title: "Done",
    cards: [
      {
        id: "6",
        title: "Mobile App Design",
        priority: "Completed",
        desc: null,
        images: [MobileAppDesign],
        comments: 12,
        files: 15,
        avatars: [Avatar6, Avatar4],
      },
      {
        id: "7",
        title: "Design System",
        priority: "Completed",
        desc: "It just needs to adapt the UI from what you did before.",
        images: null,
        comments: 12,
        files: 15,
        avatars: [Avatar1, Avatar3, Avatar4],
      },
    ],
  },
];
