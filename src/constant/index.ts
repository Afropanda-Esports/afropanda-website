export const footernav = [
  {
    id: "1",
    title: "Services",
    url: "#services",
    samePage: true
  },
  {
    id: "2",
    title: "Events",
    url: "#events",
    samePage: true
  },
  {
    id: "3",
    title: "Merch",
    url: "#merch",
    samePage: true
  },
  {
    id: "4",
    title: "Album",
    url: "#album",
    samePage: true
  }
]

export const footerCompanyLink = [
  {
    id: 1,
    title: 'About',
    url: '/about',
  },
  {
    id: 1,
    title: 'Ambassadors',
    url: '/ambassador',
  },
  {
    id: 1,
    title: 'Internships',
    url: '/internship',
  },
]


export const navigationItems = [
  { label: "About", url: "/about" },
  { label: "Services", url: "#services", samePage: true },
  { label: "Events", url: "#events", samePage: true },
  { label: "Album", url: "#album", samePage: true },
  {
    label: "Opportunites",
    url: "#",
    children: [
      { label: "Internship", url: "/internship" },
      { label: "Ambassador Program", url: "/ambassador" },
    ],
  },
];



export const navigation2 = [
  {
    id: 1,
    title: 'About',
    url: '/about',
    // samePage: true
  },
  {
    id: 2,
    title: "Services",
    url: "#services",
    samePage: true
  },
  {
    id: 3,
    title: "Events",
    url: "#events",
    samePage: true

  },
  {
    id: 4,
    title: "Merch",
    url: "#merch",
    samePage: true
  },
  {
    id: 5,
    title: "Album",
    url: "#album",
    samePage: true
  }
]


import win from "../assets/win.jpg"
// import entertain from "../assets/entertain.png"

import { gaming } from "../assets"
// import innovate from "../assets/innovate.jpg"
import innov from "../assets/innov.jpg"


export const features = [
  {
    title: "WE DOMINATE",
    subtitle: "A competitive esports organization",
    image: win,
    buttonText: "More Info",

  },
  {
    title: "WE TRIUMPH",
    subtitle: "The Black & Orange Family",
    image: gaming,
    buttonText: "More Info",
  },
  {
    title: "WE EXCEL",
    subtitle: "We are relentless",
    image: innov,
    buttonText: "Read More",
  },
];

import MissonIcon from "../assets/mission.svg"
import ValueIcon from "../assets/values.svg"
import ImpactIcon from "../assets/impact.svg"
import VisionIcon from "../assets/vision.svg"



import BenefitBackground from "../assets/image-2.png"


export const aboutItems = [
  {
    icon: MissonIcon,

    title: "Mission",
    description: "To promote the growth of esports in Africa by promoting gaming as a respectable career, and establishing a robust esports community.",
    backgroundUrl: BenefitBackground,

  },
  {
    icon: ValueIcon,
    title: "Values",
    description: "Community, Excellence, Integrity, and Growth.",
    backgroundUrl: BenefitBackground,

  },
  {
    icon: ImpactIcon,
    title: "Impact",
    description: "To foster a flourishing esports ecosystem in Africa where ambitious gamers can display their potential, improve their abilities, and seek careers in competitive gaming.",
    backgroundUrl: BenefitBackground,

  },
  {
    icon: VisionIcon,
    title: "Vision",
    description: "To become the leading esports hub in Africa, nurturing world-class esports athletes and promoting gaming as a legitimate and respected profession.",
    backgroundUrl: BenefitBackground,

  },
]

import COD from "../assets/cod.jpg"
import FIFA from "../assets/fifa.jpg"
import WorkShop from "../assets/workshop.jpg"


// export const upcomingEvents = [
//   {
//     id: 1,
//     title: "FIFA 24 Tournament",
//     date: "December 15, 2024",
//     time: "2:00 PM WAT",
//     location: "Lagos, Africa",
//     description:
//       "Join us for an exciting FIFA 24 tournament with prizes worth up to ₦500,000.",
//     image: FIFA, // Replace with your event image
//     category: "Tournament",
//   },
//   {
//     id: 2,
//     title: "Gaming Workshop",
//     date: "December 20, 2024",
//     time: "11:00 AM WAT",
//     location: "Virtual Event",
//     description:
//       "Learn pro gaming techniques from top African esports athletes.",
//     image: WorkShop, // Replace with your event image
//     category: "Workshop",
//   },
//   {
//     id: 3,
//     title: "Call of Duty Championship",
//     date: "January 5, 2025",
//     time: "3:00 PM WAT",
//     location: "Abuja, Africa",
//     description:
//       "Compete in our flagship COD tournament for the ultimate gaming glory.",
//     image: COD, // Replace with your event image
//     category: "Ambassador",
//   },
// ];


