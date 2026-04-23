const EVENTS_DB = {

  ev1: {
    category:    'tech',
    badgeClass:  'badge-tech',
    image:       'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80',
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&q=80',
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&q=80',
      'https://images.unsplash.com/photo-1573167101669-476592bed053?w=400&q=80',
      'https://images.unsplash.com/photo-1558008258-3256797b43f3?w=400&q=80',
    ],
    status:      { ar: 'اليوم',       en: 'Today' },
    statusClass: 'bg-danger',
    ar: {
      badge:       '💻 تقنية',
      title:       'ورشة تطوير تطبيقات الموبايل',
      date:        '11 أبريل 2026، 10:00 صباحاً',
      dateShort:   '11 أبريل 2026',
      dayFull:     'الأحد، 11 أبريل 2026',
      time:        '10:00 صباحاً - 02:00 مساءً',
      duration:    'المدة: 4 ساعات',
      timezone:    'التوقيت: GMT+3 (دمشق)',
      place:       'قاعة التقنية، المبنى أ',
      placeDetail: 'قاعة التقنية - المبنى أ، الطابق 1',
      city:        'دمشق، سوريا',
      near:        'بالقرب من مبنى الإدارة',
      mapLabel:    'قاعة التقنية، دمشق',
      participants:'50+ مشارك',
      duration2:   '4 ساعات',
      desc1:       'ورشة عملية مكثفة تهدف إلى تعليم أحدث أدوات تطوير تطبيقات الموبايل، بما في ذلك React Native وFlutter وإدارة قواعد البيانات الحديثة مع مدربين معتمدين.',
      desc2:       'مناسبة للمبتدئين والمتوسطين الراغبين في تعلم تطوير تطبيقات الموبايل بشكل عملي. ستحصل على شهادة حضور معتمدة عند إتمام الورشة.',
      organizer:   'الجامعة الافتراضية السورية',
      orgDept:     'SVU - قسم التقنية والمعلوماتية',
    },
    en: {
      badge:       '💻 Tech',
      title:       'Mobile App Development Workshop',
      date:        'April 11, 2026, 10:00 AM',
      dateShort:   'April 11, 2026',
      dayFull:     'Sunday, April 11, 2026',
      time:        '10:00 AM – 2:00 PM',
      duration:    'Duration: 4 Hours',
      timezone:    'Timezone: GMT+3 (Damascus)',
      place:       'Tech Hall, Building A',
      placeDetail: 'Tech Hall - Building A, Floor 1',
      city:        'Damascus, Syria',
      near:        'Near the Administration Building',
      mapLabel:    'Tech Hall, Damascus',
      participants:'50+ Participants',
      duration2:   '4 Hours',
      desc1:       'An intensive hands-on workshop aimed at teaching the latest mobile app development tools, including React Native, Flutter, and modern database management with certified trainers.',
      desc2:       'Suitable for beginners and intermediate learners who want to learn mobile app development practically. You will receive a certified attendance certificate upon completion.',
      organizer:   'Syrian Virtual University',
      orgDept:     'SVU - Technology & Information Dept.',
    },
    stats: [ { icon:'👩‍🏫', val:'3', key:'stat-speaker' }, { icon:'💻', val:'4', key:'stat-workshop' }, { icon:'👥', val:'50+', key:'stat-participant' }, { icon:'🏅', val:'1', key:'stat-prizes' } ],
    related: ['ev2','ev7'],
  },

  ev2: {
    category:    'culture',
    badgeClass:  'badge-culture',
    image:       'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&q=80',
      'https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&q=80',
      'https://images.unsplash.com/photo-1558008258-3256797b43f3?w=400&q=80',
      'https://images.unsplash.com/photo-1573167101669-476592bed053?w=400&q=80',
    ],
    status:      { ar: 'قادم قريباً', en: 'Coming Soon' },
    statusClass: 'bg-warning text-dark',
    ar: {
      badge:       '🎭 ثقافة',
      title:       'مؤتمر الذكاء الاصطناعي ',
      date:        '20 أبريل 2026، 09:00 صباحاً',
      dateShort:   '20 أبريل 2026',
      dayFull:     'الإثنين، 20 أبريل 2026',
      time:        '09:00 صباحاً - 05:00 مساءً',
      duration:    'المدة: 8 ساعات',
      timezone:    'التوقيت: GMT+3 (دمشق)',
      place:       'القاعة الرئيسية، دمشق',
      placeDetail: 'القاعة الرئيسية - مبنى الإدارة المركزية',
      city:        'دمشق، سوريا',
      near:        'بالقرب من ساحة الأمويين',
      mapLabel:    'القاعة الرئيسية، دمشق',
      participants:'500+ مشارك',
      duration2:   '8 ساعات',
      desc1:       'فعالية تجمع خبراء في الذكاء الاصطناعي لمناقشة احدث التطورات والابتكارات والتطبيقات العملية .',
      desc2:       'يتضمن المؤتمر جلسات رئيسية , وورش عمل تفاعلية وعروض تقديمية تغطي مجالات مثل تعلم الاّلة , معالجة اللغات الطبيعية , والرؤية الحاسوبية ',
      organizer:   'الجامعة الافتراضية السورية',
      orgDept:     'SVU - قسم الفعاليات والأنشطة',
    },
    en: {
      badge:       '🎭 Culture',
      title:       'Conference on Artificial Intelligence',
      date:        'April 20, 2026, 09:00 AM',
      dateShort:   'April 20, 2026',
      dayFull:     'Monday, April 20, 2026',
      time:        '09:00 AM – 05:00 PM',
      duration:    'Duration: 8 Hours',
      timezone:    'Timezone: GMT+3 (Damascus)',
      place:       'Main Hall, Damascus',
      placeDetail: 'Main Hall - Central Administration Building',
      city:        'Damascus, Syria',
      near:        'Near Umayyad Square',
      mapLabel:    'Main Hall, Damascus',
      participants:'500+ Participants',
      duration2:   '8 Hours',
      desc1:       'An event bringing together experts in artificial intelligence to discuss the latest developments, innovations, and practical applications in the field.',
      desc2:       'The conference includes keynote sessions, interactive workshops, and presentations covering areas such as machine learning, natural language processing, and computer vision.',
      organizer:   'Syrian Virtual University',
      orgDept:     'SVU - Events & Activities Dept.',
    },
    stats: [ { icon:'🎤', val:'20+', key:'stat-speaker' }, { icon:'🛠️', val:'12', key:'stat-workshop' }, { icon:'👥', val:'500+', key:'stat-participant' }, { icon:'🏆', val:'5', key:'stat-prizes' } ],
    related: ['ev1','ev7'],
  },

  ev3: {
    category:    'music',
    badgeClass:  'badge-music',
    image:       'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80',
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&q=80',
      'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&q=80',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&q=80',
      'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&q=80',
    ],
    status:      { ar: 'قادم قريباً', en: 'Coming Soon' },
    statusClass: 'bg-warning text-dark',
    ar: {
      badge:       '🎵 موسيقى',
      title:       'مهرجان الموسيقى السنوي ',
      date:        '25 أبريل 2026، 07:00 مساءً',
      dateShort:   '25 أبريل 2026',
      dayFull:     'السبت، 25 أبريل 2026',
      time:        '07:00 مساءً - 11:00 مساءً',
      duration:    'المدة: 4 ساعات',
      timezone:    'التوقيت: GMT+3 (دمشق)',
      place:       'المسرح الوطني، دمشق',
      placeDetail: 'المسرح الوطني - القاعة الكبرى',
      city:        'دمشق، سوريا',
      near:        'وسط دمشق - بالقرب من الأوبرا',
      mapLabel:    'المسرح الوطني، دمشق',
      participants:'دخول مجاني',
      duration2:   '4 ساعات',
      desc1:       'ليلة موسيقية استثنائية تجمع أمهر العازفين والمطربين في أجواء من الفن الأصيل والتراث العربي العريق. يتضمن المهرجان عروضاً للموسيقى الكلاسيكية العربية من أوبرا دمشق.',
      desc2:       'حدث ثقافي بامتياز يجمع عشاق الموسيقى الراقية. حضور مجاني للجميع مع حجز مسبق للمقاعد.',
      organizer:   'الجامعة الافتراضية السورية',
      orgDept:     'SVU - قسم النشاطات الثقافية',
    },
    en: {
      badge:       '🎵 Music',
      title:       'Arabic Classical Music Festival',
      date:        'April 25, 2026, 07:00 PM',
      dateShort:   'April 25, 2026',
      dayFull:     'Saturday, April 25, 2026',
      time:        '07:00 PM – 11:00 PM',
      duration:    'Duration: 4 Hours',
      timezone:    'Timezone: GMT+3 (Damascus)',
      place:       'National Theatre, Damascus',
      placeDetail: 'National Theatre - Grand Hall',
      city:        'Damascus, Syria',
      near:        'Central Damascus - Near the Opera',
      mapLabel:    'National Theatre, Damascus',
      participants:'Free Entry',
      duration2:   '4 Hours',
      desc1:       'An exceptional musical evening featuring the finest musicians and singers in an atmosphere of authentic Arab art and rich heritage. The festival includes classical Arabic music performances from Damascus Opera.',
      desc2:       'A premier cultural event for lovers of fine music. Free attendance for all with advance seat reservation.',
      organizer:   'Syrian Virtual University',
      orgDept:     'SVU - Cultural Activities Dept.',
    },
    stats: [ { icon:'🎻', val:'15', key:'stat-speaker' }, { icon:'🎼', val:'3', key:'stat-workshop' }, { icon:'👥', val:'300+', key:'stat-participant' }, { icon:'🎖️', val:'2', key:'stat-prizes' } ],
    related: ['ev6','ev4'],
  },

  ev4: {
    category:    'sports',
    badgeClass:  'badge-sports',
    image:       'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80',
      'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=400&q=80',
      'https://images.unsplash.com/photo-1547347298-4074fc3086f0?w=400&q=80',
      'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&q=80',
      'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=400&q=80',
    ],
    status:      { ar: 'قادم قريباً', en: 'Coming Soon' },
    statusClass: 'bg-warning text-dark',
    ar: {
      badge:       '⚽ ترفيهية ',
      title:       'بطولة الالعاب الالكترونية ',
      date:        '1 مايو 2026',
      dateShort:   '1 - 10 مايو 2026',
      dayFull:     'الجمعة، 1 مايو 2026',
      time:        '04:00 مساءً - 09:00 مساءً',
      duration:    'المدة: 10 أيام',
      timezone:    'التوقيت: GMT+3 (دمشق)',
      place:       'الملعب الأولمبي، دمشق',
      placeDetail: 'الصالة الرياضية المغلقة ',
      city:        'دمشق، سوريا',
      near:        'المدينة الرياضية، دمشق',
      mapLabel:    'مركز الالعاب الالكترونية ',
      participants:'+200 لاعب ',
      duration2:   '10 أيام',
      desc1:       'فعالية تنافسية تجمع اللاعبين من مختلف المستويات للمشاركة في بطولات حماسية على اشهر الالعاب مثل FIFA , COD ,PUBG',
      desc2:       'تتضمن البطولة مراحل تصفية ونهائيات مباشرة , مع جوائز قيمة وفرص لابراز المواهب في عالم الرياضات الالكترونية , كما توفر اجواء تفاعلية مليئة بالحماس , مع امكانية متابعة المباريات والتشجيع',
      organizer:   'الجامعة الافتراضية السورية',
      orgDept:     'SVU - قسم  الرياضات الالكترونية ',
    },
    en: {
      badge:       '⚽ Entertainment',
      title:       'International Electronic Games Championship',
      date:        'May 1, 2026',
      dateShort:   'May 1 - 10, 2026',
      dayFull:     'Friday, May 1, 2026',
      time:        '04:00 PM – 09:00 PM',
      duration:    'Duration: 10 Days',
      timezone:    'Timezone: GMT+3 (Damascus)',
      place:       'Olympic Stadium, Damascus',
      placeDetail: 'International Olympic Stadium',
      city:        'Damascus, Syria',
      near:        'Sports City, Damascus',
      mapLabel:    'Center games Electronic',
      participants:'+200 Players',
      duration2:   '10 Days',
      desc1:       'An exciting competition bringing together university players from different levels to participate in thrilling tournaments of popular games like FIFA, COD, and PUBG.',
      desc2:       'The championship features elimination rounds and direct finals, offering valuable prizes and opportunities to showcase talent in the world of electronic sports, while providing an interactive atmosphere filled with excitement and the chance to follow matches and cheer on your favorite teams.',
      organizer:   'Syrian Virtual University',
      orgDept:     'SVU - Electronic Sports Department ',
    },
    stats: [ { icon:'⚽', val:'16', key:'stat-speaker' }, { icon:'🎮', val:'32', key:'stat-workshop' }, { icon:'👥', val:'5000+', key:'stat-participant' }, { icon:'🏆', val:'3', key:'stat-prizes' } ],
    related: ['ev8','ev3'],
  },

  ev5: {
    category:    'art',
    badgeClass:  'badge-art',
    image:       'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&q=80',
      'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&q=80',
      'https://images.unsplash.com/photo-1547826039-bdbebbb0a5f5?w=400&q=80',
      'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&q=80',
      'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=400&q=80',
    ],
    status:      { ar: 'قادم قريباً', en: 'Coming Soon' },
    statusClass: 'bg-warning text-dark',
    ar: {
      badge:       '🎨 فنون',
      title:       'يوم المواهب والفنون الدولي ',
      date:        '15 أبريل 2026',
      dateShort:   '15 أبريل 2026',
      dayFull:     'الأربعاء، 15 أبريل 2026',
      time:        '10:00 صباحاً - 08:00 مساءً',
      duration:    'المدة: أسبوع كامل',
      timezone:    'التوقيت: GMT+3 (دمشق)',
      place:       'قاعة المعارض، دمشق',
      placeDetail: 'قاعة المعارض الدولية - الطابق الأرضي',
      city:        'دمشق، سوريا',
      near:        'بالقرب من المتحف الوطني',
      mapLabel:    'قاعة المعارض، دمشق',
      participants:'200+ فنان',
      duration2:   'أسبوع كامل',
      desc1:       'معرض دولي يضم أعمال فنية لطلاب من 30 جامعة عالمية، يشمل الرسم والنحت والفن الرقمي والتصوير الفوتوغرافي.',
      desc2:       'فرصة نادرة للتعرف على أبرز المواهب الفنية الجامعية وشراء الأعمال الفنية مباشرةً من الفنانين.',
      organizer:   'الجامعة الافتراضية السورية',
      orgDept:     'SVU - قسم الفنون والإبداع',
    },
    en: {
      badge:       '🎨 Arts',
      title:       'International Talent & Arts Day ',
      date:        'April 15, 2026',
      dateShort:   'April 15, 2026',
      dayFull:     'Wednesday, April 15, 2026',
      time:        '10:00 AM – 08:00 PM',
      duration:    'Duration: Full Week',
      timezone:    'Timezone: GMT+3 (Damascus)',
      place:       'Exhibition Hall, Damascus',
      placeDetail: 'International Exhibition Hall - Ground Floor',
      city:        'Damascus, Syria',
      near:        'Near the National Museum',
      mapLabel:    'Exhibition Hall, Damascus',
      participants:'200+ Artists',
      duration2:   'Full Week',
      desc1:       'An international exhibition featuring artworks by students from 30 global universities, including painting, sculpture, digital art and photography in its 10th distinguished edition.',
      desc2:       'A rare opportunity to discover top university artistic talents and purchase artworks directly from the artists.',
      organizer:   'Syrian Virtual University',
      orgDept:     'SVU - Arts & Creativity Dept.',
    },
    stats: [ { icon:'🎨', val:'200+', key:'stat-speaker' }, { icon:'🖼️', val:'30', key:'stat-workshop' }, { icon:'👥', val:'1000+', key:'stat-participant' }, { icon:'🏅', val:'10', key:'stat-prizes' } ],
    related: ['ev6','ev3'],
  },

  ev6: {
    category:    'family',
    badgeClass:  'badge-family',
    image:       'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80',
      'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&q=80',
      'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&q=80',
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&q=80',
      'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=400&q=80',
    ],
    status:      { ar: 'قادم قريباً', en: 'Coming Soon' },
    statusClass: 'bg-warning text-dark',
    ar: {
      badge:       '👨‍👩‍👧 عائلي',
      title:       'مهرجان العائلة المفتوح - نزهة الربيع',
      date:        '28 أبريل 2026، 09:00 صباحاً',
      dateShort:   '28 أبريل 2026',
      dayFull:     'الثلاثاء، 28 أبريل 2026',
      time:        '09:00 صباحاً - 05:00 مساءً',
      duration:    'المدة: يوم كامل',
      timezone:    'التوقيت: GMT+3 (دمشق)',
      place:       'حديقة تشرين العامة، دمشق',
      placeDetail: 'حديقة تشرين - المدخل الرئيسي',
      city:        'دمشق، سوريا',
      near:        'منطقة تشرين، دمشق',
      mapLabel:    'حديقة تشرين، دمشق',
      participants:'مفتوح للعائلات',
      duration2:   'يوم كامل',
      desc1:       'فعالية عائلية ممتعة تشمل الألعاب والأنشطة للأطفال والكبار مع وجبات مجانية وهدايا. يوم مليء بالمرح والبهجة لجميع أفراد الأسرة.',
      desc2:       'أنشطة متنوعة تشمل: الألعاب الرياضية، ورش الفنون للأطفال، موسيقى حية، ومسابقات بجوائز قيّمة.',
      organizer:   'الجامعة الافتراضية السورية',
      orgDept:     'SVU - قسم الشؤون الطلابية',
    },
    en: {
      badge:       '👨‍👩‍👧 Family',
      title:       'Open Family Festival - Spring Picnic',
      date:        'April 28, 2026, 09:00 AM',
      dateShort:   'April 28, 2026',
      dayFull:     'Tuesday, April 28, 2026',
      time:        '09:00 AM – 05:00 PM',
      duration:    'Duration: Full Day',
      timezone:    'Timezone: GMT+3 (Damascus)',
      place:       'Tishreen Public Park, Damascus',
      placeDetail: 'Tishreen Park - Main Entrance',
      city:        'Damascus, Syria',
      near:        'Tishreen Area, Damascus',
      mapLabel:    'Tishreen Park, Damascus',
      participants:'Open for Families',
      duration2:   'Full Day',
      desc1:       'A fun family event including games and activities for children and adults, with free meals and gifts. A day full of fun and joy for the whole family.',
      desc2:       'Diverse activities including: sports games, art workshops for children, live music, and competitions with valuable prizes.',
      organizer:   'Syrian Virtual University',
      orgDept:     'SVU - Student Affairs Dept.',
    },
    stats: [ { icon:'👨‍👩‍👧', val:'200+', key:'stat-speaker' }, { icon:'🎮', val:'15', key:'stat-workshop' }, { icon:'👥', val:'500+', key:'stat-participant' }, { icon:'🎁', val:'20', key:'stat-prizes' } ],
    related: ['ev3','ev5'],
  },

  ev7: {
    category:    'tech',
    badgeClass:  'badge-tech',
    image:       'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80',
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&q=80',
      'https://images.unsplash.com/photo-1573167101669-476592bed053?w=400&q=80',
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&q=80',
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80',
    ],
    status:      { ar: 'قادم قريباً', en: 'Coming Soon' },
    statusClass: 'bg-warning text-dark',
    ar: {
      badge:       '💻 تقنية',
      title:       'هاكاثون البرمجة والذكاء الاصطناعي - 48 ساعة',
      date:        '5 مايو 2026',
      dateShort:   '5 - 7 مايو 2026',
      dayFull:     'الثلاثاء، 5 مايو 2026',
      time:        '09:00 صباحاً (يستمر 48 ساعة)',
      duration:    'المدة: 48 ساعة',
      timezone:    'التوقيت: GMT+3 (دمشق)',
      place:       'أونلاين / افتراضي',
      placeDetail: 'منصة زوم الإلكترونية',
      city:        'عبر الإنترنت',
      near:        'يمكن المشاركة من أي مكان',
      mapLabel:    'أونلاين - عبر الإنترنت',
      participants:'جوائز قيّمة',
      duration2:   '48 ساعة',
      desc1:       'مسابقة مكثفة لمدة 48 ساعة لبناء حلول إبداعية باستخدام تقنيات الذكاء الاصطناعي. شارك فردياً أو كفريق من 2-4 أشخاص.',
      desc2:       'جوائز نقدية قيّمة لأفضل 3 مشاريع. مفتوح لجميع طلاب الجامعات. سجل فريقك الآن!',
      organizer:   'الجامعة الافتراضية السورية',
      orgDept:     'SVU - قسم الابتكار والريادة',
    },
    en: {
      badge:       '💻 Tech',
      title:       'AI & Programming Hackathon - 48 Hours',
      date:        'May 5, 2026',
      dateShort:   'May 5 - 7, 2026',
      dayFull:     'Tuesday, May 5, 2026',
      time:        '09:00 AM (runs for 48 hours)',
      duration:    'Duration: 48 Hours',
      timezone:    'Timezone: GMT+3 (Damascus)',
      place:       'Online / Virtual',
      placeDetail: 'Zoom Platform',
      city:        'Online',
      near:        'Participate from anywhere',
      mapLabel:    'Online - Virtual',
      participants:'Valuable Prizes',
      duration2:   '48 Hours',
      desc1:       'An intensive 48-hour competition to build innovative solutions using AI technologies. Participate individually or as a team of 2-4 people.',
      desc2:       'Valuable cash prizes for the top 3 projects. Open to all university students. Register your team now!',
      organizer:   'Syrian Virtual University',
      orgDept:     'SVU - Innovation & Entrepreneurship Dept.',
    },
    stats: [ { icon:'💡', val:'50+', key:'stat-speaker' }, { icon:'🤖', val:'1', key:'stat-workshop' }, { icon:'👥', val:'200+', key:'stat-participant' }, { icon:'💰', val:'3', key:'stat-prizes' } ],
    related: ['ev1','ev2'],
  },

  ev8: {
    category:    'sports',
    badgeClass:  'badge-sports',
    image:       'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=800&q=80',
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&q=80',
      'https://images.unsplash.com/photo-1547326006-94f0a7d91c3d?w=400&q=80',
      'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&q=80',
      'https://images.unsplash.com/photo-1617224908139-b74e8f36fcfd?w=400&q=80',
    ],
    status:      { ar: 'قادم قريباً', en: 'Coming Soon' },
    statusClass: 'bg-warning text-dark',
    ar: {
      badge:       '🎓 اكاديمية  ',
      title:       'لقاء مطوري البرمجيات ',
      date:        '18 أبريل 2026',
      dateShort:   '18 أبريل 2026',
      dayFull:     'السبت، 18 أبريل 2026',
      time:        '09:00 صباحاً - 06:00 مساءً',
      duration:    'المدة: يوم كامل',
      timezone:    'التوقيت: GMT+3 (دمشق)',
      place:       'الصالة الرياضية المغطاة، دمشق',
      placeDetail: 'الصالة الرياضية المغطاة - المدينة الرياضية',
      city:        'دمشق، سوريا',
      near:        'المدينة الرياضية، دمشق',
      mapLabel:    'مركز تعلم للغات البرمجة والتطوير',
      participants:'100+ رياضي',
      duration2:   'يوم كامل',
      desc1:       'فعالية تقنية تجمع مطوري البرمجيات من مختلف المستويات الخبرة لمناقشة أحدث الاتجاهات في تطوير البرمجيات، تبادل الأفكار، وبناء شبكات مهنية قوية.',
      desc2:       'يتضمن اللقاء جلسات نقاشية، ورش عمل تفاعلية، وعروض تقديمية تغطي مواضيع مثل تطوير الويب، تطبيقات الموبايل وغيرها , واستعراض مشاريع حقيقية باستخدام لغات مثل (Python, JavaScript, Java) مع فرص للتواصل والتعلم من الخبراء في المجال.',
      organizer:   'الجامعة الافتراضية السورية',
      orgDept:     'SVU - قسم النشاطات الرياضية',
    },
    en: {
      badge:       '🎓 Academy',
      title:       'Software Developers Meetup',
      date:        'April 18, 2026',
      dateShort:   'April 18, 2026',
      dayFull:     'Saturday, April 18, 2026',
      time:        '09:00 AM – 06:00 PM',
      duration:    'Duration: Full Day',
      timezone:    'Timezone: GMT+3 (Damascus)',
      place:       'Indoor Sports Hall, Damascus',
      placeDetail: 'Indoor Sports Hall - Sports City',
      city:        'Damascus, Syria',
      near:        'Sports City, Damascus',
      mapLabel:    'Center for Programming & Development Learning',
      participants:'100+ Athletes',
      duration2:   'Full Day',
      desc1:       'An exciting sports championship bringing together judo and karate champions from Arab universities in thrilling competitions for medals.',
      desc2:       'Multiple categories: men and women, all weight classes. Free public entry for cheering.',
      organizer:   'Syrian Virtual University',
      orgDept:     'SVU - Sports Activities Dept.',
    },
    stats: [ { icon:'🥋', val:'100+', key:'stat-speaker' }, { icon:'🏅', val:'6', key:'stat-workshop' }, { icon:'👥', val:'500+', key:'stat-participant' }, { icon:'🥇', val:'18', key:'stat-prizes' } ],
    related: ['ev4','ev5'],
  },

  ev9: {
    category:    'culture',
    badgeClass:  'badge-culture',
    image:       'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80',
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80',
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&q=80',
      'https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&q=80',
      'https://images.unsplash.com/photo-1573167101669-476592bed053?w=400&q=80',
    ],
    status:      { ar: 'قادم قريباً', en: 'Coming Soon' },
    statusClass: 'bg-warning text-dark',
    ar: {
      badge:       '🎭 ثقافة',
      title:       'ندوة القيادة وتطوير مهارات الشخصية',
      date:        '12 مايو 2026',
      dateShort:   '12 مايو 2026',
      dayFull:     'الثلاثاء، 12 مايو 2026',
      time:        '09:00 صباحاً - 03:00 مساءً',
      duration:    'المدة: 6 ساعات',
      timezone:    'التوقيت: GMT+3 (درعا)',
      place:       'مركز المؤتمرات، درعا',
      placeDetail: 'مركز المؤتمرات الدولي - قاعة A',
      city:        'درعا, سوريا',
      near:        'وسط مدينة درعا',
      mapLabel:    'مركز المؤتمرات، درعا',
      participants:'150+ مشارك',
      duration2:   '6 ساعات',
      desc1:       'ندوة متخصصة تقدمها نخبة من المدربين المعتمدين في مجالات التطوير الشخصي والقيادة وبناء مهارات التواصل الفعّال.',
      desc2:       'ستحصل على شهادة معتمدة في نهاية الندوة. مناسبة للطلاب والموظفين الراغبين في تطوير مهاراتهم القيادية.',
      organizer:   'الجامعة الافتراضية السورية',
      orgDept:     'SVU - فرع درعا',
    },
    en: {
      badge:       '🎭 Culture',
      title:       'Leadership & Personal Development Skills Seminar',
      date:        'May 12, 2026',
      dateShort:   'May 12, 2026',
      dayFull:     'Tuesday, May 12, 2026',
      time:        '09:00 AM – 03:00 PM',
      duration:    'Duration: 6 Hours',
      timezone:    'Timezone: GMT+3 (Aleppo)',
      place:       'Conference Center, Aleppo',
      placeDetail: 'International Conference Center - Hall A',
      city:        'Aleppo, Syria',
      near:        'Central Aleppo',
      mapLabel:    'Conference Center, Aleppo',
      participants:'150+ Participants',
      duration2:   '6 Hours',
      desc1:       'A specialized seminar by certified trainers in personal development, leadership, and effective communication skills building.',
      desc2:       'You will receive a certified certificate at the end. Suitable for students and employees wanting to develop their leadership skills.',
      organizer:   'Syrian Virtual University',
      orgDept:     'SVU - Aleppo Branch',
    },
    stats: [ { icon:'🎤', val:'5', key:'stat-speaker' }, { icon:'📚', val:'4', key:'stat-workshop' }, { icon:'👥', val:'150+', key:'stat-participant' }, { icon:'🏅', val:'1', key:'stat-prizes' } ],
    related: ['ev2','ev5'],
  },
};
const STAT_LABELS = {
  'stat-speaker':     { ar: 'متحدث',    en: 'Speakers'      },
  'stat-workshop':    { ar: 'ورشة عمل', en: 'Workshops'     },
  'stat-participant': { ar: 'مشارك',    en: 'Participants'  },
  'stat-prizes':      { ar: 'جوائز',    en: 'Awards'        },
};
const I18N = {
  'brand-name':       { ar: 'دليل فعاليات SVU',           en: 'SVU Events Guide' },
  'nav-home':         { ar: 'الرئيسية',                   en: 'Home' },
  'nav-events':       { ar: 'الفعاليات',                  en: 'Events' },
  'nav-about':        { ar: 'عن الدليل',                  en: 'About' },
  'nav-contact':      { ar: 'اتصل بنا',                   en: 'Contact Us' },
  'slide1-badge':     { ar: '🔴 مميز هذا الأسبوع',        en: '🔴 Featured This Week' },
  'slide1-title':     { ar: 'ندوة القيادة وتطوير مهارات الشخصية', en: 'Leadership Workshop & Personal Development' },
  'slide1-desc':      { ar: 'ألتق بأبرز الخبراء والمبتكرين في مجال التقنية، واستمع لأحدث الرؤى في الذكاء الاصطناعي والتحول الرقمي.', en: 'Meet top tech experts and innovators. Hear the latest insights on AI and digital transformation.' },
  'slide1-date':      { ar: '20 أبريل 2026',              en: 'April 20, 2026' },
  'slide1-place':     { ar: 'القاعة الرئيسية، دمشق',      en: 'Main Hall, Damascus' },
  'slide1-count':     { ar: '500+ مشارك',                  en: '500+ Participants' },
  'slide2-badge':     { ar: '💻 تقنية',                  en: '💻 Technology' },
  'slide2-title':     { ar: 'لقاء مطوري البرمجيات', en: 'Software Developers Meetup' },
  'slide2-desc':      { ar: 'انضم إلينا للاستفادة من خبرات مطوري البرمجيات في مجالات مختلفة.', en: 'Join us to benefit from the expertise of software developers in various fields.' },
  'slide2-date':      { ar: '25 أبريل 2026',              en: 'April 25, 2026' },
  'slide2-place':     { ar: 'مركز تعلم للغات البرمجة والتطوير',            en: 'Center for Programming & Development Learning' },
  'slide2-ticket':    { ar: 'دخول مجاني',                 en: 'Free Entry' },
  'slide3-badge':     { ar: '🎓 اكاديمية ',              en: '🎓 Academy' },
  'slide3-title':     { ar: 'هاكاثون البرمجة والذكاء الاصطناعي-48ساعة ', en: 'Programming & AI Hackathon - 48 Hours' },
  'slide3-desc':      { ar: 'تحدي برمجي ممتع يجمع أفضل المبرمجين من مختلف الجامعات لحل مشاكل حقيقية في وقت قصير.', en: 'A fun programming challenge that brings together the best developers from various universities to solve real-world problems in a short time.' },
  'slide3-date':      { ar: '1 - 10 مايو 2026',           en: 'May 1 - 10, 2026' },
  'slide3-place':     { ar: 'اونلاين ,عبر منصة زوم ',            en: 'Online via Zoom Platform' },
  'slide3-type':      { ar: 'بطولة دولية',                en: 'International Championship' },
  'btn-details':      { ar: 'عرض التفاصيل',               en: 'View Details' },
  'btn-all-events':   { ar: 'كل الفعاليات',               en: 'All Events' },
  'btn-view-all':     { ar: 'عرض الكل',                   en: 'View All' },
  'btn-view-detail':  { ar: 'التفاصيل',                   en: 'Details' },
  'btn-all-events2':  { ar: 'عرض جميع الفعاليات',         en: 'Browse All Events' },
  'today-label':      { ar: 'اليوم',                      en: 'Today' },
  'cat-label':        { ar: 'تصفح حسب:',                  en: 'Browse by:' },
  'cat-all':          { ar: '🌐 الكل',                    en: '🌐 All' },
  'cat-culture':      { ar: '🎭 ثقافة',                   en: '🎭 Culture' },
  'cat-sports':       { ar: '⚽ رياضة',                   en: '⚽ Sports' },
  'cat-music':        { ar: '🎵 موسيقى',                  en: '🎵 Music' },
  'cat-family':       { ar: '👨‍👩‍👧 عائلي',              en: '👨‍👩‍👧 Family' },
  'cat-tech':         { ar: '💻 تقنية',                   en: '💻 Tech' },
  'cat-art':          { ar: '🎨 فنون',                    en: '🎨 Arts' },
  'badge-tech':       { ar: '💻 تقنية',                   en: '💻 Tech' },
  'badge-culture':    { ar: '🎭 ثقافة',                   en: '🎭 Culture' },
  'badge-sports':     { ar: '⚽ رياضة',                   en: '⚽ Sports' },
  'badge-music':      { ar: '🎵 موسيقى',                  en: '🎵 Music' },
  'badge-family':     { ar: '👨‍👩‍👧 عائلي',              en: '👨‍👩‍👧 Family' },
  'badge-art':        { ar: '🎨 فنون',                    en: '🎨 Arts' },
  'badge-academy':    { ar: '🎓 اكاديمية',              en: '🎓 Academy' },
  'sec-latest-title': { ar: 'أحدث الفعاليات',             en: 'Latest Events' },
  'sec-latest-sub':   { ar: 'اكتشف الفعاليات المضافة حديثاً', en: 'Discover newly added events' },
  'card1-title':      { ar: 'ورشة تطوير تطبيقات الموبايل ', en: 'Workshop: Mobile App Development' },
  'card1-date':       { ar: '11 أبريل 2026',              en: 'April 11, 2026' },
  'card1-place':      { ar: 'قاعة التقنية، المبنى أ',     en: 'Tech Hall, Building A' },
  'card1-desc':       { ar: 'تدريب عملي لتطوير تطبيقات الموبايل باستخدام أحدث التقنيات.', en: 'Practical training for developing mobile applications using the latest technologies.' },
  'card2-title':      { ar: 'يوم المواهب والفنون الدولي ', en: 'International Talent and Arts Day' },
  'card2-date':       { ar: '15 أبريل 2026',              en: 'April 15, 2026' },
  'card2-place':      { ar: 'قاعة المعارض، دمشق',         en: 'Exhibition Hall, Damascus' },
  'card2-desc':       { ar: 'معرض يضم أعمال فنية لطلاب من 30 جامعة عالمية، يشمل الرسم والنحت والفن الرقمي.', en: 'Exhibition featuring artworks by students from 30 global universities, including painting, sculpture and digital art.' },
  'card3-title':      { ar: 'لقاء مطوري البرمجيات ', en: 'Software Developers Meetup' },
  'card3-date':       { ar: '18 أبريل 2026',              en: 'April 18, 2026' },
  'card3-place':      { ar: 'مركز تعلم للغات البرمجة والتطوير',    en: 'Center for Programming & Development Learning' },
  'card3-desc':       { ar: 'لقاء مطوري البرمجيات لتبادل الخبرات والمشاريع.', en: 'Meetup for software developers to share knowledge and projects.' },
  'card4-title':      { ar: 'مهرجان الموسيقى السنوي ', en: 'Annual Music Festival' },
  'card4-date':       { ar: '22 أبريل 2026',              en: 'April 22, 2026' },
  'card4-place':      { ar: 'المسرح الجامعي الكبير',      en: 'University Grand Theatre' },
  'card4-desc':       { ar: 'سهرة موسيقية راقية تقدمها أوركسترا الجامعة الافتراضية بمشاركة ضيوف من أوبرا دمشق.', en: 'An elegant musical evening by the Virtual University Orchestra with guest artists from Damascus Opera.' },
  'card5-title':      { ar: 'مهرجان العائلة المفتوح  ', en: 'Open Family Festival' },
  'card5-date':       { ar: '28 أبريل 2026',              en: 'April 28, 2026' },
  'card5-place':      { ar: 'حديقة تشرين العامة',         en: 'Tishreen Public Park' },
  'card5-desc':       { ar: 'فعالية عائلية ممتعة تشمل الألعاب والأنشطة للأطفال والكبار مع وجبات مجانية وهدايا.', en: 'A fun family event with games, activities for children and adults, free meals and gifts.' },
  'card6-title':      { ar: 'بطولة الالعاب الالكترونية', en: 'Electronic Games Championship' },
  'card6-date':       { ar: '30 أبريل 2026',              en: 'April 30, 2026' },
  'card6-place':      { ar: 'مركز الالعاب الالكترونية ',   en: 'Center for Electronic Games' },
  'card6-desc':       { ar: 'ورشة تعليمية للمبتدئين والمتوسطين في فن الرسم بالألوان المائية مع فنانة جامعية متميزة.', en: 'Educational workshop for beginners and intermediate students in watercolor art.' },
  'stat1-label':      { ar: 'فعالية مسجلة',               en: 'Registered Events' },
  'stat2-label':      { ar: 'تصنيف متنوع',                en: 'Diverse Categories' },
  'stat3-label':      { ar: 'مشارك نشط',                  en: 'Active Participants' },
  'stat4-label':      { ar: 'شريك جامعي',                 en: 'University Partners' },
  'footer-about-title':  { ar: 'دليل فعاليات SVU',        en: 'SVU Events Guide' },
  'footer-desc':         { ar: 'منصة متكاملة لعرض وتتبع فعاليات الجامعة الافتراضية السورية، تهدف إلى ربط طلاب الجامعة بالأنشطة والفعاليات المتنوعة.', en: 'A complete platform for displaying and tracking Syrian Virtual University events, connecting students with diverse activities.' },
  'footer-links-title':  { ar: 'روابط سريعة',             en: 'Quick Links' },
  'footer-cats-title':   { ar: 'التصنيفات',               en: 'Categories' },
  'footer-contact-title':{ ar: 'تواصل معنا',              en: 'Contact Us' },
  'footer-copy':         { ar: '© 2026 الجامعة الافتراضية السورية — جميع الحقوق محفوظة', en: '© 2026 Syrian Virtual University — All Rights Reserved' },
  'bc-home':          { ar: 'الرئيسية',                   en: 'Home' },
  'bc-events':        { ar: 'الفعاليات',                  en: 'Events' },
  'bc-event-detail':  { ar: 'تفاصيل الفعالية',            en: 'Event Details' },
  'bc-about':         { ar: 'عن الدليل',                  en: 'About' },
  'bc-contact':       { ar: 'اتصل بنا',                   en: 'Contact Us' },
  'page-events-h1':   { ar: 'جميع الفعاليات',             en: 'All Events' },
  'page-events-sub':  { ar: 'اكتشف وتصفح كل الفعاليات والأنشطة الجامعية', en: 'Discover and browse all university events and activities' },
  'filter-search-lbl':{ ar: 'بحث عن فعالية',              en: 'Search for Event' },
  'filter-search-ph': { ar: 'اكتب اسم الفعالية...',       en: 'Type event name...' },
  'filter-date-lbl':  { ar: 'من تاريخ',                   en: 'From Date' },
  'filter-loc-lbl':   { ar: 'الموقع',                     en: 'Location' },
  'filter-loc-all':   { ar: 'كل المواقع',                 en: 'All Locations' },
  'filter-loc-dam':   { ar: 'دمشق',                       en: 'Damascus' },
  'filter-loc-alp':   { ar: 'حلب',                        en: 'Aleppo' },
  'filter-loc-lat':   { ar: 'اللاذقية',                   en: 'Latakia' },
  'filter-loc-hom':   { ar: 'حمص',                        en: 'Homs' },
  'filter-loc-onl':   { ar: 'أونلاين / افتراضي',          en: 'Online / Virtual' },
  'btn-clear':        { ar: 'مسح',                        en: 'Clear' },
  'no-results':       { ar: 'لا توجد فعاليات تطابق بحثك. جرب كلمات مختلفة أو غيّر عوامل التصفية.', en: 'No events match your search. Try different keywords or change the filters.' },
  'ev1-title':        { ar: 'ورشة تطوير تطبيقات الموبايل', en: 'Mobile App Development Workshop' },
  'ev1-date':         { ar: '11 أبريل 2026',              en: 'April 11, 2026' },
  'ev1-place':        { ar: 'دمشق - المبنى أ',            en: 'Damascus - Building A' },
  'ev1-time':         { ar: '10:00 - 14:00',              en: '10:00 AM - 2:00 PM' },
  'ev1-desc':         { ar: 'تعلم أحدث أدوات تطوير الموبايل مع مدربين معتمدين في بيئة تطبيقية عملية.', en: 'Learn the latest mobile development tools with certified trainers in a hands-on environment.' },
  'ev2-title':        { ar: 'مؤتمر الذكاء الاصطناعي 2026', en: 'Artificial Intelligence Conference 2026' },
  'ev2-date':         { ar: '20 أبريل 2026',              en: 'April 20, 2026' },
  'ev2-place':        { ar: 'دمشق - القاعة الرئيسية',     en: 'Damascus - Main Hall' },
  'ev2-count':        { ar: '500+ مشارك',                  en: '500+ Participants' },
  'ev2-desc':         { ar: 'فعالية تجمع خبراء في الذكاء الاصطناعي لمناقشة احدث التطورات والابتكارات والتطبيقات العملية .', en: 'An event bringing together experts in artificial intelligence to discuss the latest developments, innovations, and practical applications in the field.' },
  'ev3-title':        { ar: 'مهرجان الموسيقى السنوي ', en: 'Annual Music Festival' },
  'ev3-date':         { ar: '25 أبريل 2026',              en: 'April 25, 2026' },
  'ev3-place':        { ar: 'دمشق - المسرح الوطني',       en: 'Damascus - National Theatre' },
  'ev3-ticket':       { ar: 'دخول مجاني',                 en: 'Free Entry' },
  'ev3-desc':         { ar: 'ليلة موسيقية استثنائية تجمع أمهر العازفين والمطربين في أجواء من الفن الأصيل والتراث العربي العريق. يتضمن المهرجان عروضاً للموسيقى الكلاسيكية العربية من أوبرا دمشق.', en: 'An exceptional musical evening featuring the finest musicians and singers in an atmosphere of authentic Arab art and rich heritage. The festival includes classical Arabic music performances from Damascus Opera.' },
  'ev4-title':        { ar: 'بطولة الالعاب الالكترونية ', en: 'Electronic Sports Championship' },
  'ev4-date':         { ar: '1 - 10 مايو 2026',           en: 'May 1 - 10, 2026' },
  'ev4-place':        { ar: 'دمشق - الملعب الأولمبي',     en: 'Damascus - Olympic Stadium' },
  'ev4-type':         { ar: 'بطولة دولية',                en: 'International Championship' },
  'ev4-desc':         { ar: 'فعالية تنافسية تجمع اللاعبين من مختلف المستويات للمشاركة في بطولات حماسية على اشهر الالعاب مثل FIFA , COD ,PUBG', en: 'A competitive event that brings together players from various levels to participate in exciting championships for popular games like FIFA, COD, and PUBG.' },
  'ev5-title':        { ar: 'يوم المواهب والفنون الدولي ', en: 'International Talent & Arts Day' },
  'ev5-date':         { ar: '15 أبريل 2026',              en: 'April 15, 2026' },
  'ev5-place':        { ar: 'دمشق - قاعة المعارض',        en: 'Damascus - Exhibition Hall' },
  'ev5-desc':         { ar: 'معرض دولي يضم أعمال فنية لطلاب من 30 جامعة عالمية، يشمل الرسم والنحت والفن الرقمي والتصوير الفوتوغرافي.', en: 'An international exhibition featuring artworks by students from 30 global universities, including painting, sculpture, digital art and photography in its 10th distinguished edition.' },
  'ev6-title':        { ar: 'مهرجان العائلة المفتوح - نزهة الربيع ', en: 'Open Family Festival - Spring Picnic' },
  'ev6-date':         { ar: '28 أبريل 2026',              en: 'April 28, 2026' },
  'ev6-place':        { ar: 'دمشق - حديقة تشرين',         en: 'Damascus - Tishreen Park' },
  'ev6-desc':         { ar: 'فعالية عائلية ممتعة تشمل الألعاب والأنشطة للأطفال والكبار مع وجبات مجانية وهدايا. يوم مليء بالمرح والبهجة لجميع أفراد الأسرة.', en: 'A fun family event including games and activities for children and adults, with free meals and gifts. A day full of fun and joy for the whole family.' },
  'ev7-title':        { ar: 'هاكاثون البرمجة والذكاء الاصطناعي-48 ساعة ', en: 'AI & Programming Hackathon - 48 Hours' },
  'ev7-date':         { ar: '5 - 7 مايو 2026',            en: 'May 5 - 7, 2026' },
  'ev7-place':        { ar: 'أونلاين / افتراضي',          en: 'Online / Virtual' },
  'ev7-prizes':       { ar: 'جوائز قيّمة',                en: 'Valuable Prizes' },
  'ev7-desc':         { ar: 'مسابقة مكثفة لمدة 48 ساعة لبناء حلول إبداعية باستخدام تقنيات الذكاء الاصطناعي. شارك فردياً أو كفريق من 2-4 أشخاص.', en: 'An intensive 48-hour competition to build innovative solutions using AI technologies. Participate individually or as a team of 2-4 people.' },
  'ev8-title':        { ar: 'لقاء مطوري البرمجيات ', en: 'Software Developers Meetup' },
  'ev8-date':         { ar: '18 أبريل 2026',              en: 'April 18, 2026' },
  'ev8-place':        { ar: 'دمشق - الصالة الرياضية',     en: 'Damascus - Sports Hall' },
  'ev8-desc':         { ar: 'فعالية تقنية تجمع مطوري البرمجيات من مختلف المستويات الخبرة لمناقشة أحدث الاتجاهات في تطوير البرمجيات، تبادل الأفكار، وبناء شبكات مهنية قوية.', en: 'A technical event bringing together software developers from various experience levels to discuss the latest trends in software development, exchange ideas, and build strong professional networks.' },
  'ev9-title':        { ar: 'ندوة القيادة وتطوير مهارات الشخصية', en: 'Leadership & Personal Development Skills Seminar' },
  'ev9-date':         { ar: '12 مايو 2026',               en: 'May 12, 2026' },
  'ev9-place':        { ar: 'درعا - مركز المؤتمرات',       en: 'Daraa - Conference Center' },
  'ev9-desc':         { ar: 'ندوة متخصصة في التطوير الشخصي والقيادة تقدمها نخبة من المدربين المعتمدين.', en: 'A specialized seminar in personal development and leadership by certified trainers.' },
  'gallery-title':    { ar: 'معرض الصور',                  en: 'Photo Gallery' },
  'about-event-title':{ ar: 'عن الفعالية',                en: 'About the Event' },
  'related-title':    { ar: 'فعاليات ذات صلة',            en: 'Related Events' },
  'loc-title':        { ar: 'الموقع',                     en: 'Location' },
  'datetime-title':   { ar: 'التاريخ والوقت',             en: 'Date & Time' },
  'organizer-title':  { ar: 'المنظّم',                    en: 'Organizer' },
  'btn-add-cal':      { ar: 'أضف للتقويم',                en: 'Add to Calendar' },
  'btn-share':        { ar: 'شارك',                       en: 'Share' },
  'btn-book':         { ar: 'احجز مكانك',                  en: 'Book Your Spot' },
  'btn-contact-org':  { ar: 'تواصل مع المنظّم',           en: 'Contact Organizer' },
  'cal-modal-title':  { ar: 'أضف للتقويم',               en: 'Add to Calendar' },
  'cal-modal-desc':   { ar: 'اختر تطبيق التقويم المفضل لديك:', en: 'Choose your preferred calendar app:' },
  'cal-apple':        { ar: 'Apple Calendar (.ics)',      en: 'Apple Calendar (.ics)' },
  'book-modal-title': { ar: 'حجز مكان في:',              en: 'Book a spot in:' },
  'book-name-lbl':    { ar: 'الاسم الكامل',              en: 'Full Name' },
  'book-name-ph':     { ar: 'أدخل اسمك الكامل',          en: 'Enter your full name' },
  'book-email-lbl':   { ar: 'البريد الإلكتروني',         en: 'Email Address' },
  'book-phone-lbl':   { ar: 'رقم الهاتف',                en: 'Phone Number' },
  'book-seats-lbl':   { ar: 'عدد المقاعد',               en: 'Number of Seats' },
  'book-seat1':       { ar: '1 مقعد',                    en: '1 Seat' },
  'book-seat2':       { ar: '2 مقاعد',                   en: '2 Seats' },
  'book-seat3':       { ar: '3 مقاعد',                   en: '3 Seats' },
  'book-seat4':       { ar: '4 مقاعد',                   en: '4 Seats' },
  'btn-confirm-book': { ar: 'تأكيد الحجز',               en: 'Confirm Booking' },
  'toast-book-ok':    { ar: '✅ تم تأكيد حجزك بنجاح! ستصلك رسالة تأكيد على بريدك.', en: '✅ Booking confirmed! A confirmation email will be sent to you.' },
  'page-about-h1':    { ar: 'عن الدليل',                  en: 'About the Guide' },
  'page-about-sub':   { ar: 'تعرّف على رسالتنا، رؤيتنا، وفريق العمل', en: 'Learn about our mission, vision and team' },
  'about-who-title':  { ar: 'من نحن؟',                   en: 'Who Are We?' },
  'about-who-sub':    { ar: 'دليل فعاليات الجامعة الافتراضية السورية', en: 'Syrian Virtual University Events Guide' },
  'about-p1':         { ar: 'دليل فعاليات SVU هو منصة رقمية متكاملة أطلقتها الجامعة الافتراضية السورية بهدف ربط طلابها بمجمل الأنشطة والفعاليات.', en: 'SVU Events Guide is a comprehensive digital platform launched by the Syrian Virtual University to connect its students with all activities and events.' },
  'about-p2':         { ar: 'يوفر الدليل تجربة بحث وتصفح سلسة ومتجاوبة مع إمكانية التصفية حسب التصنيف والتاريخ والموقع.', en: 'The guide provides a smooth and responsive browsing experience with filtering by category, date, and location.' },
  'val-mission-title':{ ar: 'رسالتنا',                   en: 'Our Mission' },
  'val-mission-desc': { ar: 'إيصال كل فعالية للشخص المناسب في الوقت المناسب', en: 'Delivering every event to the right person at the right time' },
  'val-vision-title': { ar: 'رؤيتنا',                    en: 'Our Vision' },
  'val-vision-desc':  { ar: 'أن نكون المرجع الأول لفعاليات التعليم العالي في سوريا', en: 'To be the top reference for higher education events in Syria' },
  'val-values-title': { ar: 'قيمنا',                     en: 'Our Values' },
  'val-values-desc':  { ar: 'الشفافية، الابتكار، الشراكة المجتمعية', en: 'Transparency, Innovation, Community Partnership' },
  'val-style-title':  { ar: 'أسلوبنا',                   en: 'Our Approach' },
  'val-style-desc':   { ar: 'تقنيات حديثة وتجربة مستخدم متميزة', en: 'Modern technology and outstanding user experience' },
  'stats-section-title':{ ar: 'الجامعة بالأرقام',        en: 'University in Numbers' },
  'team-title':       { ar: 'فريق العمل',                en: 'Our Team' },
  'team-sub':         { ar: 'الفريق المتخصص خلف دليل الفعاليات', en: 'The dedicated team behind the events guide' },
  'team1-name':       { ar: 'بيان الطافش',             en: 'Baian-AlTafash' },
  'team1-role':       { ar: 'مدير الدليل',               en: 'Guide Director' },
  'team2-name':       { ar: 'روز المعلولي ',               en: 'Roz-M3lole' },
  'team2-role':       { ar: 'منسقة الفعاليات',           en: 'Events Coordinator' },
  'team3-name':       { ar: 'ربيع سلايمة',               en: 'Rabe3-Salaema' },
  'team3-role':       { ar: 'مطور الموقع',               en: 'Web Developer' },
  'team4-name':       { ar: 'لارا القطامي ',                en: 'Lara-Alqutami' },
  'team4-role':       { ar: 'مصممة واجهات',              en: 'UI Designer' },
  'team5-name':       { ar: 'راما العرنجي ',                en: 'Rama- Al3rnge' },
  'team5-role':       { ar: 'مديرة المحتوى',             en: 'Content Manager' },
  'STU-names':        {ar : 'أسماء الطلاب مع الرقم الجامعي'   ,en:'Student Names with University ID'                                                      },
  'name-1':           { ar: 'ربيع سلايمة_322707',                en: 'rabea_322707' },
  'name-2':           { ar: 'لارا القطامي_276447',                en: 'Lara_276447' },
  'name-3':           { ar: 'بيان طافش_295732',                en: 'baian_295732' },
  'name-4':           { ar: 'روز معلولي_253968',                en: 'roz_253968' },
  'name-5':           { ar: 'راما العرنجي_156786',                en: 'rama_156786' },
  'policies-title':   { ar: 'السياسات والمعايير',        en: 'Policies & Standards' },
  'policy1-title':    { ar: 'كيفية تقديم فعالية',        en: 'How to Submit an Event' },
  'policy1-1':        { ar: 'تواصل مع فريق الدليل عبر صفحة "اتصل بنا"', en: 'Contact our team via the "Contact Us" page' },
  'policy1-2':        { ar: 'أرفق ملف تعريفي كامل بالفعالية', en: 'Attach a complete event profile' },
  'policy1-3':        { ar: 'انتظر مراجعة الطلب خلال 3-5 أيام عمل', en: 'Wait for review within 3-5 business days' },
  'policy1-4':        { ar: 'ستتلقى رداً بالقبول أو طلب تعديلات', en: 'You will receive an acceptance or revision request' },
  'policy1-5':        { ar: 'يتم النشر بعد موافقة لجنة الفعاليات', en: 'Published after approval by the Events Committee' },
  'policy2-title':    { ar: 'معايير النشر',              en: 'Publishing Standards' },
  'policy2-1':        { ar: 'الفعالية ذات طابع أكاديمي، ثقافي، رياضي، أو اجتماعي', en: 'Event must be academic, cultural, sports, or social' },
  'policy2-2':        { ar: 'لا تتعارض مع قيم الجامعة وقوانينها', en: 'Must not conflict with university values and regulations' },
  'policy2-3':        { ar: 'تُنظَّم بمكان مناسب وآمن', en: 'Organized in a suitable and safe venue' },
  'policy2-4':        { ar: 'يملك المنظِّم صلاحية قانونية لتنظيمها', en: 'Organizer holds legal authority to host it' },
  'policy2-5':        { ar: 'يُقدَّم الطلب قبل موعد الفعالية بـ 14 يوماً', en: 'Request submitted at least 14 days before the event' },
  'btn-submit-event': { ar: 'قدّم فعاليتك الآن',         en: 'Submit Your Event Now' },
  'partners-title':   { ar: 'شركاؤنا',                   en: 'Our Partners' },
  'page-contact-h1':  { ar: 'اتصل بنا',                  en: 'Contact Us' },
  'page-contact-sub': { ar: 'نحن هنا للمساعدة. تواصل معنا في أي وقت.', en: 'We are here to help. Reach out anytime.' },
  'form-send-title':  { ar: 'أرسل رسالتك',               en: 'Send Your Message' },
  'form-send-sub':    { ar: 'سنردّ عليك خلال 24-48 ساعة عمل', en: 'We will reply within 24-48 business hours' },
  'form-name-lbl':    { ar: 'الاسم الكامل',              en: 'Full Name' },
  'form-name-ph':     { ar: 'أدخل اسمك الكامل',          en: 'Enter your full name' },
  'form-email-lbl':   { ar: 'البريد الإلكتروني',         en: 'Email Address' },
  'form-subject-lbl': { ar: 'موضوع الرسالة',             en: 'Subject' },
  'form-subj-def':    { ar: 'اختر الموضوع',              en: 'Select Subject' },
  'form-subj-1':      { ar: 'استفسار عام',               en: 'General Inquiry' },
  'form-subj-2':      { ar: 'تقديم فعالية جديدة',        en: 'Submit New Event' },
  'form-subj-3':      { ar: 'الإبلاغ عن مشكلة',          en: 'Report an Issue' },
  'form-subj-4':      { ar: 'شراكة ومؤسسات',             en: 'Partnership & Institutions' },
  'form-subj-5':      { ar: 'اقتراح وتعليق',             en: 'Suggestion & Feedback' },
  'form-msg-lbl':     { ar: 'الرسالة',                   en: 'Message' },
  'form-msg-ph':      { ar: 'اكتب رسالتك هنا...',         en: 'Write your message here...' },
  'form-agree':       { ar: 'أوافق على',                 en: 'I agree to the' },
  'form-privacy':     { ar: 'سياسة الخصوصية',            en: 'Privacy Policy' },
  'form-terms':       { ar: 'وشروط الاستخدام',           en: 'and Terms of Use' },
  'btn-send-form':    { ar: 'إرسال الرسالة',             en: 'Send Message' },
  'contact-info-title':{ ar: 'معلومات التواصل',          en: 'Contact Information' },
  'ci-email-title':   { ar: 'البريد الإلكتروني',         en: 'Email Address' },
  'ci-phone-title':   { ar: 'الهاتف',                    en: 'Phone' },
  'ci-phone-hours':   { ar: 'الأحد - الخميس، 9:00 - 17:00', en: 'Sun - Thu, 9:00 AM - 5:00 PM' },
  'ci-addr-title':    { ar: 'العنوان',                   en: 'Address' },
  'ci-addr-city':     { ar: 'دمشق، سوريا',               en: 'Damascus, Syria' },
  'ci-hours-title':   { ar: 'ساعات العمل',               en: 'Working Hours' },
  'ci-hours-1':       { ar: 'الأحد - الخميس: 9:00 - 17:00', en: 'Sun - Thu: 9:00 AM - 5:00 PM' },
  'ci-hours-2':       { ar: 'الجمعة والسبت: مغلق',       en: 'Fri & Sat: Closed' },
  'social-follow-title':{ ar: 'تابعنا على السوشيال ميديا', en: 'Follow Us on Social Media' },
  'faq-title':        { ar: 'أسئلة شائعة',               en: 'Frequently Asked Questions' },
  'faq1-q':           { ar: 'كيف أقدّم فعالية جديدة؟',  en: 'How do I submit a new event?' },
  'faq1-a':           { ar: 'تواصل معنا عبر النموذج أعلاه أو عبر البريد الإلكتروني مع تفاصيل كاملة عن الفعالية.', en: 'Contact us via the form above or by email with complete event details.' },
  'faq2-q':           { ar: 'هل النشر مجاني؟',           en: 'Is publishing free?' },
  'faq2-a':           { ar: 'نعم، النشر على دليل الفعاليات مجاني تماماً لجميع الجهات الأكاديمية والطلابية.', en: 'Yes, publishing on the Events Guide is completely free for all academic and student organizations.' },
  'faq3-q':           { ar: 'كم يستغرق مراجعة الطلب؟',  en: 'How long does the review take?' },
  'faq3-a':           { ar: 'تستغرق مراجعة الطلبات من 3 إلى 5 أيام عمل.', en: 'Requests are reviewed within 3 to 5 business days.' },
  'err-required':     { ar: '⚠️ يرجى ملء جميع الحقول المطلوبة.', en: '⚠️ Please fill in all required fields.' },
  'err-email':        { ar: '⚠️ صيغة البريد الإلكتروني غير صحيحة.', en: '⚠️ Invalid email address format.' },
  'success-msg':      { ar: 'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.', en: 'Your message was sent successfully! We will get back to you soon.' },
  'share-copied':     { ar: '✅ تم نسخ رابط الفعالية!', en: '✅ Event link copied!' },
  'loc-city':         { ar: 'دمشق، سوريا',               en: 'Damascus, Syria' },
  'org-name':         { ar: 'الجامعة الافتراضية السورية', en: 'Syrian Virtual University' },
  'org-dept':         { ar: 'SVU - قسم الفعاليات والأنشطة', en: 'SVU - Events & Activities Dept.' },
};
function loadEventPage() {
  const container = document.getElementById('event-dynamic-content');
  if (!container) return; /* ليس في صفحة event.html */

  const lang = localStorage.getItem('svu-lang') || 'ar';

  document.documentElement.lang = lang === 'ar' ? 'ar' : 'en';
  document.documentElement.dir  = lang === 'ar' ? 'rtl' : 'ltr';

  const params = new URLSearchParams(window.location.search);
  const id     = params.get('id') || 'ev2'; /* افتراضي: ev2 */

  const ev = EVENTS_DB[id];
  if (!ev) {
    container.innerHTML = `<div class="alert alert-danger m-4">الفعالية غير موجودة / Event not found (id: ${id})</div>`;
    return;
  }

  const t = ev[lang] || ev.ar; 
  document.getElementById('ev-badge').className     = `badge ${ev.badgeClass}`;
  document.getElementById('ev-badge').textContent   = t.badge;
  document.getElementById('ev-status').textContent  = ev.status[lang];
  document.getElementById('ev-status').className    = `badge ms-2 ${ev.statusClass}`;
  document.getElementById('ev-title').textContent   = t.title;
  document.getElementById('ev-date').textContent    = t.date;
  document.getElementById('ev-place').textContent   = t.place;
  document.getElementById('ev-participants').textContent = t.participants;
  document.getElementById('ev-duration').textContent = t.duration2;
  document.querySelector('.open-booking-modal').setAttribute('data-event', t.title);

  const galleryMain = document.getElementById('gallery-main-img');
  const galleryGrid = document.getElementById('gallery-grid');
  if (galleryMain) galleryMain.src = ev.gallery[0];
  if (galleryGrid) {
    galleryGrid.innerHTML = `
      <div class="gallery-main">
        <img id="gallery-main-img" src="${ev.gallery[0]}" alt="main" style="border-radius:12px 0 0 12px;" />
      </div>
      ${ev.gallery.slice(1).map((img, i) =>
        `<div><img src="${img}" alt="photo${i+2}" ${i===3 ? 'style="border-radius:0 0 12px 0;"' : ''}/></div>`
      ).join('')}
    `;
  }

  document.getElementById('ev-desc1').textContent = t.desc1;
  document.getElementById('ev-desc2').textContent = t.desc2;

  const statsGrid = document.getElementById('ev-stats');
  if (statsGrid) {
    statsGrid.innerHTML = ev.stats.map(s => `
      <div class="col-6 col-md-3">
        <div class="text-center p-3 rounded" style="background:var(--bg);">
          <div style="font-size:1.8rem;">${s.icon}</div>
          <div class="fw-bold" style="font-size:1.2rem;color:var(--primary);">${s.val}</div>
          <div style="font-size:.8rem;color:var(--text-light);">${STAT_LABELS[s.key][lang]}</div>
        </div>
      </div>
    `).join('');
  }


  const relatedGrid = document.getElementById('ev-related');
  if (relatedGrid) {
    relatedGrid.innerHTML = ev.related.map(relId => {
      const rel  = EVENTS_DB[relId];
      if (!rel) return '';
      const relT = rel[lang] || rel.ar;
      return `
        <div class="col-12 col-sm-6">
          <a href="event.html?id=${relId}" class="text-decoration-none">
            <div class="d-flex gap-3 p-3 rounded border" style="background:white;transition:.3s;"
                 onmouseover="this.style.boxShadow='0 4px 16px rgba(26,58,107,.1)'"
                 onmouseout="this.style.boxShadow=''">
              <img src="${rel.gallery[0]}" alt="${relT.title}"
                   style="width:70px;height:70px;object-fit:cover;border-radius:10px;flex-shrink:0;" />
              <div>
                <div class="fw-bold" style="font-size:.9rem;color:var(--text-dark);">${relT.title}</div>
                <div style="font-size:.8rem;color:var(--text-light);">
                  <i class="bi bi-calendar3 me-1"></i>${relT.dateShort}
                </div>
                <span class="badge ${rel.badgeClass}" style="font-size:.72rem;">${relT.badge}</span>
              </div>
            </div>
          </a>
        </div>
      `;
    }).join('');
  }

  document.getElementById('ev-map-label').textContent  = t.mapLabel;
  document.getElementById('ev-place-detail').textContent = t.placeDetail;
  document.getElementById('ev-city').textContent        = t.city;
  document.getElementById('ev-near').textContent        = t.near;
  document.getElementById('ev-day-full').textContent    = t.dayFull;
  document.getElementById('ev-time').textContent        = t.time;
  document.getElementById('ev-dur').textContent         = t.duration;
  document.getElementById('ev-tz').textContent          = t.timezone;
  document.getElementById('ev-org-name').textContent    = t.organizer;
  document.getElementById('ev-org-dept').textContent    = t.orgDept;

  document.title = `${t.title} - SVU`;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    const labels = {"brand-name": {"ar": "دليل فعاليات SVU", "en": "SVU Events Guide"}, "nav-home": {"ar": "الرئيسية", "en": "Home"}, "nav-events": {"ar": "الفعاليات", "en": "Events"}, "nav-about": {"ar": "عن الدليل", "en": "About"}, "nav-contact": {"ar": "اتصل بنا", "en": "Contact Us"}, "bc-home": {"ar": "الرئيسية", "en": "Home"}, "bc-events": {"ar": "الفعاليات", "en": "Events"}, "bc-event-detail": {"ar": "تفاصيل الفعالية", "en": "Event Details"}, "gallery-title": {"ar": "معرض الصور", "en": "Photo Gallery"}, "about-event-title": {"ar": "عن الفعالية", "en": "About the Event"}, "related-title": {"ar": "فعاليات ذات صلة", "en": "Related Events"}, "loc-title": {"ar": "الموقع", "en": "Location"}, "datetime-title": {"ar": "التاريخ والوقت", "en": "Date & Time"}, "organizer-title": {"ar": "المنظّم", "en": "Organizer"}, "btn-add-cal": {"ar": "أضف للتقويم", "en": "Add to Calendar"}, "btn-share": {"ar": "شارك", "en": "Share"}, "btn-book": {"ar": "احجز مكانك", "en": "Book Your Spot"}, "btn-contact-org": {"ar": "تواصل مع المنظّم", "en": "Contact Organizer"}, "footer-about-title": {"ar": "دليل فعاليات SVU", "en": "SVU Events Guide"}, "footer-desc": {"ar": "منصة متكاملة لعرض وتتبع فعاليات الجامعة الافتراضية السورية.", "en": "A complete platform for displaying and tracking Syrian Virtual University events."}, "footer-links-title": {"ar": "روابط سريعة", "en": "Quick Links"}, "footer-contact-title": {"ar": "تواصل معنا", "en": "Contact Us"}, "footer-copy": {"ar": "© 2026 الجامعة الافتراضية السورية — جميع الحقوق محفوظة", "en": "© 2026 Syrian Virtual University — All Rights Reserved"}, "loc-city": {"ar": "دمشق، سوريا", "en": "Damascus, Syria"}, "cal-modal-title": {"ar": "أضف للتقويم", "en": "Add to Calendar"}, "cal-modal-desc": {"ar": "اختر تطبيق التقويم المفضل لديك:", "en": "Choose your preferred calendar app:"}, "cal-apple": {"ar": "Apple Calendar (.ics)", "en": "Apple Calendar (.ics)"}, "book-modal-title": {"ar": "حجز مكان في:", "en": "Book a spot in:"}, "book-name-lbl": {"ar": "الاسم الكامل", "en": "Full Name"}, "book-name-ph": {"ar": "أدخل اسمك الكامل", "en": "Enter your full name"}, "book-email-lbl": {"ar": "البريد الإلكتروني", "en": "Email Address"}, "book-phone-lbl": {"ar": "رقم الهاتف", "en": "Phone Number"}, "book-seats-lbl": {"ar": "عدد المقاعد", "en": "Number of Seats"}, "book-seat1": {"ar": "1 مقعد", "en": "1 Seat"}, "book-seat2": {"ar": "2 مقاعد", "en": "2 Seats"}, "book-seat3": {"ar": "3 مقاعد", "en": "3 Seats"}, "book-seat4": {"ar": "4 مقاعد", "en": "4 Seats"}, "btn-confirm-book": {"ar": "تأكيد الحجز", "en": "Confirm Booking"}, "toast-book-ok": {"ar": "✅ تم تأكيد حجزك بنجاح!", "en": "✅ Booking confirmed!"}};
    if (!labels[k]) return;
    const txt = labels[k][lang];
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = txt;
    } else {
      el.innerHTML = txt;
    }
  });
}

