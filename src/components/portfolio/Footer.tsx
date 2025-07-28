import { Github, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black-primary text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-white">Shashank</span>
                <span className="text-accent"> Sahu</span>
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Flutter & Node.js Developer passionate about creating innovative mobile and web solutions.
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h4 className="text-lg font-semibold mb-4 text-accent">Quick Links</h4>
              <div className="space-y-2">
                {["About", "Skills", "Projects", "Contact"].map((link) => (
                  <button
                    key={link}
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase());
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="block mx-auto text-gray-300 hover:text-accent transition-colors duration-300"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="text-center md:text-right">
              <h4 className="text-lg font-semibold mb-4 text-accent">Let's Connect</h4>
              <div className="space-y-2 mb-4">
                <p className="text-gray-300">shashank1q@gmail.com</p>
                <p className="text-gray-300">+91 8808712755</p>
              </div>
              <div className="flex justify-center md:justify-end space-x-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => window.open("https://github.com/shashank1q", "_blank")}
                  className="text-gray-300 hover:text-accent hover:bg-accent/10 transition-all duration-300"
                >
                  <Github className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => window.open("mailto:shashank1q@gmail.com", "_blank")}
                  className="text-gray-300 hover:text-accent hover:bg-accent/10 transition-all duration-300"
                >
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;