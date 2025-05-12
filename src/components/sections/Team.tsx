
import { useRef } from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Team = () => {
  const sectionRef = useRef(null);

const teamMembers = [
  {
    name: "Dr. K. Visweswara Reddy",
    role: "Director",
    level: "top",
    image: "/images/director.jpg",
    description: "Leading Gagan Labs with a vision to transform India's entrepreneurial landscape.",
    social: {
      linkedin: "https://www.linkedin.com/in/dr-k-visweswara-reddy-ba91643b/",
      twitter: "#",
      facebook: "#",
      instagram: "#"
    }
  },
  {
    name: "Aravinth PM",
    role: "Director & CEO",
    level: "top",
    image: "/images/ceo.jpg",
    description: "Driving technological innovation and providing strategic guidance.",
    social: {
      linkedin: "https://www.linkedin.com/in/aravinth-pm-20452224b/",
      twitter: "#",
      facebook: "#",
      instagram: "#"
    }
  },
  {
    name: "Logapathan R",
    role: "Chief Technology Officer",
    level: "bottom",
    image: "/images/cto.jpg",
    description: "Ensuring robust infrastructure and optimized processes for the company.",
    social: {
      linkedin: "https://www.linkedin.com/in/logapathan-r-b739622b7/",
      twitter: "#",
      facebook: "#",
      instagram: "#"
    }
  },
  {
    name: "Narendiran V B",
    role: "Lead Web Developer",
    level: "bottom",
    image: "/images/web.jpg",
    description: "Managing critical projects with a focus on execution and timely delivery.",
    social: {
      linkedin: "https://www.linkedin.com/in/narendiran-v-b-a316651b8/",
      twitter: "https://x.com/defencenaren",
      facebook: "#",
      instagram: "#"
    }
  },
  {
    name: "Gautam CV",
    role: "HOD Devops & Cloud",
    level: "bottom",
    image: "/images/devops.jpg",
    description: "Overseeing development of cutting-edge web solutions and cloud infrastructure.",
    social: {
      linkedin: "https://www.linkedin.com/in/gautam-v-01250b1a9/",
      twitter: "#",
      facebook: "#",
      instagram: "#"
    }
  },
  
  {
    name: "Yukesh Naren",
    role: "Lead Developer",
    level: "bottom",
    image: "/images/yukki.jpg",
    description: "Specializing in full-stack development with a passion for clean code.",
    social: {
      linkedin: "https://www.linkedin.com/in/yukesh-naren-2b8b0a350/",
      twitter: "#",
      facebook: "#",
      instagram: "#"
    }
  }
];
const socialIcons = {
  linkedin: Linkedin,
  twitter: Twitter,
  facebook: Facebook,
  instagram: Instagram
};

 return (
    <section id="team" className="py-24 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Our Leadership
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gagan-purple to-gagan-orange mx-auto mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our experienced team is dedicated to nurturing the next generation of Indian entrepreneurs
          </p>
        </div>

        {/* Directors (Top) */}
        <div className="flex justify-center gap-8 mb-16">
          {teamMembers
            .filter((member) => member.level === "top")
            .map((member, index) => (
              <Card key={index} className="w-72 overflow-hidden bg-white">
                <div className="relative aspect-square">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gagan-dark/90 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white text-sm">{member.description}</p>
                  </div>
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-gagan-purple font-medium mb-4">{member.role}</p>
                  <div className="flex justify-center gap-4">
                    {Object.entries(member.social).map(([platform, url]) => {
                      const Icon = socialIcons[platform as keyof typeof socialIcons];
                      return (
                        <a
                          key={platform}
                          href={url}
                          className="text-gray-600 hover:text-gagan-purple transition-colors duration-300"
                        >
                          <Icon className="w-5 h-5" />
                        </a>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>

        {/* Remaining Members (Bottom) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers
            .filter((member) => member.level === "bottom")
            .map((member, index) => (
              <Card key={index} className="w-72 overflow-hidden bg-white">
                <div className="relative aspect-square">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gagan-dark/90 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white text-sm">{member.description}</p>
                  </div>
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-gagan-purple font-medium mb-4">{member.role}</p>
                  <div className="flex justify-center gap-4">
                    {Object.entries(member.social).map(([platform, url]) => {
                      const Icon = socialIcons[platform as keyof typeof socialIcons];
                      return (
                        <a
                          key={platform}
                          href={url}
                          className="text-gray-600 hover:text-gagan-purple transition-colors duration-300"
                        >
                          <Icon className="w-5 h-5" />
                        </a>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </section>
  );

};
export default Team;
