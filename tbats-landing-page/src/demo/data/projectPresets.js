export const projectPresets = {
  'personal-blog': {
    name: 'Personal Blog',
    defaultPreset: 'editorial',
    id: 1
  },
  'e-commerce': {
    name: 'E-Commerce Store',
    defaultPreset: 'minimal',
    id: 2
  },
  'portfolio': {
    name: 'Creative Portfolio',
    defaultPreset: 'dark-luxury',
    id: 3
  },
  // Numeric fallback mapping
  '1': {
    name: 'Personal Blog',
    defaultPreset: 'editorial',
    slug: 'personal-blog'
  },
  '2': {
    name: 'E-Commerce Store',
    defaultPreset: 'minimal',
    slug: 'e-commerce'
  },
  '3': {
    name: 'Creative Portfolio',
    defaultPreset: 'dark-luxury',
    slug: 'portfolio'
  }
};

export default projectPresets;
