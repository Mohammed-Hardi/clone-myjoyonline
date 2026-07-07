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
  { label: "Home", href: "/" },
  { label: "News", href: "/news" },
  { label: "Arts and Culture", href: "/arts-culture" },
  { label: "Business", href: "/business" },
  { label: "Sports", href: "/sports" },
  { label: "Opinion", href: "/opinion" },
  { label: "Research", href: "/research" },
  { label: "Live TV/Radio", href: "/live" },
  { label: "Media", href: "/media" },
  { label: "Elections", href: "/election" }
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
    title: "Black Stars lost organisation after Senaya's injury",
    category: "News",
    image: `${imageBase}/2026/07/455e20d0-3764-11f1-879d-1b2f5c3919b8.png-330x186.webp`,
    href: "#",
    time: "22 min ago"
  },
  {
    title: "Jerome Opoku reflects on Ghana's World Cup exit",
    category: "News",
    image: `${imageBase}/2026/07/Jerome-Opoku7-e1783143471580-330x180.png`,
    href: "#",
    time: "41 min ago"
  },
  {
    title: "NDPC discusses proposed Black Star Stadium project",
    category: "National",
    image: `${imageBase}/2026/07/738261707_1310832421221148_3284326788718384143_n-225x150.jpg`,
    href: "#",
    time: "1 hour ago"
  },
  {
    title: "NDPC begins review of planning guidelines",
    category: "National",
    image: `${imageBase}/2026/07/1-17-225x150.jpg`,
    href: "#",
    time: "1 hour ago"
  },
  {
    title: "Accra drainage buffer zones lost to encroachment",
    category: "National",
    image: `${imageBase}/2026/07/On-going-dredging-works-on-the-Odaw-drain-225x150.jpg`,
    href: "#",
    time: "2 hours ago"
  },
  {
    title: "Bawumia donates relief items to June 29 flood victims",
    category: "Politics",
    image: `${imageBase}/2026/07/DSCF2017-225x150.jpg`,
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
      title: "Workers of GNCCI members may stay home longer due to floods",
      category: "Business",
      image: `${imageBase}/2025/07/Screenshot-2025-07-08-at-4.22.03%E2%80%AFam-330x159.png`,
      href: "#"
    },
    stories: [
      {
        title: "Ghana is paying billions for failure to prevent floods",
        category: "Business",
        image: `${imageBase}/2026/07/DSCF1924-330x220.jpg`,
        href: "#"
      },
      {
        title: "New Cashew Council Ghana Board inaugurated",
        category: "Business",
        image: `${imageBase}/2026/07/New-Cashew-Council-Ghana-Board-199x150.jpg`,
        href: "#"
      }
    ]
  },
  {
    title: "Sports",
    lead: {
      title: "Jerome Opoku reflects on Ghana's World Cup exit",
      category: "Sports",
      image: `${imageBase}/2026/07/Jerome-Opoku7-e1783143471580-330x180.png`,
      href: "#"
    },
    stories: [
      {
        title: "Black Stars need time to adapt to Queiroz's philosophy",
        category: "Sports",
        image: `${imageBase}/2026/06/r1677527_1296x729_16-9-330x186.jpg`,
        href: "#"
      },
      {
        title: "Ghana's World Cup dream ends after Arias winner",
        category: "Sports",
        image: `${imageBase}/2026/07/71c71019-de61-42e9-9c20-7ba04bf9877b.jpg-221x150.jpg`,
        href: "#"
      }
    ]
  },
  {
    title: "Arts and Culture",
    lead: {
      title: "Lyrical Joe inspires resilience on new single Free Minds",
      category: "Arts",
      image: `${imageBase}/2026/07/IMG_7481-330x194.jpeg`,
      href: "#"
    },
    stories: [
      {
        title: "Taylor Swift and Travis Kelce wed in NYC ceremony",
        category: "Arts",
        image: `${imageBase}/2026/07/2275167a4acd47cda5e2e077dbb5ee65_md-e1783144727157-330x176.webp`,
        href: "#"
      },
      {
        title: "When Malcolm Smiled earns Best Actor award at Cannes FIFI",
        category: "Arts",
        image: `${imageBase}/2026/07/Screenshot-2026-07-03-at-2.56.25-pm-200x150.png`,
        href: "#"
      }
    ]
  },
  {
    title: "Opinion",
    lead: {
      title: "Are our gyms saving lives or becoming sites of preventable death?",
      category: "Opinion",
      image: `${imageBase}/2025/01/Gym-330x220.jpg`,
      href: "#"
    },
    stories: [
      {
        title: "Why Ghana's flooding crisis demands behavioural and legal shifts",
        category: "Opinion",
        image: `${imageBase}/2026/07/DSCF1742-330x220.jpg`,
        href: "#"
      },
      {
        title: "The Law 101 on removal of CJ Torkornoo",
        category: "Opinion",
        image: `${imageBase}/2026/07/Samson-Lardy-Anyenini-134x150.jpeg`,
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

export type SectionPage = {
  slug: string;
  title: string;
  description: string;
  featured: Story;
  stories: Story[];
};

const sectionStoryPool = [...newsStories, topStory, inFocus, ...shorts, ...videos, ...categoryBlocks.flatMap((block) => [block.lead, ...block.stories])];

const businessSectionStories: Story[] = [
  categoryBlocks[0].lead,
  ...categoryBlocks[0].stories,
  {
    title: "Ginger, shrimps, mangoes lead June food inflation price hikes",
    category: "Business",
    image: `${imageBase}/2025/08/image-910-225x126.png`,
    href: "#"
  },
  {
    title: "Agricwealth CEO urges diaspora investors to tap into agriculture",
    category: "Business",
    image: `${imageBase}/2026/06/IMG-20260629-WA0381-225x150.jpg`,
    href: "#"
  },
  {
    title: "Beyond Motivation: Building your farm based on numbers",
    category: "Business",
    image: `${imageBase}/2026/06/Kelvin_Quansah-200x150.png`,
    href: "#"
  },
  {
    title: "Floods are killing Ghana's economy one traffic jam at a time",
    category: "Business",
    image: `${imageBase}/2026/07/DSCF1742-225x150.jpg`,
    href: "#"
  }
];

const sportsSectionStories: Story[] = [
  categoryBlocks[1].lead,
  ...categoryBlocks[1].stories,
  {
    title: "Black Stars lost organisation after Senaya's injury",
    category: "Sports",
    image: `${imageBase}/2026/07/455e20d0-3764-11f1-879d-1b2f5c3919b8.png-225x127.webp`,
    href: "#"
  },
  {
    title: "Argentina survive Cabo Verde scare to book Egypt date",
    category: "Sports",
    image: `${imageBase}/2026/07/Screenshot-2026-07-04-012836-225x132.jpg`,
    href: "#"
  },
  {
    title: "Ati-Zigi, Inaki, Opoku return as Queiroz makes changes",
    category: "Sports",
    image: `${imageBase}/2026/07/Black-e1783126226108-225x106.jpg`,
    href: "#"
  },
  {
    title: "JoySports partners The Guardian UK for World Cup coverage",
    category: "Sports",
    image: `${imageBase}/2026/06/WhatsApp-Image-2026-06-03-at-14.36.47-120x150.jpeg`,
    href: "#"
  }
];

const opinionSectionStories: Story[] = [
  categoryBlocks[3].lead,
  ...categoryBlocks[3].stories,
  {
    title: "Ghana's flood response and the cost of budgeting by crisis",
    category: "Opinion",
    image: `${imageBase}/2026/07/WhatsApp-Image-2026-07-03-at-19.48.09-e1783109301404-173x150.jpeg`,
    href: "#"
  },
  {
    title: "Clean cities require citizens and proactive authorities",
    category: "Opinion",
    image: `${imageBase}/2026/07/Filthy-streets-Clean-cities-require-both-responsible-citizens-and-proactive-city-authorities-225x127.jpg`,
    href: "#"
  },
  {
    title: "MOBA '16: The brotherhood beyond the hills",
    category: "Opinion",
    image: `${imageBase}/2026/07/WhatsApp-Image-2026-07-03-at-11.34.11-200x150.jpeg`,
    href: "#"
  },
  {
    title: "A case for entrusting waste management to the Ghana Armed Forces",
    category: "Opinion",
    image: `${imageBase}/2026/07/Ghana-Armed-Forces-225x150.jpg`,
    href: "#"
  }
];

const researchSectionStories: Story[] = [
  {
    title: "LUV FACT-CHECK: NPP did not demand retraction from Kennedy Agyapong",
    category: "Research",
    image: `${imageBase}/2026/06/image-5-225x150.jpeg`,
    href: "#"
  },
  {
    title: "Afari Hospital criticism fact-check reviewed",
    category: "Research",
    image: `${imageBase}/2026/06/Afari-Military-Hospital-225x127.jpg`,
    href: "#"
  },
  {
    title: "Ghana records weakest Q1 budget execution since 2017",
    category: "Research",
    image: `${imageBase}/2026/06/A-New-Design-4-Made-with-PosterMyWall-3-225x129.jpg`,
    href: "#"
  },
  {
    title: "Immigration law that may have kept Partey out of Canada",
    category: "Research",
    image: `${imageBase}/2026/06/A-New-Design-3-2-225x129.jpg`,
    href: "#"
  },
  {
    title: "World Bank says fiscal controls delayed GARID project",
    category: "Research",
    image: `${imageBase}/2024/03/World-Bank-202x150.webp`,
    href: "#"
  },
  {
    title: "Nearly $1bn invested in flood control, yet Accra still floods",
    category: "Research",
    image: `${imageBase}/2024/09/WhatsApp-Image-2024-09-25-at-10.45.10-6-225x150.jpeg`,
    href: "#"
  }
];

const liveSectionStories: Story[] = [
  {
    title: "Joy News live audio from Accra",
    category: "Live TV/Radio",
    image: `${imageBase}/2024/09/listenlive.jpg`,
    href: "#"
  },
  {
    title: "Joy News live video stream",
    category: "Live TV/Radio",
    image: `${imageBase}/2024/09/Continue-watching-banner_Joy-News.jpg`,
    href: "#"
  },
  {
    title: "Joy Prime live video stream",
    category: "Live TV/Radio",
    image: `${imageBase}/2024/09/Continue-watching-banner_Joy-Prime.jpg`,
    href: "#"
  },
  {
    title: "Adom TV live stream",
    category: "Live TV/Radio",
    image: `${imageBase}/2024/12/Continue-watching-banner_Adom-TV-e1733136124955.jpg`,
    href: "#"
  },
  {
    title: "Download the MyJoyOnline mobile app",
    category: "Live TV/Radio",
    image: `${imageBase}/2019/11/appstore.png`,
    href: "#"
  }
];

const mediaSectionStories: Story[] = [
  {
    title: "MTN Ghana awards GH¢30,000 to SME Pitch winners",
    category: "Media",
    image: `${imageBase}/2024/09/Continue-watching-banner_Joy-News.jpg`,
    href: "#"
  },
  {
    title: "Photos: Government launches post-flood recovery exercise",
    category: "Media",
    image: `${imageBase}/2026/07/DSCF1742-225x150.jpg`,
    href: "#"
  },
  {
    title: "Photos: Republic Day Cadet Parade",
    category: "Media",
    image: `${imageBase}/2026/07/DSCF2017-225x150.jpg`,
    href: "#"
  },
  {
    title: "Photo Story: Flood response operations update",
    category: "Media",
    image: `${imageBase}/2026/07/737297485_1643274326750436_5315399169861643138_n-210x140.jpg`,
    href: "#"
  },
  {
    title: "Ahmed Suale suspect counsel disputes charge sheet",
    category: "Media",
    image: `${imageBase}/2026/07/image-330-225x150.png`,
    href: "#"
  },
  {
    title: "Greater Accra Minister sets deadline to fix street lights",
    category: "Media",
    image: `${imageBase}/2026/07/Sierra-Leone-President-Maada-Bio-1-225x150.jpg`,
    href: "#"
  }
];

const electionSectionStories: Story[] = [
  {
    title: "2024 Election Interactive Map",
    category: "Elections",
    image: `${imageBase}/2020/12/JOHN-DRAMANI-MAHAMA-NDC.jpg`,
    href: "#"
  },
  {
    title: "Dr. Mahamudu Bawumia profile and results",
    category: "Elections",
    image: `${imageBase}/2024/11/bawumia-new-small.png`,
    href: "#"
  },
  {
    title: "Petition challenges Suame NPP constituency certificate",
    category: "Elections",
    image: `${imageBase}/2026/07/image-327-225x150.png`,
    href: "#"
  },
  {
    title: "NPP beats NDC with 49% support in APL tracker",
    category: "Elections",
    image: `${imageBase}/2026/07/image_2026-07-02_185318142-e1783026306231-225x150.png`,
    href: "#"
  },
  {
    title: "NPP bars election committee members from contesting polls",
    category: "Elections",
    image: `${imageBase}/2026/04/Ablakwa-182x150.jpg`,
    href: "#"
  },
  {
    title: "Ghana nominates Dr Sylvia Adusu for ITLOS election",
    category: "Elections",
    image: `${imageBase}/2026/07/WhatsApp-Image-2026-07-02-at-17.56.25-200x150.jpeg`,
    href: "#"
  }
];

export const sectionPages: SectionPage[] = [
  {
    slug: "news",
    title: "News",
    description: "Breaking headlines, national updates, public safety, politics, and developing stories across Ghana.",
    featured: newsStories[0],
    stories: newsStories
  },
  {
    slug: "arts-culture",
    title: "Arts and Culture",
    description: "Music, film, stage, books, festivals, and the people shaping Ghana's creative scene.",
    featured: categoryBlocks[2].lead,
    stories: [categoryBlocks[2].lead, ...categoryBlocks[2].stories, ...sectionStoryPool.filter((story) => story.category === "Arts")]
  },
  {
    slug: "business",
    title: "Business",
    description: "Markets, banking, industry, entrepreneurship, consumer affairs, and economic policy.",
    featured: categoryBlocks[0].lead,
    stories: businessSectionStories
  },
  {
    slug: "sports",
    title: "Sports",
    description: "Football, athletics, fixtures, analysis, and stories from Ghanaian and global sport.",
    featured: categoryBlocks[1].lead,
    stories: sportsSectionStories
  },
  {
    slug: "opinion",
    title: "Opinion",
    description: "Columns, analysis, civic debate, and sharp perspectives from trusted voices.",
    featured: categoryBlocks[3].lead,
    stories: opinionSectionStories
  },
  {
    slug: "research",
    title: "Research",
    description: "Data-led reporting, explainers, studies, and public-interest investigations.",
    featured: researchSectionStories[0],
    stories: researchSectionStories
  },
  {
    slug: "live",
    title: "Live TV/Radio",
    description: "Listen live, follow Joy programming, and catch up on shows from the Joy brands.",
    featured: liveSectionStories[0],
    stories: liveSectionStories
  },
  {
    slug: "media",
    title: "Media",
    description: "Video reports, podcasts, explainers, live shows, and multimedia updates.",
    featured: mediaSectionStories[0],
    stories: mediaSectionStories
  },
  {
    slug: "election",
    title: "Elections",
    description: "Election news, campaign coverage, civic education, polling analysis, and result updates.",
    featured: electionSectionStories[0],
    stories: electionSectionStories
  }
];

export function getSectionPage(slug: string) {
  if (slug === "arts-and-culture") {
    return sectionPages.find((page) => page.slug === "arts-culture");
  }

  if (slug === "live-tv-radio") {
    return sectionPages.find((page) => page.slug === "live");
  }

  if (slug === "elections") {
    return sectionPages.find((page) => page.slug === "election");
  }

  return sectionPages.find((page) => page.slug === slug);
}

export function slugifyStoryTitle(title: string) {
  return title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function getStoryHref(story: Pick<Story, "href" | "title">) {
  if (story.href && story.href !== "#") {
    return story.href;
  }

  return `/story/${slugifyStoryTitle(story.title)}`;
}

export function getAllStories() {
  const stories = [
    topStory,
    inFocus,
    ...newsStories,
    ...shorts,
    ...videos,
    ...categoryBlocks.flatMap((block) => [block.lead, ...block.stories]),
    ...sectionPages.flatMap((page) => [page.featured, ...page.stories])
  ];
  const uniqueStories = new Map<string, Story>();

  stories.forEach((story) => {
    const slug = slugifyStoryTitle(story.title);

    if (!uniqueStories.has(slug)) {
      uniqueStories.set(slug, story);
    }
  });

  return Array.from(uniqueStories.values());
}

export function getStoryBySlug(slug: string) {
  return getAllStories().find((story) => slugifyStoryTitle(story.title) === slug);
}
