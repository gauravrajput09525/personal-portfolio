export default function Projects() {
  return (
    <section
      id="projects"
      className="my-20 w-full flex flex-col gap-5 align-center max-w-5xl mx-auto"
    >
      <h2 className="text-5xl text-emerald-500 font-bold text-center">
        My Projects
      </h2>

      <div
        className="p-10 bg-emerald-200 flex flex-col justify-center items-center
                            gap-8 lg:flex-row max-w-5xl mx-auto shadow transition 
                            hover:shadow-xl hover:scale-[102%] w-full"
      >
        <div className="w-150 rounded">
          <img
            src="https://t3.ftcdn.net/jpg/04/91/54/18/360_F_491541875_c0vIhFwHnRZvmRfJELvJxtSQbRDOwbGC.jpg"
            alt="Project 1"
            className="w-full h-full bg-cover rounded"
          />
        </div>
        <h2 className="font-bold text-3xl text-center">
        Weather Application</h2>
        <p>
          Developed a weather app is to provide users with accurate, up-to-date,
          and location-specific weather information in a convenient and
          user-friendly format.
        </p>
      </div>



      <div
        className="p-10 bg-emerald-200 flex flex-col justify-center items-center gap-8
                            lg:flex-row-reverse max-w-5xl mx-auto shadow transition hover:shadow-xl 
                            hover:scale-[102%] w-full"
      >
        <div className="w-80 rounded">
          
            <img
              src="https://foolishdeveloper.com/wp-content/uploads/2021/11/todo-list-javascript.jpg"
              alt="Project 2"
              className="w-full h-full bg-cover rounded"
            />
        
        </div>
        <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
          <h2 className="font-bold text-3xl text-center">
           
              To-Do List Application 
           
          </h2>
          <p>
          To-Do List App is a kind of app that generally used 
to maintain our day-to-day tasks or list everything that we 
have to do, with the most important tasks at the top of the list, 
and the least important tasks at the bottom. 
          </p>
        </div>
      </div>



      <div
        className="p-10 bg-emerald-200 flex flex-col justify-center items-center
                            gap-8 lg:flex-row max-w-5xl mx-auto shadow transition 
                            hover:shadow-xl hover:scale-[102%] w-full"
      >
        <div className="w-150 rounded">
          
            <img
              src="https://fiverr-res.cloudinary.com/t_mobile_web_2,q_auto,f_auto/gigs/347918601/original/2d72a15a41147fed3c2017e77731df3db3c671be.jpg"
              alt="Project 1"
              className="w-full h-full bg-cover rounded"
            />
          
        </div>
        <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
          <h2 className="font-bold text-3xl text-center">
            
          Personal Portfolio 
           
          </h2>
          <p>
          Developed personal portfolio serves as a showcase of my 
skills and works. It provides a curated collection of my best work, 
demonstrating my range, style. 
          </p>
        </div>
      </div>


      <div
        className="p-10 bg-emerald-200 flex flex-col justify-center items-center gap-8
                            lg:flex-row-reverse max-w-5xl mx-auto shadow transition hover:shadow-xl 
                            hover:scale-[102%] w-full"
      >
        <div className="w-80 rounded">
          
            <img
              src="https://www.stuff.tv/wp-content/uploads/sites/2/2021/08/ms_paint_alternatives-1.png"
              alt="Project 2"
              className="w-full h-full bg-cover rounded"
            />
        
        </div>
        <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
          <h2 className="font-bold text-3xl text-center">
           
              Drawing Application 
           
          </h2>
          <p>
          A drawing app typically allows users to create digital
           drawings using various tools like brushes, colors, and 
           shapes. The objective of a drawing app can vary depending on 
           its purpose and target users.
          </p>
        </div>
      </div>


      <div
        className="p-10 bg-emerald-200 flex flex-col justify-center items-center gap-8
                            lg:flex-row-reverse max-w-5xl mx-auto shadow transition hover:shadow-xl 
                            hover:scale-[102%] w-full"
      >
        <div className="w-80 rounded">
          
            <img
              src="https://user-images.githubusercontent.com/99042499/181905857-6e00d434-4f6b-41d7-8e1e-9b90e02d71c8.png"
              alt="Project 2"
              className="w-full h-full bg-cover rounded"
            />
        
        </div>
        <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
          <h2 className="font-bold text-3xl text-center">
           
              Calculator Application
           
          </h2>
          <p>
          The main objective of a calculator app is to perform accurate and efficient
           mathematical calculations in a user-friendly interface.
          To provide users with a reliable, fast, and easy-to-use tool for
           performing mathematical operations.
          </p>
        </div>
      </div>
    </section>
  );
}
