export const site = {
  name: 'Westwood Solar Car',
  school: 'Westwood High School',
  city: 'Austin, Texas',
  competition: 'Solar Car Challenge',
  venue: 'Texas Motor Speedway',
  email: 'westwoodsolarcar@gmail.com',
  /** Full Instagram URL. Leave empty to hide the link. */
  instagram: ''
};

const memberImages: Record<string, string> = {
  ishaan_desai: '/team-images/ishaan.jpg',
  kylie_xu: '/team-images/kylie.jpg',
  lucas_xu: '/team-images/lucas.jpg',
  owen_neal: '/team-images/owen.jpg',
  samuel_hana: '/team-images/samuel.jpg'
};

const imageFor = (name: string): string | null => {
  const key = name
  .trim()
  .split(/\s+/)
  .map((w) => w.toLowerCase().replace(/[^a-z0-9]/g, ''))
  .filter(Boolean)
  .join('_');
  return memberImages[key] ?? null;
};

export type TeamMember = {
  name: string;
  roles: string[];
  bio: string;
  image: string | null;
};

const member = (name: string, roles: string, bio = ''): TeamMember => ({
  name,
  roles: roles.split('/'),
  bio,
  image: imageFor(name)
});

export const teamMembers: TeamMember[] = [
  member('Ishaan Desai', 'Eletrical/Finance/Fundraising/Logistics'),
  member('Samuel Hana', 'Build/Data/Design/Electrical'),
  member('Owen Neal', 'Builder/CAD/Design/Driver'),
  member('Ehan Maknoja', 'Build/CAD'),
  member('Kylie Xu', 'Build/CAD/Data/Eletrical'),
  member('Aaron Hua', 'Data/Design/Electrical'),
  member('Lucas Xu', 'Build/CAD/Design'),
  member('Benny Provost', 'Data/Electrical'),
  member('Peiyi Wang', 'Build/CAD/Data/Eletrical'),
  member('Joshua Hana', 'Build/Design'),
  member('Alyna Lee', 'Finance/Fundraising'),
  member('Lucas Janssen', 'Driver/Finance/Fundrasing/Logistics'),
  member('Rohan Srivastava', 'Finance/Fundrasing'),
  member('Joon Park', 'Build/Finance/Fundraising')
];

/**
 * Specifications for the car.
 *
 * Every value starts empty on purpose: the car is still being designed, and the
 * numbers that used to sit here were placeholders nobody on the team had agreed to.
 * Fill a value in and its row appears on the car page. Leave it empty and the row
 * stays hidden, and the page says the specs are not settled yet.
 */
export const carSpecs: { label: string; value: string }[] = [
  { label: 'Competition class', value: '' },
  { label: 'Weight', value: '' },
  { label: 'Length', value: '' },
  { label: 'Width', value: '' },
  { label: 'Motor', value: '' },
  { label: 'Battery', value: '' },
  { label: 'Solar array', value: '' }
];

/** What the team is actually working on right now. Edit freely as things change. */
export const buildAreas = [
  {
    name: 'Chassis and body',
    body: 'Frame layout, roll cage, and the shape of the body shell. This is where most of the CAD work is going.'
  },
  {
    name: 'Solar array',
    body: 'Choosing cells, working out how many fit inside the size limits, and how they mount to the body.'
  },
  {
    name: 'Battery and electrical',
    body: 'Pack layout, wiring, fusing, and the safety systems the competition requires before a car can run.'
  },
  {
    name: 'Driver controls',
    body: 'Steering, brakes, seating, and visibility, all of which have to pass inspection.'
  }
];

export const sponsorTiers = [
  {
    name: 'Bronze',
    amount: '$100+',
    gets: 'Your name on this page and a thank-you post from the team.'
  },
  {
    name: 'Silver',
    amount: '$500+',
    gets: 'Your logo on this page and on the team shirt.'
  },
  {
    name: 'Gold',
    amount: '$1,000+',
    gets: 'Everything above, plus your logo on the car.'
  },
  {
    name: 'Platinum',
    amount: '$2,500+',
    gets: 'Everything above, with the largest logo on the car and top placement here.',
    featured: true
  }
];
