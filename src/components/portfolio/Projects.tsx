import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Smartphone, Globe, Database } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Maker WebApp (Flutter)",
      description: "A comprehensive web application built with Flutter for creating professional portfolios. Implemented modern UI with custom authentication system and real-time email notification features.",
      icon: <Globe className="h-6 w-6" />,
      tech: ["Flutter", "Bloc State Management", "MVC Architecture"],
      features: ["Modern UI", "Custom Authentication", "Real-time Email Notifications"],
      github: "https://github.com/shashank1q/profolio",
      type: "Flutter Web App",
    },
    {
      title: "Task Tracker WebApp (Flutter)",
      description: "A feature-rich task management application with authentication, database management, and CRUD operations. Utilizes Firebase for backend services and implements clean architecture patterns.",
      icon: <Smartphone className="h-6 w-6" />,
      tech: ["Flutter", "Firebase", "CRUD Operations", "Authentication"],
      features: ["Task Management", "User Authentication", "Real-time Updates", "Responsive Design"],
      github: "https://github.com/shashank1q/TodoNest",
      type: "Flutter Web App"
    },
    {
      title: "Suduko Solver (Flutter)",
      description: "A Website built with Flutter to solve Sudoku puzzles. Features a modern UI, and smooth animations. Used Backtracking algorithm for solving sudoku puzzles.",
      icon: <Smartphone className="h-6 w-6" />,
      tech: ["Flutter", "Pixabay API", "Modern UI", "API Integration"],
      features: ["Dynamic Content", "Backtracking Algorithm", "Smooth Animations"],
      github: "https://github.com/shashank1q/SudukoSolver",
      type: "Flutter Web App"
    },
    {
      title: "Business Management Software (Java)",
      description: "Designed software to streamline stock and sales management processes. Developed a dedicated analysis module for stocks and staff performance tracking, enabling efficient business communication and team collaboration tools.",
      icon: <Database className="h-6 w-6" />,
      tech: ["Java", "Stock Management", "Sales Analysis", "Performance Tracking"],
      features: ["Stock Management", "Sales Analysis", "Performance Tracking", "Team Collaboration"],
      type: "Desktop Application",
      link: "https://drive.google.com/file/d/1M17K5QpUzlUdvUirICRRZ8Zl2lxWTYD4/view"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
              Featured <span className="text-accent">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills in Flutter, Node.js, and full-stack development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="group hover:shadow-elegant transition-all duration-300 hover:scale-105 animate-scale-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="bg-gradient-subtle">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-accent/10 rounded-lg">
                        <div className="text-accent">
                          {project.icon}
                        </div>
                      </div>
                      <div>
                        <CardTitle className="text-black-primary group-hover:text-accent transition-colors duration-300">
                          {project.title}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">{project.type}</p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-black-primary mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex}
                          variant="outline"
                          className="text-xs border-accent/30 text-accent hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-black-primary mb-2">Key Features:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex space-x-3">
                    {project.github && (
                      <Button 
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(project.github, "_blank")}
                        className="hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                    )}
                    {project.link && (
                      <Button 
                        size="sm"
                        className="bg-gradient-primary hover:shadow-soft transition-all duration-300"
                        onClick={() => window.open(project.link, "_blank")}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Project
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.open("https://github.com/shashank1q?tab=repositories", "_blank")}
              className="hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105"
            >
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;