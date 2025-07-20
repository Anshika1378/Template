import epsilion from "../../assets/media/Ellipse 6.png";
import SectionOne from "../SectionDivide/section1";
import vector1 from "../../assets/media/Vector (1).png";
import vector2 from "../../assets/media/Vector (2).png";
import vector3 from "../../assets/media/Vector (3).png";

function Sheet() {
    return (
        <div
            className="min-h-full  bg-cover bg-center flex flex-col items-center text-white text-center px-4 py-10"
            style={{ backgroundImage: `url(${epsilion})` }}
        >

            <div className="mb-0 mt-20 sm:mt-16 px-2 sm:px-6">
                <div className="flex justify-end row-end-1  sm:w-10">
                    <img src={vector3} alt="" />
                </div>
                <h3 className="text-base sm:text-lg text-black font-medium">Xenotic Tech</h3>
                <div className="flex items-center space-x-4">
                    <div className="relative w-15 h-15">
                        <img
                            src={vector1} // default image
                            alt="vector1"
                            className="sm:w-12 sm:h-12 absolute inset-0 transition-opacity duration-200 hover:opacity-0"
                        />
                        <img
                            src={vector1} // blue version of image
                            alt="vector1-hover"
                            className=" absolute inset-0 opacity-0 hover:opacity-200 transition-opacity duration-200"
                        />
                    </div>

                    <h1 className="sm:text-4xl text-4xl text-black font-bold mt-2">Got a Startup Idea!</h1>
                    <img className="h-4 sm:h-5" src={vector2} alt="" />
                </div>

                <p className="sm:text-base  text-md text-black mt-2">Let's Turn It Into Reality</p>
            </div>
            <SectionOne />
        </div>
    );
}

export default Sheet;
