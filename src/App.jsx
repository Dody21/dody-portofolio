// ================= COMPONENT =================
import ParticlesBackground from "./components/ParticlesBackground";

// ================= CORE =================
import React, { useRef, useState, useEffect } from "react";

// ================= ANIMATION & UI =================
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { ReactTyped } from "react-typed";
import Tilt from "react-parallax-tilt";

// ================= ASSETS =================
import heroImg from "./assets/new_pp.png";
import about from "./assets/Foto_Wisuda.jpg";
import about1 from "./assets/Foto_Wisuda_1.jpg";
import about2 from "./assets/Foto_Wisuda_2.jpg";
import about3 from "./assets/Foto_Wisuda_3.jpg";
import about4 from "./assets/Foto_Wisuda_4.jpg";
import logo from "./assets/Logo_profile.png";

// ================= SERVICES =================
import emailjs from "@emailjs/browser";

// ================= DATABASE =================
// import { db } from "./firebase";
// import { doc, getDoc, updateDoc, setDoc, increment } from "firebase/firestore";

// ================= ICONS (FONT AWESOME) =================
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaBars,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

// ================= ICONS (SIMPLE ICONS) =================
import {
  SiPython,
  SiMysql,
  SiTableau,
  SiJupyter,
  SiGooglecolab,
  SiDatabricks,
  SiFigma,
  SiGithub,
  SiMicrosoftexcel,
  SiGooglesheets,
  SiVisualstudiocode,
  SiPowerbi,
  SiCanva,
  SiAnaconda,
  SiGoogledatastudio,
  SiJavascript,
  SiHtml5,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
} from "react-icons/si";

