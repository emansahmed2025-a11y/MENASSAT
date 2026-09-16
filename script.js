/* ==========================================================
   Menassat Real Estate Valuation — script.js
   Language (AR/EN) · RTL/LTR · localStorage · Intro · Nav ·
   Reveal · Counter · Timeline · Form · Image fallbacks
   ========================================================== */
(() => {
  'use strict';

  const $  = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ----------------------------------------------------------
     1) Translations — Corporate Professional (AR / EN)
  ---------------------------------------------------------- */
  const I18N = {
    ar: {
      'meta.title': 'منصّات للتقييم العقاري | الدقة التي تصنع قيمة العقار',
      'meta.desc': 'شركة سعودية متخصصة في خدمات التقييم العقاري الاحترافية عالية الدقة وفق المعايير المعترف بها محليًا ودوليًا.',
      'a11y.skip': 'تجاوز إلى المحتوى',
      'aria.nav': 'التنقل الرئيسي', 'aria.open': 'فتح القائمة', 'aria.close': 'إغلاق القائمة',
      'intro.skip': 'تخطي',
      'nav.home': 'الرئيسية', 'nav.about': 'من نحن', 'nav.vision': 'رؤيتنا', 'nav.mission': 'رسالتنا',
      'nav.values': 'قيمنا', 'nav.services': 'خدماتنا', 'nav.process': 'مراحل التقييم',
      'nav.accreditations': 'الاعتمادات', 'nav.achievements': 'الإنجازات', 'nav.contact': 'تواصل معنا',
      'nav.cta': 'طلب تقييم عقاري',
      'hero.kicker': 'شركة سعودية متخصصة في التقييم العقاري',
      'hero.title': 'منصّات للتقييم العقاري',
      'hero.tagline': 'الدقة التي تصنع قيمة العقار',
      'hero.desc': 'نقدّم خدمات تقييم عقاري احترافية عالية الدقة وفق المعايير المعترف بها محليًا ودوليًا، لتكون أساسًا موثوقًا يدعم قرارات البيع والشراء والتمويل والاستثمار.',
      'hero.cta1': 'اطلب تقييمًا عقاريًا', 'hero.cta2': 'تعرّف علينا',
      'trust.license': 'رخصة تقييم عقاري', 'trust.membership': 'عضوية الهيئة السعودية للمقيّمين المعتمدين', 'trust.rics': 'عضوية RICS — MRICS',
      'about.kicker': 'من نحن',
      'about.title': 'خبرة عقارية تُبنى على الدقة والمعايير المعتمدة',
      'about.p1': 'منصّات للتقييم العقاري شركة سعودية متخصصة في تقديم خدمات التقييم العقاري الاحترافية عالية الدقة، مع الالتزام بالمعايير المعترف بها محليًا ودوليًا.',
      'about.p2': 'نحوّل دراسة الموقع وحالة العقار ومؤشرات السوق إلى تقارير تقييم واضحة ومهنية، تمنح عملاءنا صورة دقيقة تدعم قراراتهم بثقة.',
      'about.pt1': 'دقة التقييم', 'about.pt2': 'تحليل شامل للعقار',
      'about.pt3': 'فهم الموقع والحالة والقيمة السوقية', 'about.pt4': 'تقارير احترافية',
      'about.pt5': 'دعم قرارات البيع والشراء والتمويل والاستثمار',
      'about.badge.t': 'رخصة تقييم عقاري',
      'goal.kicker': 'هدفنا',
      'goal.text': 'تقديم قيمة مضافة وخدمة موثوقة تلبي احتياجاتك العقارية.',
      'vision.kicker': 'رؤيتنا',
      'vision.text': 'أن نصبح روّاد التقييم العقاري في المملكة العربية السعودية ومنطقة الخليج العربي.',
      'mission.kicker': 'رسالتنا',
      'mission.text': 'تقديم خدمات تقييم عقاري بمعايير عالمية تعتمد على الابتكار وأخلاقيات العمل والدقة، مع الالتزام بالمهنية التامة.',
      'values.kicker': 'قيمنا', 'values.title': 'المبادئ التي تحكم عملنا',
      'v1.t': 'الشفافية', 'v1.d': 'تقديم تقارير واضحة ودقيقة تدعم قرارات عملائنا.',
      'v2.t': 'الجودة', 'v2.d': 'الالتزام بأعلى معايير الجودة في جميع مراحل العمل.',
      'v3.t': 'العملاء أولًا', 'v3.d': 'التركيز على تلبية احتياجات العملاء بما يعزز ثقتهم ورضاهم.',
      'v4.t': 'الابتكار', 'v4.d': 'توظيف أحدث التقنيات لتعزيز الكفاءة والدقة.',
      'exp.label': 'ساعات الخبرة',
      'ceo.kicker': 'كلمة الرئيس التنفيذي',
      'ceo.msg': '«يُدرج هنا نص رسالة الرئيس التنفيذي كما ورد في ملف الشركة التعريفي (Company Profile).»',
      'ceo.name': 'خالد بن شاكر المبيض', 'ceo.role': 'الرئيس التنفيذي',
      'cert.kicker': 'الاعتمادات', 'cert.title': 'التراخيص والاعتمادات المهنية',
      'cert.note': 'ملاحظة: التقييم عبارة عن رأي وتقييم، وليس توصية بشراء أو الاحتفاظ أو بيع الأوراق المالية.',
      'cert1.t': 'رخصة التقييم العقاري', 'cert1.member': 'خالد شاكر بن حامد المبيض',
      'cert1.issue': '1447/04/04هـ', 'cert1.expiry': '1452/05/27هـ',
      'cert2.t': 'زمالة الهيئة السعودية للمقيّمين المعتمدين', 'cert2.sector': 'القطاع العقاري',
      'cert3.t': 'السجل التجاري', 'cert3.company': 'شركة منصّات للتقييم العقاري',
      'cert3.legal': 'شركة ذات مسؤولية محدودة', 'cert3.entity': 'كيان مهني', 'cert3.status': 'نشط',
      'cert4.validity': '1 يناير 2026 – 31 ديسمبر 2026',
      'cert5.t': 'التصنيف طويل الأجل — TASSNIEF / سِما',
      'cert5.outlook': 'إيجابية', 'cert5.issued': 'يناير 2025', 'cert5.expiry': 'يناير 2026',
      'tag.license': 'ترخيص', 'tag.membership': 'عضوية', 'tag.registry': 'سجل تجاري', 'tag.intl': 'عضوية دولية', 'tag.rating': 'تصنيف',
      'lbl.licenseNo': 'رقم الرخصة', 'lbl.member': 'العضو', 'lbl.issue': 'تاريخ الإصدار', 'lbl.expiry': 'تاريخ الانتهاء',
      'lbl.version': 'إصدار الرخصة', 'lbl.membershipNo': 'رقم العضوية', 'lbl.sector': 'القطاع', 'lbl.date': 'التاريخ',
      'lbl.certNo': 'رقم الشهادة', 'lbl.company': 'اسم الشركة', 'lbl.unifiedNo': 'الرقم الوطني الموحّد',
      'lbl.legalForm': 'الشكل القانوني', 'lbl.entity': 'نوع الكيان', 'lbl.status': 'الحالة',
      'lbl.designation': 'الرتبة', 'lbl.validity': 'مدة الصلاحية', 'lbl.rating': 'التصنيف',
      'lbl.outlook': 'التوقعات', 'lbl.serial': 'الرقم التسلسلي',
      'services.kicker': 'خدماتنا', 'services.title': 'خدمات التقييم العقاري',
      'services.lead': 'نعتمد ثلاث طرق معتمدة للوصول إلى القيمة العادلة للعقار:',
      's1.d': 'تعتمد على العائد المالي المتوقع من العقار، مثل الإيجارات السنوية.',
      's2.d': 'تعتمد على تكلفة إعادة البناء بالإضافة إلى قيمة الأرض.',
      's3.d': 'مقارنة العقار بعقارات مشابهة تم بيعها مؤخرًا في المنطقة نفسها، مع مراعاة الموقع والمساحة والحالة.',
      'process.kicker': 'كيف نعمل', 'process.title': 'مراحل عملية التقييم',
      'process.hint': 'اضغط على أي مرحلة لعرض التفاصيل.',
      'pr1.t': 'التواصل مع العميل', 'pr1.d': 'تواصل أولي مع العميل لفهم احتياجه ونوع العقار المطلوب تقييمه.',
      'pr2.t': 'استلام المستندات', 'pr2.d': 'استلام المستندات والمعلومات الأساسية المتعلقة بالعقار.',
      'pr3.t': 'دراسة العقار', 'pr3.d': 'دراسة أولية للعقار وخصائصه قبل بدء الإجراءات.',
      'pr4.t': 'تحديد نطاق العمل والأتعاب وتصدير عرض السعر', 'pr4.d': 'تحديد نطاق العمل والأتعاب، وتصدير عرض السعر للعميل.',
      'pr5.t': 'التعاقد مع العميل', 'pr5.d': 'توقيع اتفاقية العمل وتحديد الالتزامات المتبادلة.',
      'pr6.t': 'توجيه المقيم لمعاينة العقار', 'pr6.d': 'زيارة ميدانية يقوم بها المقيم لمعاينة العقار.',
      'pr7.t': 'جمع وتحليل البيانات', 'pr7.d': 'جمع بيانات العقار والسوق وتحليلها بعناية.',
      'pr8.t': 'استخلاص القيمة بأحد طرق التقييم', 'pr8.d': 'تطبيق أحد أساليب التقييم المعتمدة للوصول إلى القيمة.',
      'pr9.t': 'إعداد التقرير', 'pr9.d': 'إعداد تقرير التقييم وفق المعايير المعتمدة.',
      'pr10.t': 'إرسال مسودة للعميل', 'pr10.d': 'إرسال مسودة التقرير للعميل للمراجعة والتأكد من صحة البيانات.',
      'pr11.t': 'اعتماد التقرير وإيداعه في «قيمة»', 'pr11.d': 'اعتماد التقرير النهائي وإيداعه في منصة «قيمة».',
      'pr12.t': 'تسليم التقرير النهائي', 'pr12.d': 'تسليم العميل التقرير النهائي المعتمد.',
      'urgent.title': 'التقييم العقاري العاجل',
      'urgent.text': 'خدمة تقييم عقاري سريعة للعملاء الذين لديهم احتياج عاجل، مقابل رسوم إضافية.',
      'urgent.cta': 'تواصل معنا',
      'ach.kicker': 'سجلنا', 'ach.title': 'إنجازاتنا',
      'ach.text': 'يتم حاليًا توثيق أحدث إنجازاتنا، وسيتم عرضها هنا قريبًا.',
      'partners.title': 'شركاؤنا', 'partners.slot': 'شعار الشريك', 'partners.note': 'مساحات جاهزة لعرض شعارات شركائنا.',
      'clients.title': 'عملاؤنا', 'clients.slot': 'شعار العميل', 'clients.note': 'مساحات جاهزة لعرض شعارات عملائنا.',
      'contact.kicker': 'تواصل معنا', 'contact.title': 'لنبدأ الحديث عن عقارك',
      'contact.lead': 'فريقنا جاهز للإجابة على استفساراتك وطلبات التقييم.',
      'lbl2.website': 'الموقع الإلكتروني', 'lbl2.email': 'البريد الإلكتروني', 'lbl2.phone': 'الهاتف',
      'lbl2.unified': 'الرقم الموحّد', 'lbl2.license': 'رخصة التقييم', 'lbl2.membership': 'رقم العضوية', 'lbl2.social': 'حساب التواصل',
      'f.name': 'الاسم الكامل', 'f.phName': 'أدخل اسمك الكامل',
      'f.email': 'البريد الإلكتروني', 'f.phEmail': 'name@example.com',
      'f.phone': 'رقم الهاتف', 'f.phPhone': '05XXXXXXXX',
      'f.service': 'نوع الخدمة', 'f.message': 'الرسالة', 'f.phMessage': 'اكتب تفاصيل طلبك...',
      'f.optService': 'اختر نوع الخدمة', 'f.optValuation': 'تقييم عقاري', 'f.optUrgent': 'تقييم عاجل',
      'f.optConsult': 'استشارة', 'f.optOther': 'أخرى',
      'f.send': 'إرسال الطلب',
      'f.sucT': 'تم استلام طلبك بنجاح', 'f.sucD': 'سيتواصل معك فريقنا في أقرب وقت ممكن.',
      'err.required': 'هذا الحقل مطلوب', 'err.email': 'يرجى إدخال بريد إلكتروني صحيح', 'err.phone': 'يرجى إدخال رقم هاتف صحيح',
      'footer.about': 'شركة سعودية متخصصة في خدمات التقييم العقاري الاحترافية عالية الدقة وفق المعايير المعترف بها محليًا ودوليًا.',
      'footer.links': 'روابط سريعة', 'footer.contact': 'معلومات التواصل', 'footer.licenses': 'التراخيص والعضويات',
      'footer.flLicense': 'رخصة التقييم العقاري:', 'footer.flMembership': 'عضوية الهيئة:', 'footer.flUnified': 'الرقم الموحّد:',
      'footer.rights': 'منصّات للتقييم العقاري — جميع الحقوق محفوظة.'
    },
    en: {
      'meta.title': 'Menassat Real Estate Valuation | The Precision That Defines Property Value',
      'meta.desc': 'A Saudi firm specialized in high-precision professional real estate valuation services, in accordance with locally and internationally recognized standards.',
      'a11y.skip': 'Skip to main content',
      'aria.nav': 'Main navigation', 'aria.open': 'Open menu', 'aria.close': 'Close menu',
      'intro.skip': 'Skip',
      'nav.home': 'Home', 'nav.about': 'About Us', 'nav.vision': 'Our Vision', 'nav.mission': 'Our Mission',
      'nav.values': 'Our Values', 'nav.services': 'Our Services', 'nav.process': 'Valuation Process',
      'nav.accreditations': 'Accreditations', 'nav.achievements': 'Achievements', 'nav.contact': 'Contact Us',
      'nav.cta': 'Request a Valuation',
      'hero.kicker': 'A Saudi Firm Specialized in Real Estate Valuation',
      'hero.title': 'Menassat Real Estate Valuation',
      'hero.tagline': 'The Precision That Defines Property Value',
      'hero.desc': 'We provide high-precision professional real estate valuation services in accordance with locally and internationally recognized standards — a trusted foundation supporting sale, purchase, financing and investment decisions.',
      'hero.cta1': 'Request a Valuation', 'hero.cta2': 'Learn More',
      'trust.license': 'Real Estate Valuation License', 'trust.membership': 'Saudi Authority for Accredited Valuers — Member', 'trust.rics': 'RICS Member — MRICS',
      'about.kicker': 'About Us',
      'about.title': 'Real Estate Expertise Built on Precision and Accredited Standards',
      'about.p1': 'Menassat Real Estate Valuation is a Saudi company specialized in delivering high-precision professional real estate valuation services, committed to locally and internationally recognized standards.',
      'about.p2': 'We translate location analysis, property condition and market indicators into clear, professional valuation reports — giving our clients an accurate picture that confidently supports their decisions.',
      'about.pt1': 'Valuation Accuracy', 'about.pt2': 'Comprehensive Property Analysis',
      'about.pt3': 'Understanding Location, Condition & Market Value', 'about.pt4': 'Professional Reports',
      'about.pt5': 'Support for Sale, Purchase, Financing & Investment Decisions',
      'about.badge.t': 'Valuation License',
      'goal.kicker': 'Our Goal',
      'goal.text': 'To deliver added value and a trusted service that meets your real estate needs.',
      'vision.kicker': 'Our Vision',
      'vision.text': 'To become the leading real estate valuation firm in the Kingdom of Saudi Arabia and the Arabian Gulf region.',
      'mission.kicker': 'Our Mission',
      'mission.text': 'To provide real estate valuation services to global standards built on innovation, work ethics and precision, with full professional commitment.',
      'values.kicker': 'Our Values', 'values.title': 'The Principles That Govern Our Work',
      'v1.t': 'Transparency', 'v1.d': 'Delivering clear and accurate reports that support our clients’ decisions.',
      'v2.t': 'Quality', 'v2.d': 'Commitment to the highest quality standards across all stages of our work.',
      'v3.t': 'Clients First', 'v3.d': 'Focusing on meeting clients’ needs in ways that strengthen their trust and satisfaction.',
      'v4.t': 'Innovation', 'v4.d': 'Employing the latest technologies to enhance efficiency and accuracy.',
      'exp.label': 'Hours of Experience',
      'ceo.kicker': 'Message from the CEO',
      'ceo.msg': '“The text of the CEO’s message, as stated in the company profile, will be placed here.”',
      'ceo.name': 'Khaled Bin Shaker Almobid', 'ceo.role': 'Chief Executive Officer',
      'cert.kicker': 'Accreditations', 'cert.title': 'Licenses & Professional Credentials',
      'cert.note': 'Note: The valuation is an opinion and assessment, and not a recommendation to buy, hold or sell securities.',
      'cert1.t': 'Real Estate Valuation License', 'cert1.member': 'Khaled Shaker bin Hamed Almobid',
      'cert1.issue': '04/04/1447 AH', 'cert1.expiry': '27/05/1452 AH',
      'cert2.t': 'Saudi Authority for Accredited Valuers — Fellowship', 'cert2.sector': 'Real Estate Sector',
      'cert3.t': 'Commercial Registration', 'cert3.company': 'Menassat Real Estate Valuation Company',
      'cert3.legal': 'LLC', 'cert3.entity': 'Professional Entity', 'cert3.status': 'Active',
      'cert4.validity': 'Jan 1, 2026 – Dec 31, 2026',
      'cert5.t': 'Long-Term Credit Rating — TASSNIEF / Simah',
      'cert5.outlook': 'Positive Outlook', 'cert5.issued': 'January 2025', 'cert5.expiry': 'January 2026',
      'tag.license': 'License', 'tag.membership': 'Membership', 'tag.registry': 'Registry', 'tag.intl': 'International', 'tag.rating': 'Rating',
      'lbl.licenseNo': 'License No.', 'lbl.member': 'Member', 'lbl.issue': 'Issue Date', 'lbl.expiry': 'Expiry Date',
      'lbl.version': 'License Version', 'lbl.membershipNo': 'Membership No.', 'lbl.sector': 'Sector', 'lbl.date': 'Date',
      'lbl.certNo': 'Certificate No.', 'lbl.company': 'Company', 'lbl.unifiedNo': 'Unified National No.',
      'lbl.legalForm': 'Legal Form', 'lbl.entity': 'Entity Type', 'lbl.status': 'Status',
      'lbl.designation': 'Designation', 'lbl.validity': 'Validity', 'lbl.rating': 'Rating',
      'lbl.outlook': 'Outlook', 'lbl.serial': 'Serial No.',
      'services.kicker': 'Our Services', 'services.title': 'Real Estate Valuation Services',
      'services.lead': 'We apply three recognized approaches to conclude the fair value of a property:',
      's1.d': 'Relies on the property’s expected financial return, such as annual rentals.',
      's2.d': 'Relies on the reconstruction cost in addition to the land value.',
      's3.d': 'Compares the property with similar properties recently sold in the same area, taking into account location, area and condition.',
      'process.kicker': 'How We Work', 'process.title': 'Valuation Process Stages',
      'process.hint': 'Tap any stage to view its details.',
      'pr1.t': 'Contacting the Client', 'pr1.d': 'Initial communication with the client to understand their need and the property type to be valued.',
      'pr2.t': 'Receiving Documents', 'pr2.d': 'Receiving the essential documents and information related to the property.',
      'pr3.t': 'Property Study', 'pr3.d': 'A preliminary study of the property and its characteristics before proceeding.',
      'pr4.t': 'Scope of Work, Fees & Quotation', 'pr4.d': 'Defining the scope of work and fees, and issuing the price quotation to the client.',
      'pr5.t': 'Contracting with the Client', 'pr5.d': 'Signing the engagement agreement and defining mutual obligations.',
      'pr6.t': 'Directing the Valuer for Site Inspection', 'pr6.d': 'An on-site visit conducted by the valuer to inspect the property.',
      'pr7.t': 'Data Collection & Analysis', 'pr7.d': 'Collecting and carefully analyzing property and market data.',
      'pr8.t': 'Value Determination Using a Valuation Approach', 'pr8.d': 'Applying one of the recognized valuation approaches to conclude the value.',
      'pr9.t': 'Report Preparation', 'pr9.d': 'Preparing the valuation report in accordance with approved standards.',
      'pr10.t': 'Submitting the Draft to the Client', 'pr10.d': 'Submitting the draft report to the client for review and data verification.',
      'pr11.t': 'Report Approval & Deposit in “Qima”', 'pr11.d': 'Approving the final report and depositing it in the “Qima” platform.',
      'pr12.t': 'Final Report Delivery', 'pr12.d': 'Delivering the final approved report to the client.',
      'urgent.title': 'Urgent Real Estate Valuation',
      'urgent.text': 'A fast-track valuation service for clients with urgent needs, subject to additional fees.',
      'urgent.cta': 'Contact Us',
      'ach.kicker': 'Our Record', 'ach.title': 'Our Achievements',
      'ach.text': 'Our latest milestones are being documented and will be featured here soon.',
      'partners.title': 'Our Partners', 'partners.slot': 'Partner Logo', 'partners.note': 'Reserved spaces to feature our partners’ logos.',
      'clients.title': 'Our Clients', 'clients.slot': 'Client Logo', 'clients.note': 'Reserved spaces to feature our clients’ logos.',
      'contact.kicker': 'Contact Us', 'contact.title': 'Let’s Talk About Your Property',
      'contact.lead': 'Our team is ready to answer your inquiries and valuation requests.',
      'lbl2.website': 'Website', 'lbl2.email': 'Email', 'lbl2.phone': 'Phone',
      'lbl2.unified': 'Unified Number', 'lbl2.license': 'Valuation License', 'lbl2.membership': 'Membership No.', 'lbl2.social': 'Social Account',
      'f.name': 'Full Name', 'f.phName': 'Enter your full name',
      'f.email': 'Email Address', 'f.phEmail': 'name@example.com',
      'f.phone': 'Phone Number', 'f.phPhone': '05XXXXXXXX',
      'f.service': 'Service Type', 'f.message': 'Message', 'f.phMessage': 'Write the details of your request...',
      'f.optService': 'Select a service type', 'f.optValuation': 'Real Estate Valuation', 'f.optUrgent': 'Urgent Valuation',
      'f.optConsult': 'Consultation', 'f.optOther': 'Other',
      'f.send': 'Send Request',
      'f.sucT': 'Your request has been received', 'f.sucD': 'Our team will contact you as soon as possible.',
      'err.required': 'This field is required', 'err.email': 'Please enter a valid email address', 'err.phone': 'Please enter a valid phone number',
      'footer.about': 'A Saudi firm specialized in high-precision professional real estate valuation services, in accordance with locally and internationally recognized standards.',
      'footer.links': 'Quick Links', 'footer.contact': 'Contact Information', 'footer.licenses': 'Licenses & Memberships',
      'footer.flLicense': 'Valuation License:', 'footer.flMembership': 'Authority Membership:', 'footer.flUnified': 'Unified Number:',
      'footer.rights': 'Menassat Real Estate Valuation. All rights reserved.'
    }
  };

  const LS_LANG = 'menassat-lang';
  let lang = localStorage.getItem(LS_LANG) === 'en' ? 'en' : 'ar';

  /* ----------------------------------------------------------
     2) Language switcher (RTL/LTR + localStorage)
  ---------------------------------------------------------- */
  function applyLang(l) {
    lang = l;
    const dict = I18N[l];
    document.documentElement.lang = l;
    document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr';

    $$('[data-i18n]').forEach(el => {
      const v = dict[el.dataset.i18n];
      if (v != null) el.textContent = v;
    });
    $$('[data-i18n-ph]').forEach(el => {
      const v = dict[el.dataset.i18nPh];
      if (v != null) el.setAttribute('placeholder', v);
    });
    $$('[data-i18n-aria]').forEach(el => {
      const v = dict[el.dataset.i18nAria];
      if (v != null) el.setAttribute('aria-label', v);
    });

    document.title = dict['meta.title'];
    const md = $('meta[name="description"]');
    if (md) md.setAttribute('content', dict['meta.desc']);

    $$('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
    updateToggleLabel();
    localStorage.setItem(LS_LANG, l);
  }

  $$('.lang-btn').forEach(btn =>
    btn.addEventListener('click', () => applyLang(btn.dataset.lang))
  );

  /* ----------------------------------------------------------
     3) Opening animation (Logo Reveal)
  ---------------------------------------------------------- */
  const intro = $('#intro');
  const seenThisSession = sessionStorage.getItem('menassat-intro') === '1';
  let introFinished = false;

  function finishIntro() {
    if (introFinished || !intro) return;
    introFinished = true;
    intro.classList.add('done');
    document.body.classList.remove('intro-open');
    document.body.classList.add('site-in');
    sessionStorage.setItem('menassat-intro', '1');
    setTimeout(() => intro.remove(), 900);
  }

  if (intro) {
    if (REDUCED) {
      intro.remove();
      document.body.classList.remove('intro-open');
      document.body.classList.add('site-in');
      introFinished = true;
    } else {
      if (seenThisSession) intro.classList.add('fast'); // زيارة متكررة بنفس الجلسة → افتتاحية أسرع
      requestAnimationFrame(() => intro.classList.add('play'));
      const DURATION = seenThisSession ? 1700 : 4700;
      setTimeout(finishIntro, DURATION);
      $('#introSkip')?.addEventListener('click', finishIntro);
    }
  } else {
    document.body.classList.add('site-in');
  }

  /* ----------------------------------------------------------
     4) Image fallbacks (يعمل بدون أي صور — بديل بصري أنيق)
  ---------------------------------------------------------- */
  $$('img[data-fallback]').forEach(img => {
    const fail = () => img.closest('[data-media]')?.classList.add('no-photo');
    img.addEventListener('error', fail);
    if (img.complete && img.naturalWidth === 0) fail();
  });

  /* ----------------------------------------------------------
     5) Navbar: sticky + mobile menu + active link
  ---------------------------------------------------------- */
  const nav = $('#siteNav');
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 24);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const navToggle = $('#navToggle');
  const mobileMenu = $('#mobileMenu');
  const updateToggleLabel = () => {
    if (!navToggle) return;
    const open = document.body.classList.contains('nav-open');
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? I18N[lang]['aria.close'] : I18N[lang]['aria.open']);
  };

  navToggle?.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
    updateToggleLabel();
  });
  $$('#mobileMenu a').forEach(a => a.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
    updateToggleLabel();
  }));
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && document.body.classList.contains('nav-open')) {
      document.body.classList.remove('nav-open');
      updateToggleLabel();
      navToggle?.focus();
    }
  });

  const linkFor = id => $$('.nav-link').filter(a => a.getAttribute('href') === '#' + id);
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        $$('.nav-link').forEach(a => a.classList.remove('active'));
        linkFor(entry.target.id).forEach(a => a.classList.add('active'));
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  $$('main section[id]').forEach(s => sectionObserver.observe(s));

  /* ----------------------------------------------------------
     6) Scroll reveal animations
  ---------------------------------------------------------- */
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const delay = el.dataset.delay;
      if (delay) el.style.transitionDelay = delay + 'ms';
      el.classList.add('in-view');
      revealObserver.unobserve(el);
    });
  }, { threshold: 0.15 });
  $$('[data-animate]').forEach(el => revealObserver.observe(el));

  /* ----------------------------------------------------------
     7) Experience counter — 224,600+
  ---------------------------------------------------------- */
  const counter = $('#expCounter');
  if (counter) {
    const target = parseInt(counter.dataset.count, 10) || 0;
    const render = v => { counter.textContent = v.toLocaleString('en-US'); };

    if (REDUCED) { render(target); }
    else {
      const startCount = () => {
        const DURATION = 2000, t0 = performance.now();
        const tick = now => {
          const p = Math.min((now - t0) / DURATION, 1);
          render(Math.round(target * (1 - Math.pow(1 - p, 3)))); // easeOutCubic
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      };
      const cObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) { startCount(); cObserver.disconnect(); }
        });
      }, { threshold: 0.4 });
      cObserver.observe(counter.closest('section') || counter);
    }
  }

  /* ----------------------------------------------------------
     8) Timeline interactions (12 stages)
  ---------------------------------------------------------- */
  $$('.tl-head').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.tl-item');
      const open = item.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
    });
  });

  /* ----------------------------------------------------------
     9) Contact form (تحقق + نجاح — اربطه بخادمك لاحقًا، انظر README)
  ---------------------------------------------------------- */
  const form = $('#contactForm');
  const successBox = $('#formSuccess');

  const setError = (input, msg) => {
    const field = input.closest('.field');
    field.querySelector('.field-error').textContent = msg || '';
    if (msg) input.setAttribute('aria-invalid', 'true');
    else input.removeAttribute('aria-invalid');
  };

  form?.addEventListener('submit', e => {
    e.preventDefault();
    const d = I18N[lang];
    const name = $('#fName'), email = $('#fEmail'), phone = $('#fPhone'),
          service = $('#fService'), message = $('#fMessage');
    let valid = true;

    if (!name.value.trim()) { setError(name, d['err.required']); valid = false; } else setError(name);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.value.trim())) { setError(email, d['err.email']); valid = false; } else setError(email);
    if (!/^[+\d][\d\s-]{7,14}$/.test(phone.value.trim())) { setError(phone, d['err.phone']); valid = false; } else setError(phone);
    if (!service.value) { setError(service, d['err.required']); valid = false; } else setError(service);
    if (!message.value.trim()) { setError(message, d['err.required']); valid = false; } else setError(message);

    if (!valid) return;

    /* ⚙️ نقطة الربط بالخادم:
       fetch('https://formspree.io/f/YOUR_ID', { method:'POST', body:new FormData(form) })
       ثم أظهر رسالة النجاح عند نجاح الاستجابة */
    form.hidden = true;
    successBox.hidden = false;
    successBox.focus();
  });

  /* ----------------------------------------------------------
     10) Footer year
  ---------------------------------------------------------- */
  const year = $('#year');
  if (year) year.textContent = new Date().getFullYear();

  /* Init language after DOM is ready */
  applyLang(lang);
})();