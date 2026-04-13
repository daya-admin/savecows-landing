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
export const QUOTES: Record<string, { text: string; source: string }[]> = {
  en: [
    { text: 'A Hindu can be recognized by the way he venerates the cow.', source: 'Shri Devraha Baba' },
    { text: 'The sacred cow is superior to kirtan (congregational chanting of the Lord), shravan (the tradition of listening, i.e., the oral transmission of spiritual knowledge), donations, philosophy, etc.', source: 'Shri Devraha Baba' },
    { text: 'Brahmaji resides in the back of the Cow, Vishnu resides in the throat, Shiva resides in the mouth of Cow. Demigods reside in every body part of the Cow. Goddess Lakshmi resides in Cowdung with Eight Opulences.', source: 'Divine Speech of Brahmrishi Devraha Baba' },
    { text: 'A person wishing good fate must serve Mother Cow with a sacred mind. As much as possible feed cows with your own hands and clean the place where they stay-thus you shall get unlimited good fate.', source: 'Divine Speech of Brahmrishi Devraha Baba' },
    { text: 'In the form of Mother Cow Almighty God himself appears before us to take our service. By thinking thus steadfastly serve cows.', source: 'Divine Speech of Brahmrishi Devraha Baba' },
    { text: 'For protection of Hindu Religion cow protection is required. There is a deep import of Mother Cow. In every pore of it dwell gods-goddesses. Via cow service you attain wealth, righteousness, desires and salvation. Cow\'s importance is more than Ganga and Gayatri because for partaking Ganga you have to leave home Gayatri wants hard penance but benefit of cow you get at home itself.', source: 'Divine Speech of Brahmrishi Devraha Baba' },
    { text: 'In scriptures cow donation is considered great and this greatness is on the basis of its utility value. A cow gives milk, curds, clarified butter, cow urine and cow dung which is used compulsorily in various religious rites.', source: 'Divine Speech of Brahmrishi Devraha Baba' },
    { text: 'In religious scriptures there is nothing greater than cow donation. Both Manu and Yajnavalkya again and again have praised cow donation.', source: 'Divine Speech of Brahmrishi Devraha Baba' },
    { text: 'Cow is greater than singing hymns, hearing about god, charity and vision of Almighty God. Cow wards of all our sins and the root means of Yagya too is cow. Hence by worshiping a cow it is possible to attain both this and the next world. Cows are worshiped in heaven too.', source: 'Mahabharat (Anu. 115/26-27; 29, 33)' },
  ],
  ru: [
    { text: 'Индуиста можно распознать по тому, как он почитает корову', source: 'Голос Девраха Бабы' },
    { text: 'Земля Бхарата-варша будет благополучной. С ней не случится никакого несчастья. Корова-мать охранит её. На земле, где рождён Рама, общими усилиями индуистов, мусульман, сикхов и христиан будет построен храм. Благословляю всех, дарую всем мою милость. Даже после того как я оставлю тело, моя душа будет жить на земле Бхарата-варше и заботиться о её благополучии. Мир принадлежит мне, а я принадлежу миру.', source: 'Голос Девраха Бабы' },
    { text: 'Священная корова превыше киртана (соборное воспевание Господа), шраван (традиция слушания, т.е. устной передачи духовных знаний), пожертвований, философии и пр.', source: 'Голос Девраха Бабы' },
    { text: 'В спине коровы пребывает Брахма джи, в горле её — Вишну, а в устах — великий Шива. Каждая часть её тела — обитель для полубогов, а в коровьем навозе, неся с собой восемь видов божественного процветания, обитает сама богиня Лакшми.', source: 'Из книги Divine Speech of Brahmrishi Devraha Baba' },
    { text: 'Тот, кто стремится к благой судьбе, должен служить Матери Корове с чистым сердцем и священными помыслами. Как можно чаще кормите коров из собственных рук и заботьтесь о чистоте их дома — так вы обретете безграничную милость и удачу.', source: 'Из книги Divine Speech of Brahmrishi Devraha Baba' },
    { text: 'В образе Матери Коровы сам Всемогущий Господь является нам, чтобы принять наше служение. С этой непоколебимой мыслью преданно служите коровам.', source: 'Из книги Divine Speech of Brahmrishi Devraha Baba' },
    { text: 'Для защиты индуизма необходимо оберегать корову, ибо Мать Корова несет в себе глубочайший сакральный смысл. В каждой поре её тела обитают боги и богини. Через служение ей человек обретает всё: богатство, праведность, исполнение желаний и конечное спасение.', source: 'Из книги Divine Speech of Brahmrishi Devraha Baba' },
    { text: 'В священных писаниях дарение коровы считается величайшим благодеянием, и эта высокая оценка основана на её неоценимой практической и духовной пользе.', source: 'Из книги Divine Speech of Brahmrishi Devraha Baba' },
    { text: 'Согласно священным писаниям, нет благодеяния более великого, чем дарение коровы. Великие мудрецы Ману и Яджнавалкья в своих трудах вновь и вновь прославляли этот священный акт как высшую добродетель.', source: 'Из книги Divine Speech of Brahmrishi Devraha Baba' },
    { text: 'Корова превыше воспевания священных гимнов, слушания о Боге, дел милосердия и даже лицезрения Самого Всемогущего Господа. Она избавляет от всех грехов и является первоосновой Ягьи (священного жертвоприношения). Поклоняясь корове, человек обретает благо в этом мире и достигает миров высших, ведь коровам поклоняются даже на небесах.', source: 'Махабхарата (Ану. 115/26-27; 29, 33)' },
  ],
  hi: [
    { text: 'एक हिंदू को उसके गाय के प्रति सम्मान से पहचाना जा सकता है।', source: 'श्री देवराहा बाबा' },
    { text: 'पवित्र गाय कीर्तन, श्रवण, दान, दर्शन आदि सबसे श्रेष्ठ है।', source: 'श्री देवराहा बाबा' },
    { text: 'गाय की पीठ में ब्रह्मा जी, गले में विष्णु, मुख में शिव निवास करते हैं। गाय के हर अंग में देवता निवास करते हैं। गोबर में अष्ट ऐश्वर्य सहित लक्ष्मी जी का वास है।', source: 'ब्रह्मर्षि देवराहा बाबा के दिव्य वचन' },
    { text: 'शुभ भाग्य चाहने वाले व्यक्ति को पवित्र मन से गौ माता की सेवा करनी चाहिए। यथासंभव अपने हाथों से गायों को खिलाएं और उनके रहने के स्थान को साफ रखें — इससे आपको असीमित पुण्य प्राप्त होगा।', source: 'ब्रह्मर्षि देवराहा बाबा के दिव्य वचन' },
    { text: 'गौ माता के रूप में स्वयं सर्वशक्तिमान भगवान हमारे समक्ष प्रकट होते हैं हमारी सेवा स्वीकार करने के लिए। इस दृढ़ विचार से गायों की सेवा करें।', source: 'ब्रह्मर्षि देवराहा बाबा के दिव्य वचन' },
    { text: 'हिंदू धर्म की रक्षा के लिए गौ रक्षा आवश्यक है। गौ माता का गहरा महत्व है। उसके हर रोम में देवी-देवताओं का वास है। गौ सेवा से धन, धर्म, काम और मोक्ष की प्राप्ति होती है।', source: 'ब्रह्मर्षि देवराहा बाबा के दिव्य वचन' },
    { text: 'शास्त्रों में गौ दान को सर्वश्रेष्ठ माना गया है और यह महत्व उसकी उपयोगिता पर आधारित है।', source: 'ब्रह्मर्षि देवराहा बाबा के दिव्य वचन' },
    { text: 'धार्मिक शास्त्रों में गौ दान से बड़ा कोई दान नहीं है। मनु और याज्ञवल्क्य दोनों ने बार-बार गौ दान की प्रशंसा की है।', source: 'ब्रह्मर्षि देवराहा बाबा के दिव्य वचन' },
    { text: 'गाय भजन, श्रवण, दान और भगवान के दर्शन से भी श्रेष्ठ है। गाय सभी पापों का नाश करती है और यज्ञ का मूल साधन भी गाय ही है। गाय की पूजा से इस लोक और परलोक दोनों की प्राप्ति होती है। स्वर्ग में भी गायों की पूजा होती है।', source: 'महाभारत (अनु. 115/26-27; 29, 33)' },
  ],
};
