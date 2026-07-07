export type Story = {
  title: string;
  category: string;
  image: string;
  href: string;
  sourceUrl?: string;
  summary?: string;
  time?: string;
  publishedAt?: string;
  slug?: string;
};

export type CategoryBlock = {
  title: string;
  lead: Story;
  stories: Story[];
};

export type SectionPage = {
  slug: string;
  title: string;
  categoryId?: number;
  description: string;
  featured: Story;
  stories: Story[];
};

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
  "title": "Five arrested over alleged unlawful detention and extortion in Tamale",
  "category": "Crime",
  "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/robbers-340x188.png",
  "href": "#",
  "sourceUrl": "https://www.myjoyonline.com/five-arrested-over-alleged-unlawful-detention-and-extortion-in-tamale/",
  "summary": "Police in the Northern Region capital, Tamale, have arrested five men accused of unlawfully detaining a man, seizing his property, and demanding money for its return.",
  "time": "1 min ago",
  "publishedAt": "2026-07-07T22:14:02",
  "slug": "five-arrested-over-alleged-unlawful-detention-and-extortion-in-tamale"
};

export const inFocus: Story = {
  "title": "Kachiau’s abandoned CHPS compound gets lifeline after years of self-medication by residents",
  "category": "Features",
  "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-07-at-20.51.27-333x250.jpeg",
  "href": "#",
  "sourceUrl": "https://www.myjoyonline.com/kachiaus-abandoned-chps-compound-gets-lifeline-after-years-of-self-medication-by-residents/",
  "summary": "For 65-year-old widow Daari Bayor, the rainy season means fear. When malaria hits, her first stop isn’t a clinic.",
  "time": "1 min ago",
  "publishedAt": "2026-07-07T22:11:53",
  "slug": "kachiau-s-abandoned-chps-compound-gets-lifeline-after-years-of-self-medication-by-residents"
};

export const newsStories: Story[] = [
  {
    "title": "US launches strikes on Iran after tankers hit in Strait of Hormuz",
    "category": "International",
    "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/e1bcc750-7a4a-11f1-8540-110da73337d9.jpg-340x191.webp",
    "href": "#",
    "sourceUrl": "https://www.myjoyonline.com/us-launches-strikes-on-iran-after-tankers-hit-in-strait-of-hormuz/",
    "summary": "The US has launched a series of \"powerful\" strikes on Iran in response to attacks on three commercial vessels in the Strait of Hormuz.",
    "time": "1 min ago",
    "publishedAt": "2026-07-07T21:58:49",
    "slug": "us-launches-strikes-on-iran-after-tankers-hit-in-strait-of-hormuz"
  },
  {
    "title": "Zoomlion deploys personnel, equipment to support Mahama’s national clean-up exercise",
    "category": "In Focus",
    "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/1-3-254x250.png",
    "href": "#",
    "sourceUrl": "https://www.myjoyonline.com/zoomlion-deploys-personnel-equipment-to-support-mahamas-national-clean-up-exercise/",
    "summary": "Zoomlion Ghana Limited has announced its full support for President John Dramani Mahama’s National General Clean-Up Exercise aimed at restoring sanitation in flood-affected parts of the country. The exercise, scheduled for Friday, July 10, and Saturday, July 11, 2026, forms part of the government’s efforts to improve environmental cleanliness and protect public health following the [&hellip;]",
    "time": "1 min ago",
    "publishedAt": "2026-07-07T21:42:34",
    "slug": "zoomlion-deploys-personnel-equipment-to-support-mahama-s-national-clean-up-exercise"
  },
  {
    "title": "North Dayi residents condemn authorities over abandoned road projects",
    "category": "News",
    "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/Anfoega-Road-340x191.png",
    "href": "#",
    "sourceUrl": "https://www.myjoyonline.com/north-dayi-residents-condemn-authorities-over-abandoned-road-projects/",
    "summary": "Residents in the North Dayi District of the Volta Region have voiced strong complaints about neglected road projects under the Big Push Infrastructure Programme.",
    "time": "1 min ago",
    "publishedAt": "2026-07-07T21:31:05",
    "slug": "north-dayi-residents-condemn-authorities-over-abandoned-road-projects"
  },
  {
    "title": "NAPRM Governing Council seeks stronger partnership with NDPC on governance, development agenda",
    "category": "National",
    "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/740989216_1314334894204234_2131641254257959935_n-237x250.jpg",
    "href": "#",
    "sourceUrl": "https://www.myjoyonline.com/naprm-governing-council-seeks-stronger-partnership-with-ndpc-on-governance-development-agenda/",
    "summary": "The National African Peer Review Mechanism Governing Council (NAPRM-GC) has called for a formalised partnership with the National Development Planning Commission (NDPC) to enhance collaboration in governance assessment, data management and national development planning.",
    "time": "1 min ago",
    "publishedAt": "2026-07-07T21:08:10",
    "slug": "naprm-governing-council-seeks-stronger-partnership-with-ndpc-on-governance-development-agenda"
  },
  {
    "title": "Police post torched after fatal Sayerano shooting as tensions escalate",
    "category": "National",
    "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-07-at-20.38.43-333x250.jpeg",
    "href": "#",
    "sourceUrl": "https://www.myjoyonline.com/police-post-torched-after-fatal-sayerano-shooting-as-tensions-escalate/",
    "summary": "A police post located at Asempaneye Forest near Sefwi Sayerano in the Juaboso District of the Western North Region has been set ablaze by unidentified persons, further escalating tensions following the fatal police shooting that claimed two lives on Tuesday, July 7.",
    "time": "1 min ago",
    "publishedAt": "2026-07-07T21:07:43",
    "slug": "police-post-torched-after-fatal-sayerano-shooting-as-tensions-escalate"
  },
  {
    "title": "Hanan granted bail as AG moves to block UK medical trip over frozen funds",
    "category": "National",
    "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/haa-e1783457228199-340x218.jpg",
    "href": "#",
    "sourceUrl": "https://www.myjoyonline.com/hanan-granted-bail-as-ag-moves-to-block-uk-medical-trip-over-frozen-funds/",
    "summary": "The Attorney-General has filed an application at the High Court seeking to overturn an earlier order that allowed Hanan Abdul-Wahab Aludiba, the first accused person in the Buffer Stock case, to travel to the United Kingdom for specialist medical treatment, citing fresh developments over an alleged attempt to access frozen funds.",
    "time": "1 min ago",
    "publishedAt": "2026-07-07T20:52:15",
    "slug": "hanan-granted-bail-as-ag-moves-to-block-uk-medical-trip-over-frozen-funds"
  },
  {
    "title": "NPP suspends constituency executive elections in two constituencies",
    "category": "National",
    "image": "https://www.myjoyonline.com/wp-content/uploads/2026/06/Screenshot-2026-06-26-at-5.51.05-AM-340x204.png",
    "href": "#",
    "sourceUrl": "https://www.myjoyonline.com/npp-suspends-constituency-executive-elections-in-two-constituencies/",
    "summary": "The New Patriotic Party (NPP) has suspended its Constituency Executive Committee elections in the Afigya Sekyere East and Asante Akyem Central constituencies in the Ashanti Region following court orders restraining the party from proceeding with the electoral process.",
    "time": "1 min ago",
    "publishedAt": "2026-07-07T20:46:53",
    "slug": "npp-suspends-constituency-executive-elections-in-two-constituencies"
  },
  {
    "title": "Old Tafo MP: Let our World Cup exit mark the beginning of football reform",
    "category": "National",
    "image": "https://www.myjoyonline.com/wp-content/uploads/2026/04/641540474_26292250017035009_5875304167901501054_n-340x227.jpg",
    "href": "#",
    "sourceUrl": "https://www.myjoyonline.com/old-tafo-mp-let-our-world-cup-exit-mark-the-beginning-of-football-reform/",
    "summary": "Old Tafo MP, Vincent Ekow Assafuah, has urged Ghana to transform the disappointment of the Black Stars’ World Cup exit into an opportunity for major reforms within the country’s football system.",
    "time": "1 min ago",
    "publishedAt": "2026-07-07T20:40:43",
    "slug": "old-tafo-mp-let-our-world-cup-exit-mark-the-beginning-of-football-reform"
  }
];

export const shorts: Story[] = [
  {
    "title": "NPP suspends constituency executive elections in two constituencies",
    "category": "National",
    "image": "https://www.myjoyonline.com/wp-content/uploads/2026/06/Screenshot-2026-06-26-at-5.51.05-AM-340x204.png",
    "href": "#",
    "sourceUrl": "https://www.myjoyonline.com/npp-suspends-constituency-executive-elections-in-two-constituencies/",
    "summary": "The New Patriotic Party (NPP) has suspended its Constituency Executive Committee elections in the Afigya Sekyere East and Asante Akyem Central constituencies in the Ashanti Region following court orders restraining the party from proceeding with the electoral process.",
    "time": "1 min ago",
    "publishedAt": "2026-07-07T20:46:53",
    "slug": "npp-suspends-constituency-executive-elections-in-two-constituencies"
  },
  {
    "title": "Old Tafo MP: Let our World Cup exit mark the beginning of football reform",
    "category": "National",
    "image": "https://www.myjoyonline.com/wp-content/uploads/2026/04/641540474_26292250017035009_5875304167901501054_n-340x227.jpg",
    "href": "#",
    "sourceUrl": "https://www.myjoyonline.com/old-tafo-mp-let-our-world-cup-exit-mark-the-beginning-of-football-reform/",
    "summary": "Old Tafo MP, Vincent Ekow Assafuah, has urged Ghana to transform the disappointment of the Black Stars’ World Cup exit into an opportunity for major reforms within the country’s football system.",
    "time": "1 min ago",
    "publishedAt": "2026-07-07T20:40:43",
    "slug": "old-tafo-mp-let-our-world-cup-exit-mark-the-beginning-of-football-reform"
  },
  {
    "title": "BR Institute partners UPSA to expand entrepreneurship training for the youth",
    "category": "National",
    "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/image-709-298x250.png",
    "href": "#",
    "sourceUrl": "https://www.myjoyonline.com/br-institute-partners-upsa-to-expand-entrepreneurship-training-for-the-youth/",
    "summary": "The BR Institute has signed a strategic Memorandum of Understanding (MoU) with the University of Professional Studies, Accra (UPSA) to expand entrepreneurship training, innovation and industry collaboration for students.",
    "time": "1 min ago",
    "publishedAt": "2026-07-07T20:38:19",
    "slug": "br-institute-partners-upsa-to-expand-entrepreneurship-training-for-the-youth"
  },
  {
    "title": "Flood death toll rises to 35; six still missing, 58,000 displaced in Accra — Interior Minister",
    "category": "National",
    "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/DSCF1954-340x227.jpg",
    "href": "#",
    "sourceUrl": "https://www.myjoyonline.com/flood-death-toll-rises-to-35-six-still-missing-58000-displaced-in-accra-interior-minister/",
    "summary": "The Minister for the Interior, Muntaka Mohammed-Mubarak, has disclosed that the number of people who lost their lives in recent devastating floods that struck parts of the country in June has risen to 35, with six others still unaccounted for, as the government intensifies relief and recovery efforts.",
    "time": "1 min ago",
    "publishedAt": "2026-07-07T20:30:52",
    "slug": "flood-death-toll-rises-to-35-six-still-missing-58-000-displaced-in-accra-interior-minister"
  }
];

