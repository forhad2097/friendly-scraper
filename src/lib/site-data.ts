export const INSTITUTE = {
  name: "Nightingale Nursing and Midwifery Institute (NNMI)",
  nameBn: "নাইটিঙ্গেল নার্সিং অ্যান্ড মিডওয়াইফারি ইনস্টিটিউট",
  tagline: "Enter to Learn, Leave to Serve",
  phone: "01715-038551",
  phoneTel: "+8801715038551",
  phoneSecondary: "01550-699159",
  phoneSecondaryTel: "+8801550699159",
  whatsapp: "8801715038551",
  email: "nightingalennmi2020@gmail.com",
  website: "www.nightingalennmi.com",
  address: "৩৭/৬/১, রোড নং-৬, আদাবর, মোহাম্মদপুর, ঢাকা - ১২০৭",
  addressEn: "Adabor, Mohammadpur, Dhaka-1207, Bangladesh",
  officeHours: "শনি - বৃহস্পতি, সকাল ৯টা - বিকেল ৫টা",
  officeHoursEn: "Saturday - Thursday, 9 AM - 5 PM",
  facebook: "https://www.facebook.com/nnmi.official/",
};

export const NAV_LINKS = [
  { href: "#home", bn: "হোম", en: "Home" },
  { href: "#about", bn: "আমাদের সম্পর্কে", en: "About Us" },
  { href: "#courses", bn: "কোর্স", en: "Courses" },
  { href: "#facilities", bn: "সুযোগ-সুবিধা", en: "Facilities" },
  { href: "#career", bn: "ক্যারিয়ার", en: "Career" },
  { href: "#admission", bn: "ভর্তি", en: "Admission" },
  { href: "#contact", bn: "যোগাযোগ", en: "Contact" },
];

export const COURSES = [
  {
    icon: "🩺",
    tag: "BNMC Approved",
    title: "Diploma in Nursing Science & Midwifery",
    titleBn: "ডিপ্লোমা ইন নার্সিং সায়েন্স অ্যান্ড মিডওয়াইফারি",
    desc: "মেডিকেল, সার্জিক্যাল ও কমিউনিটি নার্সিং-এ হাসপাতাল-ভিত্তিক প্র্যাকটিক্যাল ট্রেনিংসহ সরকার অনুমোদিত ৩ বছর মেয়াদি প্রোগ্রাম।",
    duration: "৩ বছর",
    seats: "৪৫ জন (প্রতি বছর)",
    years: [
      {
        label: "১ম বর্ষ",
        topics: [
          "Basic Sciences (Anatomy, Physiology, Microbiology)",
          "Nursing Fundamentals",
          "Community Health Nursing",
        ],
      },
      {
        label: "২য় বর্ষ",
        topics: ["Medical Nursing", "Surgical Nursing", "Pediatric Nursing", "Nursing Informatics"],
      },
      {
        label: "৩য় বর্ষ",
        topics: [
          "Midwifery",
          "Mental Health Nursing",
          "Nursing Management",
          "Research & Statistics",
        ],
      },
    ],
    clinicalSites: [
      "Dhaka Medical College Hospital",
      "Shaheed Suhrawardy Medical College Hospital",
    ],
  },
  {
    icon: "👩‍⚕️",
    tag: "BNMC Approved",
    title: "Diploma in Midwifery",
    titleBn: "ডিপ্লোমা ইন মিডওয়াইফারি",
    desc: "মাতৃস্বাস্থ্য ও মিডওয়াইফারি কেয়ারে হাতে-কলমে দক্ষতা তৈরির জন্য ৬ মাসের ইন্টার্নশিপসহ ৩ বছর মেয়াদি প্রোগ্রাম।",
    duration: "৩ বছর (৬ মাস ইন্টার্নশিপসহ)",
    seats: "৪০ জন (প্রতি বছর)",
    years: [
      {
        label: "১ম বর্ষ",
        topics: [
          "Anatomy, Physiology & Embryology",
          "Fundamentals of Midwifery",
          "Community Midwifery",
          "Basic Nursing Skills",
          "Nutrition",
          "English & Communication",
        ],
      },
      {
        label: "২য় বর্ষ",
        topics: [
          "Antenatal Care",
          "Intranatal Care",
          "Postnatal Care",
          "Neonatal Care",
          "Pharmacology",
          "Obstetric Emergencies",
        ],
      },
      {
        label: "৩য় বর্ষ",
        topics: [
          "Complicated Pregnancy & Labor",
          "Family Planning",
          "Community Midwifery",
          "Ethics & Professionalism",
          "Health Education",
          "Research Methodology",
        ],
      },
    ],
    clinicalSites: ["সরকার অনুমোদিত হাসপাতাল ও ক্লিনিক্যাল প্রশিক্ষণ কেন্দ্র"],
  },
];

