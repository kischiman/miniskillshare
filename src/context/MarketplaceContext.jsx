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

  const value = {
    entries,
    addEntry,
    updateEntry,
    deleteEntry,
    getOffers,
    getNeeds,
  };

  return (
    <MarketplaceContext.Provider value={value}>
      {children}
    </MarketplaceContext.Provider>
  );
};