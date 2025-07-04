import About from "./About"

const HomePage = () => {
  return (
    <div className="main-bg">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
            <div className="row">
                <div className="col-6">
                    <div>
                        <h2 className="text-5xl text-white font-bold mb-3">Hi, I'm <span className="text-purple-400">Harshal Gadher</span></h2>
                        
                    </div>
                </div>
                <div className="col-5">

                </div>
            </div>
        </div>
        <About />
    </div>
  )
}

export default HomePage