export const COURSE_OPTIONS = ["Diploma in Nursing Science & Midwifery", "Diploma in Midwifery"];

export const ADMISSION_INFO = {
  eligibility:
    "এসএসসি ও এইচএসসি (বা সমমান) উভয় পরীক্ষায় উত্তীর্ণ—যেকোনো বিভাগ, তবে বিজ্ঞান বিভাগ অগ্রাধিকারযোগ্য। ন্যূনতম জিপিএ BNMC নির্দেশিকা অনুযায়ী নির্ধারিত।",
  documents: [
    "এসএসসি ও এইচএসসি সার্টিফিকেট ও মার্কশিটের সত্যায়িত ফটোকপি",
    "৪ কপি সাম্প্রতিক পাসপোর্ট সাইজের রঙিন ছবি",
    "জন্ম নিবন্ধন সনদ বা জাতীয় পরিচয়পত্রের সত্যায়িত ফটোকপি",
    "BNMC বা স্বাস্থ্য মন্ত্রণালয়ের চাহিদা অনুযায়ী অতিরিক্ত ডকুমেন্ট (প্রয়োজন সাপেক্ষে)",
  ],
  admissionFee: "৳৫০,০০০ (এককালীন)",
  hostelFee: "৳২,৫০০ (মাসিক)",
  paymentNote:
    "মাসিক বা ত্রৈমাসিক কিস্তিতে পরিশোধের সুযোগ রয়েছে। ফি-তে টিউশন, হোস্টেল, খাবার, ল্যাব প্র্যাকটিস, ক্লিনিক্যাল ট্রেনিং, ইউনিফর্ম, বই ও পরীক্ষার খরচ অন্তর্ভুক্ত।",
  procedure:
    "ইনস্টিটিউটে সরাসরি এসে অথবা নিচের ফর্ম পূরণ করে আবেদন করুন। আমাদের ভর্তি টিম ফোন বা WhatsApp-এ যোগাযোগ করে পরবর্তী ধাপ জানিয়ে দেবে।",
};

export const FACILITIES = [
  {
    icon: "BookOpen",
    title: "৫টি মাল্টিমিডিয়া ক্লাসরুম",
    desc: "প্রজেক্টর, হোয়াইটবোর্ড, সাউন্ড সিস্টেম ও আরামদায়ক আসনসহ প্রশস্ত, সুবাতাসযুক্ত ক্লাসরুম।",
  },
  {
    icon: "FlaskConical",
    title: "৭টি বিশেষায়িত ল্যাব",
    desc: "Fundamental, Anatomy & Physiology, Microbiology, Nutrition, Midwifery, Pharmacology এবং Computer & Audio-Visual ল্যাব।",
  },
  {
    icon: "Library",
    title: "লাইব্রেরি",
    desc: "পাঠ্যবই, রেফারেন্স বই এবং দেশি-বিদেশি জার্নালসহ নীরব পাঠের উপযোগী পরিবেশ।",
  },
  {
    icon: "Languages",
    title: "ইংলিশ ল্যাঙ্গুয়েজ ক্লাব",
    desc: "স্পোকেন ইংলিশ, রাইটিং ও পাবলিক স্পিকিং চর্চার নিয়মিত সুযোগ।",
  },
  {
    icon: "Trophy",
    title: "সহশিক্ষা কার্যক্রম",
    desc: "খেলাধুলা প্রতিযোগিতা, সাংস্কৃতিক অনুষ্ঠান, সেমিনার ও সায়েন্স ফেয়ার।",
  },
  {
    icon: "Home",
    title: "হোস্টেল সুবিধা (মহিলা)",
    desc: "পূর্ণকালীন মহিলা সুপারিনটেনডেন্টের তত্ত্বাবধানে নিরাপদ, স্বাস্থ্যসম্মত আবাসন। মাসিক ফি ৳২,৫০০।",
  },
];

export const CLINICAL_TRAINING = {
  title: "ক্লিনিক্যাল ট্রেনিং ও ইন্টার্নশিপ",
  desc: "উভয় ডিপ্লোমা প্রোগ্রামের অংশ হিসেবে হাসপাতাল-ভিত্তিক নিয়মিত ক্লিনিক্যাল প্র্যাকটিস এবং ৬ মাসের বাধ্যতামূলক ইন্টার্নশিপ অন্তর্ভুক্ত।",
  sites: [
    "Dhaka Medical College Hospital",
    "Shaheed Suhrawardy Medical College Hospital",
    "অন্যান্য সরকারি ও বেসরকারি হাসপাতাল",
  ],
};