function applyLanguage(lang) {
  localStorage.setItem('svu-lang', lang);

  document.documentElement.lang = lang === 'ar' ? 'ar' : 'en';
  document.documentElement.dir  = lang === 'ar' ? 'rtl' : 'ltr';
  document.body.classList.toggle('lang-en', lang === 'en');

  loadEventPage();

  const isEventPage = !!document.getElementById('event-dynamic-content');
  if (!isEventPage) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (!I18N[key]) return;
      const text = I18N[key][lang];
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = text;
      } else {
        el.innerHTML = text;
      }
    });
  }

  const btn = document.getElementById('langToggle');
  if (btn) {
    btn.innerHTML = lang === 'ar'
      ? '<i class="bi bi-translate"></i> EN'
      : '<i class="bi bi-translate"></i> عربي';
  }

}

(function initLangToggle() {
  const btn   = document.getElementById('langToggle');
  if (!btn) return;
  const saved = localStorage.getItem('svu-lang') || 'ar';
  applyLanguage(saved);
  btn.addEventListener('click', () => {
    applyLanguage((localStorage.getItem('svu-lang') || 'ar') === 'ar' ? 'en' : 'ar');
  });
})();

(function initSlider() {
  const slides = document.querySelectorAll('.slide');
  const dots   = document.querySelectorAll('.dot');
  if (!slides.length) return;
  let current = 0, timer;
  function goTo(i) {
    slides[current].classList.remove('active');
    dots[current]  && dots[current].classList.remove('active');
    current = (i + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current]  && dots[current].classList.add('active');
  }
  function startAuto() { timer = setInterval(() => goTo(current + 1), 5000); }
  function resetAuto()  { clearInterval(timer); startAuto(); }
  document.getElementById('sliderNext')?.addEventListener('click', () => { goTo(current+1); resetAuto(); });
  document.getElementById('sliderPrev')?.addEventListener('click', () => { goTo(current-1); resetAuto(); });
  dots.forEach((d, i) => d.addEventListener('click', () => { goTo(i); resetAuto(); }));
  startAuto();
})();

(function initCategoryFilter() {
  const catBtns = document.querySelectorAll('.category-btn[data-cat]');
  const cards   = document.querySelectorAll('.filterable-card');
  if (!catBtns.length || !cards.length) return;
  const saved = localStorage.getItem('preferredCategory') || 'all';
  function applyFilter(cat) {
    cards.forEach(c => {
      const show = cat==='all' || c.getAttribute('data-category')===cat;
      c.parentElement.style.display = show ? '' : 'none';
      if (show) c.style.animation = 'fadeInUp 0.4s ease both';
    });
    catBtns.forEach(b => b.classList.toggle('active', b.getAttribute('data-cat')===cat));
    localStorage.setItem('preferredCategory', cat);
  }
  catBtns.forEach(b => b.addEventListener('click', () => applyFilter(b.getAttribute('data-cat'))));
  applyFilter(saved);
})();

(function initEventsFilter() {
  const si = document.getElementById('searchInput');
  const df = document.getElementById('dateFilter');
  const lf = document.getElementById('locationFilter');
  const cards = document.querySelectorAll('.event-filter-card');
  const noRes = document.getElementById('noResults');
  if (!si && !df) return;
  function run() {
    const sv = si ? si.value.trim().toLowerCase() : '';
    const dv = df ? df.value : '';
    const lv = lf ? lf.value.toLowerCase() : '';
    let vis = 0;
    cards.forEach(c => {
      const ok = (!sv || (c.getAttribute('data-title')||'').toLowerCase().includes(sv))
               && (!dv || (c.getAttribute('data-date')||'')>=dv)
               && (!lv || (c.getAttribute('data-location')||'').toLowerCase().includes(lv));
      c.parentElement.style.display = ok ? '' : 'none';
      if (ok) vis++;
    });
    if (noRes) noRes.style.display = vis===0 ? 'block' : 'none';
  }
  si?.addEventListener('input', run);
  df?.addEventListener('change', run);
  lf?.addEventListener('change', run);
})();

