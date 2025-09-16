import BlurText from "../components/BlurText"
import FadeContent from "../components/FadeContent "
import About from "./About"
import Achivment from "./Achivment"
import Skills from "./Skills"
import Contact from "./Contact"



const HomePage = () => {
    return (
        <div className="main-bg">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
                <div className="row flex">
                    <div className="w-8/12">
                        <h2 className="text-5xl text-white font-bold mb-3">
                            Hi, I'm
                            < BlurText text="Harshal Gadher"
                                delay={150}
                                animateBy="words"
                                direction="top"
                                className="text-purple-400"
                            />
                        </h2>
                        <p className="text-white text-lg">I am a Software Engineering student passionate about building impactful solutions. I specialize in developing software that bridges technology and real-world challenges, ensuring efficiency, usability, and meaningful impact.</p>
                        <p className=" text-white text-lg mt-3">
                            My work spans web development, cloud computing, DevOps, and cybersecurity, driven by a belief that technology should solve problems, not create them. I am dedicated to crafting scalable, effective, and user-centric solutions while fostering a culture of collaboration, knowledge-sharing, and continuous improvement.
                        </p>
                        <div className="my-6 font-semibold p-4 border-l-4 border-purple-400 ">
                            <p className="italic text-blue-200">A Student Fueled By Curiosity , Innovative Ideas And Continuous Learning, Figuring Out Stuff !!</p>
                        </div>
                        <div className="w-40 justify-center whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive shadow-xs h-9 px-4 py-2 has-[>svg]:px-3 bg-purple-400 flex items-center gap-2 cursor-pointer hover:bg-purple-400 text-white rounded-md transition-transform duration-300 hover:scale-105">
                            <button><i className="ri-git-repository-line"></i> Download Resume</button>
                        </div>
                            <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                        <div className="flex space-x-4 mt-6">

                                <div className="text-lg text-white opacity-50 hover:opacity-100 transition-all">
                                    <a href="" className="text-xl"><i className="ri-github-fill"></i></a>
                                </div>
                                <div className="text-lg text-white opacity-50 hover:opacity-100 transition-all">
                                    <a href="" className="text-xl"><i className="ri-twitter-fill"></i></a>
                                </div>
                                <div className="text-lg text-white opacity-50 hover:opacity-100 transition-all">
                                    <a href="" className="text-xl"><i className="ri-linkedin-fill"></i></a>
                                </div>
                                <div className="text-lg text-white opacity-50 hover:opacity-100 transition-all">
                                    <a href="" className="text-xl"><i className="ri-mail-fill"></i></a>
                                </div>
                        </div>
                            </FadeContent>
                    </div>
                    <div className="w-5/12">
                        <div className="flex justify-content-center align-items-center">
                            <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                                <img src="/my-img.jpg" alt="img" className="bg-cover rounded-lg ml-28 mb-5 content-center w-9/12" />
                            </FadeContent>
                        </div>
                    </div>
                </div>
            </div>
            <About />
            <Skills />
            <Achivment />
            <Contact />
        </div>
    )
}

export default HomePage