
import { useRef } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const sectionRef = useRef(null);

  const projects = [
    {
      title: "Startup Incubation Platform",
      description: "Our flagship digital platform connecting startups with mentors, investors, and resources.",
      status: "In Development",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      completion: 85
    },
    {
      title: "Innovation Hub",
      description: "State-of-the-art facility for startup collaboration and innovation workshops.",
      status: "Planning Phase",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      completion: 40
    },
    {
      title: "Mentor Connect",
      description: "AI-powered mentor matching system for personalized startup guidance.",
      status: "Beta Testing",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      completion: 70
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-white to-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gagan-purple to-gagan-orange mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Building the future of entrepreneurship in India through innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index}>
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 bg-gagan-purple/90 text-white text-sm rounded-full">
                      {project.status}
                    </span>
                  </div>
                </div>
                <CardHeader className="relative">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    {project.title}
                    <ExternalLink className="w-4 h-4 text-gagan-purple" />
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Completion</span>
                      <span>{project.completion}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-gagan-purple to-gagan-orange"
                        style={{ width: `${project.completion}%` }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
