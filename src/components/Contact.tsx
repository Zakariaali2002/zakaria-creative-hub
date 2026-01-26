import { useState } from "react";
import { Mail, Phone, MessageCircle, Send, User, FileText, Linkedin, Github } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

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
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Zakaria Ali",
    href: "https://www.linkedin.com/in/zakaria-ali-54642b254",
    color: "hover:bg-blue-600/20 hover:border-blue-600/50",
    iconColor: "text-blue-500",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "Zakariaali2002",
    href: "https://github.com/Zakariaali2002",
    color: "hover:bg-gray-500/20 hover:border-gray-500/50",
    iconColor: "text-gray-300",
  },
];

const BehanceIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
  </svg>
);

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate inputs
    if (!formData.name.trim() || !formData.message.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Create WhatsApp message
    const whatsappMessage = `*New Contact from Portfolio*%0A%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Email:* ${encodeURIComponent(formData.email)}%0A*Subject:* ${encodeURIComponent(formData.subject)}%0A%0A*Message:*%0A${encodeURIComponent(formData.message)}`;
    
    // Open WhatsApp with the message
    window.open(`https://wa.me/923182705359?text=${whatsappMessage}`, "_blank");
    
    toast({
      title: "Redirecting to WhatsApp",
      description: "Your message is ready to send!",
    });

    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

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

        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 max-w-6xl mx-auto mb-16">
          {contactLinks.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`glass-card rounded-2xl p-6 text-center transition-all group ${contact.color}`}
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <contact.icon className={`w-7 h-7 ${contact.iconColor}`} />
              </div>

              <h3 className="text-lg font-bold mb-1">{contact.label}</h3>
              <p className="text-muted-foreground text-xs break-all">{contact.value}</p>
            </a>
          ))}
          {/* Behance Card */}
          <a
            href="https://www.behance.net/zakariaali2002"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-2xl p-6 text-center transition-all group hover:bg-blue-700/20 hover:border-blue-700/50"
          >
            <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform text-blue-600">
              <BehanceIcon />
            </div>

            <h3 className="text-lg font-bold mb-1">Behance</h3>
            <p className="text-muted-foreground text-xs break-all">zakariaali2002</p>
          </a>
        </div>

        {/* Contact Form */}
        <div className="glass-card rounded-2xl p-8 md:p-12 max-w-3xl mx-auto gradient-border">
          <div className="text-center mb-8">
            <Send className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Send a Message</h3>
            <p className="text-muted-foreground">
              Fill out the form below and it will be sent directly to my WhatsApp!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center gap-2">
                  <User className="w-4 h-4 text-primary" />
                  Your Name *
                </Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-secondary/50 border-border focus:border-primary"
                  required
                  maxLength={100}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  Your Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-secondary/50 border-border focus:border-primary"
                  maxLength={255}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject" className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-primary" />
                Subject
              </Label>
              <Input
                id="subject"
                placeholder="What is this about?"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="bg-secondary/50 border-border focus:border-primary"
                maxLength={200}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-primary" />
                Message *
              </Label>
              <Textarea
                id="message"
                placeholder="Your message here..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-secondary/50 border-border focus:border-primary min-h-[150px]"
                required
                maxLength={1000}
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold py-6 text-lg hover:opacity-90 transition-all hover:scale-[1.02] shadow-lg shadow-primary/25"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Send via WhatsApp
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
