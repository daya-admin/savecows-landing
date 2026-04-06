// Razorpay Payment Page URL
// Full URL supports ?amount= query parameter for prefilling
export const RAZORPAY_PAGE_URL = 'https://pages.razorpay.com/pl_OAgUqzaaSamkcj/view';
// Short link (fallback, doesn't support amount prefill)
export const RAZORPAY_DONATE_URL = 'https://rzp.io/l/BMpDxba';

// Asset base URL (Cloudflare R2 public)
export const ASSET_BASE_URL = 'https://pub-4d0f40a00e3346068d49bbdd4c914540.r2.dev/kamdhenuseva';

// Logo
export const LOGO_URL = 'https://kamdhenuseva.dayadevraha.com/logo.png';

// Kamdhenuseva base URL
export const KAMDHENUSEVA_URL = 'https://kamdhenuseva.dayadevraha.com/en';

// Hero images
export const HERO_IMAGES = [
  `${ASSET_BASE_URL}/assets/savecows/hero-1.jpg`,
  `${ASSET_BASE_URL}/assets/savecows/hero-2.jpg`,
  `${ASSET_BASE_URL}/assets/savecows/hero-3.jpg`,
];

// Other images
export const IMAGES = {
  aboutHero: `${ASSET_BASE_URL}/assets/about/hero.JPG`,
  aboutAshram: `${ASSET_BASE_URL}/assets/home/about-ashram/image-1.jpg`,
  aboutGoshala: `${ASSET_BASE_URL}/assets/savecows/about-goshala.jpg`,
  urgentAppeal: `${ASSET_BASE_URL}/assets/savecows/urgent-appeal.jpg`,
  donationsGo: `${ASSET_BASE_URL}/assets/savecows/donations-go.jpg`,
  adoptCow: `${ASSET_BASE_URL}/assets/savecows/adopt-cow.jpg`,
  rareBreed1: `${ASSET_BASE_URL}/assets/savecows/rare-breed-1.jpg`,
  rareBreed2: `${ASSET_BASE_URL}/assets/savecows/rare-breed-2.jpg`,
  faq: `${ASSET_BASE_URL}/assets/home/faq/image-1.jpg`,
  cowPuja1: `${ASSET_BASE_URL}/assets/cow-puja/1.jpg`,
  cowPuja2: `${ASSET_BASE_URL}/assets/cow-puja/2.jpg`,
};

// Contact information
export const CONTACTS = {
  email: 'kamdhenuseva@dayadevraha.com',
  phone: '+91 73027 56618',
  whatsapp: '+917302756618',
  telegram: 'kamdhenuseva',
  vk: 'dayadevraha',
};

// Trust information
export const TRUST_NAME = 'SHRI DEVRAHA BABA GAU SEVA SANSTHAN TRUST';
export const TRUST_NAME_HI = 'श्री देवराहा बाबा गौ सेवा संस्थान ट्रस्ट';

// Donation tiers (INR)
export const DONATION_TIERS = [
  { amount: 500, label: '3 days', labelHi: '3 दिन' },
  { amount: 1000, label: '1 week', labelHi: '1 सप्ताह' },
  { amount: 5000, label: '1 month', labelHi: '1 महीना', popular: true },
  { amount: 10000, label: 'Multiple cows', labelHi: 'कई गायें' },
];

// Quotes from PDF - Shri Devraha Baba and scriptures
export const QUOTES = [
  { text: 'A Hindu can be recognized by the way he venerates the cow.', source: 'Shri Devraha Baba' },
  { text: 'The land of Bharata-varsha will be prosperous. No evil will happen to it. Mother-cow protects it. On the land, where Rama was born, a temple will be built in the joint effort of the Hindu, the Muslims, the Sikhs, and the Christians. I bless everyone, and grant everyone my grace. Even after I leave my body, my soul will continue to live on the land of Bharata-varsha and take care of its prosperity. The world belongs to me and I belong to the world.', source: 'Shri Devraha Baba' },
  { text: 'The sacred cow is superior to kirtan (congregational chanting of the Lord), shravan (the tradition of listening, i.e., the oral transmission of spiritual knowledge), donations, philosophy, etc.', source: 'Shri Devraha Baba' },
  { text: 'Brahmaji resides in the back of the Cow, Vishnu resides in the throat, Shiva resides in the mouth of Cow. Demigods reside in every body part of the Cow. Goddess Lakshmi resides in Cowdung with Eight Opulences.', source: 'Divine Speech of Brahmrishi Devraha Baba' },
  { text: 'A person wishing good fate must serve Mother Cow with a sacred mind. As much as possible feed cows with your own hands and clean the place where they stay-thus you shall get unlimited good fate. By taking in for 1 month Panchagavya (clarified butter milk curd urine and dung) all mental taints and distortions are uprooted.', source: 'Divine Speech of Brahmrishi Devraha Baba' },
  { text: 'In the form of Mother Cow Almighty God himself appears before us to take our service. By thinking thus steadfastly serve cows.', source: 'Divine Speech of Brahmrishi Devraha Baba' },
  { text: 'For protection of Hindu Religion cow protection is required. There is a deep import of Mother Cow. In every pore of it dwell gods-goddesses. Via cow service you attain wealth, righteousness, desires and salvation. Cow\'s importance is more than Ganga and Gayatri because for partaking Ganga you have to leave home Gayatri wants hard penance but benefit of cow you get at home itself.', source: 'Divine Speech of Brahmrishi Devraha Baba' },
  { text: 'In scriptures cow donation is considered great and this greatness is on the basis of its utility value. A cow gives milk, curds, clarified butter, cow urine and cow dung which is used compulsorily in various religious rites. From these 5 Panchgavya is made and via it after purifying the human body and mind he gets the rite to sit for rituals.', source: 'Divine Speech of Brahmrishi Devraha Baba' },
  { text: 'In religious scriptures there is nothing greater than cow donation. Both Manu and Yajnavalkya again and again have praised cow donation.', source: 'Divine Speech of Brahmrishi Devraha Baba' },
  { text: 'Cow is greater than singing hymns, hearing about god, charity and vision of Almighty God. Cow wards of all our sins and the root means of Yagya too is cow. Hence by worshiping a cow it is possible to attain both this and the next world. Cows are worshiped in heaven too.', source: 'Mahabharat (Anu. 115/26-27; 29, 33)' },
];
