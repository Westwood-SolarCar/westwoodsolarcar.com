const memberImageMap: Record<string, string> = {
  ishaan: '/team-images/ishaan.png',
  jackson: '/team-images/jackson.png',
  owen: '/team-images/owen.png',
  samuel: '/team-images/samuel.png'
};

const getMemberImage = (name: string) => {
  const firstName = name.trim().split(/\s+/)[0].toLowerCase().replace(/[^a-z0-9]/g, '');

  return [memberImageMap[firstName] ?? '/team-images/placeholder.svg'];
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

export const sponsors = {
  platinum: [
    { id: 'p1', name: 'TechCorp Industries', logo: 'https://placehold.co/300x150/333333/a0a0a5?text=TechCorp', link: '#' },
    { id: 'p2', name: 'AeroDynamics Global', logo: 'https://placehold.co/300x150/333333/a0a0a5?text=AeroDynamics', link: '#' }
  ],
  gold: [
    { id: 'g1', name: 'FutureEnergy', logo: 'https://placehold.co/250x125/333333/a0a0a5?text=FutureEnergy', link: '#' },
    { id: 'g2', name: 'Precision Machining', logo: 'https://placehold.co/250x125/333333/a0a0a5?text=Precision', link: '#' }
  ],
  silver: [
    { id: 's1', name: 'SolidWorks', logo: 'https://placehold.co/200x100/333333/a0a0a5?text=SolidWorks', link: '#' },
    { id: 's2', name: 'Altium', logo: 'https://placehold.co/200x100/333333/a0a0a5?text=Altium', link: '#' }
  ],
  bronze: [
    { id: 'b1', name: 'Local Hardware Store', logo: 'https://placehold.co/180x90/333333/a0a0a5?text=Hardware', link: '#' },
    { id: 'b2', name: 'Community Bank', logo: 'https://placehold.co/180x90/333333/a0a0a5?text=Community', link: '#' }
  ]
};

export const carSpecs = {
  name: 'WSC-26 "Helios"',
  weight: '185 kg',
  dimensions: '4.5m x 1.8m x 1.0m',
  powertrain: 'Custom 1.5kW Hub Motor',
  battery: '5kWh Lithium-Ion Pack',
  topSpeed: '110 km/h',
  materials: 'Carbon Fiber Monocoque, Aerospace-grade Aluminum'
};