export const videos: Story[] = [
  {
    "title": "US launches strikes on Iran after tankers hit in Strait of Hormuz",
    "category": "International",
    "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/e1bcc750-7a4a-11f1-8540-110da73337d9.jpg-340x191.webp",
    "href": "#",
    "sourceUrl": "https://www.myjoyonline.com/us-launches-strikes-on-iran-after-tankers-hit-in-strait-of-hormuz/",
    "summary": "The US has launched a series of \"powerful\" strikes on Iran in response to attacks on three commercial vessels in the Strait of Hormuz.",
    "time": "1 min ago",
    "publishedAt": "2026-07-07T21:58:49",
    "slug": "us-launches-strikes-on-iran-after-tankers-hit-in-strait-of-hormuz"
  },
  {
    "title": "Zoomlion deploys personnel, equipment to support Mahama’s national clean-up exercise",
    "category": "In Focus",
    "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/1-3-254x250.png",
    "href": "#",
    "sourceUrl": "https://www.myjoyonline.com/zoomlion-deploys-personnel-equipment-to-support-mahamas-national-clean-up-exercise/",
    "summary": "Zoomlion Ghana Limited has announced its full support for President John Dramani Mahama’s National General Clean-Up Exercise aimed at restoring sanitation in flood-affected parts of the country. The exercise, scheduled for Friday, July 10, and Saturday, July 11, 2026, forms part of the government’s efforts to improve environmental cleanliness and protect public health following the [&hellip;]",
    "time": "1 min ago",
    "publishedAt": "2026-07-07T21:42:34",
    "slug": "zoomlion-deploys-personnel-equipment-to-support-mahama-s-national-clean-up-exercise"
  },
  {
    "title": "North Dayi residents condemn authorities over abandoned road projects",
    "category": "News",
    "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/Anfoega-Road-340x191.png",
    "href": "#",
    "sourceUrl": "https://www.myjoyonline.com/north-dayi-residents-condemn-authorities-over-abandoned-road-projects/",
    "summary": "Residents in the North Dayi District of the Volta Region have voiced strong complaints about neglected road projects under the Big Push Infrastructure Programme.",
    "time": "1 min ago",
    "publishedAt": "2026-07-07T21:31:05",
    "slug": "north-dayi-residents-condemn-authorities-over-abandoned-road-projects"
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
    "title": "Business",
    "lead": {
      "title": "Ghana cedi outlook improves as PwC projects medium term stability",
      "category": "Banking and Finance",
      "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/68fa628265a6efe05544f9d2_Ghana-Cedisc-334x250.jpg",
      "href": "#",
      "sourceUrl": "https://www.myjoyonline.com/ghana-cedi-outlook-improves-as-pwc-projects-medium-term-stability/",
      "summary": "The Ghana cedi is expected to remain relatively stable in the medium term, supported by recent foreign exchange interventions by the Bank of Ghana and improving macroeconomic conditions, according to PricewaterhouseCoopers (PwC) Ghana.",
      "time": "1 min ago",
      "publishedAt": "2026-07-07T17:41:40",
      "slug": "ghana-cedi-outlook-improves-as-pwc-projects-medium-term-stability"
    },
    "stories": [
      {
        "title": "Bankers expect Central Bank to hold benchmark rate",
        "category": "Banking and Finance",
        "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/gab-ceo-ethical-333x250.jpg",
        "href": "#",
        "sourceUrl": "https://www.myjoyonline.com/bankers-expect-central-bank-to-hold-benchmark-rate/",
        "summary": "The Ghana Bankers Association expects the Bank of Ghana to maintain its monetary policy rate at the next meeting of the Monetary Policy Committee (MPC), despite improving macroeconomic conditions.",
        "time": "1 min ago",
        "publishedAt": "2026-07-07T17:07:09",
        "slug": "bankers-expect-central-bank-to-hold-benchmark-rate"
      },
      {
        "title": "South Africa risks export decline, job losses if African partners turn away — Prof Peprah",
        "category": "Africa",
        "image": "https://www.myjoyonline.com/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-02-at-13.08.10-340x191.jpeg",
        "href": "#",
        "sourceUrl": "https://www.myjoyonline.com/south-africa-risks-export-decline-job-losses-if-african-partners-turn-away-prof-peprah/",
        "summary": "Professor of Finance at Andrews University, Prof. William Kwasi Peprah, has warned that South Africa could suffer significant economic consequences if tensions with Ghana and other African countries lead to a decline in trade and investment relations.",
        "time": "1 min ago",
        "publishedAt": "2026-07-07T16:53:45",
        "slug": "south-africa-risks-export-decline-job-losses-if-african-partners-turn-away-prof-peprah"
      },
      {
        "title": "CMC secures gulf offtake deals for Ghana's semi-finished cocoa ahead of Mahama's 50% local processing mandate",
        "category": "Agribusiness",
        "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/2.JPG-340x191.jpeg",
        "href": "#",
        "sourceUrl": "https://www.myjoyonline.com/cmc-secures-gulf-offtake-deals-for-ghanas-semi-finished-cocoa-ahead-of-mahamas-50-local-processing-mandate/",
        "summary": "Cocoa Marketing Company (CMC) Ghana Limited locks in demand from the UAE and Saudi Arabia for Ghana's value-added cocoa products.",
        "time": "1 min ago",
        "publishedAt": "2026-07-07T16:19:55",
        "slug": "cmc-secures-gulf-offtake-deals-for-ghana-s-semi-finished-cocoa-ahead-of-mahama-s-50-local-processing-mandate"
      }
    ]
  },
  {
    "title": "Sports",
    "lead": {
      "title": "Argentina complete extraordinary comeback to beat Egypt",
      "category": "Football",
      "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/reuters_6a4d40f3-1783447795-Messi-340x227.webp",
      "href": "#",
      "sourceUrl": "https://www.myjoyonline.com/argentina-complete-extraordinary-comeback-to-beat-egypt/",
      "summary": "Argentina survived another almighty scare before delivering a scarcely believable second-half comeback to break Egypt hearts and reach the quarter-finals of the 2026 World Cup.",
      "time": "1 min ago",
      "publishedAt": "2026-07-07T20:29:00",
      "slug": "argentina-complete-extraordinary-comeback-to-beat-egypt"
    },
    "stories": [
      {
        "title": "Prince Osei Owusu distances himself from viral claims over Black Stars omission",
        "category": "Football",
        "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-07-at-2.34.52-PM-e1783438397382-340x197.jpeg",
        "href": "#",
        "sourceUrl": "https://www.myjoyonline.com/prince-osei-owusu-distances-himself-from-viral-claims-over-black-stars-omission/",
        "summary": "Ghanaian forward Prince Osei Owusu has distanced himself from comments circulating on social media alleging that he was dropped from the Black Stars after refusing to hand over a percentage of his appearance fee and winning bonus to the Ghana Football Association.",
        "time": "1 min ago",
        "publishedAt": "2026-07-07T14:41:30",
        "slug": "prince-osei-owusu-distances-himself-from-viral-claims-over-black-stars-omission"
      },
      {
        "title": "Build Ghanaian coaches – ADC urges after Black Stars World Cup exit",
        "category": "National",
        "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/Screenshot-2026-07-07-at-4.18.58-AM-340x212.png",
        "href": "#",
        "sourceUrl": "https://www.myjoyonline.com/build-ghanaian-coaches-adc-urges-after-black-stars-world-cup-exit/",
        "summary": "Ghana’s exit from the ongoing FIFA World Cup has reignited debate over the future of the Black Stars, with the Africa Development Council (ADC) urging greater investment in local coaches instead of relying on foreign appointments.",
        "time": "6 hours ago",
        "publishedAt": "2026-07-07T04:59:00",
        "slug": "build-ghanaian-coaches-adc-urges-after-black-stars-world-cup-exit"
      },
      {
        "title": "Kofi Adams rejects claims of external interference in Black Stars player selections",
        "category": "Football",
        "image": "https://www.myjoyonline.com/wp-content/uploads/2026/06/kofi-adams-black-stars-340x230.jpg",
        "href": "#",
        "sourceUrl": "https://www.myjoyonline.com/kofi-adams-rejects-claims-of-external-interference-in-black-stars-player-selections/",
        "summary": "The Minister for Sports and Recreation, Kofi Adams, has firmly dismissed suggestions that government officials and other external entities influence player selection for the Black Stars, insisting that such decisions remain the exclusive responsibility of the national team's head coach.",
        "time": "12 hours ago",
        "publishedAt": "2026-07-06T22:33:30",
        "slug": "kofi-adams-rejects-claims-of-external-interference-in-black-stars-player-selections"
      }
    ]
  },
  {
    "title": "Arts and Culture",
    "lead": {
      "title": "Muzic Mensah earns four nominations at 2026 Ghana Music Awards USA",
      "category": "Arts and Culture",
      "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/IMG-20260704-WA00111-333x250.jpg",
      "href": "#",
      "sourceUrl": "https://www.myjoyonline.com/muzic-mensah-earns-four-nominations-at-2026-ghana-music-awards-usa/",
      "summary": "The nominations were announced during the official unveiling of nominees in Kumasi, where organisers recognised Ghanaian musicians making an impact both locally and within the diaspora.",
      "time": "3 days ago",
      "publishedAt": "2026-07-04T12:34:39",
      "slug": "muzic-mensah-earns-four-nominations-at-2026-ghana-music-awards-usa"
    },
    "stories": [
      {
        "title": "Shimmer by Khuks celebrates individuality and confidence with its new drop Kisses & Wishes",
        "category": "Art &amp; Design",
        "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/IMG_5175.JPG-230x250.jpeg",
        "href": "#",
        "sourceUrl": "https://www.myjoyonline.com/shimmer-by-khuks-celebrates-individuality-and-confidence-with-its-new-drop-kisses-wishes/",
        "summary": "Shimmer by Khuks claims the spotlight with its new launch, Kisses & Wishes, echoing the brand’s vision of self-expression–an ode to growth, gratitude, and all that is yet to come, encased in a sleek package. True to this bold messaging, the release stands as a love letter to the brand’s devoted community, affectionately known as Shimmies, and a nod to the goals that keep them united as they continue to shine together. Beyond creating a sense of belonging and reminding every Shimmer girl she is part of something truly special, Kisses & Wishes adds a personal twist of its own. Inspired by the birthday of its Founder and CEO, Angela Nyamewaa Ama Safowaa, the collection equally draws into themes of new beginnings and heartfelt appreciation. “This release is named in honor of the community that has brought us this far,” Safowaa, better known as Angie Safo, shared. “‘Kisses’ speaks to the affection, warmth, and connection between the brand and its community, while ‘Wishes’ represents the hope and dreams that accompany a new year and all we are becoming.”",
        "time": "4 days ago",
        "publishedAt": "2026-07-03T10:49:00",
        "slug": "shimmer-by-khuks-celebrates-individuality-and-confidence-with-its-new-drop-kisses-and-wishes"
      },
      {
        "title": "Ghana National Council of Metropolitan Chicago launches GhanaFest® 2026 with historic first-ever Ghana flag-raising ceremony",
        "category": "Arts and Culture",
        "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/1-12-e1783017515543-340x239.jpg",
        "href": "#",
        "sourceUrl": "https://www.myjoyonline.com/ghana-national-council-of-metropolitan-chicago-launches-ghanafest-2026-with-historic-first-ever-ghana-flag-raising-ceremony/",
        "summary": "The Ghana National Council of Metropolitan Chicago (GNC) has officially launched the 2026 GhanaFest® season with the city's first-ever ceremonial raising of the Ghanaian flag in downtown Chicago, marking Ghana's Republic Day and setting the stage for the 37th edition of one of the largest Ghanaian cultural festivals in the United States. The landmark flag-raising [&hellip;]",
        "time": "5 days ago",
        "publishedAt": "2026-07-02T18:39:48",
        "slug": "ghana-national-council-of-metropolitan-chicago-launches-ghanafest-2026-with-historic-first-ever-ghana-flag-raising-ceremony"
      },
      {
        "title": "Gonja king calls for stronger collaboration with Asante Kingdom to promote peace and development",
        "category": "Arts and Culture",
        "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-11.52.34-AM-340x239.jpeg",
        "href": "#",
        "sourceUrl": "https://www.myjoyonline.com/gonja-king-calls-for-stronger-collaboration-with-asante-kingdom-to-promote-peace-and-development/",
        "summary": "The King and Overlord of the Gonja Kingdom, Yagbonwura Bii-Kunuto Jewu Soale I, has called for stronger collaboration between the Gonja and Asante kingdoms, saying their centuries-old relationship should be deepened to promote peace, preserve culture and improve the lives of their people.",
        "time": "5 days ago",
        "publishedAt": "2026-07-02T12:46:27",
        "slug": "gonja-king-calls-for-stronger-collaboration-with-asante-kingdom-to-promote-peace-and-development"
      }
    ]
  },
  {
    "title": "Opinion",
    "lead": {
      "title": "The Conversion Gap: The most valuable data in your business is the 'No' nobody wrote down",
      "category": "Opinion",
      "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/image-692-340x227.png",
      "href": "#",
      "sourceUrl": "https://www.myjoyonline.com/the-conversion-gap-the-most-valuable-data-in-your-business-is-the-no-nobody-wrote-down/",
      "summary": "That is the conversion gap, and it is rarely a product or pricing problem. Marketing is louder than ever, digital visibility is up, and sales teams are busier. Yet conversion stays flat.",
      "time": "1 min ago",
      "publishedAt": "2026-07-07T13:38:01",
      "slug": "the-conversion-gap-the-most-valuable-data-in-your-business-is-the-no-nobody-wrote-down"
    },
    "stories": [
      {
        "title": "Men in Yellow: The futile search for Jogo Bonito",
        "category": "Football",
        "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/Brazil-340x227.png",
        "href": "#",
        "sourceUrl": "https://www.myjoyonline.com/men-in-yellow-the-futile-search-for-jogo-bonito/",
        "summary": "Every four years, Brazil arrive to the World Cup carrying two bags: one filled with talent, the other weighed down by expectations. The talent changes. The burden doesn’t. Every new generation inherits the same impossible standard. Fanatics expect samba in football boots. They expect elasticos, no-look passes, outrageous nutmegs and dance celebrations. They expect jogo bonito. [&hellip;]",
        "time": "1 min ago",
        "publishedAt": "2026-07-07T13:20:52",
        "slug": "men-in-yellow-the-futile-search-for-jogo-bonito"
      },
      {
        "title": "Inside Ghana’s aquaculture value Chain: Where are the bottlenecks slowing growth?",
        "category": "Agribusiness",
        "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/image-8-333x250.jpeg",
        "href": "#",
        "sourceUrl": "https://www.myjoyonline.com/inside-ghanas-aquaculture-value-chain-where-are-the-bottlenecks-slowing-growth/",
        "summary": "Ghana’s aquaculture sector continues to be positioned as a key contributor to food security, employment, and economic diversification. Over the years, various policy discussions, private sector interventions, and development partnerships have emphasised the sector’s potential. Yet, behind the growth narrative lies a set of persistent structural challenges that continue to shape production outcomes and limit expansion. At the centre of these challenges is the aquaculture value chain itself, particularly the availability and quality of inputs such as fish seed, feed, and technical services. While production systems have expanded in both smallholder and commercial operations, stakeholders continue to raise concerns about inefficiencies that affect productivity at the farm level.",
        "time": "2 hours ago",
        "publishedAt": "2026-07-07T09:06:36",
        "slug": "inside-ghana-s-aquaculture-value-chain-where-are-the-bottlenecks-slowing-growth"
      },
      {
        "title": "Can innovation partnerships transform Ghana’s aquaculture Sector? Inside the push for a more sustainable blue economy",
        "category": "Agribusiness",
        "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/image-6-340x227.jpeg",
        "href": "#",
        "sourceUrl": "https://www.myjoyonline.com/can-innovation-partnerships-transform-ghanas-aquaculture-sector-inside-the-push-for-a-more-sustainable-blue-economy/",
        "summary": "Ghana’s aquaculture sector is increasingly becoming a focal point for innovation-driven development. As demand for fish continues to rise and pressure on wild fisheries intensifies, partnerships between local institutions, government agencies, research organisations, and international development partners are exploring new ways to improve fish production and strengthen the country’s blue economy. At the heart of these efforts is a shared ambition: to improve productivity, strengthen sustainability, and build a more resilient aquaculture value chain. Yet, as innovation initiatives expand, questions remain about their reach, coordination, and long-term impact on the small and medium-scale fish farmers who produce most of the country’s farmed fish.",
        "time": "2 hours ago",
        "publishedAt": "2026-07-07T08:58:46",
        "slug": "can-innovation-partnerships-transform-ghana-s-aquaculture-sector-inside-the-push-for-a-more-sustainable-blue-economy"
      }
    ]
  }
];

