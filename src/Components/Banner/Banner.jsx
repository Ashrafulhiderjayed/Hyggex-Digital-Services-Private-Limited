import { IoHomeOutline } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa";
import { MdLightbulbOutline } from "react-icons/md";
import { MdVolumeUp } from "react-icons/md";
import logo2 from "../../assets/img/logo2.png"
import leftArrow from "../../assets/img/leftArrow.png"
import righttArrow from "../../assets/img/rightArrow.png"
import reset from "../../assets/img/reset.png"
import fullScreen from "../../assets/img/fullScreen.png"
import plus from "../../assets/img/plus.png"
 

const Banner = () => {
    return (
        <section>
            <div className="flex items-center my-14">
                <IoHomeOutline />
                <FaAngleRight />
                <p>FlashCard</p>
                <FaAngleRight />
                <p>Mathmathics</p>
                <FaAngleRight />
                <p className="font-bold">Relation and Function</p>
            </div>

            <h2 className="text-left font-bold my-14 sm:text-xl lg:text-4xl">Relations and Functions(Mathematics)</h2>
            <section className="flex justify-center">
                <div className="w-6/12">
                    <div className="flex justify-evenly mb-10">
                        <p>Study</p>
                        <p>Quiz</p>
                        <p>Test</p>
                        <p>Game</p>
                        <p>Others</p>
                    </div>
                    {/* Carousel Div */}
                    <section>
                    <div className="hero rounded-2xl bg-gradient-to-bl from-[#06286E] to-[#1F80EB]">
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                        <div className="flex justify-between my-3">
                            <MdLightbulbOutline className="text-3xl text-white" />
                            <MdVolumeUp className="text-3xl text-white" />
                        </div>
                        <h1 className="mb-5 lg:text-5xl font-bold py-24 text-white">9 + 6 + 7x - 2x - 3</h1>
                        </div>
                    </div>
                    </div>

                    <div className="flex justify-between items-center p-8">
                        <img src={reset} alt="" />
                        <div className="flex items-center gap-5">
                            <img src={leftArrow} alt="" />
                            <p className="font-bold lg:text-lg">01/10</p>
                            <img src={righttArrow} alt="" />                        </div>
                        <img src={fullScreen} alt="" />
                    </div>
                    </section>
                    {/* Carousel End */}

                </div>
            </section>

            {/* New Section */}
            <section className="lg:flex justify-between xs:flex-col">
                <img src={logo2} alt="logo2 image" />
                <p className="flex items-center lg:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-[#06286E] to-[#164EC0]"><img src={plus} alt="" />Create FlashCard</p>
            </section>
        </section>
    );
};

export default Banner;