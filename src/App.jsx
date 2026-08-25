import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Mail,
  Menu,
  X,
  Terminal,
  Sparkles,
  MapPin,
  Send,
  ChevronRight,
} from "lucide-react";

import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const skills = [
    {
      name: "React.js",
      level: "90%",
    },
    {
      name: "Next.js",
      level: "88%",
    },
    {
      name: "JavaScript",
      level: "92%",
    },
    {
      name: "TypeScript",
      level: "82%",
    },
    {
      name: "Tailwind CSS",
      level: "94%",
    },
    {
      name: "Node.js",
      level: "78%",
    },
  ];

  const projects = [
    {
      number: "01",
      title: "Vendor Management System",
      description:
        "A modern vendor management platform with role-based workflows, dashboards and business operations.",
      tech: [
        "Next.js",
        "TypeScript",
        "Laravel",
        "PostgreSQL",
      ],
    },
    {
      number: "02",
      title: "E-Commerce Platform",
      description:
        "A modern shopping experience with product discovery, responsive UI and interactive components.",
      tech: [
        "React",
        "Tailwind",
        "JavaScript",
        "API",
      ],
    },
    {
      number: "03",
      title: "Power Plant Website",
      description:
        "A futuristic industrial website designed for a power generation and engineering company.",
      tech: [
        "Next.js",
        "React",
        "Tailwind",
        "UI/UX",
      ],
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#030712] text-white">

      {/* =====================================
          BACKGROUND EFFECTS
      ===================================== */}

      <div className="pointer-events-none fixed inset-0 -z-10">

        <div className="grid-background absolute inset-0" />

        <div className="float-slow absolute left-[5%] top-[15%] h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="float absolute right-[5%] top-[30%] h-[350px] w-[350px] rounded-full bg-purple-500/10 blur-[130px]" />

        <div className="pulse-glow absolute bottom-[10%] left-[40%] h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-[120px]" />

      </div>

      {/* =====================================
          NAVBAR
      ===================================== */}

      <nav className="fixed left-0 right-0 top-0 z-50">

        <div className="mx-auto mt-4 max-w-6xl px-4">

          <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-5 py-4 backdrop-blur-xl">

            <a
              href="#home"
              className="flex items-center gap-3"
            >

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 font-black text-black shadow-lg shadow-cyan-500/20">
                S
              </div>

              <div>
                <div className="font-bold">
                  SHIVAM
                </div>

                <div className="text-[9px] uppercase tracking-[0.3em] text-cyan-400">
                  Developer
                </div>
              </div>

            </a>

            {/* Desktop */}

            <div className="hidden items-center gap-8 md:flex">

              {[
                ["Home", "#home"],
                ["About", "#about"],
                ["Skills", "#skills"],
                ["Projects", "#projects"],
                ["Contact", "#contact"],
              ].map(([name, link]) => (
                <a
                  key={name}
                  href={link}
                  className="text-sm text-gray-400 transition hover:text-cyan-400"
                >
                  {name}
                </a>
              ))}

            </div>

            <a
              href="#contact"
              className="hidden rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-bold text-black transition hover:bg-cyan-300 md:block"
            >
              Let's Talk
            </a>

            {/* Mobile */}

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="rounded-lg border border-white/10 p-2 md:hidden"
            >
              {menuOpen ? (
                <X size={20} />
              ) : (
                <Menu size={20} />
              )}
            </button>

          </div>

          {menuOpen && (
            <div className="mt-2 rounded-2xl border border-white/10 bg-black/90 p-5 backdrop-blur-xl md:hidden">

              {[
                ["Home", "#home"],
                ["About", "#about"],
                ["Skills", "#skills"],
                ["Projects", "#projects"],
                ["Contact", "#contact"],
              ].map(([name, link]) => (
                <a
                  key={name}
                  href={link}
                  onClick={() => setMenuOpen(false)}
                  className="block border-b border-white/5 py-4 text-gray-300"
                >
                  {name}
                </a>
              ))}

            </div>
          )}

        </div>

      </nav>

      {/* =====================================
          HERO
      ===================================== */}

      <section
        id="home"
        className="relative flex min-h-screen items-center px-6 pt-32"
      >

        <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300">

              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />

              Available for opportunities

            </div>

            <p className="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-gray-500">
              Hello, I'm
            </p>

            <h1 className="text-6xl font-black leading-[0.9] tracking-tight sm:text-7xl lg:text-8xl">

              Shivam

              <span className="block shimmer">
                Kumar.
              </span>

            </h1>

            <h2 className="mt-7 text-2xl font-bold text-gray-300 sm:text-3xl">

              Full Stack
              <span className="text-cyan-400">
                {" "}Developer
              </span>

            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-500">

              I build modern, scalable and interactive web experiences
              using React, Next.js, TypeScript and modern frontend
              technologies.

            </p>

            <div className="mt-9 flex flex-wrap gap-4">

              <a
                href="#projects"
                className="group flex items-center gap-2 rounded-full bg-cyan-400 px-7 py-4 font-bold text-black transition hover:-translate-y-1 hover:bg-cyan-300"
              >
                View Projects

                <ArrowUpRight
                  size={18}
                  className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                />

              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 rounded-full border border-white/10 px-7 py-4 font-bold transition hover:border-cyan-400/50 hover:text-cyan-400"
              >
                Contact Me
              </a>

            </div>

            <div className="mt-10 flex gap-4">

                          <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-xs font-bold text-gray-400 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              GH
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-xs font-bold text-gray-400 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              IN
            </a>

              <a
                href="#contact"
                className="rounded-full border border-white/10 p-3 text-gray-400 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                <Mail size={19} />
              </a>

            </div>

          </div>

          {/* RIGHT CODE WINDOW */}

          <div className="relative">

            <div className="absolute -inset-10 rounded-full bg-cyan-500/10 blur-[100px]" />

            <div className="float relative overflow-hidden rounded-3xl border border-white/10 bg-[#080d18]/90 shadow-2xl shadow-cyan-500/5 backdrop-blur-xl">

              {/* Window header */}

              <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">

                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <span className="h-3 w-3 rounded-full bg-green-400/80" />

                <span className="ml-4 text-xs text-gray-600">
                  developer.tsx
                </span>

              </div>

              {/* Code */}

              <div className="p-6 font-mono text-sm leading-8">

                <div>
                  <span className="text-purple-400">
                    const
                  </span>{" "}

                  <span className="text-cyan-300">
                    developer
                  </span>{" "}

                  = {"{"}
                </div>

                <div className="pl-5">

                  <span className="text-gray-500">
                    name:
                  </span>{" "}

                  <span className="text-green-300">
                    "Shivam Kumar"
                  </span>,

                </div>

                <div className="pl-5">

                  <span className="text-gray-500">
                    role:
                  </span>{" "}

                  <span className="text-green-300">
                    "Full Stack Developer"
                  </span>,

                </div>

                <div className="pl-5">

                  <span className="text-gray-500">
                    stack:
                  </span>{" "}

                  <span className="text-green-300">
                    ["React", "Next.js"]
                  </span>,

                </div>

                <div className="pl-5">

                  <span className="text-gray-500">
                    passion:
                  </span>{" "}

                  <span className="text-green-300">
                    "Building the web"
                  </span>,

                </div>

                <div className="pl-5">

                  <span className="text-gray-500">
                    coffee:
                  </span>{" "}

                  <span className="text-orange-300">
                    true
                  </span>

                </div>

                <div>
                  {"};"}
                </div>

                <div className="mt-5 text-gray-600">
                  // Let's build something amazing.
                </div>

              </div>

              {/* Bottom status */}

              <div className="flex items-center justify-between border-t border-white/10 px-5 py-4">

                <div className="flex items-center gap-2 text-xs text-gray-500">

                  <Terminal size={14} />

                  Ready to build

                </div>

                <div className="flex items-center gap-2 text-xs text-cyan-400">

                  <Sparkles size={14} />

                  Creative mode

                </div>

              </div>

            </div>

          </div>

        </div>

        <a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-gray-600"
        >
          <ArrowDown size={22} />
        </a>

      </section>

      {/* =====================================
          ABOUT
      ===================================== */}

      <section
        id="about"
        className="border-t border-white/5 px-6 py-32"
      >

        <div className="mx-auto max-w-6xl">

          <div className="grid gap-16 lg:grid-cols-2">

            <div>

              <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
                About Me
              </p>

              <h2 className="mt-5 text-4xl font-black sm:text-6xl">
                Turning ideas into
                <span className="block text-gray-600">
                  digital experiences.
                </span>
              </h2>

            </div>

            <div>

              <p className="text-lg leading-8 text-gray-400">

                I'm a Computer Science engineering student and
                full-stack developer who enjoys creating polished,
                responsive and functional digital products.

              </p>

              <p className="mt-6 leading-8 text-gray-600">

                My focus is on frontend architecture, user experience,
                clean code and building applications that solve real
                problems.

              </p>

              <div className="mt-8 flex items-center gap-2 text-sm text-gray-500">

                <MapPin
                  size={16}
                  className="text-cyan-400"
                />

                India

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================
          SKILLS
      ===================================== */}

      <section
        id="skills"
        className="bg-white/[0.02] px-6 py-32"
      >

        <div className="mx-auto max-w-6xl">

          <div className="text-center">

            <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
              My Skills
            </p>

            <h2 className="mt-5 text-4xl font-black sm:text-6xl">
              Technologies I work with.
            </h2>

          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2">

            {skills.map((skill) => (

              <div
                key={skill.name}
                className="rounded-2xl border border-white/10 bg-black/20 p-6 transition hover:border-cyan-400/30"
              >

                <div className="flex justify-between">

                  <span className="font-bold">
                    {skill.name}
                  </span>

                  <span className="text-sm text-cyan-400">
                    {skill.level}
                  </span>

                </div>

                <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/5">

                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
                    style={{
                      width: skill.level,
                    }}
                  />

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================
          PROJECTS
      ===================================== */}

      <section
        id="projects"
        className="px-6 py-32"
      >

        <div className="mx-auto max-w-6xl">

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>

              <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
                Selected Work
              </p>

              <h2 className="mt-5 text-4xl font-black sm:text-6xl">
                Projects.
              </h2>

            </div>

            <p className="max-w-sm text-gray-600">
              A selection of projects I've designed and developed.
            </p>

          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">

            {projects.map((project) => (

              <article
                key={project.number}
                className="glow-border group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-500 hover:-translate-y-3 hover:border-cyan-400/30"
              >

                {/* Project number */}

                <div className="flex items-center justify-between">

                  <span className="text-sm font-bold text-cyan-400">
                    {project.number}
                  </span>

                  <ArrowUpRight
                    size={20}
                    className="text-gray-600 transition group-hover:text-cyan-400"
                  />

                </div>

                {/* Fake preview */}

                <div className="mt-8 h-48 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-black">

                  <div className="flex h-full items-center justify-center">

                    <Code2
                      size={70}
                      strokeWidth={1}
                      className="text-cyan-400/50 transition duration-500 group-hover:scale-125 group-hover:text-cyan-400"
                    />

                  </div>

                </div>

                <h3 className="mt-7 text-2xl font-black">
                  {project.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-500">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">

                  {project.tech.map((tech) => (

                    <span
                      key={tech}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-500"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                <button className="mt-7 flex items-center gap-2 text-sm font-bold text-cyan-400">

                  View Project

                  <ChevronRight size={16} />

                </button>

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================
          CTA
      ===================================== */}

      <section className="px-6 py-20">

        <div className="animated-gradient mx-auto max-w-6xl overflow-hidden rounded-[40px] bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-blue-500/20 p-[1px]">

          <div className="rounded-[39px] bg-[#07101c] px-8 py-20 text-center sm:px-16">

            <Sparkles
              className="mx-auto text-cyan-400"
              size={35}
            />

            <h2 className="mt-7 text-4xl font-black sm:text-6xl">

              Have an idea?

              <span className="block shimmer">
                Let's build it.
              </span>

            </h2>

            <p className="mx-auto mt-6 max-w-xl leading-7 text-gray-500">

              I'm always interested in interesting products,
              creative ideas and challenging development projects.

            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-cyan-400 px-7 py-4 font-bold text-black transition hover:-translate-y-1 hover:bg-cyan-300"
            >
              Start a conversation

              <ArrowUpRight size={18} />

            </a>

          </div>

        </div>

      </section>

      {/* =====================================
          CONTACT
      ===================================== */}

      <section
        id="contact"
        className="border-t border-white/5 px-6 py-32"
      >

        <div className="mx-auto max-w-6xl">

          <div className="grid gap-16 lg:grid-cols-2">

            <div>

              <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
                Contact
              </p>

              <h2 className="mt-5 text-5xl font-black sm:text-7xl">
                Let's talk.
              </h2>

              <p className="mt-6 max-w-lg leading-8 text-gray-500">
                Have a project or opportunity? Send me a message.
              </p>

              <div className="mt-10">

                <a
                  href="mailto:your@email.com"
                  className="inline-flex items-center gap-3 text-lg font-bold transition hover:text-cyan-400"
                >

                  <Mail
                    className="text-cyan-400"
                    size={20}
                  />

                  your@email.com

                </a>

              </div>

            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Message sent successfully!");
              }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl sm:p-10"
            >

              <div className="grid gap-5 sm:grid-cols-2">

                <input
                  required
                  type="text"
                  placeholder="Your name"
                  className="rounded-xl border border-white/10 bg-black/30 px-5 py-4 outline-none transition placeholder:text-gray-700 focus:border-cyan-400"
                />

                <input
                  required
                  type="email"
                  placeholder="Email address"
                  className="rounded-xl border border-white/10 bg-black/30 px-5 py-4 outline-none transition placeholder:text-gray-700 focus:border-cyan-400"
                />

              </div>

              <input
                required
                type="text"
                placeholder="Subject"
                className="mt-5 w-full rounded-xl border border-white/10 bg-black/30 px-5 py-4 outline-none transition placeholder:text-gray-700 focus:border-cyan-400"
              />

              <textarea
                required
                rows="6"
                placeholder="Tell me about your project..."
                className="mt-5 w-full resize-none rounded-xl border border-white/10 bg-black/30 px-5 py-4 outline-none transition placeholder:text-gray-700 focus:border-cyan-400"
              />

              <button
                type="submit"
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-4 font-black text-black transition hover:bg-cyan-300"
              >

                Send Message

                <Send size={17} />

              </button>

            </form>

          </div>

        </div>

      </section>

      {/* =====================================
          FOOTER
      ===================================== */}

      <footer className="border-t border-white/5 px-6 py-10">

        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-5 sm:flex-row sm:items-center">

          <div>

            <div className="font-bold">
              SHIVAM<span className="text-cyan-400">.</span>
            </div>

            <p className="mt-1 text-xs text-gray-600">
              Full Stack Developer
            </p>

          </div>

          <div className="flex items-center gap-3">

            <div className="flex items-center gap-3">

  <a
    href="https://github.com/"
    target="_blank"
    rel="noreferrer"
    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-xs font-bold text-gray-500 transition hover:border-cyan-400 hover:text-cyan-400"
  >
    GH
  </a>

  <a
    href="https://linkedin.com/"
    target="_blank"
    rel="noreferrer"
    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-xs font-bold text-gray-500 transition hover:border-cyan-400 hover:text-cyan-400"
  >
    IN
  </a>

  <a
    href="#contact"
    className="rounded-full border border-white/10 p-3 text-gray-500 transition hover:border-cyan-400 hover:text-cyan-400"
  >
    <Mail size={17} />
  </a>

</div>

            <a
              href="#contact"
              className="rounded-full border border-white/10 p-3 text-gray-500 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              <Mail size={17} />
            </a>

          </div>

          <p className="text-xs text-gray-700">
            © 2026 Shivam Kumar
          </p>

        </div>

      </footer>

    </div>
  );
}

export default App;