(function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  const sa = document.getElementById('formSuccess');
  const ea = document.getElementById('formError');
  function showAlert(el) { el.style.display='block'; setTimeout(()=>{ el.style.display='none'; },5000); }
  form.addEventListener('submit', e => {
    e.preventDefault();
    const lang  = localStorage.getItem('svu-lang')||'ar';
    const name  = form.querySelector('#inputName').value.trim();
    const email = form.querySelector('#inputEmail').value.trim();
    const msg   = form.querySelector('#inputMessage').value.trim();
    if (sa) sa.style.display='none';
    if (ea) ea.style.display='none';
    if (!name||!email||!msg) { if(ea){ ea.textContent=I18N['err-required'][lang]; showAlert(ea); } return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { if(ea){ ea.textContent=I18N['err-email'][lang]; showAlert(ea); } return; }
    if (sa) { sa.textContent=`✅ ${lang==='ar'?'شكراً ':'Thank you '}${name}! ${I18N['success-msg'][lang]}`; showAlert(sa); }
    form.reset();
  });
})();

(function initDarkMode() {
  const t = document.getElementById('darkModeToggle');
  if (!t) return;
  if (localStorage.getItem('darkMode')==='true') { document.body.classList.add('dark-mode'); t.innerHTML='☀️'; }
  t.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const d = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', d);
    t.innerHTML = d ? '☀️' : '🌙';
  });
})();

