import teams from "../assets/images/teams.svg"

export const NAVBAR_ITEMS = [
  { label: 'Find Jobs', path: '/find-jobs' },
  { label: 'Top Companies', path: '/companies' },
  { label: 'Job Tracker', path: '/tracker' },
  { label: 'My Calendar', path: '/calendar' },
  { label: 'Documents', path: '/documents' },
  { label: 'Messages', path: '/messages' },
  { label: 'Notifications', path: '/notifications' },
];

export const STATS_ITEMS = [
  { label: "Profile Visitors", value: 140 },
  { label: "Resume Viewers", value: 20 },
  { label: "My Jobs", value: 88 },
]

export const FEATURED_JOBS = [
  {
    promoted: true,
    title: "UI/UX Designer",
    company: "Teams",
    location: "Seattle, USA (Remote)",
    date: "1 day ago",
    applicants: 22,
    logo: teams,
  },
  {
    promoted: true,
    title: "UI/UX Designer",
    company: "Teams",
    location: "Seattle, USA (Remote)",
    date: "1 day ago",
    applicants: 22,
    logo: teams,
  },
  {
    promoted: true,
    title: "UI/UX Designer",
    company: "Teams",
    location: "Seattle, USA (Remote)",
    date: "1 day ago",
    applicants: 22,
    logo: teams,
  },
  {
    promoted: true,
    title: "UI/UX Designer",
    company: "Teams",
    location: "Seattle, USA (Remote)",
    date: "1 day ago",
    applicants: 22,
    logo: teams,
  },
  {
    promoted: true,
    title: "UI/UX Designer",
    company: "Teams",
    location: "Seattle, USA (Remote)",
    date: "1 day ago",
    applicants: 22,
    logo: teams,
  },
 
];

export const RECOMMENDED_JOBS = new Array(10).fill({
  promoted: false,
  title: "UI/UX Designer",
  company: "Teams",
  location: "Seattle, USA (Remote)",
  date: "1 day ago",
  applicants: 22,
  logo: teams,
},)


export const LATEST_JOBS = new Array(10).fill({
  promoted: false,
  title: "UI/UX Designer",
  company: "Teams",
  location: "Seattle, USA (Remote)",
  date: "1 day ago",
  applicants: 22,
  logo: teams,
},)
