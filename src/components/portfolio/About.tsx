import { Card, CardContent } from "@/components/ui/card";
import { Award, BookOpen, Trophy } from "lucide-react";

const About = () => {
  const achievements = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "HackerRank DSA INTERMEDIATE certificate",
      description: "Data Structures and Algorithms proficiency"
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "Coding Contest Winner",
      description: "Annual Tech Fest organized at our college #01 winner"
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "TechGig Contest Winner",
      description: "Won 500 Voucher in Open Coding Round Cold Gladiators 2024 by TechGig"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
              About <span className="text-accent">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h3 className="text-2xl font-semibold mb-6 text-black-primary">
                My Journey as a Developer
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a passionate and self-taught programmer with expertise in Flutter development. 
                  My primary goal is to excel as a Flutter developer while contributing to innovative mobile solutions.
                </p>
                <p>
                  I thrive as a quick learner and value teamwork, finding genuine joy in collaborative 
                  problem-solving. My aim is to make a significant and positive difference in the ever-evolving 
                  field of software development.
                </p>
                <p>
                  With experience in both frontend (Flutter) and backend (Node.js) development, 
                  I enjoy creating end-to-end solutions that deliver exceptional user experiences.
                </p>
              </div>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-2xl font-semibold mb-6 text-black-primary">
                Education & Achievements
              </h3>
              <div className="space-y-4">
                <Card className="border-l-4 border-l-accent hover:shadow-soft transition-all duration-300">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-black-primary">Master of Computer Application</h4>
                    <p className="text-muted-foreground">Kalinga Institute of Technology (KIT) • 2023 - ongoing</p>
                    <p className="text-sm text-accent">8.5 CGPA (1st semester)</p>
                  </CardContent>
                </Card>
                
                <Card className="border-l-4 border-l-accent hover:shadow-soft transition-all duration-300">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-black-primary">Bachelor of Science in Computer Application</h4>
                    <p className="text-muted-foreground">Berhampur P.G College (BPC) • 2019 - 2022</p>
                    <p className="text-sm text-accent">passed with 64%</p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-accent hover:shadow-soft transition-all duration-300">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-black-primary">Intermediate</h4>
                    <p className="text-muted-foreground">K.R Education Center • 2017 - 2019</p>
                    <p className="text-sm text-accent">passed with 86%</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-semibold mb-8 text-center text-black-primary">
              Achievements & Certifications
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <Card 
                  key={index} 
                  className="text-center hover:shadow-elegant transition-all duration-300 hover:scale-105 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full mb-4">
                      <div className="text-accent">
                        {achievement.icon}
                      </div>
                    </div>
                    <h4 className="font-semibold text-black-primary mb-2">
                      {achievement.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;