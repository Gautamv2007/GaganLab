
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white/70 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <div className="text-white font-bold text-2xl mb-4">
                <span className="text-gagan-purple">Gagan</span> Labs
              </div>
              <p className="mb-6">
                Building startups that build india
              </p>
              <div className="flex space-x-4">
<div className="flex space-x-4">
  {/* Twitter */}
  <a
    href="https://x.com/defencenaren"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gagan-purple/20 hover:text-gagan-purple transition-colors duration-300"
    aria-label="Twitter"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
    </svg>
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/company/gagan-labs-private-limited"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gagan-purple/20 hover:text-gagan-purple transition-colors duration-300"
    aria-label="LinkedIn"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.3c-1 0-1.7-.8-1.7-1.7s.8-1.7 1.7-1.7 1.7.8 1.7 1.7-.7 1.7-1.7 1.7zm13.5 11.3h-3v-5.5c0-1.3-.5-2.2-1.8-2.2-.9 0-1.4.6-1.6 1.2-.1.2-.1.5-.1.8v5.7h-3s.1-9.2 0-10h3v1.4c.4-.6 1.1-1.5 2.7-1.5 2 0 3.5 1.3 3.5 4.1v6z" />
    </svg>
  </a>

  {/* Instagram */}
  <a
    href="#"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gagan-purple/20 hover:text-gagan-purple transition-colors duration-300"
    aria-label="Instagram"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.3.5.6.3 1 .6 1.4 1.1.4.4.8.8 1.1 1.4.2.4.4 1.1.5 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.5 2.3-.3.6-.6 1-1.1 1.4-.4.4-.8.8-1.4 1.1-.4.2-1.1.4-2.3.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.3-.5-.6-.3-1-.6-1.4-1.1-.4-.4-.8-.8-1.1-1.4-.2-.4-.4-1.1-.5-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.9.5-2.3.3-.6.6-1 1.1-1.4.4-.4.8-.8 1.4-1.1.4-.2 1.1-.4 2.3-.5C8.4 2.2 8.8 2.2 12 2.2M12 0C8.7 0 8.3 0 7 .1 5.7.1 4.7.3 3.9.6c-.9.3-1.6.7-2.3 1.3C.7 2.7.3 3.4 0 4.3.3 5.1.1 6.1.1 7.4.1 8.7 0 9.1 0 12s.1 3.3.1 4.6c.1 1.3.3 2.3.6 3.1.3.9.7 1.6 1.3 2.3.7.7 1.4 1.1 2.3 1.4.8.3 1.8.5 3.1.6C8.3 24 8.7 24 12 24s3.3 0 4.6-.1c1.3-.1 2.3-.3 3.1-.6.9-.3 1.6-.7 2.3-1.3.7-.7 1.1-1.4 1.4-2.3.3-.8.5-1.8.6-3.1.1-1.3.1-1.7.1-4.9s0-3.6-.1-4.9c-.1-1.3-.3-2.3-.6-3.1-.3-.9-.7-1.6-1.3-2.3C21.3.7 20.6.3 19.7 0c-.8-.3-1.8-.5-3.1-.6C15.6.1 15.2 0 12 0zm0 5.8A6.2 6.2 0 0 0 5.8 12 6.2 6.2 0 0 0 12 18.2 6.2 6.2 0 0 0 18.2 12 6.2 6.2 0 0 0 12 5.8zm0 10.2A4 4 0 1 1 16 12a4 4 0 0 1-4 4.1zm6.4-10.5a1.4 1.4 0 1 1-2.8 0 1.4 1.4 0 0 1 2.8 0z" />
    </svg>
  </a>

  {/* YouTube */}
  <a
    href="#"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gagan-purple/20 hover:text-gagan-purple transition-colors duration-300"
    aria-label="YouTube"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M23.498 6.186a2.963 2.963 0 0 0-2.084-2.093C19.638 3.5 12 3.5 12 3.5s-7.638 0-9.414.593a2.963 2.963 0 0 0-2.084 2.093C0 7.969 0 12 0 12s0 4.031.502 5.814a2.963 2.963 0 0 0 2.084 2.093C4.362 20.5 12 20.5 12 20.5s7.638 0 9.414-.593a2.963 2.963 0 0 0 2.084-2.093C24 16.031 24 12 24 12s0-4.031-.502-5.814zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
    </svg>
  </a>
</div>
              
              </div>
            </motion.div>
          </div>

          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-white font-semibold text-lg mb-4">Programs</h3>
              <ul className="space-y-3">
                {["Acceleration", "Mentorship", "Funding", "Workshops", "Events"].map((item) => (
                  <li key={item}>
                    <a href="/programs" className="hover:text-gagan-purple transition-colors duration-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-white font-semibold text-lg mb-4">Resources</h3>
              <ul className="space-y-3">
                {["Blog", "Podcast", "Success Stories", "Startup Toolkit", "FAQ"].map((item) => (
                  <li key={item}>
                    <a href="/resource" className="hover:text-gagan-purple transition-colors duration-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-white font-semibold text-lg mb-4">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>Kurnool, Andhra pradesh, India</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>gaganlabs.pvt@gmail.com</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>+91 83 007 02070</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-white/10 mt-16 pt-8 text-center"
        >
          <p>© {currentYear} Gagan Labs. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
