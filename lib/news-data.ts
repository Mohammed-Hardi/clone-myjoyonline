export type Story = {
  title: string;
  category: string;
  image: string;
  href: string;
  summary?: string;
  time?: string;
};

export type CategoryBlock = {
  title: string;
  lead: Story;
  stories: Story[];
};

const imageBase = "https://www.myjoyonline.com/wp-content/uploads";

export const navItems = [
  "Home",
  "News",
  "Arts and Culture",
  "Business",
  "Sports",
  "Opinion",
  "Research",
  "Live TV/Radio",
  "Media",
  "Elections"
];

export const topStory: Story = {
  title: "Ghana's World Cup dream ends after late Colombia winner",
  category: "Top Story",
  image: `${imageBase}/2026/07/71c71019-de61-42e9-9c20-7ba04bf9877b.jpg-443x300.jpg`,
  href: "#",
  summary: "A tense finish leaves Ghana reflecting on missed chances and a campaign full of narrow margins.",
  time: "12 min ago"
};

export const inFocus: Story = {
  title: "Ghana's flood response and the cost of budgeting by crisis",
  category: "In Focus",
  image: `${imageBase}/2024/09/WhatsApp-Image-2024-09-25-at-10.45.10-3-210x140.jpeg`,
  href: "#",
  summary: "Analysts say long-term drainage planning is still losing out to emergency spending.",
  time: "34 min ago"
};

export const newsStories: Story[] = [
  {
    title: "Supreme Court ruling renews debate over removal of top judge",
    category: "News",
    image: `${imageBase}/2026/07/Samson-Lardy-Anyenini-125x140.jpeg`,
    href: "#",
    time: "22 min ago"
  },
  {
    title: "FDA raid at Nungua lounge leads to two arrests",
    category: "News",
    image: `${imageBase}/2026/07/ita-233x104.jpg`,
    href: "#",
    time: "41 min ago"
  },
  {
    title: "Flood losses put renewed attention on Accra sanitation costs",
    category: "News",
    image: `${imageBase}/2026/07/DSCF1954-210x140.jpg`,
    href: "#",
    time: "1 hour ago"
  },
  {
    title: "Foreign Affairs outlines faster replacement for damaged passports",
    category: "News",
    image: `${imageBase}/2026/07/images-16-105x140.jpeg`,
    href: "#",
    time: "1 hour ago"
  },
  {
    title: "Private school operators seek clarity on graduation directive",
    category: "Education",
    image: `${imageBase}/2026/07/images-21-210x140.jpeg`,
    href: "#",
    time: "2 hours ago"
  },
  {
    title: "Public health teams warn flood waters could trigger disease risks",
    category: "Health",
    image: `${imageBase}/2026/07/DSCF1954-210x140.jpg`,
    href: "#",
    time: "2 hours ago"
  }
];

export const shorts: Story[] = [
  {
    title: "Fire officers rescue stranded families after overnight flooding",
    category: "Shorts",
    image: `${imageBase}/2026/07/DSCF1954-210x140.jpg`,
    href: "#"
  },
  {
    title: "Three-storey building collapses at Tabora",
    category: "Shorts",
    image: `${imageBase}/2026/07/ita-233x104.jpg`,
    href: "#"
  },
  {
    title: "Residents pump floodwater away from homes in low-lying suburbs",
    category: "Shorts",
    image: `${imageBase}/2024/09/WhatsApp-Image-2024-09-25-at-10.45.10-3-210x140.jpeg`,
    href: "#"
  },
  {
    title: "Community leaders call for urgent drainage maintenance",
    category: "Shorts",
    image: `${imageBase}/2026/07/WhatsApp-Image-2026-07-03-at-21.50.04-1-233x120.jpeg`,
    href: "#"
  }
];

export const videos: Story[] = [
  {
    title: "Aftermath of Monday floods: car owners count losses",
    category: "Video",
    image: `${imageBase}/2026/07/DSCF1954-210x140.jpg`,
    href: "#"
  },
  {
    title: "Keta MP calls for urgent action after tidal flooding",
    category: "Video",
    image: `${imageBase}/2024/09/WhatsApp-Image-2024-09-25-at-10.45.10-3-210x140.jpeg`,
    href: "#"
  },
  {
    title: "JoyNews explains why Accra floods so often",
    category: "Video",
    image: `${imageBase}/2026/07/WhatsApp-Image-2026-07-03-at-21.50.04-1-233x120.jpeg`,
    href: "#"
  }
];

export const podcasts = [
  "Super Morning Show",
  "Midday News",
  "DriveTime",
  "Newsnite",
  "Upfront",
  "Newsfile",
  "Joy Business",
  "Personality Profile",
  "Sports Link",
  "Home Affairs"
];

export const categoryBlocks: CategoryBlock[] = [
  {
    title: "Business",
    lead: {
      title: "Markets watch closely as flood disruption reaches workplaces",
      category: "Business",
      image: `${imageBase}/2026/07/Kasapreko-PLC-is-now-officially-listed-on-the-Ghana-Stock-Exchange-following-a-successful-IPO.-210x140.jpg`,
      href: "#"
    },
    stories: [
      {
        title: "GhIPSS pays dividend to central bank after strong transaction year",
        category: "Business",
        image: `${imageBase}/2026/07/Kasapreko-PLC-is-now-officially-listed-on-the-Ghana-Stock-Exchange-following-a-successful-IPO.-210x140.jpg`,
        href: "#"
      },
      {
        title: "Shippers raise concern over container evacuation delays",
        category: "Business",
        image: `${imageBase}/2026/07/Kasapreko-PLC-is-now-officially-listed-on-the-Ghana-Stock-Exchange-following-a-successful-IPO.-210x140.jpg`,
        href: "#"
      }
    ]
  },
  {
    title: "Sports",
    lead: {
      title: "Coach demands courage and character after tournament exit",
      category: "Sports",
      image: `${imageBase}/2026/07/71c71019-de61-42e9-9c20-7ba04bf9877b.jpg-443x300.jpg`,
      href: "#"
    },
    stories: [
      {
        title: "Young referees learn what it takes to handle a final",
        category: "Sports",
        image: `${imageBase}/2026/07/71c71019-de61-42e9-9c20-7ba04bf9877b.jpg-443x300.jpg`,
        href: "#"
      },
      {
        title: "Fans ask for more investment in grassroots football",
        category: "Sports",
        image: `${imageBase}/2026/07/71c71019-de61-42e9-9c20-7ba04bf9877b.jpg-443x300.jpg`,
        href: "#"
      }
    ]
  },
  {
    title: "Arts and Culture",
    lead: {
      title: "Creative community prepares tribute concert for veteran performer",
      category: "Arts",
      image: `${imageBase}/2026/07/images-21-210x140.jpeg`,
      href: "#"
    },
    stories: [
      {
        title: "Gospel group reflects on unity, longevity, and live ministry",
        category: "Arts",
        image: `${imageBase}/2026/07/images-21-210x140.jpeg`,
        href: "#"
      },
      {
        title: "Film fans celebrate a new box-office milestone",
        category: "Arts",
        image: `${imageBase}/2026/07/images-21-210x140.jpeg`,
        href: "#"
      }
    ]
  },
  {
    title: "Opinion",
    lead: {
      title: "Accountability and planning must replace flood-season panic",
      category: "Opinion",
      image: `${imageBase}/2024/09/WhatsApp-Image-2024-09-25-at-10.45.10-3-210x140.jpeg`,
      href: "#"
    },
    stories: [
      {
        title: "Are public gyms doing enough to protect members?",
        category: "Opinion",
        image: `${imageBase}/2026/07/DSCF1954-210x140.jpg`,
        href: "#"
      },
      {
        title: "The city did not fail suddenly. It was warned repeatedly.",
        category: "Opinion",
        image: `${imageBase}/2024/09/WhatsApp-Image-2024-09-25-at-10.45.10-3-210x140.jpeg`,
        href: "#"
      }
    ]
  }
];

export const mostRecent = [
  "Regional planners review new development coordination guidelines",
  "Diplomatic officials sign visa waiver agreement",
  "SME pitch winners receive funding support",
  "Eco-conscious citizens renew call to protect Atewa",
  "Transport Ministry defends locomotive purchase plan",
  "Senior citizens praised for service at Republic Day event",
  "Flood survivors urged to seek psychological support",
  "Cardiac care fund backs specialist medical training",
  "Youth cadets urged to choose discipline and integrity",
  "Loan app investigation prompts consumer protection debate",
  "University safety concerns rise after recent student deaths",
  "Health Minister outlines regional hospital construction plan"
];
