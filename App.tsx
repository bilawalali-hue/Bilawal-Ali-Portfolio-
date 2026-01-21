
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GoogleGenAI } from "@google/genai";
import { TRANSLATIONS, LANGUAGES } from './constants';
import { LanguageCode } from './types';
import Scene3D from './components/Scene3D';

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    id: "codhaus",
    title: "CodHaus Agency",
    desc: "Full-stack real-world applications featuring secure backend APIs and complex database logic.",
    tech: ["ASP.NET Core", "C#", "SQL Server", "RESTful API"],
    link: "https://github.com/bilawalali-hue",
    color: "from-blue-600 to-indigo-900"
  },
  {
    id: "pos-systems",
    title: "Enterprise POS",
    desc: "Built scalable POS solutions with JWT authentication and role-based access control.",
    tech: ["Angular", ".NET", "SQL", "JWT"],
    link: "https://github.com/bilawalali-hue",
    color: "from-pink-600 to-purple-900"
  },
  {
    id: "ecommerce",
    title: "Multi-Vendor Hub",
    desc: "Orchestrated multi-vendor e-commerce platform with automated orchestration systems.",
    tech: ["Laravel", "PHP", "MySQL", "Vue.js"],
    link: "https://github.com/bilawalali-hue",
    color: "from-emerald-600 to-teal-900"
  }
];

const ACHIEVEMENTS = [
  { title: "Code Refactoring", value: "20K Lines | 30% Boost", icon: "⚡" },
  { title: "App Deployment", value: "10 Responsive Apps", icon: "🚀" },
  { title: "Project Migration", value: "50% Less Downtime", icon: "🔄" },
  { title: "Backend Optimization", value: "60% Faster Loads", icon: "📉" }
];

const EXPERIENCE = [
  {
    role: "Full Stack Developer",
    company: "CodHaus Software Agency",
    period: "08/2024 - 08/2025",
    details: [
      "Built and maintained backend APIs using ASP.NET / C#.",
      "Managed SQL Server databases and query optimization.",
      "Integrated frontend applications with RESTful APIs."
    ]
  },
  {
    role: "Web Instructor",
    company: "Aptech Learning",
    period: "08/2025 - Present",
    details: [
      "Teaching core concepts of frontend and backend development.",
      "Conducting hands-on lab sessions for HTML, CSS, and JS.",
      "Guiding students in database design and SQL connectivity."
    ]
  }
];

const EDUCATION = [
  {
    degree: "Diploma in Software Engineering (ADSE)",
    institution: "Aptech Pakistan",
    period: "Completed 05/2024",
    details: "Specialized in software development life cycles and modern full-stack architectures."
  },
  {
    degree: "Intermediate (Pre-Engineering)",
    institution: "Ziauddin Board of Education",
    period: "04/2024 - 04/2026",
    details: "Advanced mathematics, physics, and logic fundamentals."
  },
  {
    degree: "Matriculation (Science)",
    institution: "Al-Shams Public School",
    period: "05/2021 - 05/2023",
    details: "Foundational science and technology studies."
  }
];

const App: React.FC = () => {
  const [lang, setLang] = useState<LanguageCode>('en');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  
  const [chatMessages, setChatMessages] = useState<{role: 'user' | 'bot', text: string}[]>([
    { role: 'bot', text: "Hello! I'm Bilawal's AI agent. I can tell you about his 2.5+ years of experience in .NET, Angular, and Laravel. How can I help?" }
  ]);
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    message: '',
    budget: '',
    source: ''
  });

  const t = TRANSLATIONS[lang];
  const isRTL = LANGUAGES.find(l => l.code === lang)?.dir === 'rtl';
  const sections = ['home', 'about', 'cv', 'portfolio', 'education', 'contact'];

  useEffect(() => {
    ScrollTrigger.create({
      start: 50,
      onUpdate: (self) => setIsScrolled(self.progress > 0)
    });

    gsap.utils.toArray(".reveal").forEach((elem: any) => {
      gsap.fromTo(elem, 
        { opacity: 0, y: 30 },
        { 
          opacity: 1, y: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: elem, start: "top 95%" }
        }
      );
    });

    sections.forEach((id) => {
      ScrollTrigger.create({
        trigger: `#${id}`,
        start: "top 30%",
        end: "bottom 30%",
        onEnter: () => setActiveSection(id),
        onEnterBack: () => setActiveSection(id),
      });
    });

    document.body.className = theme === 'dark' ? 'bg-[#050505] text-white' : 'bg-gray-50 text-gray-900';
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [lang, theme]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const handleChatSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;
    const userText = userInput;
    setChatMessages(prev => [...prev, { role: 'user', text: userText }]);
    setUserInput('');
    setIsTyping(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userText,
        config: {
          systemInstruction: `You are Bilawal Ali's professional AI assistant. Bilawal is a Full-Stack Developer with expertise in ASP.NET Core, Angular, Laravel, and SQL Server. He has 2+ years of professional experience including CodHaus Agency and Aptech Learning. Email: bilawalali75246@gmail.com. WhatsApp: +923079354214.`
        }
      });
      setChatMessages(prev => [...prev, { role: 'bot', text: response.text || "I'm having trouble connecting right now." }]);
    } catch (error) {
      setChatMessages(prev => [...prev, { role: 'bot', text: "I encountered an error. Please reach out to Bilawal directly at bilawalali75246@gmail.com." }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // Simulate high-end transmission to bilawalali75246@gmail.com
    console.log("Transmission sent to: bilawalali75246@gmail.com", formData);
    
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '', budget: '', source: '' });
      setTimeout(() => setFormStatus('idle'), 5000);
    }, 1800);
  };

  const isDark = theme === 'dark';

  const downloadCV = () => {
    // Simulated CV download
    alert("CV Download initiated. This would typically trigger a download of Bilawal_Ali_CV.pdf");
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 overflow-x-hidden ${isRTL ? 'font-arabic' : ''} ${isDark ? 'dark' : ''}`}>
      
      {/* Universal Desktop Navigation */}
      <nav className={`hidden md:flex fixed z-[100] top-8 left-1/2 -translate-x-1/2 px-6 py-3 w-auto rounded-full shadow-2xl glass border border-white/10 items-center gap-2 transition-all duration-700 ${isScrolled ? 'scale-9