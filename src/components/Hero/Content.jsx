import { BiSolidDiscount } from "react-icons/bi";
import Button from "../utilities/Button";

const Content = () => {
    return (
        <>
            <article className="w-1/3 h-full flex flex-col justify-end gap-10 py-15">
                <h1 className="capitalize text-5xl font-semibold mb-5">the Future Of Airdopes is Here.</h1>
                <p className="text-lg leading-6">Step into the next era of beauty with an Al-powered hair dryer that understands your hair better than you do.</p>
                <div className="flex items-center gap-10">
                    <Button title="Get discount" icon={<BiSolidDiscount />} />
                    <a className="underline font-semibold duration-150 ease-in hover:cursor-pointer hover:text-[var(--primaryColor)]" href="">How it's works</a>
                </div>
            </article>
        </>
    );
};

export default Content;