export const FACULTY_ROLES = [
  { role: "প্রিন্সিপাল (Principal)", qualification: "MBBS, Advanced Training" },
  { role: "ভাইস প্রিন্সিপাল (Vice Principal)", qualification: "MBBS" },
  { role: "লেকচারার (বিভিন্ন বিষয়)", qualification: "MPH, B.Sc (Hons), M.Sc" },
  { role: "নার্সিং ইন্সট্রাক্টর (২ জন)", qualification: "B.Sc in Nursing" },
  { role: "মিডওয়াইফারি ইন্সট্রাক্টর (২ জন)", qualification: "B.Sc / Diploma in Midwifery" },
  { role: "কম্পিউটার ইন্সট্রাক্টর", qualification: "B.Sc in Computer Science" },
  { role: "নার্সিং সুপারভাইজার", qualification: "Diploma in Nursing" },
  { role: "মিডওয়াইফারি সুপারভাইজার", qualification: "Diploma in Midwifery" },
  { role: "ল্যাবরেটরি অ্যাসিস্ট্যান্ট (২ জন)", qualification: "Diploma in Laboratory" },
  { role: "হোস্টেল সুপারিনটেনডেন্ট", qualification: "B.A" },
];

export const MANAGEMENT_TEAM = [
  { name: "Mohammad Golam Sarwar", role: "Chairman" },
  { name: "Prof. Dr. Moazzem Hossain", role: "Managing Director" },
  { name: "Sabina Yeasmeen", role: "Principal" },
  { name: "Engr. Rupam Barua", role: "Coordinator" },
  { name: "K. M. Salah Uddin", role: "Admin" },
];

export const CAREER_LOCAL = [
  "সরকারি হাসপাতাল (উপজেলা স্বাস্থ্য কমপ্লেক্স, জেলা হাসপাতাল, মেডিকেল কলেজ)",
  "প্রাইভেট ক্লিনিক ও হাসপাতাল",
  "কমিউনিটি হেলথ সেন্টার",
  "এনজিও ও স্বাস্থ্য প্রকল্প",
  "ডায়াগনস্টিক ও ইমার্জেন্সি কেয়ার ইউনিট",
  "শিক্ষা প্রতিষ্ঠান (প্রশিক্ষক হিসেবে)",
  "শিল্প এলাকা (ইন্ডাস্ট্রিয়াল নার্স)",
  "সশস্ত্র বাহিনী ও বিশেষায়িত সরকারি সেবা",
];

export const CAREER_INTERNATIONAL = [
  {
    region: "দক্ষিণ কোরিয়া",
    desc: "কোরিয়ান স্বাস্থ্য বিশেষজ্ঞদের সহায়তায় সরাসরি চাকরি ও উচ্চতর প্রশিক্ষণের সুযোগ।",
  },
  {
    region: "মধ্যপ্রাচ্য",
    desc: "সৌদি আরব, দুবাই, বাহরাইনসহ উপসাগরীয় দেশগুলোতে উচ্চ চাহিদা।",
  },
  {
    region: "ইউরোপ, যুক্তরাজ্য ও কানাডা",
    desc: "উচ্চশিক্ষা এবং প্রাসঙ্গিক লাইসেন্সিং পরীক্ষার পর সুযোগ।",
  },
  {
    region: "আন্তর্জাতিক এনজিও ও হাসপাতাল",
    desc: "কমিউনিটি হেলথ, দুর্যোগ সাড়াদান ও মা-শিশু স্বাস্থ্যসেবা কার্যক্রম।",
  },
];

export const CAREER_SUPPORT = [
  "ক্যারিয়ার কাউন্সেলিং",
  "সিভি ও ইন্টারভিউ প্রস্তুতি প্রশিক্ষণ",
  "বিদেশে আবেদন প্রক্রিয়ায় সহায়তা",
  "অ্যালামনাই নেটওয়ার্কিং",
  "গ্র্যাজুয়েশনের পর চাকরি প্রাপ্তিতে সহায়তা",
];

export const HIGHER_STUDY_OPTIONS = [
  "B.Sc. in Nursing",
  "Post Basic B.Sc. in Nursing",
  "M.Sc. in Nursing",
  "Midwifery Specialization Courses",
  "Public Health ডিগ্রি",
];
