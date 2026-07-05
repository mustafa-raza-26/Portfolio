import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  Code2,
  Terminal,
  Layers,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  ChevronDown,
} from "lucide-react";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiBootstrap,
  SiSupabase,
  SiReact,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const skills = [
    { icon: SiHtml5, name: "HTML5", color: "#E34F26" },
    { icon: SiCss, name: "CSS3", color: "#1572B6" },
    { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
    { icon: SiBootstrap, name: "Bootstrap", color: "#7952B3" },
    { icon: SiSupabase, name: "Supabase", color: "#3ECF8E" },
    { icon: SiReact, name: "React", color: "#61DAFB" },
    { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
    { icon: SiVercel, name: "Vercel", color: "#ffffff" },
  ];

  const projects = [
    {
      title: "Weather App",
      description:
        "A real-time weather lookup application featuring precise location tracking, interactive radar maps, and detailed forecasting. Built with performance in mind to deliver instantaneous updates.",
      tags: ["JavaScript", "REST API", "HTML/CSS", "Async/Await"],
      Icon: Terminal,
      link:'https://mr-weather-web.vercel.app/',
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Todo App",
      description:
        "An advanced task management application designed for productivity. Features include drag-and-drop prioritization, categorized projects, and persistent local storage synchronization.",
      tags: ["React", "State Management", "Tailwind CSS"],
      Icon: Layers,
      link:'https://mustafa-raza-26.github.io/TODO-App/',
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Doctor Appointment App",
      description:
        "A comprehensive booking system for doctor appointments. Implements complex scheduling logic, availability checks, and a seamless user flow from selection to confirmation.",
      tags: ["JavaScript", "Bootstrap", "Supabase", "Auth"],
      Icon: Code2,
      link:'https://mustafa-raza-26.github.io/Final-Test/',
      gradient: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <div
      ref={containerRef}
      style={{ fontFamily: "'Outfit', sans-serif" }}
      className="relative min-h-screen bg-[#0a0a0f] overflow-hidden text-white"
    >
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="bg-grid absolute inset-0 opacity-[0.03]"></div>
        <motion.div
          className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-purple-600/20 blur-[120px]"
          style={{ y: backgroundY }}
        />
        <motion.div
          className="absolute top-[40%] -right-[10%] w-[40%] h-[60%] rounded-full bg-cyan-400/10 blur-[150px]"
          style={{ y: backgroundY }}
        />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0a0a0f]/60 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div
            className="font-bold text-xl tracking-tighter text-white"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            &lt;Mustafa Raza /&gt;
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="link hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          <a
            href="#"
            className="hidden md:flex items-center px-4 py-2 rounded-full border border-purple-500/50 text-sm font-mono text-white hover:bg-purple-500/10 transition-colors"
          >
            Resume.pdf
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center pt-20" id="home">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.div variants={fadeIn} className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-400 text-xs font-mono">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-400"></span>
                </span>
                Available for opportunities
              </span>
              <span className="font-mono text-sm text-gray-400">16 Years Old</span>
            </motion.div>

            <motion.h1
              variants={fadeIn}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1] mb-6"
            >
              Building <br className="hidden md:block" />
              <span className="text-gradient">digital products</span>
              <br />
              that matter.
            </motion.h1>

            <motion.p
              variants={fadeIn}
              className="text-lg md:text-xl text-gray-400 max-w-xl mb-10 leading-relaxed"
            >
              I'm <span className="text-white font-medium">Mustafa Raza</span>, a Frontend Web
              Developer crafting exceptional digital experiences. I turn complex problems into
              beautiful, scalable, and intuitive interfaces.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="glow-btn inline-flex items-center gap-2 h-12 px-8 rounded-full font-mono font-bold bg-purple-600 text-white hover:bg-purple-500 transition-colors"
              >
                View My Work <ArrowRight size={16} />
              </a>
              <a
                href="https://github.com/mustafa-raza-26"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 h-12 px-8 rounded-full font-mono border border-white/10 text-white hover:bg-white/5 transition-colors"
              >
                <Github size={16} /> GitHub
              </a>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
        >
          <span className="font-mono text-xs uppercase tracking-widest">Scroll</span>
          <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            <ChevronDown size={16} />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-32 bg-black/40 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <div>
              <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-bold mb-6">
                Not your average{" "}
                <span className="text-purple-500 italic">teenager</span>.
              </motion.h2>
              <motion.div variants={fadeIn} className="space-y-6 text-gray-400 text-lg">
                <p>
                  At 16, while most of my peers are playing games, I'm busy building them—and
                  everything else on the web. I've spent the last few years obsessing over
                  performance, design systems, and writing clean, maintainable code.
                </p>
                <p>
                  My goal isn't just to write code; it's to build products that solve real
                  problems. I blend technical precision with a sharp eye for design to create
                  interfaces that feel alive.
                </p>
              </motion.div>
              <motion.div variants={fadeIn} className="grid grid-cols-2 gap-6 mt-10">
                <div>
                  <div className="text-4xl font-black text-white">2+</div>
                  <div className="font-mono text-xs text-purple-400 uppercase tracking-wider mt-1">
                    Years Coding
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-black text-white">10+</div>
                  <div className="font-mono text-xs text-purple-400 uppercase tracking-wider mt-1">
                    Projects Built
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              variants={fadeIn}
              className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-white/5"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-transparent mix-blend-overlay z-10"></div>
              <div className="absolute inset-0 flex flex-col p-8 font-mono text-xs text-purple-400/40 overflow-hidden leading-relaxed">
                {Array.from({ length: 20 }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0.2, x: -20 }}
                    animate={{ opacity: [0.2, 0.5, 0.2], x: 0 }}
                    transition={{ duration: 3, delay: i * 0.1, repeat: Infinity, repeatType: "reverse" }}
                    className="whitespace-nowrap"
                  >
                    {`const buildFeature_${i} = () => {`}
                    <br />
                    &nbsp;&nbsp;{`return optimize(render(UI_${i}));`}
                    <br />
                    {`};`}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative z-10 py-32">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">The Toolkit</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Technologies I use daily to bring ideas to life.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="flex flex-col items-center justify-center p-8 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:bg-white/5 cursor-pointer"
              >
                <skill.icon
                  size={40}
                  style={{ color: skill.color, marginBottom: "1rem", filter: `drop-shadow(0 0 15px ${skill.color})` }}
                />
                <span className="font-mono text-sm font-medium text-white">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 py-32 bg-black/40 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Selected Work</h2>
            <p className="text-gray-400 text-lg">Real projects solving real problems.</p>
          </motion.div>

          <div className="space-y-24">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className={`flex flex-col ${
                  index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                } gap-12 items-center group`}
              >
                <motion.div
                  variants={fadeIn}
                  className="w-full md:w-1/2 aspect-video md:aspect-[4/3] rounded-3xl overflow-hidden relative border border-white/10 bg-white/5 flex items-center justify-center"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
                  ></div>
                  <project.Icon
                    size={128}
                    className="text-white/20 relative z-10 group-hover:scale-110 group-hover:text-white/40 transition-all duration-500"
                  />
                </motion.div>

                <motion.div variants={fadeIn} className="w-full md:w-1/2 space-y-6">
                  <div className="font-mono text-purple-400 text-sm tracking-widest uppercase">
                    Project 0{index + 1}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold">{project.title}</h3>
                  <p className="text-gray-400 text-lg leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-xs text-gray-300 hover:bg-white/10 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="pt-6">
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white hover:border-purple-500 hover:bg-purple-500/10 transition-colors font-mono text-sm"
                      >
                        View Project <ExternalLink size={14} />
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-32 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-12 md:p-20 rounded-[3rem] border border-white/10 bg-white/[0.02] backdrop-blur-xl relative"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-purple-600/10 to-transparent rounded-[3rem] opacity-50 pointer-events-none"></div>

            <span className="inline-block mb-8 px-4 py-1 rounded-full border border-purple-500/30 bg-purple-500/20 text-purple-400 font-mono text-sm">
              What's Next?
            </span>
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              Let's build something <br />
              <span className="text-gradient">incredible</span> together.
            </h2>
            <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-xl mx-auto">
              I'm currently looking for new opportunities, freelance projects, or just a good
              conversation about tech. My inbox is always open.
            </p>

            <a
              href="mailto:mustafaraza2569@gmail.com"
              className="glow-btn inline-flex items-center gap-2 h-14 px-10 rounded-full text-lg font-bold bg-white text-black hover:bg-gray-100 transition-colors"
            >
              <Mail size={20} /> Say Hello
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-8 bg-black/50">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-mono text-sm text-gray-500">
            © {new Date().getFullYear()} Mustafa Raza. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/mustafa-raza-26"
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 hover:text-purple-400 transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/mustafa-raza-b8a12a311/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 hover:text-purple-400 transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
