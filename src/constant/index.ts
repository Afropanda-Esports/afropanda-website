export const navigation = [
  {
    id: "0",
    title: "About",
    url: "#about",
  },
  {
    id: "1",
    title: "Services",
    url: "#services",
  },
  {
    id: "2",
    title: "Events",
    url: "#events",
  },
  {
    id: "3",
    title: "Merch",
    url: "#merch",
  }

];

import MissonIcon from "../assets/mission.svg"
import ValueIcon from "../assets/values.svg"
import ImpactIcon from "../assets/impact.svg"
import VisionIcon from "../assets/vision.svg"


export const aboutItems = [
  {
    icon: MissonIcon,
    title: "To empower Nigerian gamers for global competitions."
  },
  {
    icon: ValueIcon,
    title: "Community, Excellence, Integrity, and Growth."
  },
  {
    icon: ImpactIcon,
    title: "Transforming gaming into a sustainable career"
  },
  {
    icon: VisionIcon,
    title: "To elevate Nigerian esports talent on the world stage."
  },
]

import COD from "../assets/cod.jpg"
import FIFA from "../assets/fifa.jpg"
import WorkShop from "../assets/workshop.jpg"


export const upcomingEvents = [
  {
    id: 1,
    title: "FIFA 24 Tournament",
    date: "December 15, 2024",
    time: "2:00 PM WAT",
    location: "Lagos, Nigeria",
    description:
      "Join us for an exciting FIFA 24 tournament with prizes worth up to ₦500,000.",
    image: FIFA, // Replace with your event image
    category: "Tournament",
  },
  {
    id: 2,
    title: "Gaming Workshop",
    date: "December 20, 2024",
    time: "11:00 AM WAT",
    location: "Virtual Event",
    description:
      "Learn pro gaming techniques from top Nigerian esports athletes.",
    image: WorkShop, // Replace with your event image
    category: "Workshop",
  },
  {
    id: 3,
    title: "Call of Duty Championship",
    date: "January 5, 2025",
    time: "3:00 PM WAT",
    location: "Abuja, Nigeria",
    description:
      "Compete in our flagship COD tournament for the ultimate gaming glory.",
    image: COD, // Replace with your event image
    category: "Championship",
  },
];


