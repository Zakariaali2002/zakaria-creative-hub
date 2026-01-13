import { useState } from "react";
import { Mail, Phone, MessageCircle, Send, User, FileText } from "lucide-react";
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
];

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

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
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
