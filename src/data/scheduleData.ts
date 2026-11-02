export interface ScheduleLocationItem {
  label: string;
  room: string;
  notes?: string;
}

export interface WeekScheduleDetails {
  week: number;
  weekLabel: string;
  dates: string;
  accentColor: string;
  badgeBg: string;
  checkIn: string;
  teamRoom: string;
  lunch: {
    location: string;
    description: string;
    isMandatory?: boolean;
    tag?: string;
  };
  workshop: {
    title: string;
    room: string;
    mandatory: boolean;
    details: string;
  };
  competitions: {
    name: string;
    room: string;
    id: string;
  }[];
}

export const ROOMS_FOR_EVERYONE = {
  checkIn: [
    { week: 'Week 1', location: 'DB 0008', building: 'Dahdaleh Building' },
    { week: 'Week 2', location: 'Right in front of BRG Eatery', building: 'Bergeron Centre' }
  ],
  teamRooms: [
    { week: 'Week 1', location: 'DB 0012', building: 'Dahdaleh Building' },
    { week: 'Week 2', location: 'No room for Day 1 · Day 2 will be BRG 212', building: 'Bergeron Centre' }
  ]
};

export const LUNCH_BREAKDOWNS = [
  {
    week: 'WEEK 1',
    dates: 'November 7-8',
    location: 'DB 0006',
    accentColor: '#ff9900',
    description: "Lunch will be served in DB 0006. Queen's will be hosting a workshop inside where attendance is mandatory for the YEC passport.",
    badge: 'Mandatory Workshop for Passport',
    workshopName: "Queen's Workshop",
    workshopLocation: 'DB 0006',
    isMandatory: true
  },
  {
    week: 'WEEK 2',
    dates: 'November 14-15',
    location: 'BRG 125 & Eatery',
    accentColor: '#39ae8a',
    description: 'Lunch will be served in BRG 125 / Eatery to push people to go to the Writing Centre workshop.',
    badge: 'Writing Centre Workshop',
    workshopName: 'Writing Centre Workshop',
    workshopLocation: 'BRG 125 & Eatery',
    isMandatory: false
  }
];

export const SCHEDULE_DATA: WeekScheduleDetails[] = [
  {
    week: 1,
    weekLabel: 'WEEK 1 Competition',
    dates: 'November 7-8',
    accentColor: '#ff9900',
    badgeBg: 'bg-[#ff9900]',
    checkIn: 'DB 0008',
    teamRoom: 'DB 0012',
    lunch: {
      location: 'DB 0006',
      description: "Lunch will be served in DB 0006, Queen's will be hosting a workshop inside where attendance is mandatory for YEC passport.",
      isMandatory: true,
      tag: 'Mandatory for YEC Passport'
    },
    workshop: {
      title: "Queen's Workshop",
      room: 'DB 0006',
      mandatory: true,
      details: "Queen's workshop will be held in DB 0006, attendance is mandatory for YEC passport."
    },
    competitions: [
      { id: 'communication', name: 'Communications', room: 'DB 0004 and 0009' },
      { id: 'debate', name: 'Debate', room: 'DB 0006' },
      { id: 'innovative-design', name: 'Innovative Design', room: 'DB 0011 and 0013' }
    ]
  },
  {
    week: 2,
    weekLabel: 'WEEK 2 Competition',
    dates: 'November 14-15',
    accentColor: '#39ae8a',
    badgeBg: 'bg-[#39ae8a]',
    checkIn: 'Right in front of BRG Eatery',
    teamRoom: 'No room for Day 1, Day 2 will be 212',
    lunch: {
      location: 'BRG 125 / Eatery',
      description: 'Lunch will be served in BRG 125/Eatery to push people to go to the Writing Centre workshop.',
      isMandatory: false,
      tag: 'Writing Centre Hub'
    },
    workshop: {
      title: 'Writing Centre Workshop',
      room: 'BRG 125 / Eatery',
      mandatory: false,
      details: 'Writing centre will be set up in 125/Eatery during lunch and competition breaks.'
    },
    competitions: [
      { id: 'consulting', name: 'Consulting', room: 'BRG 125 and Eatery' },
      { id: 're-engineering', name: 'Re-Engineering', room: 'WSC 101' },
      { id: 'programming', name: 'Programming', room: 'WSC 104' },
      { id: 'bio-engineering', name: 'Bio-Engineering', room: 'WSC 102' },
      { id: 'junior-design', name: 'Jr. Design', room: 'BRG 313' },
      { id: 'senior-design', name: 'Sr. Design', room: 'BRG 220 (sandbox)' }
    ]
  }
];

export const BUILDING_LEGEND = [
  { code: 'DB', name: 'Victor Phillip Dahdaleh Building' },
  { code: 'BRG', name: 'Bergeron Centre for Engineering Excellence' },
  { code: 'WSC', name: 'William Small Centre' }
];
