import FadeContent from "../components/FadeContent"

const About = () => {
  return (
    <div className="text-white py-16 bg-[#0d1425]">

        <div className="container mx-auto px-4">
          <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0} >
            <div>
              <h2 class="text-4xl font-bold text-center text-white mb-12">Quick Facts <span className="text-purple-400">About Me</span></h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-white">
              <div>
                <div class="flex flex-col items-center text-center">
                  <div class="bg-purple-400 p-3 rounded-lg mb-4">
                    <i class="ri-briefcase-line"></i>
                  </div>
                  <h3 class="font-bold mb-2">Software Engineer</h3>
                  <p className="text-sm text-gray-300">Building scalable web applications using MERN stack and AI-powered solutions</p>
                </div>
              </div>
              <div>
                <div class="flex flex-col items-center text-center">
                  <div class="bg-purple-400 p-3 rounded-lg mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code w-6 h-6"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                  </div>
                  <h3 class="font-bold mb-2">Problem Solver</h3>
                  <p className="text-sm text-gray-300">Solved 200+ DSA problems on LeetCode, mastering algorithms & data structures</p>
                </div>
              </div>
              <div>
                <div class="flex flex-col items-center text-center">
                  <div class="bg-purple-400 p-3 rounded-lg mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users w-6 h-6"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                  </div>
                  <h3 class="font-bold mb-2">Open Source Contributor</h3>
                  <p className="text-sm text-gray-300">Collaborating on projects like Zero Hunger, improving social impact tech</p>
                </div>
              </div>
              <div>
                <div class="flex flex-col items-center text-center">
                  <div class="bg-purple-400 p-3 rounded-lg mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-award w-6 h-6"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
                  </div>
                  <h3 class="font-bold mb-2">Hackathon Enthusiast</h3>
                  <p className="text-sm text-gray-300">Participated in coding competitions and continuously learning new technologies</p>
                </div>
              </div>
            </div>
          </FadeContent>
        </div>
    </div>
  )
}

export default About