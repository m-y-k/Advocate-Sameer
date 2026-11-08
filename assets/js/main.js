/**
 * SAMEER KHAN & ASSOCIATES - MAIN SCRIPT
 * Advocates, Solicitors & Legal Consultants | Chamber No. 623, Dwarka Court, Delhi
 */

document.addEventListener('DOMContentLoaded', () => {
  initBCIModal();
  initLanguageSwitcher();
  initConsultationForm();
  initTriageForm();
  initFAQAccordion();
  initMobileNav();
  initSmoothScroll();
});

/* ==========================================================================
   1. BAR COUNCIL OF INDIA DISCLAIMER MODAL (RULE 36 COMPLIANCE)
   ========================================================================== */
function initBCIModal() {
  const modalOverlay = document.getElementById('bciModalOverlay');
  const btnAgree = document.getElementById('bciBtnAgree');
  const btnDecline = document.getElementById('bciBtnDecline');

  if (!modalOverlay || !btnAgree) return;

  const hasAccepted = localStorage.getItem('sameer_bci_disclaimer_accepted');
  if (hasAccepted === 'true') {
    modalOverlay.classList.add('hidden');
  } else {
    modalOverlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  btnAgree.addEventListener('click', () => {
    localStorage.setItem('sameer_bci_disclaimer_accepted', 'true');
    modalOverlay.classList.add('hidden');
    document.body.style.overflow = '';
  });

  if (btnDecline) {
    btnDecline.addEventListener('click', () => {
      window.location.href = 'https://www.google.com';
    });
  }
}

/* ==========================================================================
   2. BILINGUAL SWITCHER (ENGLISH & HINDI)
   ========================================================================== */
const translations = {
  en: {
    // Top Bar
    courtReg: "Enrolled with Bar Council of Delhi | Chamber 623, Dwarka Court",
    timing: "Mon - Sat: 10:00 AM - 5:00 PM",
    
    // Nav
    navHome: "Home",
    navAbout: "About Us",
    navPractice: "Practice Areas",
    navWhyUs: "Why Choose Us",
    navTeam: "Our Team",
    navClients: "Clients & Trust",
    navFAQ: "FAQ",
    navContact: "Contact",
    btnFreeConsult: "Free Consultation",

    // Hero
    heroBadge: "12+ Years Courtroom Excellence",
    heroTitle: "Compassionate Counsel. Formidable Defense.",
    heroDesc: "Premier legal representation across the Delhi High Court, Dwarka District Court, Tribunals, and District Courts throughout Delhi NCR. Delivering strategic, result-oriented solutions with utmost confidentiality.",
    callNow: "Call Advocate",
    freeAdviceBtn: "Free Legal Advice",
    orCallDirect: "Direct Chamber Line",

    // Stats
    statExpNum: "12+",
    statExpLabel: "Years Court Experience",
    statCasesNum: "1,000+",
    statCasesLabel: "Cases Represented",
    statBarsNum: "3",
    statBarsLabel: "Bar Associations",
    statConsultNum: "100%",
    statConsultLabel: "Free Initial Evaluation",

    // About
    aboutTag: "About Advocate Sameer Khan",
    aboutTitle: "A Decade of Relentless Advocacy & Legal Integrity",
    aboutLead: "Advocate Sameer Khan (B.Com, LL.B) brings over 12 years of steadfast trial and appellate advocacy across all major courts and tribunals in Delhi NCR.",
    aboutBody: "Known for meticulous case preparation, sharp courtroom defense, and empathetic client counseling, Advocate Sameer Khan heads Sameer Khan & Associates. The firm combines deep procedural mastery with strategic acumen to secure favorable outcomes in criminal defense, matrimonial disputes, high-stakes civil litigation, and corporate disputes.",
    cred1Title: "Education & Qualifications",
    cred1Desc: "B.Com & Bachelor of Laws (LL.B)",
    cred2Title: "Courts & Judicial Forums",
    cred2Desc: "Delhi High Court, Dwarka District Court, Tis Hazari, Patiala House, Saket, Rohini, Karkardooma, CAT & NCLT",
    cred3Title: "Bar Association Memberships",
    cred3Desc: "Delhi High Court Bar Association (DHCBA), New Delhi Bar Association (NDBA), Dwarka Court Bar Association (DCBA)",

    // Practice Areas
    practiceTag: "Areas of Legal Expertise",
    practiceTitle: "Comprehensive Legal Services",
    practiceSubtitle: "Specialized representation engineered to protect your rights, personal liberty, assets, and business interests.",
    inquireWhatsapp: "Consult on WhatsApp",

    // Why Choose Us
    whyTag: "The Advantage",
    whyTitle: "Why Clients Trust Sameer Khan & Associates",
    why1Title: "12+ Years Courtroom Mastery",
    why1Desc: "Deep procedural understanding of trial and appellate procedures across all Delhi NCR District Courts and High Court.",
    why2Title: "Free Initial Evaluation",
    why2Desc: "Honest, straightforward legal assessment of your case facts before you commit to any litigation roadmap.",
    why3Title: "Client-Centric Strategy",
    why3Desc: "Tailored strategies for bail, divorce settlements, property partitions, and corporate recoveries.",
    why4Title: "24/7 Urgent Bail Support",
    why4Desc: "Prompt action on emergency midnight arrests, remands, anticipatory bail, and police station appearances.",

    // Clients
    clientTag: "Trust & Retainers",
    clientTitle: "Corporate & Commercial Clients",
    clientSubtitle: "Proudly advising leading business houses, retail enterprises, and manufacturing companies in commercial dispute resolution.",

    // Team
    teamTag: "Legal Associates",
    teamTitle: "Dedicated Team of Advocates & Researchers",
    teamSubtitle: "A cohesive team of experienced advocates committed to exhaustive legal research and rigorous case preparation.",

    // Chambers
    chamberTag: "Office & Location",
    chamberTitle: "Visit Our Court Chambers",
    chamberAddrTitle: "Chamber Address",
    chamberAddrText: "Chamber No. 623, Lawyers Chambers Complex, Dwarka District Court, Sector - 10, Dwarka, New Delhi - 110075",
    chamberTimeTitle: "Chamber Hours",
    chamberTimeText: "10:00 AM to 5:00 PM (Daily except Sundays & Government Holidays)",
    chamberDirectTitle: "Direct Contact",

    // Form
    formTitle: "Request Free Legal Consultation",
    formSubtitle: "Fill in your brief matter details below. We maintain strict client privilege and confidentiality.",
    labelName: "Your Full Name",
    labelPhone: "Phone / WhatsApp Number",
    labelArea: "Select Legal Matter",
    labelBrief: "Brief Summary of Your Query",
    placeholderBrief: "Please describe your situation, court (if already filed), or urgent issue...",
    btnSendWhatsapp: "Send via WhatsApp",
    btnSendEmail: "Send via Email",
    privacyNote: "Strict Legal Privilege: Your information is kept strictly confidential under attorney-client privilege.",

    // FAQ
    faqTag: "Clear Answers",
    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "Straightforward guidance on common legal inquiries, bail processes, matrimonial cases, and consultations."
  },
  hi: {
    // Top Bar
    courtReg: "दिल्ली बार काउंसिल में पंजीकृत | चैंबर 623, द्वारका कोर्ट",
    timing: "सोमवार - शनिवार: सुबह 10:00 से शाम 5:00 तक",

    // Nav
    navHome: "होम",
    navAbout: "हमारे बारे में",
    navPractice: "कार्यक्षेत्र",
    navWhyUs: "हमें क्यों चुनें",
    navTeam: "लीगल टीम",
    navClients: "क्लाइंट्स व विश्वास",
    navFAQ: "सवाल-जवाब",
    navContact: "संपर्क",
    btnFreeConsult: "निःशुल्क परामर्श",

    // Hero
    heroBadge: "12+ वर्षों का अदालती अनुभव",
    heroTitle: "सशक्त पैरवी। न्याय के प्रति अटूट समर्पण।",
    heroDesc: "दिल्ली उच्च न्यायालय, द्वारका जिला अदालत, सभी जिला अदालतों व ट्रिब्यूनल्स में विश्वसनीय कानूनी प्रतिनिधित्व। आपकी व्यक्तिगत स्वतंत्रता, संपत्ति और अधिकारों की मजबूत सुरक्षा।",
    callNow: "कॉल करें",
    freeAdviceBtn: "मुफ्त कानूनी सलाह",
    orCallDirect: "सीधा चैंबर फोन",

    // Stats
    statExpNum: "12+",
    statExpLabel: "वर्षों का कोर्ट अनुभव",
    statCasesNum: "1,000+",
    statCasesLabel: "सफल केस पैरवी",
    statBarsNum: "3",
    statBarsLabel: "प्रमुख बार एसोसिएशन",
    statConsultNum: "100%",
    statConsultLabel: "निःशुल्क प्रथम परामर्श",

    // About
    aboutTag: "एडवोकेट समीर खान का परिचय",
    aboutTitle: "एक दशक से अधिक की निष्पक्ष पैरवी और कानूनी कुशलता",
    aboutLead: "एडवोकेट समीर खान (B.Com, LL.B) दिल्ली एनसीआर की सभी प्रमुख अदालतों में 12 से अधिक वर्षों से प्रभावी व विश्वसनीय कानूनी सेवाएं दे रहे हैं।",
    aboutBody: "सटीक केस ड्राफ्टिंग, कोर्ट में प्रभावी जिरह और हर मुवक्किल के प्रति संवेदनशील दृष्टिकोण के लिए जाने जाने वाले एडवोकेट समीर खान 'समीर खान एंड एसोसिएट्स' के संस्थापक हैं। हमारी फर्म आपराधिक मामलों, वैवाहिक विवादों, दीवानी व चेक बाउंस मुकदमों में ठोस परिणाम दिलाने के लिए समर्पित है।",
    cred1Title: "शिक्षा व योग्यता",
    cred1Desc: "बी.कॉम एवं बैचलर ऑफ लॉज (LL.B)",
    cred2Title: "अदालतें व ट्रिब्यूनल",
    cred2Desc: "दिल्ली हाईकोर्ट, द्वारका कोर्ट, तीस हजारी, पटियाला हाउस, साकेत, रोहिणी, कड़कड़डूमा, कैट (CAT) एवं उपभोक्ता फोरम",
    cred3Title: "बार एसोसिएशन सदस्यता",
    cred3Desc: "दिल्ली हाईकोर्ट बार एसोसिएशन, नई दिल्ली बार एसोसिएशन, द्वारका कोर्ट बार एसोसिएशन",

    // Practice Areas
    practiceTag: "हमारे प्रमुख कार्यक्षेत्र",
    practiceTitle: "व्यापक कानूनी सेवाएं",
    practiceSubtitle: "आपकी स्वतंत्रता, संपत्ति और व्यापारिक हितों की रक्षा के लिए विशेषज्ञ कानूनी प्रतिनिधित्व।",
    inquireWhatsapp: "व्हाट्सएप पर पूछें",

    // Why Choose Us
    whyTag: "हमारी विशेषता",
    whyTitle: "समीर खान एंड एसोसिएट्स ही क्यों चुनें?",
    why1Title: "12+ वर्षों का अदालती अनुभव",
    why1Desc: "दिल्ली की सभी जिला अदालतों और हाईकोर्ट में ट्रायल और अपील का गहरा व व्यावहारिक ज्ञान।",
    why2Title: "निःशुल्क प्राथमिक परामर्श",
    why2Desc: "केस की वास्तविक स्थिति और कानूनी विकल्पों की निष्पक्ष व स्पष्ट राय बिना किसी अग्रिम फीस के।",
    why3Title: "व्यक्तिगत रणनीति",
    why3Desc: "जमानत, तलाक, भरण-पोषण, संपत्ति विवाद या चेक बाउंस में हर केस के लिए कस्टमाइज्ड कानूनी रणनीति।",
    why4Title: "आपातकालीन जमानत सहायता",
    why4Desc: "अचानक गिरफ्तारी, रिमांड, अग्रिम जमानत (Anticipatory Bail) और थाने में त्वरित कानूनी उपस्थिति।",

    // Clients
    clientTag: "विश्वसनीयता एवं रिटेनर",
    clientTitle: "कॉर्पोरेट व व्यावसायिक क्लाइंट्स",
    clientSubtitle: "दिल्ली एनसीआर के प्रतिष्ठित व्यावसायिक प्रतिष्ठानों और उद्योग घरानों को निरंतर कानूनी सलाह।",

    // Team
    teamTag: "सहयोगी अधिवक्ता",
    teamTitle: "समर्पित एवं अनुभवी लीगल टीम",
    teamSubtitle: "गहन कानूनी रिसर्च, सटीक ड्राफ्टिंग और कोर्ट में निरंतर सहयोग करने वाले एडवोकेट्स की टीम।",

    // Chambers
    chamberTag: "कार्यालय व पता",
    chamberTitle: "हमारे कोर्ट चैंबर में आएं",
    chamberAddrTitle: "चैंबर का पता",
    chamberAddrText: "चैंबर नं. 623, लॉयर्स चैंबर्स, द्वारका जिला अदालत, सेक्टर - 10, द्वारका, नई दिल्ली - 110075",
    chamberTimeTitle: "मिलने का समय",
    chamberTimeText: "सुबह 10:00 बजे से शाम 5:00 बजे तक (रविवार और सरकारी छुट्टियों को छोड़कर)",
    chamberDirectTitle: "सीधा संपर्क",

    // Form
    formTitle: "मुफ्त कानूनी परामर्श प्राप्त करें",
    formSubtitle: "नीचे अपना विवरण और समस्या संक्षेप में लिखें। आपकी जानकारी 100% गोपनीय रखी जाती है।",
    labelName: "आपका पूरा नाम",
    labelPhone: "फोन / व्हाट्सएप नंबर",
    labelArea: "केस का प्रकार चुनें",
    labelBrief: "अपनी कानूनी समस्या संक्षेप में लिखें",
    placeholderBrief: "कृपया अपनी समस्या, कोर्ट (यदि केस चल रहा हो) अथवा जरूरी कानूनी प्रश्न बताएं...",
    btnSendWhatsapp: "व्हाट्सएप पर भेजें",
    btnSendEmail: "ईमेल भेजें",
    privacyNote: "पूर्ण गोपनीयता: एडवोकेट-क्लाइंट प्रिविलेज के तहत आपकी जानकारी पूरी तरह सुरक्षित और गोपनीय है।",

    // FAQ
    faqTag: "स्पष्ट समाधान",
    faqTitle: "अक्सर पूछे जाने वाले सवाल",
    faqSubtitle: "जमानत, वैवाहिक विवाद, चेक बाउंस और कोर्ट की प्रक्रिया से जुड़े जरूरी सवालों के जवाब।"
  }
};

let currentLang = 'en';

function initLanguageSwitcher() {
  const langBtns = document.querySelectorAll('.lang-btn');
  
  // Check saved language
  const savedLang = localStorage.getItem('sameer_preferred_lang');
  if (savedLang && (savedLang === 'en' || savedLang === 'hi')) {
    setLanguage(savedLang);
  }

  langBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const selectedLang = e.currentTarget.getAttribute('data-lang');
      setLanguage(selectedLang);
    });
  });
}

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('sameer_preferred_lang', lang);

  // Update active button state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Apply translations to all elements with data-i18n
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.textContent = t[key];
    }
  });

  // Apply placeholder translations
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (t[key]) {
      el.setAttribute('placeholder', t[key]);
    }
  });

  // Update HTML lang attribute
  document.documentElement.lang = lang;
}

