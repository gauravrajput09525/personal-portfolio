
export default function About() {
    return (
        <section
            id="about"
            className="px-10 w-full flex flex-col lg:flex-row py-20 
                       align-center bg-emerald-200 max-w-5xl mx-auto  shadow transition 
                            hover:shadow-xl hover:scale-[102%]">
            <div className="flex-1">
                <img src=
"https://spdload.com/wp-content/uploads/2022/04/What-is-a-Dedicated-Software-Development-Team_.png"
                    alt="About"
                    className="w-full h-full bg-cover"/>
            </div>
            <div className="flex-1 flex flex-col justify-center
                            items-center gap-5 px-6">
                <div>
                    <h2 className="text-center text-Black-500 
                                   text-5xl font-bold">
                        About Me :
                    </h2>
                </div>
                <p>
                    As I said, I am  frontend developer...
                </p>
                <p>
                   
 
 
 
 
A motivated Computer Science and Engineering Student with a 
strong foundation in front-end development. proficient in JavaScript, 
React.Js, SQL, and modern web technologies, with a passion for 
creating interactive and user-friendly web applications. 
                </p>
            </div>
        </section>
    );
}
