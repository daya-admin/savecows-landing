export const LOCALES = ['en', 'ru', 'hi'] as const
export type Locale = (typeof LOCALES)[number]
export const DEFAULT_LOCALE: Locale = 'en'

export const messages = {
  en: {
    SaveCows: {
      hero: {
        title1: 'Protect Sacred Life.',
        title2: 'Nourish the Future.',
        badge: 'Save Cow Save Earth',
        subtitleBefore: 'Help us provide',
        subtitleBold: 'a full year of nourishment',
        subtitleAfter: 'for rescued and protected cows.',
        donateNow: 'Donate Now',
      },
      campaign: {
        togetherTitle: 'Together we can make a difference',
        goalTitle: 'Feed 1000+ Cows for 1 Year',
        raised: 'raised',
        goal: 'goal',
        funded: 'funded',
        donor: 'donor',
        donors: 'donors',
        daysLeft: 'days left',
        urgency: 'Only {days} days remaining! Help us reach our goal.',
        loading: 'Loading...',
      },
      donation: {
        title: "Support a Cow's Life",
        costInfo: 'Caring for one cow costs approximately',
        costAmount: '₹5,000 per month',
        popular: 'Popular',
        tierDays3: '3 days',
        tierWeek: '1 week',
        tierMonth: '1 month',
        tierMultiple: 'Multiple cows',
        customLabel: 'Or enter a custom amount:',
        customPlaceholder: 'Enter amount',
        customRange: 'Min ₹100 · Max ₹2,00,000',
        quote: 'You can take care of a life, even for a single day.',
        donateAmount: 'Donate ₹{amount}',
        securePayment: 'Secure payment powered by Razorpay',
      },
      story: {
        aboutTitle: 'About Our Goshala',
        aboutP1:
          'Our shelter is located in the holy city of Vrindavan, on the banks of the sacred Yamuna, within the Ashram of Shri Devraha Baba. This is a place where love and care become a reality for over 1,000 cows. We take under our protection not only healthy cows and bulls but also those who are in special need of help: the sick and cows with physical challenges, who find shelter and care in our ashram. We strive to surround every Gau-mata under our care with the utmost attention, creating an atmosphere of peace and love for them.',
        aboutP2:
          'In our Ashram, cows are not seen as financial instruments for profit. They live here for their entire lives, and after their natural death, they are buried with honors and the recitation of mantras, as sacred beings. Each cow is given a name, as they deeply value personal attention and love, which even physically reflects in their health and the amount of milk they produce.',
        whyCareTitle: 'Why We Care for Cows',
        whyCareText:
          'In the Vedic scriptures — the Shastras and Puranas — it is said that the cow is the abode of all gods and goddesses. Gau-mata is the living embodiment of maternal love, selflessly sharing her energy with all of humanity. Caring for cows (Gau-seva) is the highest act of virtue, a creation of good karma that requires no special reason, as love and compassion are natural to the human heart. By helping cows, you perform a noble deed, which, according to spiritual teachings, returns to the giver multiplied many times over.',
        rareBreedsTitle: 'Preserving Rare Cow Breeds',
        rareBreedsText:
          'Previously, there were more than a hundred breeds of cows in India, but today only 32 remain. The Ashram of Shri Devraha Baba is dedicated to preserving and reproducing these rare breeds.',
        ecologicalTitle: 'The Ecological Significance of Cows and Bulls',
        ecologicalSubtitle: 'Cows are a source of blessings that allow the creation of eco-friendly life-support systems:',
        biogas: 'Biogas',
        biogasDesc:
          'Cow dung in the Ashram is used to produce biogas, which provides fuel for cooking prasadam for thousands of people and for preparing Ayurvedic medicines.',
        zeroWaste: 'Zero-waste and eco-friendly production',
        zeroWasteDesc:
          'Paper, packaging, disposable tableware, and napkins are made from the cellulose in cow dung. This helps preserve forests and nature by replacing tree cutting with the use of cow by-products.',
        stoneGrinding: 'Stone-grinding with bulls',
        stoneGrindingDesc:
          'Bulls help turn stone mills, producing flour without heat treatment and preserving all the nutrients of the grain. This method is completely ecological: there is no waste, no electricity is consumed, and the air is not polluted.',
        ayurveda: 'Ayurveda',
        ayurvedaDesc:
          'Products derived from cows (Panchagavya) are indispensable in the preparation of important Ayurvedic medicines and for purifying herbs, minerals, and metals.',
        foundation: 'Foundation of well-being',
        foundationDesc:
          'It is believed that if a household has five cows or bulls, and they are cared for properly, each family member will be provided with food, everything needed for Vedic rituals, and even their own housing.',
      },
      cta: {
        protect: 'Protect rare and sacred cow breeds',
        sustain: 'Sustain a cruelty-free sanctuary',
        support: 'Support ecological balance',
        donateNow: 'Donate Now',
      },
      urgentAppeal: {
        title: 'Urgent Appeal — Spring Feed Purchase',
        text: "The most critical time of the year has arrived. The ashram's own lands can provide only 5–7% of the cows' annual food needs. The entire main supply of feed for the year must be purchased within a short period: from mid-March to the end of April. This is a time of intensive work, on which the well-being of our cows for the coming months depends. We invite you to join this important mission and help us establish the annual food fund.",
      },
      whereDonationsGo: {
        title: 'Where Your Donations Go',
        intro: 'Every donation you make turns into high-quality food for the cows. During this period, we purchase:',
        busa: 'Busa',
        busaDesc: 'carefully selected dry hay.',
        khal: 'Khal',
        khalDesc: 'nutritious mustard cake.',
        grains: 'Grain mixes',
        grainsDesc: 'wheat, barley, bajra, and other types of grains and millets.',
        completeDiet: 'We provide a complete diet to ensure our cows remain healthy and strong.',
        trustTitle: 'Trust and Assurance',
        trustText:
          'You can be 100% confident that every contribution will be used exclusively for the cows\' needs and the purchase of feed. Your participation in Gau-seva is not just financial support; it is an investment in your "spiritual treasury," bringing blessings to you and your loved ones. Let us perform this noble service together!',
      },
      video: {
        title: 'Help Us Provide Food for 1,000 Cows for an Entire Year',
        donateNow: 'Donate Now',
      },
      adopt: {
        title: 'Looking for a deeper connection?',
        p1: "Adoption is a deeper, more personal way to care — where your support becomes part of a cow's life.",
        p2: 'You can personally support and stay connected with a cow through our adoption program.',
        link: 'Adopt a Cow →',
      },
      international: {
        title: 'International Donors',
        subtitle: "For donations from outside India, please don't hesitate to get in touch with us for alternative payment methods.",
      },
      footer: {
        description: 'Kamdhenuseva is an initiative by Shri Devraha Baba Ashram dedicated to the welfare of cows.',
        quickLinks: 'Quick Links',
        home: 'Home',
        aboutUs: 'About Us',
        donate: 'Donate',
        adoptCow: 'Adopt a Cow',
        gallery: 'Gallery',
        faq: 'FAQ',
        contact: 'Contact',
        legal: 'Legal',
        privacy: 'Privacy Policy',
        donationPolicy: 'Donation Policy',
        allRights: 'All rights reserved.',
      },
    },
  },
  ru: {
    SaveCows: {
      hero: {
        title1: 'Заботясь о Корове Матери,',
        title2: 'мы создаем будущее.',
        badge: 'Сохрани коров, сохрани Землю',
        subtitleBefore: 'Помогите нам обеспечить',
        subtitleBold: 'целый год полноценного питания',
        subtitleAfter: 'для спасенных и находящихся под нашей опекой коров в Ашраме Шри Девраха Бабы.',
        donateNow: 'Пожертвовать',
      },
      campaign: {
        togetherTitle: 'Вместе мы можем изменить мир',
        goalTitle: 'Помогите обеспечить 1000+ коров кормом на 1 год',
        raised: 'собрано',
        goal: 'цель',
        funded: 'собрано',
        donor: 'спонсор',
        donors: 'спонсоров',
        daysLeft: 'дней осталось',
        urgency: 'Осталось всего {days} дней! Помогите нам достичь цели.',
        loading: 'Загрузка...',
      },
      donation: {
        title: 'Поддержи жизнь коровушки',
        costInfo: 'Содержание и кормление одной коровы стоит около',
        costAmount: '5000 индийских рупий в месяц',
        popular: 'Популярно',
        tierDays3: '3 дня',
        tierWeek: '1 неделя',
        tierMonth: '1 месяц',
        tierMultiple: 'Несколько коров',
        customLabel: 'Или введите свою сумму:',
        customPlaceholder: 'Введите сумму',
        customRange: 'Мин. ₹100 · Макс. ₹2,00,000',
        quote: 'Даже один день кормления — это огромная помощь',
        donateAmount: 'Пожертвовать ₹{amount}',
        securePayment: 'Безопасная оплата через Razorpay',
      },
      story: {
        aboutTitle: 'О нашей Гошале',
        aboutP1:
          'Наш приют расположен в святом городе Вриндаван, на берегу священной реки Ямуны, в Ашраме Шри Девраха Бабы. Это место, где любовь и забота становятся реальностью для более 1000 коров. Мы берем под свою опеку не только здоровых коров и бычков, но и тех, кто особенно нуждается в помощи: больных и коров с ограниченными физическими возможностями, которые находят в нашем ашраме защиту и уход. Мы стремимся окружить каждую подопечную Гау-мату максимальным вниманием, создавая для них атмосферу покоя и любви.',
        aboutP2:
          'В нашем Ашраме коровы не рассматриваются как финансовый инструмент для извлечения прибыли. Они проживают здесь всю свою жизнь, а после естественной смерти их хоронят с почестями и чтением мантр, как священных существ. Коров зовут по именам, так как они очень ценят личное внимание и любовь, что даже физически отражается на их состоянии и количестве молока.',
        whyCareTitle: 'Почему мы заботимся о коровах?',
        whyCareText:
          'В ведических писаниях — Шастрах и Пуранах — говорится, что корова является обителью всех богов и богинь. Гау-мата — это живое воплощение материнской любви, которая бескорыстно делится своей энергией со всем человечеством. Забота о коровах (Гау-сева) — это высшее благое дело, создание хорошей кармы, которое не требует специальных причин, ведь любовь и сострадание естественны для человеческого сердца. Помогая коровам, вы совершаете благородный поступок, который, согласно духовным учениям, возвращается к дарителю, приумноженным во много раз.',
        rareBreedsTitle: 'Сохранение редких пород коров',
        rareBreedsText:
          'Прежде в Индии процветало более ста самобытных пород коров, однако до наших дней сохранилось лишь 32 из них. Ашрам Шри Девраха Баба посвятил свою деятельность благородной миссии — защите и восстановлению численности этих уникальных и редких созданий, стремясь сберечь исчезающее наследие.',
        ecologicalTitle: 'Экологическая значимость коров и быков',
        ecologicalSubtitle: 'Корова является источником благ, которые позволяют создавать экологически чистые (eco-friendly) системы жизнеобеспечения:',
        biogas: 'Биогаз',
        biogasDesc:
          'Из коровьего навоза в ашраме производят биогаз, который используется для приготовления пищи (прасада) на тысячи человек и создания аюрведических лекарств.',
        zeroWaste: 'Безотходное и экологичное производство',
        zeroWasteDesc:
          'Производство бумаги, упаковки, одноразовой посуды и салфеток из клетчатки (целлюлозы) навоза. Это позволяет сохранять леса и природу, заменяя вырубку деревьев использованием продуктов жизнедеятельности коров.',
        stoneGrinding: 'Помол зерна с помощью быков',
        stoneGrindingDesc:
          'Быки помогают приводить в движение каменные жернова, благодаря чему мы получаем муку без термообработки. Такой метод полностью экологичен: нет отходов, не тратится электричество, воздух не загрязняется.',
        ayurveda: 'Аюрведа',
        ayurvedaDesc:
          'Продукты, получаемые от коровы (Панчагавья), незаменимы в производстве серьезных аюрведических препаратов, а также для очистки трав, минералов и металлов.',
        foundation: 'Фундамент благополучия',
        foundationDesc:
          'Считается, что если в семье есть пять коров или быков, то при правильном подходе каждый член семьи будет обеспечен питанием, всем необходимым для ведических ритуалов и даже собственным жильем.',
      },
      cta: {
        protect: 'Сохранение редких и священных пород коров.',
        sustain: 'Поддержка безопасной и любящей обители',
        support: 'Восстановление экологического равновесия',
        donateNow: 'Пожертвовать',
      },
      urgentAppeal: {
        title: 'Срочный сбор — Весенняя закупка корма',
        text: 'Сейчас наступило самое ответственное время года. Собственные земли нашего Ашрама могут обеспечить лишь 5–7% от годовой потребности коров в пище. Весь основной запас корма на целый год вперед необходимо закупить в короткий период: с середины марта до конца апреля. Это время интенсивной работы, от которого зависит благополучие наших подопечных в течение всех последующих месяцев. Мы приглашаем вас стать частью этой важной миссии и помочь нам сформировать годовой фонд продовольствия.',
      },
      whereDonationsGo: {
        title: 'На что пойдут ваши пожертвования?',
        intro: 'Каждое ваше пожертвование превращается в качественное питание для коров. В этот период мы закупаем:',
        busa: 'Буса',
        busaDesc: 'отборное сухое сено.',
        khal: 'Кхал',
        khalDesc: 'питательный горчичный жмых.',
        grains: 'Зерновые смеси',
        grainsDesc: 'пшеницу, ячмень, баджру и другие виды злаков и миллетов.',
        completeDiet: 'Мы обеспечиваем полноценный рацион, чтобы наши коровы оставались здоровыми и сильными.',
        trustTitle: 'Гарантии и доверие',
        trustText:
          'Вы можете быть на 100% уверены, что каждое пожертвованное средство будет направлено исключительно на нужды коров и закупку корма. Ваше участие в Гау-севе — это не просто финансовая помощь, это вклад в вашу «духовную копилку», который принесет благословения вам и вашим близким. Давайте совершать это благородное служение вместе!',
      },
      video: {
        title: 'Помогите нам обеспечить кормом 1000 коров на целый год.',
        donateNow: 'Пожертвовать',
      },
      adopt: {
        title: 'Хотите, чтобы ваше служение было еще глубже?',
        p1: 'Опека — это путь личного и искреннего служения, где ваша забота становится неотъемлемой частью жизни священной коровы или бычка.',
        p2: 'Благодаря нашей программе вы можете лично поддерживать корову на протяжении всей ее жизни и сохранять с ней постоянную связь.',
        link: 'Стать опекуном коровы →',
      },
      international: {
        title: 'Международные опекуны',
        subtitle:
          'Ваше милосердие не знает границ. Если вы находитесь за пределами Индии и желаете поддержать благородную миссию Шри Девраха Баба Ашрама, пожалуйста, свяжитесь с нами. Мы предоставим вам удобные альтернативные способы для совершения вашего пожертвования.',
      },
      footer: {
        description: 'Камдхенусева — инициатива Ашрама Шри Девраха Бабы, посвященная благополучию коров.',
        quickLinks: 'Быстрые ссылки',
        home: 'Главная',
        aboutUs: 'О нас',
        donate: 'Пожертвовать',
        adoptCow: 'Взять корову под опеку',
        gallery: 'Галерея',
        faq: 'Часто задаваемые вопросы',
        contact: 'Контакты',
        legal: 'Правовая информация',
        privacy: 'Политика конфиденциальности',
        donationPolicy: 'Политика пожертвований',
        allRights: 'Все права защищены.',
      },
    },
  },
  hi: {
    SaveCows: {
      hero: {
        title1: 'पवित्र जीवन की रक्षा करें।',
        title2: 'भविष्य का पोषण करें।',
        badge: 'गौ बचाओ धरती बचाओ',
        subtitleBefore: 'बचाई गई और संरक्षित गायों के लिए',
        subtitleBold: 'पूरे वर्ष के पोषण',
        subtitleAfter: 'में हमारी सहायता करें।',
        donateNow: 'अभी दान करें',
      },
      campaign: {
        togetherTitle: 'मिलकर हम बदलाव ला सकते हैं',
        goalTitle: '1000+ गायों को 1 साल तक खिलाएं',
        raised: 'एकत्रित',
        goal: 'लक्ष्य',
        funded: 'पूर्ण',
        donor: 'दाता',
        donors: 'दाता',
        daysLeft: 'दिन शेष',
        urgency: 'केवल {days} दिन शेष! हमारे लक्ष्य तक पहुंचने में सहायता करें।',
        loading: 'लोड हो रहा है...',
      },
      donation: {
        title: 'एक गाय के जीवन का सहारा बनें',
        costInfo: 'एक गाय की देखभाल में लगभग खर्च आता है',
        costAmount: '₹5,000 प्रति माह',
        popular: 'लोकप्रिय',
        tierDays3: '3 दिन',
        tierWeek: '1 सप्ताह',
        tierMonth: '1 महीना',
        tierMultiple: 'कई गायें',
        customLabel: 'या अपनी राशि दर्ज करें:',
        customPlaceholder: 'राशि दर्ज करें',
        customRange: 'न्यूनतम ₹100 · अधिकतम ₹2,00,000',
        quote: 'आप एक दिन के लिए भी एक जीवन की देखभाल कर सकते हैं।',
        donateAmount: '₹{amount} दान करें',
        securePayment: 'Razorpay द्वारा सुरक्षित भुगतान',
      },
      story: {
        aboutTitle: 'हमारी गौशाला के बारे में',
        aboutP1:
          'हमारा आश्रय पवित्र वृंदावन शहर में, पवित्र यमुना के तट पर, श्री देवराहा बाबा के आश्रम में स्थित है। यह वह स्थान है जहाँ 1,000 से अधिक गायों के लिए प्रेम और देखभाल वास्तविकता बन जाती है। हम न केवल स्वस्थ गायों और बैलों को बल्कि विशेष रूप से सहायता की आवश्यकता वाले - बीमार और शारीरिक चुनौतियों वाली गायों को भी अपनी सुरक्षा में लेते हैं, जो हमारे आश्रम में आश्रय और देखभाल पाती हैं।',
        aboutP2:
          'हमारे आश्रम में, गायों को लाभ के वित्तीय साधन के रूप में नहीं देखा जाता। वे यहाँ अपना पूरा जीवन बिताती हैं, और अपनी स्वाभाविक मृत्यु के बाद, उन्हें सम्मान और मंत्रों के पाठ के साथ दफनाया जाता है, पवित्र प्राणियों के रूप में।',
        whyCareTitle: 'हम गायों की देखभाल क्यों करते हैं',
        whyCareText:
          'वैदिक शास्त्रों — शास्त्रों और पुराणों में कहा गया है कि गाय सभी देवी-देवताओं का निवास स्थान है। गौ-माता मातृ प्रेम का जीवित अवतार है, जो निस्वार्थ रूप से सम्पूर्ण मानवता के साथ अपनी ऊर्जा साझा करती है। गायों की देखभाल (गौ-सेवा) पुण्य का सर्वोच्च कार्य है, अच्छे कर्म का निर्माण जिसके लिए किसी विशेष कारण की आवश्यकता नहीं है, क्योंकि प्रेम और करुणा मानव हृदय के लिए स्वाभाविक हैं।',
        rareBreedsTitle: 'दुर्लभ गाय नस्लों का संरक्षण',
        rareBreedsText:
          'पहले भारत में गायों की सौ से अधिक नस्लें थीं, लेकिन आज केवल 32 बची हैं। श्री देवराहा बाबा का आश्रम इन दुर्लभ नस्लों के संरक्षण और प्रजनन के लिए समर्पित है।',
        ecologicalTitle: 'गायों और बैलों का पारिस्थितिक महत्व',
        ecologicalSubtitle: 'गायें आशीर्वाद का स्रोत हैं जो पर्यावरण-अनुकूल जीवन-सहायता प्रणालियों के निर्माण की अनुमति देती हैं:',
        biogas: 'बायोगैस',
        biogasDesc:
          'आश्रम में गोबर का उपयोग बायोगैस उत्पादन के लिए किया जाता है, जो हजारों लोगों के लिए प्रसाद पकाने और आयुर्वेदिक दवाइयाँ तैयार करने के लिए ईंधन प्रदान करता है।',
        zeroWaste: 'शून्य-अपशिष्ट और पर्यावरण-अनुकूल उत्पादन',
        zeroWasteDesc:
          'गोबर के सेल्युलोज से कागज, पैकेजिंग, डिस्पोजेबल बर्तन और नैपकिन बनाए जाते हैं। यह पेड़ों की कटाई को गौ उत्पादों से बदलकर वनों और प्रकृति को संरक्षित करने में मदद करता है।',
        stoneGrinding: 'बैलों से पत्थर पीसना',
        stoneGrindingDesc:
          'बैल पत्थर की चक्कियाँ चलाने में मदद करते हैं, बिना ताप उपचार के आटा तैयार करते हैं और अनाज के सभी पोषक तत्वों को सुरक्षित रखते हैं। यह विधि पूर्णतया पारिस्थितिक है।',
        ayurveda: 'आयुर्वेद',
        ayurvedaDesc:
          'गायों से प्राप्त उत्पाद (पंचगव्य) महत्वपूर्ण आयुर्वेदिक दवाइयों की तैयारी और जड़ी-बूटियों, खनिजों और धातुओं के शुद्धिकरण में अपरिहार्य हैं।',
        foundation: 'कल्याण की नींव',
        foundationDesc:
          'माना जाता है कि यदि परिवार में पाँच गायें या बैल हों, तो सही दृष्टिकोण से परिवार का प्रत्येक सदस्य भोजन, वैदिक अनुष्ठानों के लिए सभी आवश्यक वस्तुओं और यहाँ तक कि अपने स्वयं के आवास से भी संपन्न होगा।',
      },
      cta: {
        protect: 'दुर्लभ और पवित्र गाय नस्लों की रक्षा करें',
        sustain: 'क्रूरता-मुक्त अभयारण्य का समर्थन करें',
        support: 'पारिस्थितिक संतुलन का समर्थन करें',
        donateNow: 'अभी दान करें',
      },
      urgentAppeal: {
        title: 'तत्काल अपील — वसंत चारा खरीद',
        text: 'वर्ष का सबसे महत्वपूर्ण समय आ गया है। आश्रम की अपनी भूमि गायों की वार्षिक भोजन आवश्यकताओं का केवल 5-7% ही प्रदान कर सकती है। वर्ष भर का संपूर्ण मुख्य चारा एक छोटी अवधि में खरीदना होता है: मार्च के मध्य से अप्रैल के अंत तक। यह गहन कार्य का समय है, जिस पर आने वाले महीनों में हमारी गायों का कल्याण निर्भर करता है। हम आपको इस महत्वपूर्ण मिशन में शामिल होने और वार्षिक भोजन कोष स्थापित करने में हमारी सहायता करने के लिए आमंत्रित करते हैं।',
      },
      whereDonationsGo: {
        title: 'आपका दान कहाँ जाता है',
        intro: 'आपका हर दान गायों के लिए उच्च गुणवत्ता वाले भोजन में बदल जाता है। इस अवधि के दौरान, हम खरीदते हैं:',
        busa: 'भूसा',
        busaDesc: 'सावधानी से चयनित सूखी घास।',
        khal: 'खल',
        khalDesc: 'पौष्टिक सरसों की खली।',
        grains: 'अनाज मिश्रण',
        grainsDesc: 'गेहूं, जौ, बाजरा, और अन्य प्रकार के अनाज और बाजरे।',
        completeDiet: 'हम पूर्ण आहार प्रदान करते हैं ताकि हमारी गायें स्वस्थ और मजबूत रहें।',
        trustTitle: 'विश्वास और आश्वासन',
        trustText:
          'आप 100% आश्वस्त रह सकते हैं कि प्रत्येक योगदान का उपयोग विशेष रूप से गायों की आवश्यकताओं और चारा खरीद के लिए किया जाएगा। गौ-सेवा में आपकी भागीदारी केवल वित्तीय सहायता नहीं है; यह आपके "आध्यात्मिक कोष" में एक निवेश है, जो आपको और आपके प्रियजनों को आशीर्वाद देता है। आइए, साथ मिलकर यह पवित्र सेवा करें!',
      },
      video: {
        title: '1,000 गायों को पूरे वर्ष का भोजन प्रदान करने में हमारी सहायता करें',
        donateNow: 'अभी दान करें',
      },
      adopt: {
        title: 'एक गहरा जुड़ाव चाहते हैं?',
        p1: 'गोद लेना देखभाल का एक गहरा, अधिक व्यक्तिगत तरीका है — जहाँ आपका समर्थन एक गाय के जीवन का हिस्सा बन जाता है।',
        p2: 'आप हमारे गोद लेने के कार्यक्रम के माध्यम से व्यक्तिगत रूप से एक गाय का समर्थन कर सकते हैं और जुड़े रह सकते हैं।',
        link: 'एक गाय गोद लें →',
      },
      international: {
        title: 'अंतर्राष्ट्रीय दाता',
        subtitle: 'भारत के बाहर से दान के लिए, कृपया वैकल्पिक भुगतान विधियों के लिए हमसे संपर्क करने में संकोच न करें।',
      },
      footer: {
        description: 'कामधेनुसेवा श्री देवराहा बाबा आश्रम की एक पहल है जो गायों के कल्याण के लिए समर्पित है।',
        quickLinks: 'त्वरित लिंक',
        home: 'मुख्य पृष्ठ',
        aboutUs: 'हमारे बारे में',
        donate: 'दान करें',
        adoptCow: 'गाय गोद लें',
        gallery: 'गैलरी',
        faq: 'सामान्य प्रश्न',
        contact: 'संपर्क',
        legal: 'कानूनी',
        privacy: 'गोपनीयता नीति',
        donationPolicy: 'दान नीति',
        allRights: 'सर्वाधिकार सुरक्षित।',
      },
    },
  },
} as const satisfies Record<Locale, unknown>

export type Messages = (typeof messages)[Locale]
