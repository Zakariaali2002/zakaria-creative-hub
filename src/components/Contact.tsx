import { Mail, Phone, MessageCircle, Send } from "lucide-react";

const contactLinks = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+92 318 2705359",
    href: "https://wa.me/923182705359",
    color: "hover:bg-green-500/20 hover:border-green-500/50",
    iconColor: "text-green-400",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92 318 2705359",
    href: "tel:+923182705359",
    color: "hover:bg-blue-500/20 hover:border-blue-500/50",
    iconColor: "text-blue-400",
  },
  {
    icon: Mail,
    label: "Email",
    value: "zakriaali452@gmail.com",
    href: "mailto:zakriaali452@gmail.com",
    color: "hover:bg-red-400/20 hover:border-red-400/50",
    iconColor: "text-red-400",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just a friendly chat!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contactLinks.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`glass-card rounded-2xl p-8 text-center transition-all group ${contact.color}`}
            >
              <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <contact.icon className={`w-8 h-8 ${contact.iconColor}`} />
              </div>

              <h3 className="text-xl font-bold mb-2">{contact.label}</h3>
              <p className="text-muted-foreground text-sm break-all">{contact.value}</p>
            </a>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto gradient-border">
            <Send className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
            <p className="text-muted-foreground mb-6">
              Whether you have a project in mind, need guidance on your tech journey, 
              or want to discuss opportunities, I'm here to help!
            </p>
            <a
              href="mailto:zakriaali452@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all glow-effect hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              Send Message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