export const upcomingEvents = [
  {
    id: 1,
    title: "ROAD TO GLORY",
    date: "October 20, 2023",
    time: "11:00 AM WAT",
    location: "Virtual Event",
    description:
      "An Exciting tournament that leads you to glory",
    image: WorkShop, // Replace with your event image
    category: "Tournament",
  },
  {
    id: 2,
    title: "END GAME FUT CLASH",
    date: "August 12, 2024",
    time: "2:00 PM WAT",
    location: "Virtual Event",
    description:
      "Join us for an exciting End Game Fut Clash with prizes worth up to ₦200,000.",
    image: FIFA, // Replace with your event image
    category: "Tournament",
  },

  {
    id: 3,
    title: "AMBASSADOR PROGRAM",
    date: "January 2025",
    location: "Virtual",
    btnText: "Join Us",
    image: COD, // Replace with your event image
    category: "Ambassador",
    link: "/ambassador", // Link to ambassador page
  },
];



import {
  ergo, mx, mxMech,
  // zone, pws
} from "../assets/Products"


export const products = [
  {
    id: 1,
    name: "AFRO HOODIE ORANGE",
    description: "Our Orange Varient Hoodie",
    price: 103.99,
    originalPrice: 129.99,
    image: ergo,
  },

  {
    id: 3,
    name: "AFRO JERSEY",
    description: "Our unique jersey",
    price: 24.49,
    // originalPrice: 34.99,
    image: mx,
  },
  {
    id: 2,
    name: "AFRO HOODIE BLACK",
    description: "Our Orange Varient Hoodie",
    price: 24.49,
    originalPrice: 34.99,
    image: mxMech,
  },
  // {
  //   id: 4,
  //   name: "PRO GAMING HEADSET",
  //   description: "Premium Gaming Headphones",
  //   price: 159.99,
  //   originalPrice: 199.99,
  //   image: zone,
  // },
  // {
  //   id: 5,
  //   name: "ULTIMATE GAMING BUNDLE",
  //   description: "HDR 4k Webcam, Lightweight & Wireless headset, Bluetooth® performance Keyboard/Mouse Combo, and Anti-slip & Spill-resistant desk mat.",
  //   price: 499.97,
  //   originalPrice: 349.99,
  //   image: pws,
  // },
]


export const stats = [
  { number: "2+", label: "Tournaments Hosted" },
  { number: "200+", label: "Active Players" },
  { number: "3+", label: "Partner Brands" },
  { number: "10K+", label: "Tournament Views" }
];



export const howToStart = [
  { id: 1, text: "Be passionate about gaming and the gaming community" },
  { id: 2, text: "Have excellent communication and interpersonal skills" },
  { id: 3, text: "Be enthusiastic about promoting our games and brand" },
  { id: 4, text: "Be willing to participate in community events and activities" },
  { id: 5, text: "Be committed to providing valuable feedback and insights" },

]


export const testimonials = [
  {
    id: 1,
    name: "John Doe",
    testimonial: "As an Ambassador, I had the opportunity to intern at Afropanda, where I was able to develop my gaming skills. It was an opportunity that I will forever cherish!",

  },
  {
    id: 2,
    name: "Jane Doe",
    testimonial: "As an Ambassador, I had the opportunity to intern at Afropanda, where I was able to develop my gaming skills. It was an opportunity that I will forever cherish!",

  },
  {
    id: 3,
    name: "John Doe",
    testimonial: "As an Ambassador, I had the opportunity to intern at Afropanda, where I was able to develop my gaming skills. It was an opportunity that I will forever cherish!",

  },
  {
    id: 4,
    name: "Jane Doe",
    testimonial: "As an Ambassador, I had the opportunity to intern at Afropanda, where I was able to develop my gaming skills. It was an opportunity that I will forever cherish!",

  },
]