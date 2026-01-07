import { Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-32 max-w-3xl mx-auto px-6">
      <h2 className="section-title">Get In Touch</h2>
      
      <div className="glass-card-lg text-center">
        <Mail className="mx-auto mb-6 text-primary" size={48} />
        <h3 className="text-2xl font-bold text-foreground mb-4">Let's Talk</h3>
        <p className="text-muted-foreground mb-8">
          Feel free to reach out for collaborations, opportunities, or just a friendly chat!
        </p>
        <a
          href="mailto:dharshini56k@gmail.com"
          className="btn-primary-lg"
        >
          dharshini56k@gmail.com
        </a>
      </div>
    </section>
  );
}