(function initScrollTop() {
  const b = document.getElementById('scrollTopBtn');
  if (!b) return;
  window.addEventListener('scroll', () => b.classList.toggle('visible', window.scrollY>300));
  b.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
})();

(function initModals() {
  document.getElementById('addToCalendarBtn')?.addEventListener('click', () => {
    new bootstrap.Modal(document.getElementById('calendarModal')).show();
  });
  document.querySelectorAll('.open-booking-modal').forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = document.getElementById('bookingModal');
      if (!modal) return;
      const el = modal.querySelector('#bookingEventTitle');
      if (el) el.textContent = btn.getAttribute('data-event')||'';
      new bootstrap.Modal(modal).show();
    });
  });
  document.getElementById('bookingForm')?.addEventListener('submit', e => {
    e.preventDefault();
    bootstrap.Modal.getInstance(document.getElementById('bookingModal'))?.hide();
    const t = document.getElementById('bookingSuccessToast');
    if (t) new bootstrap.Toast(t).show();
  });
})();

(function initShare() {
  const b = document.getElementById('shareBtn');
  if (!b) return;
  b.addEventListener('click', () => {
    const lang = localStorage.getItem('svu-lang')||'ar';
    if (navigator.share) { navigator.share({title: document.title, url: window.location.href}); }
    else { navigator.clipboard.writeText(window.location.href).then(()=>alert(I18N['share-copied'][lang])); }
  });
})();