/* ==========================================================================
   3. CONSULTATION FORM & WHATSAPP / EMAIL GENERATION
   ========================================================================== */
function initConsultationForm() {
  const form = document.getElementById('consultationForm');
  const btnWhatsapp = document.getElementById('btnSubmitWhatsapp');
  const btnEmail = document.getElementById('btnSubmitEmail');

  if (!form) return;

  function getFormData() {
    const name = document.getElementById('clientName')?.value.trim();
    const phone = document.getElementById('clientPhone')?.value.trim();
    const area = document.getElementById('matterType')?.value;
    const brief = document.getElementById('clientBrief')?.value.trim();

    if (!name || !phone) {
      alert(currentLang === 'hi' 
        ? 'कृपया अपना नाम और संपर्क नंबर अवश्य दर्ज करें।' 
        : 'Please enter your Name and Contact Phone Number.');
      return null;
    }

    return { name, phone, area, brief };
  }

  // Handle WhatsApp Submission
  if (btnWhatsapp) {
    btnWhatsapp.addEventListener('click', (e) => {
      e.preventDefault();
      const data = getFormData();
      if (!data) return;

      const whatsappNumber = '919818151568';
      let message = `*Free Legal Consultation Request - Sameer Khan & Associates*\n\n`;
      message += `*Client Name:* ${data.name}\n`;
      message += `*Contact Number:* ${data.phone}\n`;
      message += `*Legal Matter:* ${data.area || 'General Legal Inquiry'}\n\n`;
      message += `*Query Summary:*\n${data.brief || 'Client requested initial callback for legal consultation.'}\n\n`;
      message += `_Submitted via official website consultation portal_`;

      const encodedMessage = encodeURIComponent(message);
      const url = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
      window.open(url, '_blank');
    });
  }

  // Handle Email Submission
  if (btnEmail) {
    btnEmail.addEventListener('click', (e) => {
      e.preventDefault();
      const data = getFormData();
      if (!data) return;

      const targetEmail = 'advocatesameerkhan786@gmail.com';
      const subject = `[Website Legal Consultation] - ${data.name} (${data.area || 'Legal Query'})`;
      let body = `Dear Advocate Sameer Khan & Associates,\n\n`;
      body += `I would like to request a free initial legal consultation.\n\n`;
      body += `Client Name: ${data.name}\n`;
      body += `Contact Phone: ${data.phone}\n`;
      body += `Category: ${data.area || 'General Litigation'}\n\n`;
      body += `Brief Summary of Case:\n${data.brief || 'Not specified'}\n\n`;
      body += `Kindly advise on the earliest appointment at Chamber No. 623, Dwarka District Court or via phone.\n\n`;
      body += `Sincerely,\n${data.name}\n${data.phone}`;

      const mailtoUrl = `mailto:${targetEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoUrl;
    });
  }
}

/* ==========================================================================
   4. FAQ ACCORDION INTERACTION
   ========================================================================== */
function initFAQAccordion() {
  const headers = document.querySelectorAll('.accordion-header');

  headers.forEach(header => {
    header.addEventListener('click', () => {
      const currentItem = header.parentElement;
      const isOpen = currentItem.classList.contains('active');

      // Close all other accordions
      document.querySelectorAll('.accordion-item').forEach(item => {
        item.classList.remove('active');
      });

      // Toggle current
      if (!isOpen) {
        currentItem.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   5. 60-SECOND CASE TRIAGE FORM HANDLER
   ========================================================================== */
function initTriageForm() {
  const btn = document.getElementById('btnTriageSubmit');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const matter = document.getElementById('triageMatter')?.value || 'Legal Matter';
    const court = document.getElementById('triageCourt')?.value || 'Delhi Court';
    const urgency = document.getElementById('triageUrgency')?.value || 'Urgent Consultation';

    let msg = `*Urgent Case Evaluation - Sameer Khan & Associates*\n\n`;
    msg += `*Matter:* ${matter}\n`;
    msg += `*Court / Forum:* ${court}\n`;
    msg += `*Urgency Level:* ${urgency}\n\n`;
    msg += `Hello Advocate Sameer Khan, I am seeking legal advice for the above matter. Kindly advise on the earliest consultation at Chamber No. 623, Dwarka District Court or via phone.`;

    const url = `https://wa.me/919818151568?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  });
}

/* ==========================================================================
   6. MOBILE NAVIGATION MENU
   ========================================================================== */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const navList = document.getElementById('navLinksList');

  if (!toggleBtn || !navList) return;

  toggleBtn.addEventListener('click', () => {
    navList.classList.toggle('open');
    const icon = toggleBtn.querySelector('i');
    if (icon) {
      if (navList.classList.contains('open')) {
        icon.className = 'fas fa-times';
      } else {
        icon.className = 'fas fa-bars';
      }
    }
  });

  // Close when clicking nav link
  navList.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navList.classList.remove('open');
      const icon = toggleBtn.querySelector('i');
      if (icon) icon.className = 'fas fa-bars';
    });
  });
}

/* ==========================================================================
   7. SMOOTH SCROLL & ACTIVE LINK HIGHLIGHTING
   ========================================================================== */
function initSmoothScroll() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

