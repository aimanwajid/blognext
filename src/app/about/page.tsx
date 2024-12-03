import Image from "next/image";

export default function About() {
    return (
        <section
            id="about"
            className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white p-6">
                
            <div className="container mx-auto sm:p-5">
                <h2 className="text-4xl font-bold text-center mt-4 mb-8">
                    About Me
                </h2>

                {/* Image div */}
                <div className="bg-gray-800 shadow-2xl shadow-slate-600 rounded-lg sm:p-12 max-w-9xl relative">
                    {/* Image */}
                    

                    <p className="text-lg mb-4 sm:p-3">
                        Hello! 👋 <br />
                        I am a dedicated
                        <span className="text-blue-600 font-semibold"> Front-End Developer</span> 👨‍💻
                       
                        currently enhancing my skills in React.js, Next.js, and Tailwind CSS.
                        I specialize in creating user-friendly websites 🌐 using HTML5, CSS,
                        TypeScript, JavaScript, and modern frameworks like Next.js and Tailwind CSS. 💻✨
                        <br /><br />
                        My focus is on writing clean, efficient code and developing responsive designs
                        that improve user experience. I enjoy the challenge of transforming creative
                        ideas into impactful digital solutions. ✨💻
                    </p>

                    <p className="text-lg mb-4 sm:p-3">
                        I have a strong interest in
                        <span className="text-blue-600 font-semibold"> UX/UI design</span>,
                        aiming to create intuitive interfaces that enhance user satisfaction. I&apos;m
                        always open to connecting with fellow developers, designers, and professionals
                        who share a passion for innovation and building exceptional digital products. 🌟
                        <br /><br />
                        If you are looking for a front-end developer to create visually appealing
                        websites or interfaces, let&apos;s work together to bring your ideas to life!🚀
                    </p>
                </div>
            </div>
        </section>
    );
}