export default function SectionTest() {
    return (
        <div className="snap-y snap-mandatory w-screen h-screen overflow-y-auto scroll-smooth no-scroll">
            <section className="sec h-screen bg-yellow-600 flex items-center justify-center">
                <h1 className="text-3xl text-white">1</h1>
            </section>
            <section className="sec h-screen bg-red-600 flex items-center justify-center">
                <h2 className="text-3xl text-white">2</h2>
            </section>
            <section className="sec h-screen bg-blue-600 flex items-center justify-center">
                <h2 className="text-3xl text-white">3</h2>
            </section>

            <div className="snap-start w-screen h-screen overflow-x-auto overflow-y-hidden flex touch-pan-x scroll-smooth touch-auto">

                <section className="min-w-full h-full bg-purple-600 flex flex-col items-center justify-center flex-shrink-0 snap-start gap-4 p-4">
                    <div className="bg-white text-black p-4 rounded shadow w-3/4 text-center">HTML</div>
                    <div className="bg-white text-black p-4 rounded shadow w-3/4 text-center">CSS</div>
                    <div className="bg-white text-black p-4 rounded shadow w-3/4 text-center">JavaScript</div>
                    <div className="bg-white text-black p-4 rounded shadow w-3/4 text-center">React</div>
                </section>

                <section className="min-w-full h-full bg-green-600 flex flex-col items-center justify-center flex-shrink-0 snap-start gap-4 p-4">
                    <div className="bg-white text-black p-4 rounded shadow w-3/4 text-center">Node.js</div>
                    <div className="bg-white text-black p-4 rounded shadow w-3/4 text-center">Python</div>
                    <div className="bg-white text-black p-4 rounded shadow w-3/4 text-center">.NET</div>
                    <div className="bg-white text-black p-4 rounded shadow w-3/4 text-center">PHP</div>
                </section>
            </div>

            <section className="sec h-screen bg-gray-800 flex items-center justify-center">
                <h2 className="text-3xl text-white">6</h2>
            </section>
        </div>
    );
}
