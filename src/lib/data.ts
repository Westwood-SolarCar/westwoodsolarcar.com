const memberImageMap: Record<string, string> = {
  ishaan: '/team-images/ishaan.png',
  jackson: '/team-images/jackson.png',
  lucas: '/team-images/lucas.jpeg',
  owen: '/team-images/owen.png',
  samuel: '/team-images/samuel.png'
};

const getMemberImage = (name: string) => {
  const firstName = name.trim().split(/\s+/)[0].toLowerCase().replace(/[^a-z0-9]/g, '');

  return memberImageMap[firstName] ?? '/team-images/placeholder.svg';
};

export const teamMembers = [
  { name: 'Jackson', position: 'Finance/Fundraising/Build/Driver', category: 'Finance & Ops', image: getMemberImage('Jackson') },
  { name: 'Ishaan', position: 'Finance/Fundraising', category: 'Finance & Ops', image: getMemberImage('Ishaan') },
  { name: 'Samuel', position: 'Electrical/Design/Build/Data', category: 'Electrical', image: getMemberImage('Samuel') },
  { name: 'Owen', position: 'Design/CAD/Build/Driver', category: 'Design & CAD', image: getMemberImage('Owen') },
  { name: 'Ehan', position: 'CAD/Build', category: 'Design & CAD', image: getMemberImage('Ehan') },
  { name: 'Shiv', position: 'Electrical/Design/CAD', category: 'Electrical', image: getMemberImage('Shiv') },
  { name: 'Kylie', position: 'CAD/Build/Data', category: 'Design & CAD', image: getMemberImage('Kylie') },
  { name: 'Aaron', position: 'Electrical/Design/Data/Driver', category: 'Electrical', image: getMemberImage('Aaron') },
  { name: 'Carter', position: 'Build/Design', category: 'Build', image: getMemberImage('Carter') },
  { name: 'Lucas', position: 'Design/CAD/Build', category: 'Design & CAD', image: getMemberImage('Lucas') },
  { name: 'Benny', position: 'Electrical/Data', category: 'Electrical', image: getMemberImage('Benny') },
  { name: 'Peiyi', position: 'Electrical/Data/CAD', category: 'Electrical', image: getMemberImage('Peiyi') },
  { name: 'Joshua', position: 'Build/Design', category: 'Build', image: getMemberImage('Joshua') },
  { name: 'Alyna', position: 'Finance/Fundraising', category: 'Finance & Ops', image: getMemberImage('Alyna') }
];

export const sponsorTiers = [
  {
    name: 'Platinum',
    range: '$2,500+',
    featured: true,
    summary: 'Premier visibility across the car, website, and every competition presentation.',
    benefits: [
      'Large logo on the solar car',
      'Premier website placement',
      'Featured in all team media',
      'Team presentation access',
      'Dedicated sponsor report',
      'Event tickets & recognition'
    ]
  },
  {
    name: 'Gold',
    range: '$1,000 – $2,499',
    featured: false,
    summary: 'Prominent recognition across team materials, the website, and competition events.',
    benefits: [
      'Medium logo on the solar car',
      'Website recognition',
      'Social media feature',
      'Competition recognition',
      'Sponsor update report'
    ]
  },
  {
    name: 'Silver',
    range: '$500 – $999',
    featured: false,
    summary: 'Recognition on the website and in all season-end materials and presentations.',
    benefits: [
      'Logo on team materials',
      'Website recognition',
      'Social media mention',
      'Season-end report'
    ]
  },
  {
    name: 'Bronze',
    range: '$100 – $499',
    featured: false,
    summary: 'Website recognition and acknowledgment in team materials and communications.',
    benefits: ['Website recognition', 'Thank-you acknowledgment', 'Season-end mention']
  }
];

export const carSpecs = {
  name: 'WSC-26 "Helios"',
  weight: '185 kg',
  dimensions: '4.5m × 1.8m × 1.0m',
  powertrain: 'Custom 1.5kW Hub Motor',
  battery: '5kWh Lithium-Ion Pack',
  topSpeed: '110 km/h',
  materials: 'Carbon Fiber Monocoque, Aerospace-grade Aluminum'
};