export const mostRecent: Story[] = [
  {
    "title": "Five arrested over alleged unlawful detention and extortion in Tamale",
    "category": "Crime",
    "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/robbers-340x188.png",
    "href": "#",
    "sourceUrl": "https://www.myjoyonline.com/five-arrested-over-alleged-unlawful-detention-and-extortion-in-tamale/",
    "summary": "Police in the Northern Region capital, Tamale, have arrested five men accused of unlawfully detaining a man, seizing his property, and demanding money for its return.",
    "time": "1 min ago",
    "publishedAt": "2026-07-07T22:14:02",
    "slug": "five-arrested-over-alleged-unlawful-detention-and-extortion-in-tamale"
  },
  {
    "title": "Kachiau’s abandoned CHPS compound gets lifeline after years of self-medication by residents",
    "category": "Features",
    "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-07-at-20.51.27-333x250.jpeg",
    "href": "#",
    "sourceUrl": "https://www.myjoyonline.com/kachiaus-abandoned-chps-compound-gets-lifeline-after-years-of-self-medication-by-residents/",
    "summary": "For 65-year-old widow Daari Bayor, the rainy season means fear. When malaria hits, her first stop isn’t a clinic.",
    "time": "1 min ago",
    "publishedAt": "2026-07-07T22:11:53",
    "slug": "kachiau-s-abandoned-chps-compound-gets-lifeline-after-years-of-self-medication-by-residents"
  },
  {
    "title": "US launches strikes on Iran after tankers hit in Strait of Hormuz",
    "category": "International",
    "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/e1bcc750-7a4a-11f1-8540-110da73337d9.jpg-340x191.webp",
    "href": "#",
    "sourceUrl": "https://www.myjoyonline.com/us-launches-strikes-on-iran-after-tankers-hit-in-strait-of-hormuz/",
    "summary": "The US has launched a series of \"powerful\" strikes on Iran in response to attacks on three commercial vessels in the Strait of Hormuz.",
    "time": "1 min ago",
    "publishedAt": "2026-07-07T21:58:49",
    "slug": "us-launches-strikes-on-iran-after-tankers-hit-in-strait-of-hormuz"
  },
  {
    "title": "Zoomlion deploys personnel, equipment to support Mahama’s national clean-up exercise",
    "category": "In Focus",
    "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/1-3-254x250.png",
    "href": "#",
    "sourceUrl": "https://www.myjoyonline.com/zoomlion-deploys-personnel-equipment-to-support-mahamas-national-clean-up-exercise/",
    "summary": "Zoomlion Ghana Limited has announced its full support for President John Dramani Mahama’s National General Clean-Up Exercise aimed at restoring sanitation in flood-affected parts of the country. The exercise, scheduled for Friday, July 10, and Saturday, July 11, 2026, forms part of the government’s efforts to improve environmental cleanliness and protect public health following the [&hellip;]",
    "time": "1 min ago",
    "publishedAt": "2026-07-07T21:42:34",
    "slug": "zoomlion-deploys-personnel-equipment-to-support-mahama-s-national-clean-up-exercise"
  },
  {
    "title": "North Dayi residents condemn authorities over abandoned road projects",
    "category": "News",
    "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/Anfoega-Road-340x191.png",
    "href": "#",
    "sourceUrl": "https://www.myjoyonline.com/north-dayi-residents-condemn-authorities-over-abandoned-road-projects/",
    "summary": "Residents in the North Dayi District of the Volta Region have voiced strong complaints about neglected road projects under the Big Push Infrastructure Programme.",
    "time": "1 min ago",
    "publishedAt": "2026-07-07T21:31:05",
    "slug": "north-dayi-residents-condemn-authorities-over-abandoned-road-projects"
  },
  {
    "title": "NAPRM Governing Council seeks stronger partnership with NDPC on governance, development agenda",
    "category": "National",
    "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/740989216_1314334894204234_2131641254257959935_n-237x250.jpg",
    "href": "#",
    "sourceUrl": "https://www.myjoyonline.com/naprm-governing-council-seeks-stronger-partnership-with-ndpc-on-governance-development-agenda/",
    "summary": "The National African Peer Review Mechanism Governing Council (NAPRM-GC) has called for a formalised partnership with the National Development Planning Commission (NDPC) to enhance collaboration in governance assessment, data management and national development planning.",
    "time": "1 min ago",
    "publishedAt": "2026-07-07T21:08:10",
    "slug": "naprm-governing-council-seeks-stronger-partnership-with-ndpc-on-governance-development-agenda"
  },
  {
    "title": "Police post torched after fatal Sayerano shooting as tensions escalate",
    "category": "National",
    "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-07-at-20.38.43-333x250.jpeg",
    "href": "#",
    "sourceUrl": "https://www.myjoyonline.com/police-post-torched-after-fatal-sayerano-shooting-as-tensions-escalate/",
    "summary": "A police post located at Asempaneye Forest near Sefwi Sayerano in the Juaboso District of the Western North Region has been set ablaze by unidentified persons, further escalating tensions following the fatal police shooting that claimed two lives on Tuesday, July 7.",
    "time": "1 min ago",
    "publishedAt": "2026-07-07T21:07:43",
    "slug": "police-post-torched-after-fatal-sayerano-shooting-as-tensions-escalate"
  },
  {
    "title": "Hanan granted bail as AG moves to block UK medical trip over frozen funds",
    "category": "National",
    "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/haa-e1783457228199-340x218.jpg",
    "href": "#",
    "sourceUrl": "https://www.myjoyonline.com/hanan-granted-bail-as-ag-moves-to-block-uk-medical-trip-over-frozen-funds/",
    "summary": "The Attorney-General has filed an application at the High Court seeking to overturn an earlier order that allowed Hanan Abdul-Wahab Aludiba, the first accused person in the Buffer Stock case, to travel to the United Kingdom for specialist medical treatment, citing fresh developments over an alleged attempt to access frozen funds.",
    "time": "1 min ago",
    "publishedAt": "2026-07-07T20:52:15",
    "slug": "hanan-granted-bail-as-ag-moves-to-block-uk-medical-trip-over-frozen-funds"
  },
  {
    "title": "NPP suspends constituency executive elections in two constituencies",
    "category": "National",
    "image": "https://www.myjoyonline.com/wp-content/uploads/2026/06/Screenshot-2026-06-26-at-5.51.05-AM-340x204.png",
    "href": "#",
    "sourceUrl": "https://www.myjoyonline.com/npp-suspends-constituency-executive-elections-in-two-constituencies/",
    "summary": "The New Patriotic Party (NPP) has suspended its Constituency Executive Committee elections in the Afigya Sekyere East and Asante Akyem Central constituencies in the Ashanti Region following court orders restraining the party from proceeding with the electoral process.",
    "time": "1 min ago",
    "publishedAt": "2026-07-07T20:46:53",
    "slug": "npp-suspends-constituency-executive-elections-in-two-constituencies"
  },
  {
    "title": "Old Tafo MP: Let our World Cup exit mark the beginning of football reform",
    "category": "National",
    "image": "https://www.myjoyonline.com/wp-content/uploads/2026/04/641540474_26292250017035009_5875304167901501054_n-340x227.jpg",
    "href": "#",
    "sourceUrl": "https://www.myjoyonline.com/old-tafo-mp-let-our-world-cup-exit-mark-the-beginning-of-football-reform/",
    "summary": "Old Tafo MP, Vincent Ekow Assafuah, has urged Ghana to transform the disappointment of the Black Stars’ World Cup exit into an opportunity for major reforms within the country’s football system.",
    "time": "1 min ago",
    "publishedAt": "2026-07-07T20:40:43",
    "slug": "old-tafo-mp-let-our-world-cup-exit-mark-the-beginning-of-football-reform"
  },
  {
    "title": "BR Institute partners UPSA to expand entrepreneurship training for the youth",
    "category": "National",
    "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/image-709-298x250.png",
    "href": "#",
    "sourceUrl": "https://www.myjoyonline.com/br-institute-partners-upsa-to-expand-entrepreneurship-training-for-the-youth/",
    "summary": "The BR Institute has signed a strategic Memorandum of Understanding (MoU) with the University of Professional Studies, Accra (UPSA) to expand entrepreneurship training, innovation and industry collaboration for students.",
    "time": "1 min ago",
    "publishedAt": "2026-07-07T20:38:19",
    "slug": "br-institute-partners-upsa-to-expand-entrepreneurship-training-for-the-youth"
  },
  {
    "title": "Flood death toll rises to 35; six still missing, 58,000 displaced in Accra — Interior Minister",
    "category": "National",
    "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/DSCF1954-340x227.jpg",
    "href": "#",
    "sourceUrl": "https://www.myjoyonline.com/flood-death-toll-rises-to-35-six-still-missing-58000-displaced-in-accra-interior-minister/",
    "summary": "The Minister for the Interior, Muntaka Mohammed-Mubarak, has disclosed that the number of people who lost their lives in recent devastating floods that struck parts of the country in June has risen to 35, with six others still unaccounted for, as the government intensifies relief and recovery efforts.",
    "time": "1 min ago",
    "publishedAt": "2026-07-07T20:30:52",
    "slug": "flood-death-toll-rises-to-35-six-still-missing-58-000-displaced-in-accra-interior-minister"
  }
];

