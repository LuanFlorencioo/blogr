type LinkPage = {
  category: string;
  links: string[];
};

export const linkPages: LinkPage[] = [
  {
    category: 'product',
    links: ['overview', 'pricing', 'marketplace', 'features', 'integrations'],
  },
  {
    category: 'company',
    links: ['about', 'team', 'blog', 'careers'],
  },
  {
    category: 'connect',
    links: ['contact', 'newsletter', 'linkedin'],
  },
];
