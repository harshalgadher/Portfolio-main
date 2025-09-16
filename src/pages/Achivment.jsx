const Achivment = () => {
    const achievements = [
        'Completed 12th standard',
        'Currently pursuing BCA from VNSGU (DRB College)',
        'Learning Full Stack Development from Red & White Institute',
        'Built Template UI Design Web Page',
        'Built Commercial Add-to-Cart Project',
        'Built Calculator App',
        'Built Portfolio Website',
        'Built Employee Management System',
        'Built Course Management System (Latest Project)',
    ];
    return (
        <>
            <div className="bg-gray-900 min-h-screen text-white">
                <section className="bg-gray-900 text-white min-h-screen p-8">
                    <h2 className="text-3xl font-bold mb-6 text-center">🎯 My Achievements</h2>
                    <div className="max-w-3xl mx-auto space-y-4">
                        {achievements.map((item, index) => (
                            <div
                                key={index}
                                className="bg-gray-800 p-4 rounded-lg shadow hover:bg-gray-700 transition"
                            >
                                <p className="text-lg">✔️ {item}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </>
    )
}

export default Achivment