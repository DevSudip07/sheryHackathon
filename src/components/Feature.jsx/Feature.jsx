import { IoMdSettings } from "react-icons/io";
import Title from "../utilities/Title";
import { FaCircleArrowRight } from "react-icons/fa6";

const Feature = () => {
    const cards = [
        {
            id: "01/",
            title: "Adjust",
            content: "Al-Powered Heat Adjustment"
        },
        {
            id: "02/",
            title: "Adjust",
            content: "Al-Powered Heat Adjustment"
        },
        {
            id: "03/",
            title: "Adjust",
            content: "Al-Powered Heat Adjustment"
        }
    ];
    return (
        <>
            <section className="w-full md:px-10">
                <figure className="container mx-auto w-[90%]">
                    <Title title="Feature" />
                    <div className="w-full flex justify-between items-end my-10">
                        <h1 className="w-1/3 text-5xl font-bold">Smart Tech, Stunning Locks.</h1>
                        <p className="w-1/3 text-lg leading-6 md:pl-6 opacity-50">This Al hair dryer learns your preferences, tailoring sessions for healthier, shinier, manageable hair.</p>
                    </div>
                    <div className="w-full py-5 flex items-center justify-between gap-10">
                        {cards.map((card, index) => (
                            <div key={index} className="w-1/3 p-5 bg-[var(--secBg)] border-2 border-[var(--primaryColor)] rounded-2xl">
                                <div>
                                    <div className="w-full flex items-center justify-between opacity-70">
                                        <span className="text-xl">{card.id}</span>
                                        <span className="text-2xl duration-200 ease-in hover:cursor-pointer hover:rotate-90"><IoMdSettings /></span>
                                    </div>
                                    <div className="w-full mt-20">
                                        <h2 className="text-2xl font-bold mb-2">{card.title}</h2>
                                        <h1 className="text-3xl font-bold leading-8 mb-5">{card.content}</h1>
                                        <span className="w-fit flex items-center gap-2 font-semibold opacity-50 duration-150 ease-in hover:cursor-pointer hover:opacity-100 hover:text-[var(--primaryColor)] underline">
                                            Explore more <FaCircleArrowRight />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/* <div className="w-full flex items-center justify-between opacity-70">
                                <big>01/</big>
                                <big><IoMdSettings /></big>
                            </div>
                            <div className="w-full mt-25">
                                <h2 className="text-2xl font-bold mb-2">Adjust</h2>
                                <h1 className="text-3xl font-bold leading-8 mb-5">Al-Powered Heat Adjustment</h1>
                                <big className='w-fit flex items-center gap-2 font-semibold opacity-50 duration-150 ease-in hover:cursor-pointer hover:opacity-100 hover:text-[var(--primaryColor)] underline'>Explore more <FaCircleArrowRight /></big>
                            </div> */}
                    </div>
                </figure>
            </section>
        </>
    );
};

export default Feature;