import React, { createContext, useContext, useState } from 'react';

const MarketplaceContext = createContext();

export const useMarketplace = () => {
  const context = useContext(MarketplaceContext);
  if (!context) {
    throw new Error('useMarketplace must be used within a MarketplaceProvider');
  }
  return context;
};

const initialData = [
  // Jane Landa's offerings
  {
    id: '1',
    name: 'Jane Landa',
    category: 'offer',
    services: 'Advertising and Marketing',
    skills: '',
    needs: null,
    type: 'offer',
    description: 'Can help with advertising campaigns and marketing outreach',
    telegram: '',
    email: '',
    price: ''
  },
  
  // tae's offerings  
  {
    id: '2',
    name: 'tae',
    category: 'offer',
    services: 'Research and Writing',
    skills: '',
    needs: null,
    type: 'offer',
    description: 'Research, writing, thinking, organizing',
    telegram: '',
    email: '',
    price: ''
  },
  {
    id: '3',
    name: 'tae',
    category: 'offer',
    services: 'Communications',
    skills: '',
    needs: null,
    type: 'offer',
    description: 'Professional communications support',
    telegram: '',
    email: '',
    price: ''
  },
  {
    id: '4',
    name: 'tae',
    category: 'offer',
    services: 'Operations Consulting',
    skills: '',
    needs: null,
    type: 'offer',
    description: 'Operations, consulting, feedback, life advice',
    telegram: '',
    email: '',
    price: 'Priceless :)'
  },
  
  // Matt Shams's offerings
  {
    id: '5',
    name: 'Matt Shams',
    category: 'offer',
    services: 'Founder Strategy',
    skills: '',
    needs: null,
    type: 'offer',
    description: 'Can be helpful for a founder in any capacity or strategy',
    telegram: '',
    email: '',
    price: 'Let\'s talk'
  },
  
  // Anna Zhu's offerings
  {
    id: '6',
    name: 'Anna Zhu',
    category: 'offer',
    services: 'Skill Mapping Workshops',
    skills: '',
    needs: null,
    type: 'offer',
    description: 'Skill mapping workshop facilitation with results documentation',
    telegram: '',
    email: '',
    price: ''
  },
  
  // Stacey Fronek's offerings
  {
    id: '7',
    name: 'Stacey Fronek',
    category: 'offer',
    services: 'Marketing Strategy',
    skills: '',
    needs: null,
    type: 'offer',
    description: 'Marketing brainstorm and strategy development',
    telegram: '',
    email: '',
    price: ''
  },
  {
    id: '8',
    name: 'Stacey Fronek',
    category: 'offer',
    services: 'Brand Consultancy',
    skills: '',
    needs: null,
    type: 'offer',
    description: 'Marketing and brand consultancy for the right products',
    telegram: '',
    email: '',
    price: '$5k+'
  },
  
  // Andrej's offerings
  {
    id: '9',
    name: 'Andrej',
    category: 'offer',
    services: 'Conversation Facilitation',
    skills: '',
    needs: null,
    type: 'offer',
    description: 'Focusing conversations on what matters',
    telegram: '',
    email: '',
    price: ''
  },
  {
    id: '10',
    name: 'Andrej',
    category: 'offer',
    services: 'Product Design',
    skills: '',
    needs: null,
    type: 'offer',
    description: 'Product, process, and user experience design',
    telegram: '',
    email: '',
    price: ''
  },
  {
    id: '11',
    name: 'Andrej',
    category: 'offer',
    services: 'User Research',
    skills: '',
    needs: null,
    type: 'offer',
    description: 'User research, testing, and ethnographic research',
    telegram: '',
    email: '',
    price: ''
  },
  {
    id: '12',
    name: 'Andrej',
    category: 'offer',
    services: 'Product Strategy Sessions',
    skills: '',
    needs: null,
    type: 'offer',
    description: 'Product strategy sessions, usually 90-minute sessions',
    telegram: '',
    email: '',
    price: '$150'
  },
  {
    id: '13',
    name: 'Andrej',
    category: 'offer',
    services: 'Team Retrospectives',
    skills: '',
    needs: null,
    type: 'offer',
    description: 'Organizational retrospective sessions',
    telegram: '',
    email: '',
    price: '$50 for a team'
  },
  {
    id: '14',
    name: 'Andrej',
    category: 'offer',
    services: 'User Testing',
    skills: '',
    needs: null,
    type: 'offer',
    description: 'User testing session with locals',
    telegram: '',
    email: '',
    price: '$100 for 5 interviews'
  },
  
  // Needs
  {
    id: '15',
    name: 'Jane Landa',
    category: 'need',
    services: null,
    skills: null,
    needs: 'Understanding people\'s passions and skills',
    type: 'need',
    description: 'Want to know other people, their passions, their skills, their desired skills and what drains their soul for future project collaborations',
    telegram: '',
    email: '',
    price: ''
  },
  {
    id: '16',
    name: 'Anna Zhu',
    category: 'need',
    services: null,
    skills: null,
    needs: 'User Testing',
    type: 'need',
    description: 'Need help with user testing for MVP validation',
    telegram: '',
    email: '',
    price: ''
  },
  {
    id: '17',
    name: 'Andrej',
    category: 'need',
    services: null,
    skills: null,
    needs: 'Testing payment models',
    type: 'need',
    description: 'Finding ways of testing what people will pay for, and feedback on some prototypes',
    telegram: '',
    email: '',
    price: ''
  },
  
  // Jordi Pinyana's offerings
  {
    id: '18',
    name: 'Jordi Pinyana',
    category: 'offer',
    services: 'Digital Voting and Participation Systems',
    skills: '',
    needs: null,
    type: 'offer',
    description: 'Knowledge around digital voting and participation with real world experience in organizations with governance needs',
    telegram: '',
    email: '',
    price: ''
  },
  {
    id: '19',
    name: 'Jordi Pinyana',
    category: 'offer',
    services: 'Backend and Smart Contract Programming',
    skills: '',
    needs: null,
    type: 'offer',
    description: 'Programming expertise in backend systems and smart contracts',
    telegram: '',
    email: '',
    price: ''
  },
  {
    id: '20',
    name: 'Jordi Pinyana',
    category: 'offer',
    services: 'End-to-End Voting System',
    skills: '',
    needs: null,
    type: 'offer',
    description: 'An end to end voting system with all the democratic guarantees for online participation',
    telegram: '',
    email: '',
    price: ''
  },
  
  // Projects from CSV
  {
    id: '21',
    name: 'Justina',
    category: 'project',
    services: null,
    skills: null,
    needs: null,
    project_title: 'Human–Plant Interaction & Altered States',
    type: 'project',
    description: 'Exploring relationships between humans and local plants in Chiang Mai through care, symbolism, and altered states of perception. Participants will be paired with specific plants during facilitated workshops, engaging in ongoing relational practices.',
    telegram: '',
    email: '',
    price: '',
    url: 'https://www.linkedin.com/in/justina-svitraite-333482232/'
  },
  {
    id: '22',
    name: 'Justina',
    category: 'project',
    services: null,
    skills: null,
    needs: null,
    project_title: 'User Research in Local Chiang Mai Context',
    type: 'project',
    description: 'Conducting user research within the local Chiang Mai context to understand cultural, social, and behavioral patterns. Will engage local participants through interviews, observation, and lightweight testing.',
    telegram: '',
    email: '',
    price: '',
    url: ''
  },
  {
    id: '23',
    name: 'Anastasia',
    category: 'project',
    services: null,
    skills: null,
    needs: null,
    project_title: 'Privacy-Preserving Calendar Matching App',
    type: 'project',
    description: 'Testing how residency influences project development. Building a privacy-preserving calendar matching app and membership curation mechanism while experimenting with daily check-ins.',
    telegram: '',
    email: '',
    price: '',
    url: ''
  },
  {
    id: '28',
    name: 'Jordi Pinyana',
    category: 'project',
    services: null,
    skills: null,
    needs: null,
    project_title: 'Democratic Information Gathering',
    type: 'project',
    description: 'Translating people\'s feelings, ideas, and environmental information to socially relevant questions using sentiment/information gathering platforms like pol.is for democratic participation.',
    telegram: '',
    email: '',
    price: '',
    url: ''
  },
  {
    id: '29',
    name: 'Jane Landa',
    category: 'project',
    services: null,
    skills: null,
    needs: null,
    project_title: '100 Ads to the People',
    type: 'project',
    description: 'Creating 100 advertisements to help people. Focus on understanding others\' passions, skills, desired skills and what drains their soul for future project collaborations.',
    telegram: '',
    email: '',
    price: '',
    url: ''
  },
  {
    id: '30',
    name: 'tae',
    category: 'project',
    services: null,
    skills: null,
    needs: null,
    project_title: 'RaidGuild Operations for Q1',
    type: 'project',
    description: 'Revenue generating business focus with operations cleanup and automated processes. No projects, only sustainable businesses!',
    telegram: '',
    email: '',
    price: '',
    url: ''
  },
  {
    id: '31',
    name: 'Matt Shams',
    category: 'project',
    services: null,
    skills: null,
    needs: null,
    project_title: 'Longevity Spaces for LIZ',
    type: 'project',
    description: 'Developing a spec and semi-prototype of longevity spaces. Work in progress focused on technological alignment with human efficiency and equity.',
    telegram: '',
    email: '',
    price: '',
    url: 'https://mattshams.com/'
  },
  {
    id: '32',
    name: 'Anna Zhu',
    category: 'project',
    services: null,
    skills: null,
    needs: null,
    project_title: 'M8 MVP Sprint',
    type: 'project',
    description: 'Sprint to release MVP for M8 platform with user testing. Currently about 1 week of full-time work needed to release MVP.',
    telegram: '',
    email: '',
    price: '',
    url: 'https://m8.life'
  },
  {
    id: '33',
    name: 'Stacey Fronek',
    category: 'project',
    services: null,
    skills: null,
    needs: null,
    project_title: 'Product Story Refinement',
    type: 'project',
    description: 'Share product features and overall narrative to get feedback. Focus on connecting with people and refining the story to create resonance with users.',
    telegram: '',
    email: '',
    price: '',
    url: 'https://shesthefronz.com'
  },
  {
    id: '34',
    name: 'Andrej',
    category: 'project',
    services: null,
    skills: null,
    needs: null,
    project_title: 'Sanctuary Sustainable Business Models',
    type: 'project',
    description: 'Developing sustainable business models for Sanctuary and showing its value to the outside world. Focus on testing what people will pay for and prototyping solutions.',
    telegram: '',
    email: '',
    price: '',
    url: ''
  },
  
  // Anastasia's offerings
  {
    id: '35',
    name: 'Anastasia',
    category: 'offer',
    services: 'Safe Space Creation and Collaboration',
    skills: '',
    needs: null,
    type: 'offer',
    description: 'Creating and sustaining safe spaces for people to co-live and collaborate (e.g. DAO Palace)',
    telegram: '',
    email: '',
    price: ''
  },
  {
    id: '36',
    name: 'Anastasia',
    category: 'offer',
    services: 'Organization and Coordination',
    skills: '',
    needs: null,
    type: 'offer',
    description: 'Organizational and coordination skills for teams and projects',
    telegram: '',
    email: '',
    price: ''
  },
  {
    id: '37',
    name: 'Anastasia',
    category: 'offer',
    services: 'Business Development and Growth',
    skills: '',
    needs: null,
    type: 'offer',
    description: 'BD and growth for tech start-ups',
    telegram: '',
    email: '',
    price: ''
  },
  {
    id: '38',
    name: 'Anastasia',
    category: 'offer',
    services: 'Go-to-Market Strategy',
    skills: '',
    needs: null,
    type: 'offer',
    description: 'GTM, fundraising pitching strategy',
    telegram: '',
    email: '',
    price: ''
  }
];

export const MarketplaceProvider = ({ children }) => {
  const [entries, setEntries] = useState(initialData);

  const addEntry = (entry) => {
    const newEntry = {
      ...entry,
      id: Date.now().toString(),
    };
    setEntries(prev => [...prev, newEntry]);
  };

  const updateEntry = (id, updatedEntry) => {
    setEntries(prev => prev.map(entry => 
      entry.id === id ? { ...entry, ...updatedEntry } : entry
    ));
  };

  const deleteEntry = (id) => {
    setEntries(prev => prev.filter(entry => entry.id !== id));
  };

  const getOffers = () => entries.filter(entry => entry.type === 'offer');
  const getNeeds = () => entries.filter(entry => entry.type === 'need');
  const getProjects = () => entries.filter(entry => entry.type === 'project');

  const value = {
    entries,
    addEntry,
    updateEntry,
    deleteEntry,
    getOffers,
    getNeeds,
    getProjects,
  };

  return (
    <MarketplaceContext.Provider value={value}>
      {children}
    </MarketplaceContext.Provider>
  );
};