export const sectionPages: SectionPage[] = [
  {
    "slug": "news",
    "title": "News",
    "categoryId": 17,
    "description": "Breaking headlines, national updates, public safety, politics, and developing stories across Ghana.",
    "featured": {
      "title": "US launches strikes on Iran after tankers hit in Strait of Hormuz",
      "category": "International",
      "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/e1bcc750-7a4a-11f1-8540-110da73337d9.jpg-340x191.webp",
      "href": "#",
      "sourceUrl": "https://www.myjoyonline.com/us-launches-strikes-on-iran-after-tankers-hit-in-strait-of-hormuz/",
      "summary": "The US has launched a series of \"powerful\" strikes on Iran in response to attacks on three commercial vessels in the Strait of Hormuz.",
      "time": "1 min ago",
      "publishedAt": "2026-07-07T21:58:49",
      "slug": "us-launches-strikes-on-iran-after-tankers-hit-in-strait-of-hormuz"
    },
    "stories": [
      {
        "title": "US launches strikes on Iran after tankers hit in Strait of Hormuz",
        "category": "International",
        "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/e1bcc750-7a4a-11f1-8540-110da73337d9.jpg-340x191.webp",
        "href": "#",
        "sourceUrl": "https://www.myjoyonline.com/us-launches-strikes-on-iran-after-tankers-hit-in-strait-of-hormuz/",
        "summary": "The US has launched a series of \"powerful\" strikes on Iran in response to attacks on three commercial vessels in the Strait of Hormuz.",
        "time": "1 min ago",
        "publishedAt": "2026-07-07T21:58:49",
        "slug": "us-launches-strikes-on-iran-after-tankers-hit-in-strait-of-hormuz"
      },
      {
        "title": "North Dayi residents condemn authorities over abandoned road projects",
        "category": "News",
        "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/Anfoega-Road-340x191.png",
        "href": "#",
        "sourceUrl": "https://www.myjoyonline.com/north-dayi-residents-condemn-authorities-over-abandoned-road-projects/",
        "summary": "Residents in the North Dayi District of the Volta Region have voiced strong complaints about neglected road projects under the Big Push Infrastructure Programme.",
        "time": "1 min ago",
        "publishedAt": "2026-07-07T21:31:05",
        "slug": "north-dayi-residents-condemn-authorities-over-abandoned-road-projects"
      },
      {
        "title": "Police post torched after fatal Sayerano shooting as tensions escalate",
        "category": "National",
        "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-07-at-20.38.43-333x250.jpeg",
        "href": "#",
        "sourceUrl": "https://www.myjoyonline.com/police-post-torched-after-fatal-sayerano-shooting-as-tensions-escalate/",
        "summary": "A police post located at Asempaneye Forest near Sefwi Sayerano in the Juaboso District of the Western North Region has been set ablaze by unidentified persons, further escalating tensions following the fatal police shooting that claimed two lives on Tuesday, July 7.",
        "time": "1 min ago",
        "publishedAt": "2026-07-07T21:07:43",
        "slug": "police-post-torched-after-fatal-sayerano-shooting-as-tensions-escalate"
      },
      {
        "title": "Hanan granted bail as AG moves to block UK medical trip over frozen funds",
        "category": "National",
        "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/haa-e1783457228199-340x218.jpg",
        "href": "#",
        "sourceUrl": "https://www.myjoyonline.com/hanan-granted-bail-as-ag-moves-to-block-uk-medical-trip-over-frozen-funds/",
        "summary": "The Attorney-General has filed an application at the High Court seeking to overturn an earlier order that allowed Hanan Abdul-Wahab Aludiba, the first accused person in the Buffer Stock case, to travel to the United Kingdom for specialist medical treatment, citing fresh developments over an alleged attempt to access frozen funds.",
        "time": "1 min ago",
        "publishedAt": "2026-07-07T20:52:15",
        "slug": "hanan-granted-bail-as-ag-moves-to-block-uk-medical-trip-over-frozen-funds"
      },
      {
        "title": "Flood death toll rises to 35; six still missing, 58,000 displaced in Accra — Interior Minister",
        "category": "National",
        "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/DSCF1954-340x227.jpg",
        "href": "#",
        "sourceUrl": "https://www.myjoyonline.com/flood-death-toll-rises-to-35-six-still-missing-58000-displaced-in-accra-interior-minister/",
        "summary": "The Minister for the Interior, Muntaka Mohammed-Mubarak, has disclosed that the number of people who lost their lives in recent devastating floods that struck parts of the country in June has risen to 35, with six others still unaccounted for, as the government intensifies relief and recovery efforts.",
        "time": "1 min ago",
        "publishedAt": "2026-07-07T20:30:52",
        "slug": "flood-death-toll-rises-to-35-six-still-missing-58-000-displaced-in-accra-interior-minister"
      },
      {
        "title": "GH¢308,000 in alleged theft case not stolen from DVLA — Authority clarifies",
        "category": "National",
        "image": "https://www.myjoyonline.com/wp-content/uploads/2026/05/DVLA1-340x180.webp",
        "href": "#",
        "sourceUrl": "https://www.myjoyonline.com/gh%c2%a2308000-in-alleged-theft-case-not-stolen-from-dvla-authority-clarifies/",
        "summary": "The Driver and Vehicle Licensing Authority (DVLA) has dismissed claims that it lost GH¢308,000 in an alleged theft case involving a former National Service personnel currently working with the Authority on contract.",
        "time": "1 min ago",
        "publishedAt": "2026-07-07T19:36:07",
        "slug": "gh-308-000-in-alleged-theft-case-not-stolen-from-dvla-authority-clarifies"
      },
      {
        "title": "Eight officers interdicted as police investigate deadly Sayerano shooting",
        "category": "Regional",
        "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-07-at-04.43.29-1024x576-2-340x191.jpeg",
        "href": "#",
        "sourceUrl": "https://www.myjoyonline.com/eight-officers-interdicted-as-police-investigate-deadly-sayerano-shooting/",
        "summary": "The Ghana Police Service has interdicted eight officers following a shooting incident at Sayerano in the Juaboso District of the Western North Region that left two people dead and three others injured.",
        "time": "1 min ago",
        "publishedAt": "2026-07-07T18:42:55",
        "slug": "eight-officers-interdicted-as-police-investigate-deadly-sayerano-shooting"
      }
    ]
  },
  {
    "slug": "arts-culture",
    "title": "Arts and Culture",
    "categoryId": 6,
    "description": "Music, film, stage, books, festivals, and the people shaping Ghana's creative scene.",
    "featured": {
      "title": "Muzic Mensah earns four nominations at 2026 Ghana Music Awards USA",
      "category": "Arts and Culture",
      "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/IMG-20260704-WA00111-333x250.jpg",
      "href": "#",
      "sourceUrl": "https://www.myjoyonline.com/muzic-mensah-earns-four-nominations-at-2026-ghana-music-awards-usa/",
      "summary": "The nominations were announced during the official unveiling of nominees in Kumasi, where organisers recognised Ghanaian musicians making an impact both locally and within the diaspora.",
      "time": "3 days ago",
      "publishedAt": "2026-07-04T12:34:39",
      "slug": "muzic-mensah-earns-four-nominations-at-2026-ghana-music-awards-usa"
    },
    "stories": [
      {
        "title": "Muzic Mensah earns four nominations at 2026 Ghana Music Awards USA",
        "category": "Arts and Culture",
        "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/IMG-20260704-WA00111-333x250.jpg",
        "href": "#",
        "sourceUrl": "https://www.myjoyonline.com/muzic-mensah-earns-four-nominations-at-2026-ghana-music-awards-usa/",
        "summary": "The nominations were announced during the official unveiling of nominees in Kumasi, where organisers recognised Ghanaian musicians making an impact both locally and within the diaspora.",
        "time": "3 days ago",
        "publishedAt": "2026-07-04T12:34:39",
        "slug": "muzic-mensah-earns-four-nominations-at-2026-ghana-music-awards-usa"
      },
      {
        "title": "Shimmer by Khuks celebrates individuality and confidence with its new drop Kisses & Wishes",
        "category": "Art &amp; Design",
        "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/IMG_5175.JPG-230x250.jpeg",
        "href": "#",
        "sourceUrl": "https://www.myjoyonline.com/shimmer-by-khuks-celebrates-individuality-and-confidence-with-its-new-drop-kisses-wishes/",
        "summary": "Shimmer by Khuks claims the spotlight with its new launch, Kisses & Wishes, echoing the brand’s vision of self-expression–an ode to growth, gratitude, and all that is yet to come, encased in a sleek package. True to this bold messaging, the release stands as a love letter to the brand’s devoted community, affectionately known as Shimmies, and a nod to the goals that keep them united as they continue to shine together. Beyond creating a sense of belonging and reminding every Shimmer girl she is part of something truly special, Kisses & Wishes adds a personal twist of its own. Inspired by the birthday of its Founder and CEO, Angela Nyamewaa Ama Safowaa, the collection equally draws into themes of new beginnings and heartfelt appreciation. “This release is named in honor of the community that has brought us this far,” Safowaa, better known as Angie Safo, shared. “‘Kisses’ speaks to the affection, warmth, and connection between the brand and its community, while ‘Wishes’ represents the hope and dreams that accompany a new year and all we are becoming.”",
        "time": "4 days ago",
        "publishedAt": "2026-07-03T10:49:00",
        "slug": "shimmer-by-khuks-celebrates-individuality-and-confidence-with-its-new-drop-kisses-and-wishes"
      },
      {
        "title": "Ghana National Council of Metropolitan Chicago launches GhanaFest® 2026 with historic first-ever Ghana flag-raising ceremony",
        "category": "Arts and Culture",
        "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/1-12-e1783017515543-340x239.jpg",
        "href": "#",
        "sourceUrl": "https://www.myjoyonline.com/ghana-national-council-of-metropolitan-chicago-launches-ghanafest-2026-with-historic-first-ever-ghana-flag-raising-ceremony/",
        "summary": "The Ghana National Council of Metropolitan Chicago (GNC) has officially launched the 2026 GhanaFest® season with the city's first-ever ceremonial raising of the Ghanaian flag in downtown Chicago, marking Ghana's Republic Day and setting the stage for the 37th edition of one of the largest Ghanaian cultural festivals in the United States. The landmark flag-raising [&hellip;]",
        "time": "5 days ago",
        "publishedAt": "2026-07-02T18:39:48",
        "slug": "ghana-national-council-of-metropolitan-chicago-launches-ghanafest-2026-with-historic-first-ever-ghana-flag-raising-ceremony"
      },
      {
        "title": "Gonja king calls for stronger collaboration with Asante Kingdom to promote peace and development",
        "category": "Arts and Culture",
        "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-11.52.34-AM-340x239.jpeg",
        "href": "#",
        "sourceUrl": "https://www.myjoyonline.com/gonja-king-calls-for-stronger-collaboration-with-asante-kingdom-to-promote-peace-and-development/",
        "summary": "The King and Overlord of the Gonja Kingdom, Yagbonwura Bii-Kunuto Jewu Soale I, has called for stronger collaboration between the Gonja and Asante kingdoms, saying their centuries-old relationship should be deepened to promote peace, preserve culture and improve the lives of their people.",
        "time": "5 days ago",
        "publishedAt": "2026-07-02T12:46:27",
        "slug": "gonja-king-calls-for-stronger-collaboration-with-asante-kingdom-to-promote-peace-and-development"
      },
      {
        "title": "We want to be remembered for our unity – Daughters of Glorious Jesus",
        "category": "Arts and Culture",
        "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/We-want-to-be-remembered-for-our-unity-Daughters-of-Glorious-Jesus-340x227.jpg",
        "href": "#",
        "sourceUrl": "https://www.myjoyonline.com/we-want-to-be-remembered-for-our-unity-daughters-of-glorious-jesus/",
        "summary": "Ghana's legendary all-female gospel music trio, Daughters of Glorious Jesus, has stated that the most important legacy they wish to be remembered for in Ghana's gospel music industry is unity.",
        "time": "5 days ago",
        "publishedAt": "2026-07-02T12:29:02",
        "slug": "we-want-to-be-remembered-for-our-unity-daughters-of-glorious-jesus"
      },
      {
        "title": "Tera Carissa Hodges extends support to Smile4mation’s Single Mothers Project in Ghana",
        "category": "Arts and Culture",
        "image": "https://www.myjoyonline.com/wp-content/uploads/2026/06/IMG_1620-e1782752285536-273x250.jpeg",
        "href": "#",
        "sourceUrl": "https://www.myjoyonline.com/tera-carissa-hodges-extends-support-to-smile4mations-single-mothers-project-in-ghana/",
        "summary": "Tera Carissa Hodges will lend her support to Smile4mation’s efforts to spread positive change. Over the next six months, Hodges, an internationally acclaimed American media personality, public speaker, and minister, will provide additional financial assistance to selected women under the initiative’s Single Mothers Project. Since its launch in 2025, the outreach has attracted widespread attention online, providing a platform for single mothers to share their personal stories of resilience while offering them practical support. In line with this, Hodges, who for the past six years has championed humanitarian causes in Nigeria through Global Christian Relief, The Waterlight Save Initiative, and Public Health Aid Awareness and Education Organisation, is pleased to support a similar cause in Ghana. As an admirer of the Mitch Brothers, she sees their nomination-based initiative as a way to combat the negative stereotypes surrounding single motherhood with qualities that reflect resilience and respect.",
        "time": "8 days ago",
        "publishedAt": "2026-06-29T15:00:00",
        "slug": "tera-carissa-hodges-extends-support-to-smile4mation-s-single-mothers-project-in-ghana"
      },
      {
        "title": "All set for Joe Mettle's Praise Reloaded 2026 at Accra Sports Stadium",
        "category": "Arts and Culture",
        "image": "https://www.myjoyonline.com/wp-content/uploads/2026/06/FB_IMG_1782644563270-333x250.jpg",
        "href": "#",
        "sourceUrl": "https://www.myjoyonline.com/all-set-for-joe-mettles-praise-reloaded-2026-at-accra-sports-stadium/",
        "summary": "Organised by Joe Mettle Ministries and powered by Reverb Studios and its partners, this year's event is themed The River, inspired by John 7:38, which speaks about rivers of living water flowing from those who believe in Christ.",
        "time": "9 days ago",
        "publishedAt": "2026-06-28T11:06:36",
        "slug": "all-set-for-joe-mettle-s-praise-reloaded-2026-at-accra-sports-stadium"
      }
    ]
  },
  {
    "slug": "business",
    "title": "Business",
    "categoryId": 2,
    "description": "Markets, banking, industry, entrepreneurship, consumer affairs, and economic policy.",
    "featured": {
      "title": "Ghana cedi outlook improves as PwC projects medium term stability",
      "category": "Banking and Finance",
      "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/68fa628265a6efe05544f9d2_Ghana-Cedisc-334x250.jpg",
      "href": "#",
      "sourceUrl": "https://www.myjoyonline.com/ghana-cedi-outlook-improves-as-pwc-projects-medium-term-stability/",
      "summary": "The Ghana cedi is expected to remain relatively stable in the medium term, supported by recent foreign exchange interventions by the Bank of Ghana and improving macroeconomic conditions, according to PricewaterhouseCoopers (PwC) Ghana.",
      "time": "1 min ago",
      "publishedAt": "2026-07-07T17:41:40",
      "slug": "ghana-cedi-outlook-improves-as-pwc-projects-medium-term-stability"
    },
    "stories": [
      {
        "title": "Ghana cedi outlook improves as PwC projects medium term stability",
        "category": "Banking and Finance",
        "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/68fa628265a6efe05544f9d2_Ghana-Cedisc-334x250.jpg",
        "href": "#",
        "sourceUrl": "https://www.myjoyonline.com/ghana-cedi-outlook-improves-as-pwc-projects-medium-term-stability/",
        "summary": "The Ghana cedi is expected to remain relatively stable in the medium term, supported by recent foreign exchange interventions by the Bank of Ghana and improving macroeconomic conditions, according to PricewaterhouseCoopers (PwC) Ghana.",
        "time": "1 min ago",
        "publishedAt": "2026-07-07T17:41:40",
        "slug": "ghana-cedi-outlook-improves-as-pwc-projects-medium-term-stability"
      },
      {
        "title": "Bankers expect Central Bank to hold benchmark rate",
        "category": "Banking and Finance",
        "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/gab-ceo-ethical-333x250.jpg",
        "href": "#",
        "sourceUrl": "https://www.myjoyonline.com/bankers-expect-central-bank-to-hold-benchmark-rate/",
        "summary": "The Ghana Bankers Association expects the Bank of Ghana to maintain its monetary policy rate at the next meeting of the Monetary Policy Committee (MPC), despite improving macroeconomic conditions.",
        "time": "1 min ago",
        "publishedAt": "2026-07-07T17:07:09",
        "slug": "bankers-expect-central-bank-to-hold-benchmark-rate"
      },
      {
        "title": "South Africa risks export decline, job losses if African partners turn away — Prof Peprah",
        "category": "Africa",
        "image": "https://www.myjoyonline.com/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-02-at-13.08.10-340x191.jpeg",
        "href": "#",
        "sourceUrl": "https://www.myjoyonline.com/south-africa-risks-export-decline-job-losses-if-african-partners-turn-away-prof-peprah/",
        "summary": "Professor of Finance at Andrews University, Prof. William Kwasi Peprah, has warned that South Africa could suffer significant economic consequences if tensions with Ghana and other African countries lead to a decline in trade and investment relations.",
        "time": "1 min ago",
        "publishedAt": "2026-07-07T16:53:45",
        "slug": "south-africa-risks-export-decline-job-losses-if-african-partners-turn-away-prof-peprah"
      },
      {
        "title": "CMC secures gulf offtake deals for Ghana's semi-finished cocoa ahead of Mahama's 50% local processing mandate",
        "category": "Agribusiness",
        "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/2.JPG-340x191.jpeg",
        "href": "#",
        "sourceUrl": "https://www.myjoyonline.com/cmc-secures-gulf-offtake-deals-for-ghanas-semi-finished-cocoa-ahead-of-mahamas-50-local-processing-mandate/",
        "summary": "Cocoa Marketing Company (CMC) Ghana Limited locks in demand from the UAE and Saudi Arabia for Ghana's value-added cocoa products.",
        "time": "1 min ago",
        "publishedAt": "2026-07-07T16:19:55",
        "slug": "cmc-secures-gulf-offtake-deals-for-ghana-s-semi-finished-cocoa-ahead-of-mahama-s-50-local-processing-mandate"
      },
      {
        "title": "GRA interdicts four officers over attempted diversion of transit cargo",
        "category": "Business",
        "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/image-704.png",
        "href": "#",
        "sourceUrl": "https://www.myjoyonline.com/gra-interdicts-four-officers-over-attempted-diversion-of-transit-cargo/",
        "summary": "The Ghana Revenue Authority (GRA) has interdicted four officers for their alleged involvement in an attempted diversion of transit cargo into the local market, as part of efforts to strengthen customs enforcement and protect state revenue.",
        "time": "1 min ago",
        "publishedAt": "2026-07-07T16:00:26",
        "slug": "gra-interdicts-four-officers-over-attempted-diversion-of-transit-cargo"
      },
      {
        "title": "Global investors converge on Accra as Ghana pushes 24-hour economy agenda at Ghana Investment & Trade Week",
        "category": "Business",
        "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/6-4-340x191.jpg",
        "href": "#",
        "sourceUrl": "https://www.myjoyonline.com/global-investors-converge-on-accra-as-ghana-pushes-24-hour-economy-agenda-at-ghana-investment-trade-week/",
        "summary": "Ghana has renewed its drive to position itself as West Africa’s premier investment destination as the 7th Ghana Investment and Trade Week (GITW) officially opened in Accra on Tuesday, July 7, 2026, bringing together government officials, traditional authorities, investors and business leaders from more than 30 countries to explore opportunities across infrastructure, energy, manufacturing and [&hellip;]",
        "time": "1 min ago",
        "publishedAt": "2026-07-07T15:18:59",
        "slug": "global-investors-converge-on-accra-as-ghana-pushes-24-hour-economy-agenda-at-ghana-investment-and-trade-week"
      },
      {
        "title": "Ghana's banks face profitability test as falling interest rates force business model shift – PwC",
        "category": "Banking and Finance",
        "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-07-at-14.26.01-333x250.jpeg",
        "href": "#",
        "sourceUrl": "https://www.myjoyonline.com/ghanas-banks-face-profitability-test-as-falling-interest-rates-force-business-model-shift-pwc/",
        "summary": "Ghana's banking sector is entering a significant structural transition as the country's macroeconomic environment continues to stabilize, with inflation easing and interest rates declining.",
        "time": "1 min ago",
        "publishedAt": "2026-07-07T14:54:39",
        "slug": "ghana-s-banks-face-profitability-test-as-falling-interest-rates-force-business-model-shift-pwc"
      }
    ]
  },
  {
    "slug": "sports",
    "title": "Sports",
    "categoryId": 29,
    "description": "Football, athletics, fixtures, analysis, and stories from Ghanaian and global sport.",
    "featured": {
      "title": "Argentina complete extraordinary comeback to beat Egypt",
      "category": "Football",
      "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/reuters_6a4d40f3-1783447795-Messi-340x227.webp",
      "href": "#",
      "sourceUrl": "https://www.myjoyonline.com/argentina-complete-extraordinary-comeback-to-beat-egypt/",
      "summary": "Argentina survived another almighty scare before delivering a scarcely believable second-half comeback to break Egypt hearts and reach the quarter-finals of the 2026 World Cup.",
      "time": "1 min ago",
      "publishedAt": "2026-07-07T20:29:00",
      "slug": "argentina-complete-extraordinary-comeback-to-beat-egypt"
    },
    "stories": [
      {
        "title": "Argentina complete extraordinary comeback to beat Egypt",
        "category": "Football",
        "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/reuters_6a4d40f3-1783447795-Messi-340x227.webp",
        "href": "#",
        "sourceUrl": "https://www.myjoyonline.com/argentina-complete-extraordinary-comeback-to-beat-egypt/",
        "summary": "Argentina survived another almighty scare before delivering a scarcely believable second-half comeback to break Egypt hearts and reach the quarter-finals of the 2026 World Cup.",
        "time": "1 min ago",
        "publishedAt": "2026-07-07T20:29:00",
        "slug": "argentina-complete-extraordinary-comeback-to-beat-egypt"
      },
      {
        "title": "Prince Osei Owusu distances himself from viral claims over Black Stars omission",
        "category": "Football",
        "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-07-at-2.34.52-PM-e1783438397382-340x197.jpeg",
        "href": "#",
        "sourceUrl": "https://www.myjoyonline.com/prince-osei-owusu-distances-himself-from-viral-claims-over-black-stars-omission/",
        "summary": "Ghanaian forward Prince Osei Owusu has distanced himself from comments circulating on social media alleging that he was dropped from the Black Stars after refusing to hand over a percentage of his appearance fee and winning bonus to the Ghana Football Association.",
        "time": "1 min ago",
        "publishedAt": "2026-07-07T14:41:30",
        "slug": "prince-osei-owusu-distances-himself-from-viral-claims-over-black-stars-omission"
      },
      {
        "title": "Build Ghanaian coaches – ADC urges after Black Stars World Cup exit",
        "category": "National",
        "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/Screenshot-2026-07-07-at-4.18.58-AM-340x212.png",
        "href": "#",
        "sourceUrl": "https://www.myjoyonline.com/build-ghanaian-coaches-adc-urges-after-black-stars-world-cup-exit/",
        "summary": "Ghana’s exit from the ongoing FIFA World Cup has reignited debate over the future of the Black Stars, with the Africa Development Council (ADC) urging greater investment in local coaches instead of relying on foreign appointments.",
        "time": "6 hours ago",
        "publishedAt": "2026-07-07T04:59:00",
        "slug": "build-ghanaian-coaches-adc-urges-after-black-stars-world-cup-exit"
      },
      {
        "title": "Kofi Adams rejects claims of external interference in Black Stars player selections",
        "category": "Football",
        "image": "https://www.myjoyonline.com/wp-content/uploads/2026/06/kofi-adams-black-stars-340x230.jpg",
        "href": "#",
        "sourceUrl": "https://www.myjoyonline.com/kofi-adams-rejects-claims-of-external-interference-in-black-stars-player-selections/",
        "summary": "The Minister for Sports and Recreation, Kofi Adams, has firmly dismissed suggestions that government officials and other external entities influence player selection for the Black Stars, insisting that such decisions remain the exclusive responsibility of the national team's head coach.",
        "time": "12 hours ago",
        "publishedAt": "2026-07-06T22:33:30",
        "slug": "kofi-adams-rejects-claims-of-external-interference-in-black-stars-player-selections"
      },
      {
        "title": "'We haven't received any resignation letter from Carlos Queiroz' — Sports Minister reveals",
        "category": "Football",
        "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/HGnSC8CWwAAuGzV-e1783374435791-340x156.jpg",
        "href": "#",
        "sourceUrl": "https://www.myjoyonline.com/we-havent-received-any-resignation-letter-from-carlos-queiroz-sports-minister-reveals/",
        "summary": "The Minister for Sports and Recreation, Kofi Adams, has disclosed that he has not received any formal resignation letter from Black Stars head coach Carlos Queiroz, despite widespread speculation following a farewell message posted by the Portuguese tactician on social media.",
        "time": "13 hours ago",
        "publishedAt": "2026-07-06T21:39:13",
        "slug": "we-haven-t-received-any-resignation-letter-from-carlos-queiroz-sports-minister-reveals"
      },
      {
        "title": "Gov't to revive annual school sports as part of football development strategy — Kofi Adams",
        "category": "Football",
        "image": "https://www.myjoyonline.com/wp-content/uploads/2026/04/Kofi-Adams-1-340x227.jpeg",
        "href": "#",
        "sourceUrl": "https://www.myjoyonline.com/govt-to-revive-annual-school-sports-as-part-of-football-development-strategy-kofi-adams/",
        "summary": "The government has announced plans to make school sports competitions an annual event as part of efforts to develop football and create a sustainable pipeline of talent for Ghana’s national teams.",
        "time": "14 hours ago",
        "publishedAt": "2026-07-06T21:10:43",
        "slug": "gov-t-to-revive-annual-school-sports-as-part-of-football-development-strategy-kofi-adams"
      },
      {
        "title": "Infantino defends FIFA Disciplinary Committee’s independence after Trump call over Balogun red card Ban",
        "category": "Football",
        "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/1-3-333x250.webp",
        "href": "#",
        "sourceUrl": "https://www.myjoyonline.com/infantino-defends-fifa-disciplinary-committees-independence-after-trump-call-over-balogun-red-card-ban/",
        "summary": "FIFA President Gianni Infantino has defended the independence of the world football governing body’s judicial structures following public debate over the suspension of United States forward Folarin Balogun. The controversy followed questions surrounding the decision of the independent FIFA Disciplinary Committee to uphold disciplinary action against Balogun after his red card, with reports indicating that [&hellip;]",
        "time": "18 hours ago",
        "publishedAt": "2026-07-06T16:40:23",
        "slug": "infantino-defends-fifa-disciplinary-committee-s-independence-after-trump-call-over-balogun-red-card-ban"
      }
    ]
  },
  {
    "slug": "opinion",
    "title": "Opinion",
    "categoryId": 20,
    "description": "Columns, analysis, civic debate, and sharp perspectives from trusted voices.",
    "featured": {
      "title": "The Conversion Gap: The most valuable data in your business is the 'No' nobody wrote down",
      "category": "Opinion",
      "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/image-692-340x227.png",
      "href": "#",
      "sourceUrl": "https://www.myjoyonline.com/the-conversion-gap-the-most-valuable-data-in-your-business-is-the-no-nobody-wrote-down/",
      "summary": "That is the conversion gap, and it is rarely a product or pricing problem. Marketing is louder than ever, digital visibility is up, and sales teams are busier. Yet conversion stays flat.",
      "time": "1 min ago",
      "publishedAt": "2026-07-07T13:38:01",
      "slug": "the-conversion-gap-the-most-valuable-data-in-your-business-is-the-no-nobody-wrote-down"
    },
    "stories": [
      {
        "title": "The Conversion Gap: The most valuable data in your business is the 'No' nobody wrote down",
        "category": "Opinion",
        "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/image-692-340x227.png",
        "href": "#",
        "sourceUrl": "https://www.myjoyonline.com/the-conversion-gap-the-most-valuable-data-in-your-business-is-the-no-nobody-wrote-down/",
        "summary": "That is the conversion gap, and it is rarely a product or pricing problem. Marketing is louder than ever, digital visibility is up, and sales teams are busier. Yet conversion stays flat.",
        "time": "1 min ago",
        "publishedAt": "2026-07-07T13:38:01",
        "slug": "the-conversion-gap-the-most-valuable-data-in-your-business-is-the-no-nobody-wrote-down"
      },
      {
        "title": "Men in Yellow: The futile search for Jogo Bonito",
        "category": "Football",
        "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/Brazil-340x227.png",
        "href": "#",
        "sourceUrl": "https://www.myjoyonline.com/men-in-yellow-the-futile-search-for-jogo-bonito/",
        "summary": "Every four years, Brazil arrive to the World Cup carrying two bags: one filled with talent, the other weighed down by expectations. The talent changes. The burden doesn’t. Every new generation inherits the same impossible standard. Fanatics expect samba in football boots. They expect elasticos, no-look passes, outrageous nutmegs and dance celebrations. They expect jogo bonito. [&hellip;]",
        "time": "1 min ago",
        "publishedAt": "2026-07-07T13:20:52",
        "slug": "men-in-yellow-the-futile-search-for-jogo-bonito"
      },
      {
        "title": "Inside Ghana’s aquaculture value Chain: Where are the bottlenecks slowing growth?",
        "category": "Agribusiness",
        "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/image-8-333x250.jpeg",
        "href": "#",
        "sourceUrl": "https://www.myjoyonline.com/inside-ghanas-aquaculture-value-chain-where-are-the-bottlenecks-slowing-growth/",
        "summary": "Ghana’s aquaculture sector continues to be positioned as a key contributor to food security, employment, and economic diversification. Over the years, various policy discussions, private sector interventions, and development partnerships have emphasised the sector’s potential. Yet, behind the growth narrative lies a set of persistent structural challenges that continue to shape production outcomes and limit expansion. At the centre of these challenges is the aquaculture value chain itself, particularly the availability and quality of inputs such as fish seed, feed, and technical services. While production systems have expanded in both smallholder and commercial operations, stakeholders continue to raise concerns about inefficiencies that affect productivity at the farm level.",
        "time": "2 hours ago",
        "publishedAt": "2026-07-07T09:06:36",
        "slug": "inside-ghana-s-aquaculture-value-chain-where-are-the-bottlenecks-slowing-growth"
      },
      {
        "title": "Can innovation partnerships transform Ghana’s aquaculture Sector? Inside the push for a more sustainable blue economy",
        "category": "Agribusiness",
        "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/image-6-340x227.jpeg",
        "href": "#",
        "sourceUrl": "https://www.myjoyonline.com/can-innovation-partnerships-transform-ghanas-aquaculture-sector-inside-the-push-for-a-more-sustainable-blue-economy/",
        "summary": "Ghana’s aquaculture sector is increasingly becoming a focal point for innovation-driven development. As demand for fish continues to rise and pressure on wild fisheries intensifies, partnerships between local institutions, government agencies, research organisations, and international development partners are exploring new ways to improve fish production and strengthen the country’s blue economy. At the heart of these efforts is a shared ambition: to improve productivity, strengthen sustainability, and build a more resilient aquaculture value chain. Yet, as innovation initiatives expand, questions remain about their reach, coordination, and long-term impact on the small and medium-scale fish farmers who produce most of the country’s farmed fish.",
        "time": "2 hours ago",
        "publishedAt": "2026-07-07T08:58:46",
        "slug": "can-innovation-partnerships-transform-ghana-s-aquaculture-sector-inside-the-push-for-a-more-sustainable-blue-economy"
      },
      {
        "title": "Living with water: Lessons from Netherlands",
        "category": "Opinion",
        "image": "https://www.myjoyonline.com/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-07-at-14.47.42_dde4eed1-e1757263024165-268x250.jpg",
        "href": "#",
        "sourceUrl": "https://www.myjoyonline.com/living-with-water-lessons-from-netherlands/",
        "summary": "Few countries in the world have had to confront water as relentlessly as the Netherlands. Yet, despite living under conditions that would seem almost impossible, it has become one of the safest and most prosperous countries in the world. There is an important lesson there for Ghana. The Netherlands is a remarkably low-lying country. Nearly one-third of its land lies below sea level, while more than half of the country is vulnerable to flooding from the sea, rivers or heavy rainfall. In many places, water sits above the level of the surrounding land. By comparison, Ghana's geography is considerably more favourable. Although we face coastal erosion, seasonal flooding, overflowing rivers and intense rainfall, the vast majority of our country lies well above sea level.",
        "time": "3 hours ago",
        "publishedAt": "2026-07-07T08:05:51",
        "slug": "living-with-water-lessons-from-netherlands"
      },
      {
        "title": "The Accra Floods: Whiles we build a new city, let's fix the one we have",
        "category": "Opinion",
        "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/Screenshot-2026-07-07-at-6.42.17-am-327x250.png",
        "href": "#",
        "sourceUrl": "https://www.myjoyonline.com/the-accra-floods-whiles-we-build-a-new-city-lets-fix-the-one-we-have/",
        "summary": "When torrential rains submerged large parts of Accra on June 29, the floods exposed something deeper than blocked drains.",
        "time": "4 hours ago",
        "publishedAt": "2026-07-07T06:43:13",
        "slug": "the-accra-floods-whiles-we-build-a-new-city-let-s-fix-the-one-we-have"
      },
      {
        "title": "When the flood receives your home address",
        "category": "Features",
        "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/accra-floods-multimedia-group-an-340x191.jpg",
        "href": "#",
        "sourceUrl": "https://www.myjoyonline.com/when-the-flood-receives-your-home-address/",
        "summary": "Which home exactly should they stay in? The house where water is rising towards the windows? The room whose occupants have already moved onto tables? The compound where the television is floating past the refrigerator? Or the wooden structure that has quietly abandoned its former duties as a house and begun training for Noah's Ark? These are not merely philosophical questions. For thousands of urban residents, the flood does not happen somewhere outside the home. The flood comes inside, settles down and behaves as if it has paid advance rent.",
        "time": "7 hours ago",
        "publishedAt": "2026-07-07T03:14:53",
        "slug": "when-the-flood-receives-your-home-address"
      }
    ]
  },
  {
    "slug": "research",
    "title": "Research",
    "categoryId": 277887,
    "description": "Data-led reporting, explainers, studies, and public-interest investigations.",
    "featured": {
      "title": "COCOBOD misses June deadline to clear GH¢6bn cocoa arrears, leaves GH¢3.4bn unpaid",
      "category": "Agribusiness",
      "image": "https://www.myjoyonline.com/wp-content/uploads/2026/02/cocoa.jpeg",
      "href": "#",
      "sourceUrl": "https://www.myjoyonline.com/cocobod-misses-june-deadline-to-clear-gh%c2%a26bn-cocoa-arrears-leaves-gh%c2%a23-4bn-unpaid/",
      "summary": "The Ghana Cocoa Board (COCOBOD) has failed to meet its self-imposed end-of-June deadline to clear more than GH¢6 billion owed to cocoa farmers and Licensed Buying Companies (LBCs), leaving an estimated GH¢3.4 billion still outstanding.",
      "time": "1 min ago",
      "publishedAt": "2026-07-07T18:49:40",
      "slug": "cocobod-misses-june-deadline-to-clear-gh-6bn-cocoa-arrears-leaves-gh-3-4bn-unpaid"
    },
    "stories": [
      {
        "title": "COCOBOD misses June deadline to clear GH¢6bn cocoa arrears, leaves GH¢3.4bn unpaid",
        "category": "Agribusiness",
        "image": "https://www.myjoyonline.com/wp-content/uploads/2026/02/cocoa.jpeg",
        "href": "#",
        "sourceUrl": "https://www.myjoyonline.com/cocobod-misses-june-deadline-to-clear-gh%c2%a26bn-cocoa-arrears-leaves-gh%c2%a23-4bn-unpaid/",
        "summary": "The Ghana Cocoa Board (COCOBOD) has failed to meet its self-imposed end-of-June deadline to clear more than GH¢6 billion owed to cocoa farmers and Licensed Buying Companies (LBCs), leaving an estimated GH¢3.4 billion still outstanding.",
        "time": "1 min ago",
        "publishedAt": "2026-07-07T18:49:40",
        "slug": "cocobod-misses-june-deadline-to-clear-gh-6bn-cocoa-arrears-leaves-gh-3-4bn-unpaid"
      },
      {
        "title": "Over 3 million pupils in 13 regions learn under trees and temporary shelters ? A-G's report",
        "category": "Analysis",
        "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/images-1-1-340x227.jpg",
        "href": "#",
        "sourceUrl": "https://www.myjoyonline.com/over-3-million-pupils-in-13-regions-learn-under-trees-and-temporary-shelters-a-gs-report/",
        "summary": "For years, improving access to quality basic education has remained a major priority for successive governments in Ghana. Beyond increasing enrolment, one of the biggest challenges has been ensuring that pupils have access to safe, permanent, and conducive learning environments.",
        "time": "1 min ago",
        "publishedAt": "2026-07-07T18:40:32",
        "slug": "over-3-million-pupils-in-13-regions-learn-under-trees-and-temporary-shelters-a-g-s-report"
      },
      {
        "title": "ECG and 9 state institutions failed to pay over ¢3bn in taxes in 2024, driving record ¢5.2bn irregularities – Auditor-General",
        "category": "Analysis",
        "image": "https://www.myjoyonline.com/wp-content/uploads/2021/01/Auditor-Service-340x234.jpg",
        "href": "#",
        "sourceUrl": "https://www.myjoyonline.com/ecg-and-9-state-institutions-failed-to-pay-over-%c2%a23bn-in-taxes-in-2024-driving-record-%c2%a25-2bn-irregularities-auditor-general/",
        "summary": "More than half of the record GH¢5.2 billion in financial irregularities recorded across Ghana's ministries, departments and agencies in 2025 stemmed not from procurement breaches or payroll anomalies, but from unpaid taxes owed by just ten state institutions. According to the Auditor-General's latest report on the public accounts of government ministries, departments and agencies, total [&hellip;]",
        "time": "1 min ago",
        "publishedAt": "2026-07-07T11:44:09",
        "slug": "ecg-and-9-state-institutions-failed-to-pay-over-3bn-in-taxes-in-2024-driving-record-5-2bn-irregularities-auditor-general"
      },
      {
        "title": "MDA financial irregularities surge 156% to GH¢5.27bn in 2025 — Auditor-General",
        "category": "Analysis",
        "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/image-671-340x123.png",
        "href": "#",
        "sourceUrl": "https://www.myjoyonline.com/mda-financial-irregularities-surge-156-to-gh%c2%a25-27bn-in-2025-auditor-general/",
        "summary": "According to the Report of the Auditor-General on the Public Accounts of Ghana—Ministries, Departments, and Other Agencies for the year ended December 31, 2025, the value of irregularities rose from GH¢2.06 billion in 2024 to GH¢5.27 billion in 2025, representing a 256.3% increase.",
        "time": "37 min ago",
        "publishedAt": "2026-07-07T10:06:52",
        "slug": "mda-financial-irregularities-surge-156-to-gh-5-27bn-in-2025-auditor-general"
      },
      {
        "title": "World Bank says Finance Ministry fiscal controls delayed GARID project",
        "category": "Analysis",
        "image": "https://www.myjoyonline.com/wp-content/uploads/2024/03/World-Bank-337x250.webp",
        "href": "#",
        "sourceUrl": "https://www.myjoyonline.com/world-bank-says-finance-ministry-fiscal-controls-delayed-garid-project/",
        "summary": "The World Bank has blamed fiscal controls introduced by the Ministry of Finance for significantly delaying implementation of the Greater Accra Resilient and Integrated Development (GARID) Project, one of the country's flagship programmes aimed at tackling chronic flooding in the capital. In its latest implementation update released in May 2026, the Bank downgraded the project's [&hellip;]",
        "time": "6 days ago",
        "publishedAt": "2026-07-01T05:45:24",
        "slug": "world-bank-says-finance-ministry-fiscal-controls-delayed-garid-project"
      },
      {
        "title": "Nearly $1bn invested in Ghana's flood control over two decades, yet Accra still floods",
        "category": "Analysis",
        "image": "https://www.myjoyonline.com/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-25-at-10.45.10-6-340x227.jpeg",
        "href": "#",
        "sourceUrl": "https://www.myjoyonline.com/nearly-1bn-invested-in-ghanas-flood-control-over-two-decades-yet-accra-still-floods/",
        "summary": "A JoyNews Research review of official records from the World Bank, African Development Bank (AfDB), and African Water Facility shows Ghana has secured approximately $990 million in major multilateral financing between 2000 and 2024 for flood resilience, sanitation, and water infrastructure. Of that amount, about $723 million was specifically targeted at Greater Accra and the Greater Accra Metropolitan Area (GAMA).",
        "time": "7 days ago",
        "publishedAt": "2026-06-30T12:28:24",
        "slug": "nearly-1bn-invested-in-ghana-s-flood-control-over-two-decades-yet-accra-still-floods"
      },
      {
        "title": "Why fuel prices haven’t fallen yet despite falling global oil prices",
        "category": "Analysis",
        "image": "https://www.myjoyonline.com/wp-content/uploads/2025/10/image-2902-340x227.png",
        "href": "#",
        "sourceUrl": "https://www.myjoyonline.com/why-fuel-prices-havent-fallen-yet-despite-falling-global-oil-prices-2/",
        "summary": "Fuel prices in Ghana are once again caught between global oil swings and the structure of domestic pricing. Crude markets have eased, but pump prices have not yet caught up. Earlier in the year, before tensions between Iran, Israel and the United States escalated, Ghanaian consumers were briefly seeing relief. Petrol was selling at about [&hellip;]",
        "time": "11 days ago",
        "publishedAt": "2026-06-26T09:06:05",
        "slug": "why-fuel-prices-haven-t-fallen-yet-despite-falling-global-oil-prices"
      }
    ]
  },
  {
    "slug": "live",
    "title": "Live TV/Radio",
    "description": "Listen live, follow Joy programming, and catch up on shows from the Joy brands.",
    "featured": {
      "title": "Joy News live audio from Accra",
      "category": "Live TV/Radio",
      "image": "https://www.myjoyonline.com/wp-content/uploads/2024/09/listenlive.jpg",
      "href": "#",
      "sourceUrl": "https://www.myjoyonline.com/live-radio/",
      "summary": "Tune in to live Joy News audio from Accra.",
      "time": "Live",
      "publishedAt": "2026-07-07T00:00:00",
      "slug": "joy-news-live-audio-from-accra"
    },
    "stories": [
      {
        "title": "Joy News live audio from Accra",
        "category": "Live TV/Radio",
        "image": "https://www.myjoyonline.com/wp-content/uploads/2024/09/listenlive.jpg",
        "href": "#",
        "sourceUrl": "https://www.myjoyonline.com/live-radio/",
        "summary": "Tune in to live Joy News audio from Accra.",
        "time": "Live",
        "publishedAt": "2026-07-07T00:00:00",
        "slug": "joy-news-live-audio-from-accra"
      },
      {
        "title": "Joy News live video stream",
        "category": "Live TV/Radio",
        "image": "https://www.myjoyonline.com/wp-content/uploads/2024/09/Continue-watching-banner_Joy-News.jpg",
        "href": "#",
        "sourceUrl": "https://www.myjoyonline.com/live-tv/",
        "summary": "Watch Joy News live video programming.",
        "time": "Live",
        "publishedAt": "2026-07-07T00:00:00",
        "slug": "joy-news-live-video-stream"
      },
      {
        "title": "Joy Prime live video stream",
        "category": "Live TV/Radio",
        "image": "https://www.myjoyonline.com/wp-content/uploads/2024/09/Continue-watching-banner_Joy-Prime.jpg",
        "href": "#",
        "sourceUrl": "https://www.myjoyonline.com/live-tv/",
        "summary": "Watch Joy Prime live programming.",
        "time": "Live",
        "publishedAt": "2026-07-07T00:00:00",
        "slug": "joy-prime-live-video-stream"
      },
      {
        "title": "Adom TV live stream",
        "category": "Live TV/Radio",
        "image": "https://www.myjoyonline.com/wp-content/uploads/2024/12/Continue-watching-banner_Adom-TV-e1733136124955.jpg",
        "href": "#",
        "sourceUrl": "https://www.myjoyonline.com/live-tv/",
        "summary": "Follow live Adom TV programming.",
        "time": "Live",
        "publishedAt": "2026-07-07T00:00:00",
        "slug": "adom-tv-live-stream"
      }
    ]
  },
  {
    "slug": "media",
    "title": "Media",
    "description": "Video reports, podcasts, explainers, live shows, and multimedia updates.",
    "featured": {
      "title": "US launches strikes on Iran after tankers hit in Strait of Hormuz",
      "category": "International",
      "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/e1bcc750-7a4a-11f1-8540-110da73337d9.jpg-340x191.webp",
      "href": "#",
      "sourceUrl": "https://www.myjoyonline.com/us-launches-strikes-on-iran-after-tankers-hit-in-strait-of-hormuz/",
      "summary": "The US has launched a series of \"powerful\" strikes on Iran in response to attacks on three commercial vessels in the Strait of Hormuz.",
      "time": "1 min ago",
      "publishedAt": "2026-07-07T21:58:49",
      "slug": "us-launches-strikes-on-iran-after-tankers-hit-in-strait-of-hormuz"
    },
    "stories": [
      {
        "title": "US launches strikes on Iran after tankers hit in Strait of Hormuz",
        "category": "International",
        "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/e1bcc750-7a4a-11f1-8540-110da73337d9.jpg-340x191.webp",
        "href": "#",
        "sourceUrl": "https://www.myjoyonline.com/us-launches-strikes-on-iran-after-tankers-hit-in-strait-of-hormuz/",
        "summary": "The US has launched a series of \"powerful\" strikes on Iran in response to attacks on three commercial vessels in the Strait of Hormuz.",
        "time": "1 min ago",
        "publishedAt": "2026-07-07T21:58:49",
        "slug": "us-launches-strikes-on-iran-after-tankers-hit-in-strait-of-hormuz"
      },
      {
        "title": "Zoomlion deploys personnel, equipment to support Mahama’s national clean-up exercise",
        "category": "In Focus",
        "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/1-3-254x250.png",
        "href": "#",
        "sourceUrl": "https://www.myjoyonline.com/zoomlion-deploys-personnel-equipment-to-support-mahamas-national-clean-up-exercise/",
        "summary": "Zoomlion Ghana Limited has announced its full support for President John Dramani Mahama’s National General Clean-Up Exercise aimed at restoring sanitation in flood-affected parts of the country. The exercise, scheduled for Friday, July 10, and Saturday, July 11, 2026, forms part of the government’s efforts to improve environmental cleanliness and protect public health following the [&hellip;]",
        "time": "1 min ago",
        "publishedAt": "2026-07-07T21:42:34",
        "slug": "zoomlion-deploys-personnel-equipment-to-support-mahama-s-national-clean-up-exercise"
      },
      {
        "title": "North Dayi residents condemn authorities over abandoned road projects",
        "category": "News",
        "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/Anfoega-Road-340x191.png",
        "href": "#",
        "sourceUrl": "https://www.myjoyonline.com/north-dayi-residents-condemn-authorities-over-abandoned-road-projects/",
        "summary": "Residents in the North Dayi District of the Volta Region have voiced strong complaints about neglected road projects under the Big Push Infrastructure Programme.",
        "time": "1 min ago",
        "publishedAt": "2026-07-07T21:31:05",
        "slug": "north-dayi-residents-condemn-authorities-over-abandoned-road-projects"
      },
      {
        "title": "NAPRM Governing Council seeks stronger partnership with NDPC on governance, development agenda",
        "category": "National",
        "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/740989216_1314334894204234_2131641254257959935_n-237x250.jpg",
        "href": "#",
        "sourceUrl": "https://www.myjoyonline.com/naprm-governing-council-seeks-stronger-partnership-with-ndpc-on-governance-development-agenda/",
        "summary": "The National African Peer Review Mechanism Governing Council (NAPRM-GC) has called for a formalised partnership with the National Development Planning Commission (NDPC) to enhance collaboration in governance assessment, data management and national development planning.",
        "time": "1 min ago",
        "publishedAt": "2026-07-07T21:08:10",
        "slug": "naprm-governing-council-seeks-stronger-partnership-with-ndpc-on-governance-development-agenda"
      },
      {
        "title": "Police post torched after fatal Sayerano shooting as tensions escalate",
        "category": "National",
        "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-07-at-20.38.43-333x250.jpeg",
        "href": "#",
        "sourceUrl": "https://www.myjoyonline.com/police-post-torched-after-fatal-sayerano-shooting-as-tensions-escalate/",
        "summary": "A police post located at Asempaneye Forest near Sefwi Sayerano in the Juaboso District of the Western North Region has been set ablaze by unidentified persons, further escalating tensions following the fatal police shooting that claimed two lives on Tuesday, July 7.",
        "time": "1 min ago",
        "publishedAt": "2026-07-07T21:07:43",
        "slug": "police-post-torched-after-fatal-sayerano-shooting-as-tensions-escalate"
      },
      {
        "title": "Hanan granted bail as AG moves to block UK medical trip over frozen funds",
        "category": "National",
        "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/haa-e1783457228199-340x218.jpg",
        "href": "#",
        "sourceUrl": "https://www.myjoyonline.com/hanan-granted-bail-as-ag-moves-to-block-uk-medical-trip-over-frozen-funds/",
        "summary": "The Attorney-General has filed an application at the High Court seeking to overturn an earlier order that allowed Hanan Abdul-Wahab Aludiba, the first accused person in the Buffer Stock case, to travel to the United Kingdom for specialist medical treatment, citing fresh developments over an alleged attempt to access frozen funds.",
        "time": "1 min ago",
        "publishedAt": "2026-07-07T20:52:15",
        "slug": "hanan-granted-bail-as-ag-moves-to-block-uk-medical-trip-over-frozen-funds"
      }
    ]
  },
  {
    "slug": "election",
    "title": "Elections",
    "description": "Election news, campaign coverage, civic education, polling analysis, and result updates.",
    "featured": {
      "title": "Election coverage and results hub",
      "category": "Elections",
      "image": "https://www.myjoyonline.com/wp-content/uploads/2024/11/bawumia-new-small.png",
      "href": "#",
      "sourceUrl": "https://www.myjoyonline.com/election/",
      "summary": "Follow election news, candidate profiles, results, and civic education from MyJoyOnline.",
      "time": "Live",
      "publishedAt": "2026-07-07T00:00:00",
      "slug": "election-coverage-and-results-hub"
    },
    "stories": [
      {
        "title": "Election coverage and results hub",
        "category": "Elections",
        "image": "https://www.myjoyonline.com/wp-content/uploads/2024/11/bawumia-new-small.png",
        "href": "#",
        "sourceUrl": "https://www.myjoyonline.com/election/",
        "summary": "Follow election news, candidate profiles, results, and civic education from MyJoyOnline.",
        "time": "Live",
        "publishedAt": "2026-07-07T00:00:00",
        "slug": "election-coverage-and-results-hub"
      },
      {
        "title": "US launches strikes on Iran after tankers hit in Strait of Hormuz",
        "category": "International",
        "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/e1bcc750-7a4a-11f1-8540-110da73337d9.jpg-340x191.webp",
        "href": "#",
        "sourceUrl": "https://www.myjoyonline.com/us-launches-strikes-on-iran-after-tankers-hit-in-strait-of-hormuz/",
        "summary": "The US has launched a series of \"powerful\" strikes on Iran in response to attacks on three commercial vessels in the Strait of Hormuz.",
        "time": "1 min ago",
        "publishedAt": "2026-07-07T21:58:49",
        "slug": "us-launches-strikes-on-iran-after-tankers-hit-in-strait-of-hormuz"
      },
      {
        "title": "North Dayi residents condemn authorities over abandoned road projects",
        "category": "News",
        "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/Anfoega-Road-340x191.png",
        "href": "#",
        "sourceUrl": "https://www.myjoyonline.com/north-dayi-residents-condemn-authorities-over-abandoned-road-projects/",
        "summary": "Residents in the North Dayi District of the Volta Region have voiced strong complaints about neglected road projects under the Big Push Infrastructure Programme.",
        "time": "1 min ago",
        "publishedAt": "2026-07-07T21:31:05",
        "slug": "north-dayi-residents-condemn-authorities-over-abandoned-road-projects"
      },
      {
        "title": "Police post torched after fatal Sayerano shooting as tensions escalate",
        "category": "National",
        "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-07-at-20.38.43-333x250.jpeg",
        "href": "#",
        "sourceUrl": "https://www.myjoyonline.com/police-post-torched-after-fatal-sayerano-shooting-as-tensions-escalate/",
        "summary": "A police post located at Asempaneye Forest near Sefwi Sayerano in the Juaboso District of the Western North Region has been set ablaze by unidentified persons, further escalating tensions following the fatal police shooting that claimed two lives on Tuesday, July 7.",
        "time": "1 min ago",
        "publishedAt": "2026-07-07T21:07:43",
        "slug": "police-post-torched-after-fatal-sayerano-shooting-as-tensions-escalate"
      },
      {
        "title": "Hanan granted bail as AG moves to block UK medical trip over frozen funds",
        "category": "National",
        "image": "https://www.myjoyonline.com/wp-content/uploads/2026/07/haa-e1783457228199-340x218.jpg",
        "href": "#",
        "sourceUrl": "https://www.myjoyonline.com/hanan-granted-bail-as-ag-moves-to-block-uk-medical-trip-over-frozen-funds/",
        "summary": "The Attorney-General has filed an application at the High Court seeking to overturn an earlier order that allowed Hanan Abdul-Wahab Aludiba, the first accused person in the Buffer Stock case, to travel to the United Kingdom for specialist medical treatment, citing fresh developments over an alleged attempt to access frozen funds.",
        "time": "1 min ago",
        "publishedAt": "2026-07-07T20:52:15",
        "slug": "hanan-granted-bail-as-ag-moves-to-block-uk-medical-trip-over-frozen-funds"
      }
    ]
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

export function getStoryHref(story: Pick<Story, "href" | "title" | "slug">) {
  if (story.href && story.href !== "#" && !story.href.startsWith("http")) {
    return story.href;
  }

  return `/story/${story.slug ?? slugifyStoryTitle(story.title)}`;
}

export function getAllStories() {
  const stories = [
    topStory,
    inFocus,
    ...newsStories,
    ...shorts,
    ...videos,
    ...mostRecent,
    ...categoryBlocks.flatMap((block) => [block.lead, ...block.stories]),
    ...sectionPages.flatMap((page) => [page.featured, ...page.stories])
  ];
  const uniqueStories = new Map<string, Story>();

  stories.forEach((story) => {
    const slug = story.slug ?? slugifyStoryTitle(story.title);

    if (!uniqueStories.has(slug)) {
      uniqueStories.set(slug, story);
    }
  });

  return Array.from(uniqueStories.values());
}

export function getStoryBySlug(slug: string) {
  return getAllStories().find((story) => (story.slug ?? slugifyStoryTitle(story.title)) === slug);
}
