import { ArrowLeft, Mail, Phone, MapPin, Calendar, Briefcase, GraduationCap, User, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";

const CV = () => {
  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </Link>

        {/* CV Container */}
        <div className="glass-card rounded-2xl p-8 md:p-12 gradient-border">
          {/* Header */}
          <div className="text-center mb-10 pb-8 border-b border-border">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              <span className="gradient-text">Zakaria Desai</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-6">Software Engineering Student</p>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                +92 318 2705359
              </span>
              <span className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                zakriaali452@gmail.com
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                R-51 Marina Garden, Near Rewari Bakery, Malir 15, Karachi
              </span>
            </div>
          </div>

          {/* Summary */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 gradient-text">Summary</h2>
            <p className="text-muted-foreground leading-relaxed">
              Passionate and dedicated Software Engineering student with hands-on experience in web development,
              UI/UX design, and e-commerce solutions. Seeking opportunities to leverage my technical skills.
            </p>
          </section>

          {/* Personal Info */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 gradient-text">Personal Information</h2>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-primary" />
                <div>
                  <span className="text-muted-foreground">Father's Name:</span>
                  <p className="font-medium">Muhammad Ali Desai</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                <div>
                  <span className="text-muted-foreground">Date of Birth:</span>
                  <p className="font-medium">February 26, 2002</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-primary" />
                <div>
                  <span className="text-muted-foreground">CNIC No:</span>
                  <p className="font-medium">42301-8393553-7</p>
                </div>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6 gradient-text">Education</h2>
            <div className="space-y-4">
              {[
                { degree: "BS in Software Engineering", institution: "Iqra University", period: "2021 - 2025", grade: "CGPA: 2.65" },
                { degree: "Intermediate (Pre-Engineering)", institution: "Gov. Degree Science & Commerce College", period: "2018 - 2020", grade: "Grade: C" },
                { degree: "Matriculation", institution: "IJK Schooling System", period: "2016 - 2018", grade: "Grade: A" },
              ].map((edu, i) => (
                <div key={i} className="flex flex-col md:flex-row md:justify-between p-4 rounded-xl bg-secondary/50 border border-border">
                  <div className="flex items-start gap-3">
                    <GraduationCap className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-semibold">{edu.degree}</h3>
                      <p className="text-muted-foreground text-sm">{edu.institution}</p>
                    </div>
                  </div>
                  <div className="md:text-right mt-2 md:mt-0">
                    <span className="text-primary font-medium text-sm">{edu.period}</span>
                    <p className="text-muted-foreground text-xs">{edu.grade}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6 gradient-text">Work Experience</h2>
            <div className="space-y-4">
              {[
                {
                  title: "Student Relationship Officer",
                  company: "Aptech",
                  period: "Dec 2025 - Present",
                  tasks: ["Student counseling and guidance", "Relationship management", "Academic support coordination"],
                },
                {
                  title: "E-Commerce Manager",
                  company: "Elegance Trader",
                  period: "Sep 2019 - Jan 2026",
                  tasks: ["Multi-platform e-commerce on Facebook, Instagram, WhatsApp & Websites", "Order management & delivery coordination", "Customer communication & support"],
                },
                {
                  title: "UI/UX Design Intern",
                  company: "Hyperlink InfoSystem",
                  period: "Apr 2023 - Jun 2023",
                  tasks: ["Created wireframes and prototypes using Figma", "Conducted user research and usability testing"],
                },
                {
                  title: "Teaching Assistant",
                  company: "IJK Schooling System",
                  period: "Feb 2021 - Jun 2022",
                  tasks: ["Assisted in teaching computer science fundamentals", "Mentored students in programming"],
                },
              ].map((exp, i) => (
                <div key={i} className="p-4 rounded-xl bg-secondary/50 border border-border">
                  <div className="flex flex-col md:flex-row md:justify-between mb-2">
                    <div className="flex items-start gap-3">
                      <Briefcase className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-semibold">{exp.title}</h3>
                        <p className="text-muted-foreground text-sm">{exp.company}</p>
                      </div>
                    </div>
                    <span className="text-primary font-medium text-sm">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm ml-8">
                    {exp.tasks.map((t, j) => <li key={j}>{t}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6 gradient-text">Projects</h2>
            <div className="space-y-3">
              {[
                { name: "Digital Marketing Content Pack", desc: "Created a cohesive set of digital content including posters, banners, and ads that reinforced brand voice." },
                { name: "UX/UI App Interface Concept", desc: "Conceptualized and prototyped a user-friendly app interface focusing on intuitive design and visual clarity." },
              ].map((p, i) => (
                <div key={i} className="p-4 rounded-xl bg-secondary/50 border border-border">
                  <h3 className="font-semibold mb-1">{p.name}</h3>
                  <p className="text-muted-foreground text-sm">{p.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6 gradient-text">Skills</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Programming</h3>
                <p className="text-muted-foreground text-sm">HTML, CSS, JavaScript, TypeScript, C++</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">UI/UX & Web Layout</h3>
                <p className="text-muted-foreground text-sm">Figma, Adobe XD, Responsive Design</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Other</h3>
                <p className="text-muted-foreground text-sm">WordPress, Shopify, E-Commerce, Git, Microsoft Office</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Fields of Interest</h3>
                <p className="text-muted-foreground text-sm">E-Commerce, Web Development</p>
              </div>
            </div>
          </section>

          {/* Co-Curricular */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 gradient-text">Co-Curricular Activities</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 text-sm">
              <li>Design Club Member – Participated in workshops and weekly sessions to improve visual and digital design skills.</li>
              <li>Social Media Content Creator – Created graphics and content for college events and online communities.</li>
              <li>Creative Project Showcase – Presented design projects in competitions and received peer feedback.</li>
            </ul>
          </section>

          {/* Contact CTA */}
          <div className="text-center pt-8 border-t border-border">
            <p className="text-muted-foreground mb-4">Interested in working together?</p>
            <a
              href="https://wa.me/923182705359"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-primary/25"
            >
              <Phone className="w-5 h-5" />
              Contact Me on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV;
