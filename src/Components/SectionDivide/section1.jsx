import group158 from "../../assets/media/Group 158.png";
import frame1 from "../../assets/media/Frame 20 (2).png";
import frame2 from "../../assets/media/Frame 21.png";
import frame3 from "../../assets/media/Frame 22.png";
import frame4 from "../../assets/media/Frame 19.png";
import frame5 from "../../assets/media/Frame 20 (1).png";
import frame6 from "../../assets/media/Frame 20.png";
import vector1 from "../../assets/media/Vector.png"
import SectionTwo from "./sectiontwo";

function SectionOne() {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center justify-center w-full max-w-6xl mx-auto px-4">
                <div className="flex justify-center">
                    <img className="h-24" src={group158} alt="" />
                    <img className="h-5 right-5 to-black hover:to-blue-800" src={vector1} alt="" />
                </div>

                <div className="flex flex-row flex-wrap justify-center items-center gap-2 w-full max-w-6xl mx-auto">
                    <img className="h-12" src={frame1} alt="" />
                    <img className="h-12" src={frame2} alt="" />
                    <img className="h-12" src={frame3} alt="" />
                    <img className="h-12" src={frame4} alt="" />
                    <img className="h-12" src={frame5} alt="" />
                    <img className="h-12" src={frame6} alt="" />
                </div>


                <div className="flex justify-center">
                    <img className="h-24" src={group158} alt="" />
                </div>
            </div>
            <SectionTwo />
        </>
    );
}

export default SectionOne;
