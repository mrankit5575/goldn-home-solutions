import { Phone, MessageCircle } from "lucide-react";

const FloatingButtons = () => (
  <>
    {/* WhatsApp */}
    <a
      href="https://wa.me/919310912781"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-20 right-4 md:bottom-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-transform hover:scale-110"
      style={{ backgroundColor: "#25D366" }}
    >
      <MessageCircle className="h-7 w-7 text-white" />
    </a>

    {/* Mobile sticky call bar */}
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-primary p-3">
      <a
        href="tel:9310912781"
        className="flex items-center justify-center gap-2 text-primary-foreground font-bold text-base"
      >
        <Phone className="h-5 w-5" /> Call Now — 9310912781
      </a>
    </div>
  </>
);

export default FloatingButtons;
