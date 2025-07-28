import { ArrowDown, Download, Github, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-subtle relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-primary/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/10 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-yellow-medium/20 rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-black-primary">Hi, I'm </span>
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Shashank
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-black-light mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Flutter & Node.js Developer
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              Passionate programmer with expertise in Flutter. Goal is to excel as a Flutter developer. 
              Quick learner and value teamwork, finding joy in collaborative problem-solving.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-elegant transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105"
            >
              <a href="/online_share_cv.pdf" download="Shashank_Mani_Sahu_CV.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-6 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
            <a
              href="mailto:shashank1q@gmail.com"
              className="flex items-center space-x-2 text-muted-foreground hover:text-accent transition-colors duration-300"
            >
              <Mail className="h-5 w-5" />
              <span>shashank1q@gmail.com</span>
            </a>
            <a
              href="tel:+8808712755"
              className="flex items-center space-x-2 text-muted-foreground hover:text-accent transition-colors duration-300"
            >
              <Phone className="h-5 w-5" />
              <span>+91 8808712755</span>
            </a>
          </div>
        </div>

        <button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ArrowDown className="h-6 w-6 text-accent" />
        </button>
      </div>
    </section>
  );
};

export default Hero;