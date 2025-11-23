import logo from './logo.png'
import HomeHero from "./home-hero.png"
import t1 from './t1.png'
import t2 from './t2.png'
import t3 from './t3.png'
import t4 from './t4.png'
import t_profile from './t-profile.png'

import c1 from './c1.png'
import c2 from './c2.png'
import c3 from './c3.png'
import c4 from './c4.png'

export const assets = {
    logo,
    HomeHero,

    // new technology
    t1, t2, t3, t4, t_profile,

    // all categories
    c1, c2, c3, c4
}

// new technology array  
export const newTechnology = [
    {
        id: 1,
        img: t1,
        description: "Enhanced autopilot system with lane-assist and smart braking.",
        profile_img: t_profile,
        profile_name: "John Carter",
        date: "2025-02-10"
    },
    {
        id: 2,
        img: t2,
        description: "New hybrid engine offering 30% better fuel efficiency.",
        profile_img: t_profile,
        profile_name: "Sophia Reynolds",
        date: "2025-02-12"
    },
    {
        id: 3,
        img: t3,
        description: "Advanced digital dashboard with AI-powered driving.",
        profile_img: t_profile,
        profile_name: "Michael Turner",
        date: "2025-02-14"
    },
    {
        id: 4,
        img: t4,
        description: "360° parking camera with automated obstacle detection.",
        profile_img: t_profile,
        profile_name: "Emma Johnson",
        date: "2025-02-16"
    }
];


// All categories
export const allCategories = [
  {
    id: 1,
    title: "Car Reviews",
    img: c1,
    description:
      "In-depth reviews of the latest cars, covering performance, comfort, fuel efficiency, technology, and overall driving experience."
  },
  {
    id: 2,
    title: "Maintenance Tips",
    img: c2,
    description:
      "Essential maintenance advice to keep your car running smoothly—from engine care and oil changes to tire safety and seasonal checkups."
  },
  {
    id: 3,
    title: "Car Modifications",
    img: c3,
    description:
      "Explore stylish and performance-boosting car modifications, including body kits, exhaust upgrades, lighting enhancements, and custom interiors."
  },
  {
    id: 4,
    title: "Driving Tips",
    img: c4,
    description:
      "Useful driving techniques to improve safety, fuel economy, and overall road awareness—ideal for both new and experienced drivers."
  }
];



