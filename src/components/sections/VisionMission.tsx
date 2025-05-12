
import { useRef } from "react";

const VisionMission = () => {
  const sectionRef = useRef(null);

  const cards = [
    {
      title: "Vision",
      content: "To ignite India's entrepreneurial spirit by transforming bold ideas into thriving enterprises—driving innovation, self-reliance, and global impact.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gagan-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      gradient: "from-gagan-purple/10 to-gagan-purple/20"
    },
    {
      title: "Mission",
      content: "Gagan Labs empowers aspiring founders with the guidance, resources, and network they need to build, launch, and scale disruptive businesses. Through mentorship, capital access, and hands‑on support, we accelerate your journey from concept to market leader.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gagan-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      gradient: "from-gagan-orange/10 to-gagan-orange/20"
    }
  ];

  return (
    <section id="vision" className="py-24 bg-gradient-to-b from-gagan-dark to-gray-900" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-3">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gagan-purple to-gagan-orange flex items-center justify-center mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Vision & Mission
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gagan-purple to-gagan-orange mx-auto mb-6"></div>
          <p className="text-white/70 max-w-2xl mx-auto">
            Our core principles that drive everything we do at Gagan Labs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {cards.map((card, index) => (
            <div
              key={card.title}
              className={`bg-gradient-to-br ${card.gradient} rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300 border border-white/10 shadow-xl`}
            >
              <div className="mb-6 flex justify-center">
                <div>
                  {card.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white text-center mb-4">{card.title}</h3>
              <p className="text-white/80 text-center leading-relaxed">{card.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
