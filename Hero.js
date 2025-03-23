// Hero.js
export default function Hero() {
    return (
      <section
        id="hero"
        className="px-10 w-full flex gap-12 flex-col lg:flex-row 
                   justify-center items-center align-center mt-40 
                   mb-16 lg:mt-10 max-w-5xl mx-auto lg:gap-0 h-[80vh]">
        <div className="flex-1 flex flex-col justify-center items-center gap-5">
          <div>
            <h4 className="text-center text-xl font-bold">
                Hi I'm <span className ="text-3xl font-bold text-emerald-700">Gaurav Kumar</span> and welcome to
            </h4>
            <h2 className="text-center text-Black-500 text-5xl font-bold mt-2 ">
              My Portfolio Website
            </h2>
          </div>
          <p className="text-center">
            I am  frontend developer | React js developer | JavaScript developer | SQL developer. . .
          </p>
        </div>
       

        <div className="flex-0  shadow transition 
                            hover:shadow-xl hover:scale-[102%]">
          <img src=
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKQ-GT41JpjIFgj2JkDFObZkKyn7W46UpTTw&s"
               alt="Hello.svg"
               className="w-full h-full bg-cover"/>
        </div>
      
      </section>
    );
  }