export default function App() {
  const form = useRef();

  const [navOpen, setNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const aboutImages = [about, about1, about2, about3, about4];
  const [currentImage, setCurrentImage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const certRef = useRef(null);
  const [selectedCert, setSelectedCert] = useState(null);

  const scrollCertificates = (direction) => {
  const container = certRef.current;
  if (!container) return;

  const scrollAmount = 250;

  if (direction === "left") {
    container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  } else {
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  }
};

  useEffect(() => {
  const container = certRef.current;
  if (!container) return;

  if (window.innerWidth >= 768) return; // hanya mobile

  let animationFrame;
  let speed = 0.5; // 🔥 kecepatan (atur sendiri)

  const scroll = () => {
    container.scrollLeft += speed;

    // 🔥 reset TANPA KELIHATAN
    if (container.scrollLeft >= container.scrollWidth / 2) {
      container.scrollLeft -= container.scrollWidth / 2;
    }

    animationFrame = requestAnimationFrame(scroll);
  };

  scroll();

  const stopScroll = () => cancelAnimationFrame(animationFrame);
  const startScroll = () => scroll();

  container.addEventListener("touchstart", stopScroll);
  container.addEventListener("touchend", startScroll);

  return () => {
    cancelAnimationFrame(animationFrame);
    container.removeEventListener("touchstart", stopScroll);
    container.removeEventListener("touchend", startScroll);
  };
}, []);

  useEffect(() => {
  const timer = setTimeout(() => {
    setFadeOut(true);
    setTimeout(() => setLoading(false), 500);
  }, 2000); // durasi loader 2 detik

  return () => clearTimeout(timer);
}, []);

  const experiences = [
  {
    role: "Pengolah Data dan Monitoring Evaluasi Pelatihan",
    company: "Pusat Pengembangan SDM Perhubungan Udara",
    place: "Komplek Bandar Udara Budiarto, Kab Tangerang, Banten",
    year: "2025",
    logo:"/logos/Logo_PPSDMPU.png",
    program:"MagangHub Kemnaker",
    desc: [
      "Mengelola dan menganalisis data pelaksanaan pelatihan untuk memastikan kesesuaian dengan target program dan standar mutu.",
      "Menyusun serta mengembangkan instrumen evaluasi pelatihan untuk mengukur efektivitas pembelajaran peserta dan kinerja instruktur.",
      "Mengolah, merekap, dan menganalisis hasil penilaian peserta serta instruktur sebagai dasar evaluasi program pelatihan.",
      "Menyusun laporan evaluasi pelatihan secara berkala sebagai bahan monitoring dan pengambilan keputusan.",
      "Memberikan rekomendasi strategis untuk peningkatan kualitas dan efektivitas program pelatihan berdasarkan hasil analisis data.",
    ],
    certificate: "/certificates/PPSDMPU.pdf"
  },
  {
    role: "Business Consultant",
    company: "PT Kontak Perkasa Futures",
    place: "Sudirman Plaza, Jakarta",
    year: "2025",
    logo:"/logos/logo-kpf-full.png",
    desc: [
      "Memberikan edukasi dan konsultasi terkait perdagangan berjangka, komoditas, indeks, dan forex.",
      "Membangun dan menjaga hubungan profesional dengan nasabah.",
      "Melakukan pendekatan dan presentasi produk kepadan calon klien.",
      "Menyampaikan informasi produk secara etis dan komunikatif untuk meningkatkan kepercayaan nasabah.",
    ],
  },
  {
    role: "Data Science & Public Relation Practitioner",
    company: "PT Certrova Solusi Indonesia",
    place: "Jakarta Barat",
    year: "2024",
    logo:"/logos/Logo-CertovaSolusiIndonesia.png",
    program:"Magang dan Studi Independen Bersertifikat (MSIB) Kampus Merdeka",
    desc: [
      "Menganalisis data media untuk mengidentifikasi pola dan merancang strategi brand campaign.",
      "Mengembangkan strategi bisnis dan pemasaran berbasis riset pasar dan analisis kompetitor.",
      "Menyusun copywriting persuasif untuk mendukung branding pada berbagai platform digital.",
      "Menyampaikan presentasi publik dan komunikasi bisnis yang efektif.",
    ],
    certificate: "/certificates/SI.pdf",
  },
];

const certificatesData = [
  {
    title: "Computer Algorithm Competency Certificate",
    logo: "/logos/UBL.png",
    file: "/certificates/Algoritma.pdf",
  },
  {
    title: "Seminar Nasional Mahasiswa Fakultas Teknologi Informasi Certificate",
    logo: "/logos/UBL.png",
    file: "/certificates/SENAFTI.pdf",
  },
  {
    title: "Magang dan Studi Independen Certificate",
    logo: "/logos/kampusmerdeka.png",
    file: "/certificates/SI.pdf",
  },
  {
    title: "Pengolah Data dan Monitoring Evaluasi Pelatihan Certificate",
    logo: "/logos/Perhubungan.png",
    file: "/certificates/PPSDMPU.pdf",
  },

  {
    title: "Data Science Certificate",
    logo: "/logos/Dicoding.png",
    file: "/certificates/DataScience_Dicoding.pdf",
  },
  {
    title: "SQL Certificate",
    logo: "/logos/Dicoding.png",
    file: "/certificates/SQL_Dicoding.pdf",
  },
  {
    title: "Python Certificate",
    logo: "/logos/Dicoding.png",
    file: "/certificates/Python_Dicoding.pdf",
  },
  {
    title: "JavaScript Certificate",
    logo: "/logos/Dicoding.png",
    file: "/certificates/Javascript_Dicoding.pdf",
  },
  
  {
    title: "Pemrograman Web Certificate",
    logo: "/logos/Dicoding.png",
    file: "/certificates/Web_Dicoding.pdf",
  },
  {
    title: "Front-End Web Certificate",
    logo: "/logos/Dicoding.png",
    file: "/certificates/FrontEnd_Dicoding.pdf",
  },
  {
    title: "Kotlin Certificate",
    logo: "/logos/Dicoding.png",
    file: "/certificates/Kotlin_Dicoding.pdf",
  },
  {
    title: "HTML & CSS Certificate",
    logo: "/logos/Progate.png",
    file: "/certificates/HTML&CSS.pdf",
  },
  
  {
    title: "Toefl Test Prediction Certificate",
    logo: "/logos/Webster.jpg",
    file: "/certificates/Toefl.pdf",
  },
  {
    title: "Essential Skills Design Thinking Certificate",
    logo: "/logos/Gnik.png",
    file: "/certificates/Gnik_Design_Thinking.pdf",
  },
  {
    title: "Essential Skills Digital Disruption & Transformation Certificate",
    logo: "/logos/Gnik.png",
    file: "/certificates/Gnik_Digital_Disruption_&_Transformation.pdf",
  },
];

const displayCertificates = isMobile
  ? [...certificatesData, ...certificatesData] // duplicate buat infinite
  : certificatesData;

  // Auto slide image about me
  useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImage((prev) => (prev + 1) % aboutImages.length);
  }, 3000); // ganti setiap 3 detik

  return () => clearInterval(interval);
}, []);

  // const [visitors, setVisitors] = useState(0);
  // const [displayVisitors, setDisplayVisitors] = useState(0);
  
  // ✅ useEffect scroll (TETAP)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /*
  useEffect(() => {
  const updateVisitor = async () => {
    try {
      const hasVisited = localStorage.getItem("visited");
      const refDoc = doc(db, "portfolio", "visitors");
      const snap = await getDoc(refDoc);

      if (!hasVisited) {
        if (snap.exists()) {
          await updateDoc(refDoc, {
            count: increment(1),
          });

          const updatedSnap = await getDoc(refDoc);
          setVisitors(updatedSnap.data().count);
        } else {
          await setDoc(refDoc, { count: 1 });
          setVisitors(1);
        }

        localStorage.setItem("visited", "true");
      } else {
        if (snap.exists()) {
          setVisitors(snap.data().count);
        }
      }
    } catch (error) {
      console.error("Visitor update error:", error);
      setVisitors(0);
    }
  };

  updateVisitor();
}, []);
*/

  // useEffect animasi counter (Visitors) - DISABLE DULU
  /*
  useEffect(() => {
    if (visitors > 0) {
      let start = 0;
      const end = visitors;
      const duration = 1000;

      let step = Math.ceil(end / (duration / 16));

      const counter = setInterval(() => {
        start += step;
        if (start >= end) {
          start = end;
          clearInterval(counter);
        }
        setDisplayVisitors(start);
      }, 16);
    }
  }, [visitors]);
  */

  // Deteksi layar mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  
  const sendEmail = async (e) => {
  e.preventDefault();

  try {
    const result = await emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    console.log("SUCCESS!", result.text);
    alert("Pesan berhasil dikirim!");
    form.current.reset();
  } catch (error) {
    console.error("FAILED...", error);
    alert("Pesan gagal dikirim, coba lagi.");
  }
};

  // Staggered Animation Variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // jeda antar sertifikat
      },
    },
  };

  const toolsContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const toolsItem = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

