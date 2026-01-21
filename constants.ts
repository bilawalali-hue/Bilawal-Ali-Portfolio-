
import { TranslationsMap } from './types';

export const LANGUAGES = [
  { code: 'en', name: 'English', dir: 'ltr' },
  { code: 'es', name: 'Español', dir: 'ltr' },
  { code: 'de', name: 'Deutsch', dir: 'ltr' },
  { code: 'fr', name: 'Français', dir: 'ltr' },
  { code: 'it', name: 'Italiano', dir: 'ltr' },
  { code: 'tr', name: 'Türkçe', dir: 'ltr' },
  { code: 'ar', name: 'العربية', dir: 'rtl' },
  { code: 'fa', name: 'فارسی', dir: 'rtl' },
];

export const TRANSLATIONS: TranslationsMap = {
  en: {
    hero: { title: "Bilawal Ali", subtitle: "Full-Stack Architect & 3D Web Creative", cta_portfolio: "Portfolio", cta_contact: "Contact" },
    about: { title: "The Architect", desc1: "Crafting digital experiences that transcend boundaries.", desc2: "Specializing in high-performance web systems with 2+ years of expertise.", goal: "Goal: Scalable global solutions." },
    skills: { title: "Arsenal", frontend: "Frontend", backend: "Backend", database: "Systems", visuals: "Motion & 3D" },
    portfolio: { title: "Selected Works", view_project: "Explore" },
    contact: { title: "Get in Touch", name: "Name", email: "Email", message: "Message", send: "Send Transmission" }
  },
  de: {
    hero: { title: "Bilawal Ali", subtitle: "Full-Stack Architekt & 3D Web Creative", cta_portfolio: "Portfolio", cta_contact: "Kontakt" },
    about: { title: "Der Architekt", desc1: "Digitale Erlebnisse, die Grenzen überschreiten.", desc2: "Spezialisiert auf Hochleistungssysteme mit über 2 Jahren Erfahrung.", goal: "Ziel: Skalierbare globale Lösungen." },
    skills: { title: "Arsenal", frontend: "Frontend", backend: "Backend", database: "Systeme", visuals: "Motion & 3D" },
    portfolio: { title: "Projekte", view_project: "Erkunden" },
    contact: { title: "Kontakt aufnehmen", name: "Name", email: "E-Mail", message: "Nachricht", send: "Senden" }
  },
  es: {
    hero: { title: "Bilawal Ali", subtitle: "Arquitecto Full-Stack y Creativo Web 3D", cta_portfolio: "Portafolio", cta_contact: "Contacto" },
    about: { title: "El Arquitecto", desc1: "Creando experiencias digitales que trascienden fronteras.", desc2: "Especializado en sistemas web de alto rendimiento con más de 2 años de experiencia.", goal: "Objetivo: Soluciones globales escalables." },
    skills: { title: "Arsenal", frontend: "Frontend", backend: "Backend", database: "Sistemas", visuals: "Motion & 3D" },
    portfolio: { title: "Proyectos", view_project: "Explorar" },
    contact: { title: "Contacto", name: "Nombre", email: "Email", message: "Mensaje", send: "Enviar" }
  },
  fr: {
    hero: { title: "Bilawal Ali", subtitle: "Architecte Full-Stack & Créatif Web 3D", cta_portfolio: "Portfolio", cta_contact: "Contact" },
    about: { title: "L'Architecte", desc1: "Concevoir des expériences numériques au-delà des frontières.", desc2: "Spécialisé dans les systèmes web haute performance (2+ ans d'expérience).", goal: "Objectif : Solutions mondiales évolutives." },
    skills: { title: "Arsenal", frontend: "Frontend", backend: "Backend", database: "Systèmes", visuals: "Motion & 3D" },
    portfolio: { title: "Projets", view_project: "Explorer" },
    contact: { title: "Contactez-moi", name: "Nom", email: "E-mail", message: "Message", send: "Envoyer" }
  },
  it: {
    hero: { title: "Bilawal Ali", subtitle: "Architetto Full-Stack & Creativo 3D", cta_portfolio: "Portfolio", cta_contact: "Contatto" },
    about: { title: "L'Architetto", desc1: "Creazione di esperienze digitali che superano i confini.", desc2: "Specializzato in sistemi web ad alte prestazioni con oltre 2 anni di esperienza.", goal: "Obiettivo: Soluzioni globali scalabili." },
    skills: { title: "Arsenale", frontend: "Frontend", backend: "Backend", database: "Sistemi", visuals: "Motion & 3D" },
    portfolio: { title: "Progetti", view_project: "Esplora" },
    contact: { title: "Contattami", name: "Nome", email: "Email", message: "Messaggio", send: "Invia" }
  },
  tr: {
    hero: { title: "Bilawal Ali", subtitle: "Full-Stack Mimar & 3D Web Yaratıcı", cta_portfolio: "Portfolyo", cta_contact: "İletişim" },
    about: { title: "Mimar", desc1: "Sınırları aşan dijital deneyimler tasarlıyor.", desc2: "2+ yıllık tecrübe ile yüksek performanslı web sistemlerinde uzman.", goal: "Hedef: Ölçeklenebilir küresel çözümler." },
    skills: { title: "Arsenal", frontend: "Önyüz", backend: "Arkayüz", database: "Sistemler", visuals: "Hareket & 3D" },
    portfolio: { title: "Projeler", view_project: "İncele" },
    contact: { title: "İletişime Geç", name: "İsim", email: "E-posta", message: "Mesaj", send: "Gönder" }
  },
  ar: {
    hero: { title: "بلاول علي", subtitle: "مهندس واجهات برمجية ومبدع ويب ثلاثي الأبعاد", cta_portfolio: "الأعمال", cta_contact: "اتصل بي" },
    about: { title: "المهندس", desc1: "صياغة تجارب رقمية تتجاوز الحدود.", desc2: "متخصص في أنظمة الويب عالية الأداء مع خبرة تزيد عن سنتين.", goal: "الهدف: حلول عالمية قابلة للتوسع." },
    skills: { title: "المهارات", frontend: "الواجهات الأمامية", backend: "الواجهات الخلفية", database: "الأنظمة", visuals: "ثلاثي الأبعاد" },
    portfolio: { title: "مشاريع مختارة", view_project: "استكشف" },
    contact: { title: "تواصل معي", name: "الاسم", email: "البريد", message: "الرسالة", send: "إرسال" }
  },
  fa: {
    hero: { title: "بلاول علی", subtitle: "معمار فول‌استک و خلاق وب سه‌بعدی", cta_portfolio: "نمونه کارها", cta_contact: "تماس" },
    about: { title: "معمار", desc1: "خلق تجربه‌های دیجیتالی که از مرزها فراتر می‌روند.", desc2: "متخصص در سیستم‌های وب با کارایی بالا با بیش از ۲ سال تجربه.", goal: "هدف: راهکارهای جهانی مقیاس‌پذیر." },
    skills: { title: "مهارت‌ها", frontend: "فرانت‌اند", backend: "بک‌اند", database: "سیستم‌ها", visuals: "موشن و سه‌بعدی" },
    portfolio: { title: "پروژه‌ها", view_project: "بررسی" },
    contact: { title: "ارتباط با من", name: "نام", email: "ایمیل", message: "پیام", send: "ارسال" }
  }
};
