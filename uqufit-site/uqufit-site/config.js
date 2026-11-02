// ======================================================
//  إعدادات الموقع — عدّل هنا فقط
// ======================================================

// 1) بيانات مشروع Firebase (من Project settings › Your apps › Web app)
//    هذي البيانات عامة وطبيعي تكون ظاهرة، الحماية الحقيقية في ملف firestore.rules
export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyCFfBU_8fwfqI4Q52xzxqAga-_JiW2xb2Q",
  authDomain: "uqufit-7.firebaseapp.com",
  projectId: "uqufit-7",
  storageBucket: "uqufit-7.firebasestorage.app",
  messagingSenderId: "307643078829",
  appId: "1:307643078829:web:53e115fbf6cc21977b0e24"
};

// 2) اللجان — المعرّف (id) بالإنجليزي وبدون مسافات، ولازم يطابق القائمة في firestore.rules
export const COMMITTEES = [
  { id: "hr", name: "لجنة الموارد البشرية", desc: "شؤون الأعضاء وتنظيم فرق العمل في النادي." },
  { id: "qol", name: "لجنة جودة الحياة", desc: "مبادرات تعزز الصحة والنشاط وجودة الحياة للطلاب." },
  { id: "sports", name: "لجنة المسابقات والأنشطة الرياضية", desc: "تنظيم البطولات والمسابقات والأنشطة الرياضية." },
  { id: "pr", name: "لجنة العلاقات العامة", desc: "التواصل مع الجهات والشركاء وتمثيل النادي." },
  { id: "media", name: "قسم الإعلام والتصميم", desc: "تغطية الفعاليات والتصاميم وإدارة حسابات النادي." }
];

// 3) الكليات (تظهر في قائمة التسجيل)
export const COLLEGES = [
  "كلية الحاسبات", "كلية الهندسة", "كلية العلوم", "كلية الطب", "كلية إدارة الأعمال",
  "كلية الشريعة", "كلية التربية", "كلية العلوم الاجتماعية", "كلية اللغة العربية", "أخرى"
];

// 4) حسابات النادي
export const CLUB = {
  name: "النادي الرياضي",
  university: "جامعة أم القرى",
  x: "UQUFIT",
  tiktok: "uqufit7"
};

// 5) لو تبي التسجيل يكون بالبريد الجامعي فقط خلها true (ولازم تفعّلها كمان في firestore.rules)
export const REQUIRE_UQU_EMAIL = false;
