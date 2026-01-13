import { ArrowLeft, Download, Mail, Phone, MapPin, Globe } from "lucide-react";
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
              <span className="gradient-text">Zakaria Ali</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-6">Software Engineer & UI/UX Designer</p>
            
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
                Karachi, Pakistan
              </span>
            </div>
          </div>

          {/* Objective */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 gradient-text">Career Objective</h2>
            <p className="text-muted-foreground leading-relaxed">
              Passionate and dedicated Software Engineering student with hands-on experience in web development, 
              UI/UX design, and e-commerce solutions. Seeking opportunities to leverage my technical skills 
              and creative problem-solving abilities to contribute to innovative projects while continuing 
              to grow as a professional.
            </p>
          </section>

          {/* Education */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6 gradient-text">Education</h2>
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:justify-between">
                <div>
                  <h3 className="font-semibold text-lg">Bachelor of Software Engineering</h3>
                  <p className="text-muted-foreground">NED University of Engineering & Technology</p>
                </div>
                <span className="text-primary font-medium">2022 - 2026</span>
              </div>
              <div className="flex flex-col md:flex-row md:justify-between">
                <div>
                  <h3 className="font-semibold text-lg">ACCP Prime Diploma (3 Years)</h3>
                  <p className="text-muted-foreground">Aptech Computer Education</p>
                </div>
                <span className="text-primary font-medium">2018 - 2021</span>
              </div>
              <div className="flex flex-col md:flex-row md:justify-between">
                <div>
                  <h3 className="font-semibold text-lg">UI/UX Design Course (3 Months)</h3>
                  <p className="text-muted-foreground">Hyperlink InfoSystem</p>
                </div>
                <span className="text-primary font-medium">2023</span>
              </div>
              <div className="flex flex-col md:flex-row md:justify-between">
                <div>
                  <h3 className="font-semibold text-lg">Intermediate (Pre-Engineering)</h3>
                  <p className="text-muted-foreground">DJ Science College</p>
                </div>
                <span className="text-primary font-medium">2018 - 2020</span>
              </div>
              <div className="flex flex-col md:flex-row md:justify-between">
                <div>
                  <h3 className="font-semibold text-lg">Matriculation (Science)</h3>
                  <p className="text-muted-foreground">IJK Schooling System</p>
                </div>
                <span className="text-primary font-medium">2016 - 2018</span>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6 gradient-text">Work Experience</h2>
            <div className="space-y-6 mt-6">
              <div>
                <div className="flex flex-col md:flex-row md:justify-between mb-2">
                  <h3 className="font-semibold text-lg">E-Commerce Manager</h3>
                  <span className="text-primary font-medium">2019 - Present (5+ Years)</span>
                </div>
                <p className="text-muted-foreground mb-2">Freelance / Self-Employed</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
                  <li>Managed multi-platform e-commerce on Facebook, Instagram, WhatsApp & Websites</li>
                  <li>End-to-end order management from placement to delivery</li>
                  <li>Customer communication, support & relationship management</li>
                  <li>Inventory management and stock coordination</li>
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <div className="flex flex-col md:flex-row md:justify-between mb-2">
                  <h3 className="font-semibold text-lg">UI/UX Design Intern</h3>
                  <span className="text-primary font-medium">Apr 2023 - Jun 2023</span>
                </div>
                <p className="text-muted-foreground mb-2">Hyperlink InfoSystem</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
                  <li>Created wireframes and prototypes using Figma</li>
                  <li>Conducted user research and usability testing</li>
                  <li>Collaborated with development teams on design implementation</li>
                </ul>
              </div>
              <div>
                <div className="flex flex-col md:flex-row md:justify-between mb-2">
                  <h3 className="font-semibold text-lg">Teaching Assistant</h3>
                  <span className="text-primary font-medium">Feb 2021 - Jun 2022</span>
                </div>
                <p className="text-muted-foreground mb-2">IJK Schooling System</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
                  <li>Assisted in teaching computer science fundamentals</li>
                  <li>Mentored students in programming and web development</li>
                  <li>Developed educational materials and tutorials</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6 gradient-text">Technical Skills</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Programming Languages</h3>
                <p className="text-muted-foreground">HTML, CSS, JavaScript, TypeScript, C++, Python</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Frameworks & Libraries</h3>
                <p className="text-muted-foreground">React, Tailwind CSS, Bootstrap, Node.js</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Design Tools</h3>
                <p className="text-muted-foreground">Figma, Adobe XD, Canva</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Other Skills</h3>
                <p className="text-muted-foreground">WordPress, Shopify, E-Commerce, Git, Microsoft Office</p>
              </div>
            </div>
          </section>

          {/* Languages */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 gradient-text">Languages</h2>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 rounded-lg bg-secondary text-foreground">English (Fluent)</span>
              <span className="px-4 py-2 rounded-lg bg-secondary text-foreground">Urdu (Native)</span>
              <span className="px-4 py-2 rounded-lg bg-secondary text-foreground">Gujarati (Native)</span>
            </div>
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
