export const PANDAPAY_URL = "https://pandapay.trycloudflare.com";

export const footernav = [
  {
    id: "1",
    title: "What we build",
    url: "#services",
    samePage: true,
  },
  {
    id: "2",
    title: "Events",
    url: "/events",
    samePage: false,
  },
  {
    id: "3",
    title: "Stories",
    url: "/articles",
    samePage: false,
  },
  {
    id: "4",
    title: "PandaPay ↗",
    url: PANDAPAY_URL,
    external: true,
  },
];

export const footerCompanyLink = [
  {
    id: "fc-about",
    title: "About",
    url: "/about",
  },
  {
    id: "fc-amb",
    title: "Ambassadors",
    url: "/ambassador",
  },
  {
    id: "fc-int",
    title: "Internships",
    url: "/internship",
  },
];


export const navigationItems = [
  { label: "About", url: "/about" },
  { label: "What we build", url: "#services", samePage: true },
  { label: "Events", url: "/events" },
  { label: "Stories", url: "/articles" },
  { label: "PandaPay", url: PANDAPAY_URL, external: true },
];



import win from "../assets/win.jpg"

import { gaming } from "../assets"
import innov from "../assets/innov.jpg"


export const features = [
  {
    title: "WE DOMINATE",
    subtitle: "A competitive esports organization",
    image: win,
    buttonText: "See Our Services",
  },
  {
    title: "WE TRIUMPH",
    subtitle: "The Black & Orange Family",
    image: gaming,
    buttonText: "Meet the Community",
  },
  {
    title: "WE EXCEL",
    subtitle: "We are relentless",
    image: innov,
    buttonText: "View Events",
  },
];

import { Target, Heart, Globe, Eye } from "lucide-react";


export const aboutItems = [
  {
    Icon: Target,
    title: "Mission",
    description: "To promote the growth of esports in Africa by promoting gaming as a respectable career, and establishing a robust esports community.",
    backgroundClass: "bg-gradient-to-br from-[#CC5500]/20 via-[#CC5500]/5 to-transparent",
  },
  {
    Icon: Heart,
    title: "Values",
    description: "Community, Excellence, Integrity, and Growth.",
    backgroundClass: "bg-gradient-to-br from-blue-500/20 via-blue-500/5 to-transparent",
  },
  {
    Icon: Globe,
    title: "Impact",
    description: "To foster a flourishing esports ecosystem in Africa where ambitious gamers can display their potential, improve their abilities, and seek careers in competitive gaming.",
    backgroundClass: "bg-gradient-to-br from-emerald-500/20 via-emerald-500/5 to-transparent",
  },
  {
    Icon: Eye,
    title: "Vision",
    description: "To become the leading esports hub in Africa, nurturing world-class esports athletes and promoting gaming as a legitimate and respected profession.",
    backgroundClass: "bg-gradient-to-br from-purple-500/20 via-purple-500/5 to-transparent",
  },
]

export const stats = [
  { number: "200+", label: "Active Players" },
  { number: "Est. 2023", label: "Lagos, Nigeria" },
  { number: "3+", label: "Partner Brands" },
  { number: "10K+", label: "Tournament Views" },
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