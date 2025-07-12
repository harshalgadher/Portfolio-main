import SpotlightCard from "../components/SpotlightCard";

const Skills = () => {
    return (
        <>
            <div class="bg-[#111827] text-white py-16 px-4 min-h-screen">
                <div class="max-w-7xl mx-auto">
                    <div>
                        <h1 class="text-4xl font-bold text-center mb-4">Skills & <span className="text-purple-400">Expertise</span></h1>
                    </div>
                    <div>
                        <p class="text-gray-300 text-center font-semibold max-w-2xl mx-auto mb-12">Here's a quick overview of my skill include frontend magic , backend wizardry, and everything in between. I am always eager to learn new technologies</p>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="relative h-full">
                            <div>
                                <div class="relative rounded-3xl overflow-hidden  custom-spotlight-card  bg-gradient-to-br from-[#0a101f] to-[#131c35]">
                                    <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(232, 33, 248, 0.20)">
                                        <div class="rounded-lg flex flex-col">
                                            <div class="flex items-center gap-3 mb-4">
                                                <div className="text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-monitor w-6 h-6"><rect width="20" height="14" x="2" y="3" rx="2"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>
                                                </div>
                                                <h2 className="text-xl font-semibold">Frontend Development</h2>
                                            </div>
                                            <p className="text-gray-300 mb-6">Designing and developing modern, responsive user interfaces</p>
                                            <div class="grid grid-cols-2 gap-3 mt-auto">
                                                <div class="border-2 border-purple-400/40 bg-gradient-to-br from-[#0a101f] to-[#131c35] py-2 px-3 rounded-md text-sm text-white font-medium text-center cursor-pointer">
                                                    <span className="m-0 p-0">React + Vite</span>
                                                </div>
                                                <div class="border-2 border-purple-400/40 bg-gradient-to-br from-[#0a101f] to-[#131c35] py-2 px-3 rounded-md text-sm text-white font-medium text-center cursor-pointer">
                                                    <span className="m-0 p-0">Next.js</span>
                                                </div>
                                                <div class="border-2 border-purple-400/40 bg-gradient-to-br from-[#0a101f] to-[#131c35] py-2 px-3 rounded-md text-sm text-white font-medium text-center cursor-pointer">
                                                    <span className="m-0 p-0">Redux</span>
                                                </div>
                                                <div class="border-2 border-purple-400/40 bg-gradient-to-br from-[#0a101f] to-[#131c35] py-2 px-3 rounded-md text-sm text-white font-medium text-center cursor-pointer">
                                                    <span className="m-0 p-0">Tailwind CSS</span>
                                                </div>
                                                <div class="border-2 border-purple-400/40 bg-gradient-to-br from-[#0a101f] to-[#131c35] py-2 px-3 rounded-md text-sm text-white font-medium text-center cursor-pointer">
                                                    <span className="m-0 p-0">Figma</span>
                                                </div>
                                                <div class="border-2 border-purple-400/40 bg-gradient-to-br from-[#0a101f] to-[#131c35] py-2 px-3 rounded-md text-sm text-white font-medium text-center cursor-pointer">
                                                    <span className="m-0 p-0">ShadCN</span>
                                                </div>
                                            </div>
                                        </div>
                                    </SpotlightCard>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-full">
                            <div>
                                <div class="relative rounded-3xl overflow-hidden  custom-spotlight-card  bg-gradient-to-br from-[#0a101f] to-[#131c35]">
                                    <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(232, 33, 248, 0.20)">
                                        <div class="rounded-lg flex flex-col">
                                            <div class="flex items-center gap-3 mb-4">
                                                <div className="text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-monitor w-6 h-6"><rect width="20" height="14" x="2" y="3" rx="2"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>
                                                </div>
                                                <h2 className="text-xl font-semibold">Backend Development</h2>
                                            </div>
                                            <p className="text-gray-300 mb-6">Architecting and maintaining scalable and secure backend systems</p>
                                            <div class="grid grid-cols-2 gap-3 mt-auto">
                                                <div class="border-2 border-purple-400/40 bg-gradient-to-br from-[#0a101f] to-[#131c35] py-2 px-3 rounded-md text-sm text-white font-medium text-center cursor-pointer">
                                                    <span className="m-0 p-0">Node.js</span>
                                                </div>
                                                <div class="border-2 border-purple-400/40 bg-gradient-to-br from-[#0a101f] to-[#131c35] py-2 px-3 rounded-md text-sm text-white font-medium text-center cursor-pointer">
                                                    <span className="m-0 p-0">Express.js</span>
                                                </div>
                                                <div class="border-2 border-purple-400/40 bg-gradient-to-br from-[#0a101f] to-[#131c35] py-2 px-3 rounded-md text-sm text-white font-medium text-center cursor-pointer">
                                                    <span className="m-0 p-0">REST APIs</span>
                                                </div>
                                                <div class="border-2 border-purple-400/40 bg-gradient-to-br from-[#0a101f] to-[#131c35] py-2 px-3 rounded-md text-sm text-white font-medium text-center cursor-pointer">
                                                    <span className="m-0 p-0">Redis</span>
                                                </div>
                                                <div class="border-2 border-purple-400/40 bg-gradient-to-br from-[#0a101f] to-[#131c35] py-2 px-3 rounded-md text-sm text-white font-medium text-center cursor-pointer">
                                                    <span className="m-0 p-0">Postman</span>
                                                </div>
                                                <div class="border-2 border-purple-400/40 bg-gradient-to-br from-[#0a101f] to-[#131c35] py-2 px-3 rounded-md text-sm text-white font-medium text-center cursor-pointer">
                                                    <span className="m-0 p-0">Web Sockets</span>
                                                </div>
                                                <div class="border-2 border-purple-400/40 bg-gradient-to-br from-[#0a101f] to-[#131c35] py-2 px-3 rounded-md text-sm text-white font-medium text-center cursor-pointer">
                                                    <span className="m-0 p-0">Mongoose</span>
                                                </div>
                                            </div>
                                        </div>
                                    </SpotlightCard>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-full">
                            <div>
                                <div class="relative rounded-3xl overflow-hidden  custom-spotlight-card  bg-gradient-to-br from-[#0a101f] to-[#131c35]">
                                    <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(232, 33, 248, 0.20)">
                                        <div class="rounded-lg flex flex-col">
                                            <div class="flex items-center gap-3 mb-4">
                                                <div className="text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-monitor w-6 h-6"><rect width="20" height="14" x="2" y="3" rx="2"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>
                                                </div>
                                                <h2 className="text-xl font-semibold">Database Management</h2>
                                            </div>
                                            <p className="text-gray-300 mb-6">Building and deploying AI-driven solutions to solve real-world problems</p>
                                            <div class="grid grid-cols-2 gap-3 mt-auto">
                                                <div class="border-2 border-purple-400/40 bg-gradient-to-br from-[#0a101f] to-[#131c35] py-2 px-3 rounded-md text-sm text-white font-medium text-center cursor-pointer">
                                                    <span className="m-0 p-0">MySQL</span>
                                                </div>
                                                <div class="border-2 border-purple-400/40 bg-gradient-to-br from-[#0a101f] to-[#131c35] py-2 px-3 rounded-md text-sm text-white font-medium text-center cursor-pointer">
                                                    <span className="m-0 p-0">MongoDB</span>
                                                </div>
                                                <div class="border-2 border-purple-400/40 bg-gradient-to-br from-[#0a101f] to-[#131c35] py-2 px-3 rounded-md text-sm text-white font-medium text-center cursor-pointer">
                                                    <span className="m-0 p-0">Firebase</span>
                                                </div>
                                                <div class="border-2 border-purple-400/40 bg-gradient-to-br from-[#0a101f] to-[#131c35] py-2 px-3 rounded-md text-sm text-white font-medium text-center cursor-pointer">
                                                    <span className="m-0 p-0">MongoDB Atlas</span>
                                                </div>
                                                <div class="border-2 border-purple-400/40 bg-gradient-to-br from-[#0a101f] to-[#131c35] py-2 px-3 rounded-md text-sm text-white font-medium text-center cursor-pointer">
                                                    <span className="m-0 p-0">PhpMyAdmin</span>
                                                </div>
                                            </div>
                                        </div>
                                    </SpotlightCard>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-full">
                            <div>
                                <div class="relative rounded-3xl overflow-hidden  custom-spotlight-card  bg-gradient-to-br from-[#0a101f] to-[#131c35]">
                                    <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(232, 33, 248, 0.20)">
                                        <div class="rounded-lg flex flex-col">
                                            <div class="flex items-center gap-3 mb-4">
                                                <div className="text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-monitor w-6 h-6"><rect width="20" height="14" x="2" y="3" rx="2"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>
                                                </div>
                                                <h2 className="text-xl font-semibold">DevOps & Cloud</h2>
                                            </div>
                                            <p className="text-gray-300 mb-6">Managing and optimizing cloud infrastructure with automated pipelines</p>
                                            <div class="grid grid-cols-2 gap-3 mt-auto">
                                                <div class="border-2 border-purple-400/40 bg-gradient-to-br from-[#0a101f] to-[#131c35] py-2 px-3 rounded-md text-sm text-white font-medium text-center cursor-pointer">
                                                    <span className="m-0 p-0">AWS</span>
                                                </div>
                                                <div class="border-2 border-purple-400/40 bg-gradient-to-br from-[#0a101f] to-[#131c35] py-2 px-3 rounded-md text-sm text-white font-medium text-center cursor-pointer">
                                                    <span className="m-0 p-0">Google Cloud</span>
                                                </div>
                                                <div class="border-2 border-purple-400/40 bg-gradient-to-br from-[#0a101f] to-[#131c35] py-2 px-3 rounded-md text-sm text-white font-medium text-center cursor-pointer">
                                                    <span className="m-0 p-0">Docker</span>
                                                </div>
                                                <div class="border-2 border-purple-400/40 bg-gradient-to-br from-[#0a101f] to-[#131c35] py-2 px-3 rounded-md text-sm text-white font-medium text-center cursor-pointer">
                                                    <span className="m-0 p-0">Kubernetes</span>
                                                </div>
                                                <div class="border-2 border-purple-400/40 bg-gradient-to-br from-[#0a101f] to-[#131c35] py-2 px-3 rounded-md text-sm text-white font-medium text-center cursor-pointer">
                                                    <span className="m-0 p-0">CI/CD</span>
                                                </div>
                                                <div class="border-2 border-purple-400/40 bg-gradient-to-br from-[#0a101f] to-[#131c35] py-2 px-3 rounded-md text-sm text-white font-medium text-center cursor-pointer">
                                                    <span className="m-0 p-0">Git & GitHub</span>
                                                </div>
                                            </div>
                                        </div>
                                    </SpotlightCard>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-full">
                            <div>
                                <div class="relative rounded-3xl overflow-hidden  custom-spotlight-card  bg-gradient-to-br from-[#0a101f] to-[#131c35]">
                                    <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(232, 33, 248, 0.20)">
                                        <div class="rounded-lg flex flex-col">
                                            <div class="flex items-center gap-3 mb-4">
                                                <div className="text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-monitor w-6 h-6"><rect width="20" height="14" x="2" y="3" rx="2"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>
                                                </div>
                                                <h2 className="text-xl font-semibold">Product Management</h2>
                                            </div>
                                            <p className="text-gray-300 mb-6">Leading product innovation and development from concept to execution</p>
                                            <div class="grid grid-cols-2 gap-3 mt-auto">
                                                <div class="border-2 border-purple-400/40 bg-gradient-to-br from-[#0a101f] to-[#131c35] py-2 px-3 rounded-md text-sm text-white font-medium text-center cursor-pointer">
                                                    <span className="m-0 p-0">Agile</span>
                                                </div>
                                                <div class="border-2 border-purple-400/40 bg-gradient-to-br from-[#0a101f] to-[#131c35] py-2 px-3 rounded-md text-sm text-white font-medium text-center cursor-pointer">
                                                    <span className="m-0 p-0">System Architecture</span>
                                                </div>
                                                <div class="border-2 border-purple-400/40 bg-gradient-to-br from-[#0a101f] to-[#131c35] py-2 px-3 rounded-md text-sm text-white font-medium text-center cursor-pointer">
                                                    <span className="m-0 p-0">UML Designs</span>
                                                </div>
                                                <div class="border-2 border-purple-400/40 bg-gradient-to-br from-[#0a101f] to-[#131c35] py-2 px-3 rounded-md text-sm text-white font-medium text-center cursor-pointer">
                                                    <span className="m-0 p-0">Design Thinking</span>
                                                </div>
                                            </div>
                                        </div>
                                    </SpotlightCard>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-full">
                            <div>
                                <div class="relative rounded-3xl overflow-hidden  custom-spotlight-card  bg-gradient-to-br from-[#0a101f] to-[#131c35]">
                                    <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(232, 33, 248, 0.20)">
                                        <div class="rounded-lg flex flex-col">
                                            <div class="flex items-center gap-3 mb-4">
                                                <div className="text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-monitor w-6 h-6"><rect width="20" height="14" x="2" y="3" rx="2"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>
                                                </div>
                                                <h2 className="text-xl font-semibold">IoT & Embedded Systems</h2>
                                            </div>
                                            <p className="text-gray-300 mb-6">Developing smart solutions using embedded systems and IoT technologies</p>
                                            <div class="grid grid-cols-2 gap-3 mt-auto">
                                                <div class="border-2 border-purple-400/40 bg-gradient-to-br from-[#0a101f] to-[#131c35] py-2 px-3 rounded-md text-sm text-white font-medium text-center cursor-pointer">
                                                    <span className="m-0 p-0">Arduino</span>
                                                </div>
                                                <div class="border-2 border-purple-400/40 bg-gradient-to-br from-[#0a101f] to-[#131c35] py-2 px-3 rounded-md text-sm text-white font-medium text-center cursor-pointer">
                                                    <span className="m-0 p-0">ESP8266/ESP32</span>
                                                </div>
                                                <div class="border-2 border-purple-400/40 bg-gradient-to-br from-[#0a101f] to-[#131c35] py-2 px-3 rounded-md text-sm text-white font-medium text-center cursor-pointer">
                                                    <span className="m-0 p-0">Microcontrollers</span>
                                                </div>
                                                <div class="border-2 border-purple-400/40 bg-gradient-to-br from-[#0a101f] to-[#131c35] py-2 px-3 rounded-md text-sm text-white font-medium text-center cursor-pointer">
                                                    <span className="m-0 p-0">Embedded C</span>
                                                </div>
                                                <div class="border-2 border-purple-400/40 bg-gradient-to-br from-[#0a101f] to-[#131c35] py-2 px-3 rounded-md text-sm text-white font-medium text-center cursor-pointer">
                                                    <span className="m-0 p-0">IoT Protocols</span>
                                                </div>
                                            </div>
                                        </div>
                                    </SpotlightCard>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills;