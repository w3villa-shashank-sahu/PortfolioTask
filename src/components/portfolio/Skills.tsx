import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["Flutter", "Dart", "React Native", "HTML/CSS", "JavaScript"],
      color: "bg-blue-50 border-blue-200"
    },
    {
      title: "Backend Development", 
      skills: ["Node.js", "Firebase", "Express.js", "REST APIs", "Database Management"],
      color: "bg-green-50 border-green-200"
    },
    {
      title: "Programming Languages",
      skills: ["Dart", "JavaScript", "Python", "C++", "Java"],
      color: "bg-purple-50 border-purple-200"
    },
    {
      title: "Tools & Technologies",
      skills: ["Git/GitHub", "Firebase", "MongoDB", "MySQL", "Postman", "VS Code"],
      color: "bg-orange-50 border-orange-200"
    },
    {
      title: "Mobile Development",
      skills: ["Flutter", "Cross-platform Apps", "State Management", "UI/UX Design", "App Store Deployment"],
      color: "bg-pink-50 border-pink-200"
    },
    {
      title: "Additional Skills",
      skills: ["Data Structures", "Algorithms", "Problem Solving", "Team Collaboration", "Agile Development"],
      color: "bg-yellow-50 border-yellow-200"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
              Technical <span className="text-accent">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and the technologies I work with
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card 
                key={index}
                className={`${category.color} hover:shadow-elegant transition-all duration-300 hover:scale-105 animate-scale-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-black-primary">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="secondary"
                        className="bg-background/80 text-black-primary hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="bg-gradient-primary text-white max-w-2xl mx-auto animate-fade-in-up">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Always Learning</h3>
                <p className="text-white/90">
                  I'm passionate about staying up-to-date with the latest technologies and 
                  continuously expanding my skill set. Currently exploring advanced Flutter concepts, 
                  microservices architecture, and cloud technologies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;