if (loading) {
  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-neutral-950 transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center">
        
        {/* LOGO IMAGE */}
        <div className="logo-wrapper mb-6">
          <img src={logo} alt="Logo" className="logo-img" loading="lazy" />
        </div>

        <p className="text-gray-400 text-sm animate-pulse">
          Loading Portofolio...
        </p>
      </div>
    </div>
  );
}

  return (
    <div className="relative text-white min-h-screen font-poppins">

      {/* Particles */}
      <ParticlesBackground 
        fpsLimit={30}
        detectRetina={true}
        fullScreen={{ enable: true }}
      />

      {/* Navbar */}
      <nav 
        className={`fixed z-50 transition-all duration-300 rounded-2xl shadow-lg
        ${scrolled ? "bg-neutral-950/80 backdrop-blur-md" : "bg-transparent"}
        right-6 md:left-1/2 md:-translate-x-1/2
        w-auto md:w-[90vw] md:max-w-5xl
        `}
      >
        <div className="flex items-center justify-between px-4 py-2 md:px-6 md:py-3">


      {/* Menu Desktop (tetap sama) */}
      <ul className="ml-auto hidden md:flex gap-6 text-sm font-medium">
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="inline-block cursor-pointer hover:text-cyan-400 transform hover:scale-110 transition duration-200"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="inline-block cursor-pointer hover:text-cyan-400 transform hover:scale-110 transition duration-200"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="experience"
            smooth={true}
            duration={500}
            className="inline-block cursor-pointer hover:text-cyan-400 transform hover:scale-110 transition duration-200"
          >
            Experience
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="inline-block cursor-pointer hover:text-cyan-400 transform hover:scale-110 transition duration-200"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="inline-block cursor-pointer hover:text-cyan-400 transform hover:scale-110 transition duration-200"
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger Icon (Mobile) */}
      <div className="ml-auto md:hidden mt-2">
        <button
          onClick={() => setNavOpen(!navOpen)}
          className="text-2xl text-cyan-400"
          aria-label="Toggle navigation menu"
        >
          {navOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </div>

      {/* Mobile Menu */}
      {navOpen && (
        <div 
          className="absolute top-14 right-4
                    mt-0 md:hidden
                  bg-neutral-950/90 backdrop-blur-md
                    rounded-xl shadow-lg
                    px-6 py-4
                    flex flex-col gap-4 w-48"
        >
          <ul className="flex flex-col gap-6 text-lg font-medium">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-cyan-400 active:text-blue-500 transition-colors"
                onClick={() => setNavOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-cyan-400 transition-colors"
                onClick={() => setNavOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="experience"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-cyan-400 transition-colors"
                onClick={() => setNavOpen(false)}
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-cyan-400 transition-colors"
                onClick={() => setNavOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-cyan-400 transition-colors"
                onClick={() => setNavOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>


      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-start justify-center px-6 pt-16 md:pt-20 scroll-mt-32">
        <div className="container mx-auto grid md:grid-cols-2 items-center gap-12">
          {/* LEFT - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-left md:pl-8 order-2 md:order-1 -translate-y-8 md:-translate-y-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi everyone! I'm <span className="text-cyan-400 inline-block align-middle">Dodi Prayoga</span>
            </h1>

            <div className="mb-4">
              <div className="inline-block border-2 border-dotted border-cyan-400 px-4 py-2 rounded-md">
                <ReactTyped
                  strings={[
                    "Data Analyst", 
                    "Data Scientist", 
                    "Data-Driven Strategist", 
                    "Business Intelligence Enthusiast",
                  ]}
                  typeSpeed={60}
                  backSpeed={40}
                  backDelay={1400}
                  loop
                  className="text-cyan-400 text-2xl md:text-3xl font-bold"
                />
              </div>
            </div>

            <p className="text-gray-200 text-sm max-w-xl mb-6 leading-relaxed">
              Enthusiastic Data Science Graduate with experience in data mining and visualization. 
              Skilled in analyzing datasets, identifying consumer behavior patterns, and developing data-driven 
              strategies.
            </p>
            <p className="text-gray-200 text-lg max-w-xl mb-6 leading-relaxed"> 
              Open to opportunities in data analysis and business intelligence. 
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/CV_DodiPrayoga_resume.pdf"
                download="CV_DodiPrayoga_resume.pdf"
                className="inline-block border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg hover:bg-cyan-400 hover:text-neutral-900 transition active:scale-95"
              >
                Download CV
              </a>

            {/*<a
                href="#projects"
                className="inline-block border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg hover:bg-cyan-400 hover:text-neutral-900 transition active:scale-95"
              >
                Explore My Projects
              </a>*/}

              <a
                href="#contact"
                className="inline-block border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg hover:bg-cyan-400 hover:text-neutral-900 transition active:scale-95"
              >
                Contact Me
              </a>
            </div> 

            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-3">Follow Me On</h3>
              <div className="flex gap-5 text-2xl">
                <a
                  href="http://linkedin.com/in/dodi-prayoga"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-cyan-400 active:text-cyan-500 transition-colors"
                >
                  <FaLinkedin size={28} />
                </a>
                <a
                  href="https://instagram.com/dodyprygaa_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-cyan-400 active:text-cyan-500 transition-colors"
                >
                  <FaInstagram size={28} />
                </a>
                <a
                  href="https://www.facebook.com/share/1H8F3sLUJH/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-cyan-400 active:text-cyan-500 transition-colors"
                >
                  <FaFacebook size={28} />
                </a>
                <a
                  href="https://twitter.com/dodyprygaa_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-cyan-400 active:text-cyan-500 transition-colors"
                >
                  <FaTwitter size={28} />
                </a>
                <a
                  href="https://youtube.com/@dodyprayoga21?si=uvgwN5SgtA7aK_BX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-cyan-400 active:text-cyan-500 transition-colors"
                  >
                  <FaYoutube size={28} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT - Card PP*/}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center order-1 md:order-2"
          >
          <div className="relative w-72 md:w-96 rounded-2xl overflow-hidden">

          {/* Glow Background */}
          <div className="absolute inset-0 flex justify-center items-end">
            <div className="w-48 h-48 bg-cyan-500/20 blur-2xl rounded-full"></div>
          </div>

        <div className="bg-neutral-900/70 border border-cyan-400 rounded-2xl p-4">
          {/* Foto */}
          <img
            src={heroImg}
            alt="Profile"
            loading="lazy"
            className="
              h-[420px] md:h-[500px]
              object-cover
              object-[center_20%]
              translate-y-4
              transition duration-500
              hover:drop-shadow-[0_0_60px_rgba(34,211,238,0.7)]
              "
          />
        </div>
          
          </div>
          </motion.div>    
        </div>
      </section>
      

    {/* About Section */}
      <section id="about" className="py-24 container mx-auto px-6">
        <div className="grid md:grid-cols-2 items-center gap-12">
    
    {/* LEFT - Foto Gantung */}
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
      className="flex justify-center"
    >
    <motion.div
      drag
      dragElastic={0.4}
      dragConstraints={{ left: -40, right: 40, top: -40, bottom: 40 }}
      whileTap={{ scale: 0.95 }}
      animate={{ y: [0, -10, 0, 10, 0] }} // efek berayun pelan
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="relative w-72 md:w-96"
    >
    
    {/* Card menggantung */}
    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
      {/* Efek glow belakang */}
      <div className="absolute -inset-3 bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-700 opacity-40 blur-3xl rounded-2xl"></div>
      
      {/* Foto About */}
      <div className="relative z-10 bg-neutral-900/70 border border-cyan-400 rounded-2xl p-4">
        <motion.img
          key={currentImage}
          src={aboutImages[currentImage]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="rounded-xl object-cover w-full h-96"
        />

      {/* Dokumen */}
      <div className="mt-4 flex gap-3">
        <a
          href="/documents/Ijazah.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center border border-cyan-400 text-cyan-400 py-2 rounded-lg hover:bg-cyan-400 hover:text-neutral-900 transition text-sm"
        >
          🎓 Bachelor's
        </a>

        <a
          href="/documents/Transkrip_Nilai.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center border border-cyan-400 text-cyan-400 py-2 rounded-lg hover:bg-cyan-400 hover:text-neutral-900 transition text-sm"
        >
          📄 Transcript
        </a>
      </div>
      </div>
    </div>
  </motion.div>
</motion.div>

    {/* RIGHT - Text */}
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8}}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2 className="text-3xl font-bold mb-8">About Me</h2>
      <p className="text-gray-200 leading-relaxed max-w-3xl mb-6 text-justify">
        I am a <span className="text-cyan-400 font-medium">fresh graduate from Universitas Budi Luhur, 
        Faculty of Information Technology, majoring in Information Systems with a specialization in Data Science.</span> {" "}
        Throughout my academic journey, I have actively explored various <span className="text-cyan-400 font-medium">data mining 
        techniques</span> to analyze consumer behavior and brand data, uncover hidden patterns, and design product bundling strategies 
        that integrate data science approaches with practical business needs.
      </p>
      <p className="text-gray-200 leading-relaxed max-w-3xl mb-6 text-justify">
        In terms of <span className="text-cyan-400 font-medium">data preprocessing,</span> I am proficient in utilizing 
        tools such as <span className="text-cyan-400 font-medium">Jupyter Notebook, Google Colab, and RapidMiner.</span> {" "}
        For <span className="text-cyan-400 font-medium">data visualization,</span> I have experience using {" "}
        <span className="text-cyan-400 font-medium">Tableau, Power BI, and Google Data Studio.</span> Additionally, 
        I possess knowledge of <span className="text-cyan-400 font-medium">SQL Databases</span> with {" "}
        <span className="text-cyan-400 font-medium">MySQL,</span> and I am familiar with various {" "}
        <span className="text-cyan-400 font-medium">Integrated Development Environments (IDEs)</span> such as {" "}
        <span className="text-cyan-400 font-medium">VS Code, NetBeans, and Android Studio</span> to support technology-driven solutions.
      </p>
      <p className="text-gray-200 leading-relaxed max-w-3xl text-justify">
        With this background, I am eager to continue learning, sharpening my skills, and contributing to transforming 
        data into valuable insights that support more accurate and strategic <span className="text-cyan-400 font-medium">business 
        decision-making.</span>
      </p>
    </motion.div>
  </div>
</section>

{/* Experience Section */}
<section id="experience" className="py-24 px-6 relative">
  

    {/* Title */}
    <h2 className="text-4xl font-bold mb-2">Experience</h2>
    <p className="text-gray-400 mb-16">My Professional Journey</p>

    <div className="relative border-l-2 border-cyan-400/30 ml-4 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-cyan-400 before:animate-pulse">
    
    {experiences.map((exp, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        viewport={{ once: true }}
        className="mb-12 ml-6 relative"
      >

      {/* DOT */}
      <span className="absolute -left-9 top-2 w-5 h-5 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.8)]"></span>

      {/* CARD */}
      <div className="bg-neutral-900/60 backdrop-blur-md border border-cyan-400/20 rounded-xl p-6 hover:border-cyan-400 transition duration-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.3)]">

<div className="flex items-start gap-4 mb-2">
    <img
      src={exp.logo}
      alt={exp.company}
      className="w-12 h-12 min-w-[48px] object-contain scale-115 bg-white p-1 rounded-lg "
    />

  <div>
    <h3 className="text-xl font-semibold text-cyan-400 leading-tight">
      {exp.role}
    </h3>
    <p className="text-gray-300 text-sm">
      {exp.company}
    </p>

    {exp.program && (
      <p className="text-xs text-cyan-400">
        {exp.program}
      </p>
    )}
  </div>
</div>

        <p className="text-sm text-gray-400 mb-4">
          {exp.place} • {exp.year}
        </p>

        <ul className="text-gray-300 text-sm space-y-2 leading-relaxed">
          {exp.desc.map((item, i) => (
            <li key={i}>• {item}</li>
          ))}
        </ul>

        {exp.certificate && (
          <motion.div
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 0px 20px rgba(34,211,238,0.35)",
            }}
          whileTap={{ scale: 0.98 }}
          onClick={() =>
            setSelectedCert({
              title: `${exp.role} Certificate`,
              file: exp.certificate,
            })
          }
          className="
            mt-5 relative overflow-hidden
            bg-gradient-to-br from-cyan-400/10 to-blue-500/10
            border border-cyan-400/20
            rounded-xl px-4 py-4
            cursor-pointer
            group
            transition duration-300
          hover:border-cyan-400/60
            "
            >
          {/* Glow Hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent blur-2xl"></div>
            </div>

          <div className="relative z-10 flex items-center justify-between">
            {/* LEFT */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-cyan-400/20 flex items-center justify-center text-cyan-400 text-2xl">
                📜
              </div>

              <div>
                <h4 className="text-cyan-400 font-semibold text-sm md:text-base">
                  Professional Certificate
                </h4>

              <p className="text-gray-400 text-xs md:text-sm">
                Click to preview certificate
              </p>
            </div>
          </div>

            {/* RIGHT */}
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{
                duration: 1.5,
                repeat: Infinity,
                }}
                className="text-cyan-400 text-xl"
              >
              →
          </motion.div>
        </div>
      </motion.div>
    )}
      </div>
    </motion.div>
    ))}
    </div>
</section>

{/* Tools & Technologies */}
<section id="tools" className="py-24 px-6">
  <div className="container mx-auto">

    {/* Title */}
    <h2 className="text-4xl font-bold mb-2">Tools & Technologies</h2>
    <p className="text-gray-400 mb-12">
      My Professional Skills
    </p>

    {/* Grid */}
    <motion.div
      variants={toolsContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-6"
    >

      {[
        { name: "Python", icon: <SiPython />, desc: "Programming Language" },
        { name: "MySQL", icon: <SiMysql />, desc: "Database" },
        { name: "JavaScript", icon: <SiJavascript />, desc: "Programming Language" },
        { name: "HTML & CSS", icon: <SiHtml5 />, desc: "Markup & Styling" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, desc: "CSS Framework" },
        { name: "React", icon: <SiReact />, desc: "Front-End Library" },
        { name: "Node.js", icon: <SiNodedotjs />, desc: "Back-End Runtime" },
        { name: "Anaconda", icon: <SiAnaconda />, desc: "Environment Management" },
        { name: "Jupyter", icon: <SiJupyter />, desc: "Data Analysis" },
        { name: "Google Colab", icon: <SiGooglecolab />, desc: "Data Analysis" },
        { name: "Visual Studio Code", icon: <SiVisualstudiocode />, desc: "Code Editor" },
        { name: "Looker Studio", icon: <SiGoogledatastudio />, desc: "Data Visualization" },
        { name: "Power BI", icon: <SiPowerbi />, desc: "Data Visualization" },
        { name: "RapidMiner", icon: <SiDatabricks />, desc: "Data Mining" },
        { name: "Tableau", icon: <SiTableau />, desc: "Data Visualization" },
        { name: "Microsoft Excel", icon: <SiMicrosoftexcel />, desc: "Data Analysis" },
        { name: "Google Sheets", icon: <SiGooglesheets />, desc: "Spreadsheet" },
        { name: "Figma", icon: <SiFigma />, desc: "UI/UX Design" },
        { name: "Canva", icon: <SiCanva />, desc: "Design App" },
        { name: "GitHub", icon: <SiGithub />, desc: "Repository" },
      ].map((tool, index) => (

        <motion.div
          key={index}
          variants={toolsItem}
          whileHover={{ 
            scale: 1.05, 
            y: -5,
            boxShadow: "0px 0px 25px rgba(34,211,238,0.4)"
          }}
          whileTap={{ scale: 0.95 }}
          className="group flex flex-col md:flex-row items-start md:items-center gap-3 bg-neutral-900/60 border border-neutral-700 rounded-xl px-4 py-4 hover:border-cyan-400 transition duration-300"
        >

          <motion.div
            whileHover={{ rotate: 10, scale: 1.2 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="text-cyan-400 text-2xl md:text-3xl"
          >
            {tool.icon}
          </motion.div>

          <div className="min-w-0">
            <h3 className="font-semibold group-hover:text-cyan-400 transition break-words leading-tight">
              {tool.name}
            </h3>
            <p className="text-sm text-gray-400 break-words leading-tight">
              {tool.desc}
            </p>
          </div>

        </motion.div>
      ))}

    </motion.div>
  </div>
</section>

{/* Projects Section */}
<section id="projects" className="py-24 bg-transparent px-6">
  <div className="container mx-auto">
    <h2 className="text-3xl font-bold mb-2 text-center">Projects</h2>

    <p className="text-center max-w-2xl mx-auto text-gray-400 mb-12">
      Highlights of real-world projects and experiments built during studies, bootcamps, and independent learning.
    </p>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

      {/* Project 1 */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        whileHover={{
          y: -6,
          boxShadow: "0px 0px 25px rgba(34,211,238,0.35)",
        }}
        className="
          group relative
        bg-neutral-900/60
          backdrop-blur-md
          border border-cyan-400/20
          rounded-2xl
          overflow-hidden
          transition duration-300
          hover:border-cyan-400
        "
      >

        {/* Glow Hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent blur-2xl"></div>
        </div>

        {/* IMAGE */}
        <div className="w-full aspect-video overflow-hidden">
          <img
            src="/projects/covid-dashboard.jpg"
            alt="COVID-19 Dashboard"
            className="w-full h-full object-cover transition duration-500 hover:scale-105"
          />
        </div>

        {/* CONTENT */}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-cyan-400 mb-3">
            COVID-19 Dashboard
          </h3>

          <p className="text-sm text-gray-300 leading-relaxed mb-5">
            Dashboard interaktif COVID-19 untuk Indonesia, yang memvisualisasikan kasus terkonfirmasi, 
            kasus baru harian, dan distribusi regional menggunakan Google Data Studio.
          </p>

        {/* TECH STACK */}
        <div className="flex flex-wrap gap-2 mb-5">
          <span className="px-3 py-1 text-xs rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
            Looker Studio
          </span>

          <span className="px-3 py-1 text-xs rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
            Dashboard
          </span>
        </div>

        {/* BUTTON */}
        <motion.a
          href="https://lookerstudio.google.com/s/r2ANE4Dtr4w"
          target="_blank"
          rel="noreferrer"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
          className="
            inline-flex items-center gap-2
            text-cyan-400
            hover:gap-3
            transition-all
            text-sm font-medium
          "
        >
          View Project →
        </motion.a>
        </div>
      </motion.div>

      {/* Project 2 - Tugas Akhir */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        whileHover={{
          y: -6,
          boxShadow: "0px 0px 25px rgba(34,211,238,0.35)",
        }}
        className="
          group relative
          bg-neutral-900/60
          backdrop-blur-md
          border border-cyan-400/20
          rounded-2xl
          overflow-hidden
          transition duration-300
          hover:border-cyan-400
        "
      >

      {/* Glow Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent blur-2xl"></div>
      </div>

      {/* IMAGE */}
      <div className="w-full aspect-video overflow-hidden">
        <img
          src="/projects/grafik-apriori.png"
          alt="Data Mining Bookstore Apriori"
          className="w-full h-full object-cover transition duration-500 hover:scale-105"
        />
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-cyan-400 mb-3">
          Final Project - Data Mining Apriori Bookstore
        </h3>

        <p className="text-sm text-gray-300 leading-relaxed mb-5">
          Tugas Akhir yang menerapkan algoritma Apriori untuk
          menganalisis pola pembelian di toko buku dan menyusun
          strategi bundling produk.
        </p>

      {/* TECH STACK */}
      <div className="flex flex-wrap gap-2 mb-5">
        <span className="px-3 py-1 text-xs rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
          Jupyter Notebook
        </span>
        
        <span className="px-3 py-1 text-xs rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
          RapidMiner
        </span>

        <span className="px-3 py-1 text-xs rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
          Algoritme Apriori
        </span>

        <span className="px-3 py-1 text-xs rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
          Data Mining
        </span>
      </div>

      {/* BUTTON */}
      <motion.a
        href="https://github.com/Dody21/datamining-bookstore-apriori"
        target="_blank"
        rel="noreferrer"
        whileHover={{ x: 5 }}
        transition={{ duration: 0.2 }}
        className="
          inline-flex items-center gap-2
          text-cyan-400
          hover:gap-3
          transition-all
          text-sm font-medium
        "
      >
        View Project →
      </motion.a>
    </div>
  </motion.div>

      {/* Project 3 - Final Project MSIB VI */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        whileHover={{
          y: -6,
          boxShadow: "0px 0px 25px rgba(34,211,238,0.35)",
        }}
        className="
          group relative
          bg-neutral-900/60
          backdrop-blur-md
          border border-cyan-400/20
          rounded-2xl
          overflow-hidden
          transition duration-300
          hover:border-cyan-400
        "
      >

      {/* Glow Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent blur-2xl"></div>
      </div>

      {/* IMAGE */}
      <div className="w-full aspect-video overflow-hidden">
        <img
          src="/projects/Poster-Iklan-3.png"
          alt="Digital Marketing Campaign MSIB VI"
          className="w-full h-full object-cover transition duration-500 hover:scale-105"
        />
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-cyan-400 mb-3">
          Final Project MSIB VI - Digital Marketing Campaign
        </h3>

        <p className="text-sm text-gray-300 leading-relaxed mb-5">
          Final Project program MSIB VI yang berfokus pada
          campaign pemasaran digital selama 3 bulan, mencakup
          data brand, perencanaan campaign, copywriting, dan strategi public speaking.
        </p>

      {/* TECH STACK */}
      <div className="flex flex-wrap gap-2 mb-5">
        <span className="px-3 py-1 text-xs rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
          Data Science In Media
        </span>

        <span className="px-3 py-1 text-xs rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
          Business Development
        </span>

        <span className="px-3 py-1 text-xs rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
          Digital Marketing
        </span>

        <span className="px-3 py-1 text-xs rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
          Brand Campaign
        </span>

        <span className="px-3 py-1 text-xs rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
          Copywriting
        </span>
      </div>

      {/* BUTTON */}
      <motion.a
        href="https://github.com/Dody21/brand-campaign.git"
        target="_blank"
        rel="noreferrer"
        whileHover={{ x: 5 }}
        transition={{ duration: 0.2 }}
        className="
          inline-flex items-center gap-2
          text-cyan-400
          hover:gap-3
          transition-all
          text-sm font-medium
        "
      >
        View Project →
      </motion.a>
     </div>
    </motion.div>

      {/* Project 4 - Obesity Classification */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        whileHover={{
          y: -6,
          boxShadow: "0px 0px 25px rgba(34,211,238,0.35)",
        }}
        className="
          group relative
          bg-neutral-900/60
          backdrop-blur-md
          border border-cyan-400/20
          rounded-2xl
          overflow-hidden
          transition duration-300
          hover:border-cyan-400
        "
      >

      {/* Glow Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent blur-2xl"></div>
      </div>

      {/* IMAGE */}
      <div className="w-full aspect-video overflow-hidden">
        <img
          src="/projects/distribusi_tingkat_obesitas.png"
          alt="Obesity Classification"
          className="w-full h-full object-cover transition duration-500 hover:scale-105"
        />
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-cyan-400 mb-3">
          Obesity Classification – Machine Learning
        </h3>

        <p className="text-sm text-gray-300 leading-relaxed mb-5">
          Mengembangkan model machine learning untuk
          mengklasifikasikan tingkat obesitas melalui
          preprocessing data, training model, evaluasi,
          dan visualisasi data kesehatan.
        </p>

      {/* TECH STACK */}
      <div className="flex flex-wrap gap-2 mb-5">
        <span className="px-3 py-1 text-xs rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
          Machine Learning
        </span>

        <span className="px-3 py-1 text-xs rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
          Classification
        </span>

        <span className="px-3 py-1 text-xs rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
          Python
        </span>
      </div>

      {/* BUTTON */}
      <motion.a
        href="https://github.com/Dody21/klasifikasi-obesitas.git"
        target="_blank"
        rel="noreferrer"
        whileHover={{ x: 5 }}
        transition={{ duration: 0.2 }}
        className="
          inline-flex items-center gap-2
          text-cyan-400
          hover:gap-3
          transition-all
          text-sm font-medium
        "
      >
        View Project →
      </motion.a>
     </div>
    </motion.div>

      {/* Project 5 - Java OOP POS */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        whileHover={{
          y: -6,
          boxShadow: "0px 0px 25px rgba(34,211,238,0.35)",
        }}
        className="
          group relative
          bg-neutral-900/60
          backdrop-blur-md
          border border-cyan-400/20
          rounded-2xl
          overflow-hidden
          transition duration-300
          hover:border-cyan-400
        "
      >

      {/* Glow Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent blur-2xl"></div>
      </div>

      {/* IMAGE */}
      <div className="w-full aspect-video overflow-hidden">
        <img
          src="/projects/data-pelanggan.png"
          alt="Java OOP POS"
          className="w-full h-full object-cover transition duration-500 hover:scale-105"
        />
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-cyan-400 mb-3">
          Java OOP POS – Point of Sale
        </h3>

        <p className="text-sm text-gray-300 leading-relaxed mb-5">
          Aplikasi kasir berbasis Java OOP dengan fitur
          manajemen pelanggan, produk, transaksi,
          dan nota pembayaran menggunakan Java Swing
          serta MySQL Database.
        </p>

      {/* TECH STACK */}
      <div className="flex flex-wrap gap-2 mb-5">
        <span className="px-3 py-1 text-xs rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
          Java
        </span>

        <span className="px-3 py-1 text-xs rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
          MySQL
        </span>

        <span className="px-3 py-1 text-xs rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
          Java Swing
        </span>
      </div>

      {/* BUTTON */}
      <motion.a
        href="https://github.com/Dody21/java-oop-pos.git"
        target="_blank"
        rel="noreferrer"
        whileHover={{ x: 5 }}
        transition={{ duration: 0.2 }}
        className="
          inline-flex items-center gap-2
          text-cyan-400
          hover:gap-3
          transition-all
          text-sm font-medium
        "
      >
        View Project →
      </motion.a>
     </div>
    </motion.div>

    </div>
  </div>
</section>

      {/* Certificates Section */}
      <section id="certificates" className="py-24 bg-transparent px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">Certificates</h2>

          <p className="text-center max-w-2xl mx-auto text-gray-400 mb-12">
            Certificates obtained through bootcamp training and university studies
          </p>

        {isMobile && (
        <div className="flex justify-between items-center mb-4 px-2">
    
    <button
      onClick={() => scrollCertificates("left")}
      className="bg-cyan-400/20 hover:bg-cyan-400/40 text-white p-2 rounded-full transition transform hover:scale-110"
    >
      <FaChevronLeft />
    </button>

    <p className="text-sm text-gray-300 font-medium animate-pulse">
      Swipe or Tap Arrows
    </p>

    <button
      onClick={() => scrollCertificates("right")}
      className="bg-cyan-400/20 hover:bg-cyan-400/40 text-white p-2 rounded-full transition transform hover:scale-110"
    >
      <FaChevronRight />
    </button>
  </div>
)}        

          <motion.div
            ref={certRef}
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="
              flex gap-6
              overflow-x-auto overflow-y-visible
              md:flex-wrap md:justify-center md:overflow-x-visible
              snap-x snap-mandatory
              scrollbar-hide
              "
            >
          {displayCertificates.map((cert, index) => (
  <Tilt
    key={`${cert.file}-${index}`}
    glareEnable={true}
    glareMaxOpacity={0.25}
    scale={1.05}
    transitionSpeed={1500}
  >
    <motion.div
      variants={item}
      onClick={() => setSelectedCert(cert)}
      whileHover={{
      boxShadow: "0px 0px 25px rgba(34,211,238,0.5)",
    }}
      className="
        group relative overflow-hidden
        flex items-center gap-4

        bg-gradient-to-br from-white/5 to-white/10
        backdrop-blur-xl

        border border-white/10
        rounded-2xl px-6 py-5

        cursor-pointer w-72 flex-shrink-0 snap-start

        transition duration-500

        hover:border-cyan-400/60
        hover:shadow-[0_0_40px_rgba(34,211,238,0.6)]
      "
    >

      {/* 🔥 HOVER OVERLAY */}
      <div className="absolute inset-0 flex items-center justify-center 
      opacity-0 group-hover:opacity-100 transition duration-300 z-20">
        <div className="bg-cyan-400/20 backdrop-blur-md px-4 py-2 rounded-lg text-sm">
          Click to Preview
        </div>
      </div>

      {/* 🔥 GLOW EFFECT */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent blur-xl"></div>
      </div>

      {/* 🔥 BADGE FEATURED */}
      {cert.title.includes("Data Science") && (
        <span className="absolute top-2 right-2 text-xs bg-cyan-400 text-black px-2 py-1 rounded z-20">
          Featured
        </span>
      )}

      {/* LOGO */}
      <img
        src={cert.logo}
        loading="lazy"
        className="w-12 h-12 bg-white p-1 rounded-md transition duration-300 group-hover:scale-110 z-10"
      />

      {/* TEXT */}
      <div className="z-10">
        <h3 className="text-cyan-400 font-semibold">
          {cert.title}
        </h3>
        
      </div>

    </motion.div>
  </Tilt>
))}
</motion.div>
</div>
</section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 bg-transparent text-white"
      >
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* ✅ Tambahan text Contact */}
            <p className="text-cyan-400 uppercase tracking-widest font-semibold mb-2">
              Contact
            </p>

            <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
            <p className="mb-10 text-gray-300">
              Reach Out - For any questions or additional information, 
              feel free to contact me through the available form or by email.
            </p>
            <div className="mb-8 space-y-4">
              <p className="flex items-center gap-3 text-lg">
                <FaEnvelope className="text-cyan-400 text-xl" />
                <span>
                  <strong>Email :</strong> dodiprayoga54@gmail.com
                </span>
              </p>
              <p className="flex items-center gap-3 text-lg">
                <FaPhone className="text-cyan-400 text-xl" />
                <span>
                  <strong>Phone :</strong> +62 897 3176 867
                </span>
              </p>
            </div>

            {/* ✅ Bagian Follow Me On */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-3">Follow Me On</h3>
              <div className="flex gap-5 text-2xl">
                <a
                  href="http://linkedin.com/in/dodi-prayoga"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-cyan-400 active:text-cyan-500 transition-colors"
                >
                  <FaLinkedin size={28} />
                </a>
                <a
                  href="https://instagram.com/dodyprygaa_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-cyan-400 active:text-cyan-500 transition-colors"
                >
                  <FaInstagram size={28} />
                </a>
                <a
                  href="https://www.facebook.com/share/1H8F3sLUJH/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-cyan-400 active:text-cyan-500 transition-colors"
                >
                  <FaFacebook size={28} />
                </a>
                <a
                  href="https://twitter.com/dodyprygaa_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-cyan-400 active:text-cyan-500 transition-colors"
                >
                  <FaTwitter size={28} />
                </a>
                <a
                  href="https://youtube.com/@dodyprayoga21?si=uvgwN5SgtA7aK_BX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-cyan-400 active:text-cyan-500 transition-colors"
                  >
                  <FaYoutube size={28} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-black/40 p-8 rounded-2xl shadow-lg backdrop-blur-sm"
          >
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <motion.input
                type="text"
                name="user_name"
                placeholder="Your Name"
                whileFocus={{ scale: 1.02 }}
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <motion.input
                type="email"
                name="reply_to"
                placeholder="Your Email"
                whileFocus={{ scale: 1.02 }}
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <motion.textarea
                rows="5"
                name="message"
                placeholder="Your Message"
                whileFocus={{ scale: 1.02 }}
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              ></motion.textarea>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-semibold text-white transition"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
      
      {selectedCert && (
  <div
    onClick={() => setSelectedCert(null)}
    className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50"
  >
    <div
      onClick={(e) => e.stopPropagation()}
      className="relative w-[90%] md:w-[70%] h-[80%] bg-neutral-900 rounded-2xl overflow-hidden border border-cyan-400"
    >
      {/* CLOSE BUTTON */}
      <button
        onClick={() => setSelectedCert(null)}
        className="absolute top-4 right-4 text-white text-xl z-50"
      >
        ✕
      </button>

      {/* PDF VIEW */}
      <iframe
        src={selectedCert.file}
        loading="lazy"
        className="w-full h-full"
      ></iframe>

      <p className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs text-gray-400">
        If preview doesn't load, open in new tab
      </p>
    </div>
  </div>
)}

      <footer className="py-6 text-center text-gray-500 text-sm border-t border-neutral-800">
        © 2025 Dodi Portfolio. All rights reserved.
        <br />
          {
          /* 
          (Visitors) - DISABLE DULU
          <p className="mt-2 text-xs text-gray-400">
            👁️ {displayVisitors} visitors worldwide
          </p>
          */
          }
      </footer>
    </div>
  );
}
