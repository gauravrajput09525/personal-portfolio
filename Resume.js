export default function Resume() {
    return (
        <section id="resume"
                 className="my-40 align-center  bg-emerald-200 max-w-5xl mx-auto p-3  shadow transition 
                            hover:shadow-xl hover:scale-[102%]">
            <h2 className="text-5xl font-bold text-emerald-500 text-center">
                My Resume
            </h2>

            
            <a 
             className=" flex justify-center"
                href="Gaurav's cv (3).pdf" download="Gaurav's cv (3).pdf">
               <button class="bg-green-500 text-white px-8 py-4 rounded my-10 ">
                Download </button></a>
            </section>
    )
}