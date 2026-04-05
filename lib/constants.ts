// Razorpay Payment Page URL
// Full URL supports ?amount= query parameter for prefilling
export const RAZORPAY_PAGE_URL = 'https://pages.razorpay.com/pl_OAgUqzaaSamkcj/view';
// Short link (fallback, doesn't support amount prefill)
export const RAZORPAY_DONATE_URL = 'https://rzp.io/l/BMpDxba';

// Asset base URL (Cloudflare)
export const ASSET_BASE_URL = 'https://dayadevraha.com/kamdhenuseva';

// Hero images
export const HERO_IMAGES = [
  `${ASSET_BASE_URL}/assets/home/hero/image-4.jpg`,
  `${ASSET_BASE_URL}/assets/home/hero/image-1.jpg`,
  `${ASSET_BASE_URL}/assets/home/hero/image-2.jpg`,
];

// Other images
export const IMAGES = {
  aboutHero: `${ASSET_BASE_URL}/assets/about/hero.JPG`,
  aboutAshram: `${ASSET_BASE_URL}/assets/home/about-ashram/image-1.jpg`,
  faq: `${ASSET_BASE_URL}/assets/home/faq/image-1.jpg`,
  cowPuja1: `${ASSET_BASE_URL}/assets/cow-puja/1.jpg`,
  cowPuja2: `${ASSET_BASE_URL}/assets/cow-puja/2.jpg`,
};

// Contact information
export const CONTACTS = {
  email: 'kamdhenuseva@dayadevraha.com',
  phone: '+91 73027 56618',
  whatsapp: '+917302756618',
  telegram: 'dayadevraha_support',
};

// Trust information
export const TRUST_NAME = 'SHRI DEVRAHA BABA GAU SEVA SANSTHAN TRUST';
export const TRUST_NAME_HI = 'श्री देवराहा बाबा गौ सेवा संस्थान ट्रस्ट';

// Donation tiers (INR)
export const DONATION_TIERS = [
  { amount: 500, label: '~3 days', labelHi: '~3 दिन' },
  { amount: 1000, label: '~1 week', labelHi: '~1 सप्ताह' },
  { amount: 5000, label: '1 month', labelHi: '1 महीना', popular: true },
  { amount: 10000, label: 'Multiple cows', labelHi: 'कई गायें' },
];

// Inspirational quotes about cows
export const QUOTES = [
  { text: 'The cow is the mother of all civilization.', source: 'Indian Wisdom' },
  { text: 'To protect cows means to protect the whole cosmic creation.', source: 'Vedic Scripture' },
  { text: 'The greatness of a nation can be judged by the way its animals are treated.', source: 'Mahatma Gandhi' },
  { text: 'Cow protection is the gift of Hinduism to the world.', source: 'Mahatma Gandhi' },
  { text: 'One who, being fully satisfied by milk, is desirous of killing the cow, is in the grossest ignorance.', source: 'Srimad Bhagavatam' },
  { text: 'The cow is a poem of compassion.', source: 'Indian Proverb' },
];
