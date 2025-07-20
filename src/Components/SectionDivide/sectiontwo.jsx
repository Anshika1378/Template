import mid from "../../assets/media/Frame 10.png"
import image1 from "../../assets/media/Frame 42.png"
import image2 from "../../assets/media/Frame 29.png"
import image3 from "../../assets/media/Frame 28.png"
import image4 from "../../assets/media/Frame 31.png"
import image5 from "../../assets/media/Frame 13.png"
import image43 from "../../assets/media/Frame 43(1).png"
import image6 from "../../assets/media/Frame 43.png";
import image7 from "../../assets/media/Frame 40.png";
import image8 from "../../assets/media/Frame 15.png"

function SectionTwo() {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center justify-center w-full max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-2">
                    <div className="grid grid-cols-1 items-start gap-4">
                        <img className="max-h-24 object-contain" src={image1} alt="" />
                    </div>
                    <div className="flex flex-col w-35 space-y-0 space-x-0 mt-10 p-0">

                        <img className="h-10 " src={image2} alt="" />
                        <img className="h-10 " src={image3} alt="" />
                    </div>
                    <div className="relative justify-center items-center">
                        <img src={image5} alt="" className="relative -top-6" />
                    </div>


                </div>
                <div className="relative w-fit grid grid-cols-1">
                    {/* image4 behind mid, in corner */}
                    <img
                        src={image4}
                        alt=""
                        className="absolute top-[-20px] left-[-30px] w-16 z-0 md:w-24"
                    />

                    {/* mid image on top */}
                    <img
                        src={mid}
                        alt=""
                        className="relative z-10 md:w-60 w-40"
                    />
                    <img
                        src={image4}
                        alt=""
                        className="absolute top-[-20px] right-[-30px] w-16 md:w-24 z-0"
                    />
                </div>

                <div className="grid grid-cols-1">
                    <div className="flex flex-wrap md:justify-start">
                        <div className="flex flex-col w-35 space-y-0 space-x-0 mt-10 p-0">
                            <img className="h-12" src={image43} alt="" />
                            <img className="h-12" src={image6} alt="" />
                        </div>
                        <div className="grid grid-cols-1 items-start gap-4">
                            <img className="h-30 md:h-40 " src={image7} alt="" />
                        </div>
                        <div className="relative justify-center items-center">
                        <img src={image8} alt="" className="relative -top-6 h-24 md:h-30" />
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SectionTwo;