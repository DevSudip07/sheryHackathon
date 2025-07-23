import { FaArrowRightLong } from 'react-icons/fa6';
import image from '../../assets/images/about-image.webp';
import Title from '../utilities/Title';
import More from './More';

const About = () => {
    return (
        <>
            <section className="w-full md:mt-50 md:px-10">
                <figure className="container mx-auto md:w-[90%]">
                    <div className='w-full flex items-start justify-between'>
                        <aside className="w-1/5 h-[300px] bg-linear-to-t from-[var(--primaryColor)] to-white p-5 rounded-2xl">
                            <img className='w-full drop-shadow-sm drop-shadow-black' src={image} alt="" />
                        </aside>
                        <article className='w-2/5 h-full'>
                            <Title title="About Us" />
                            <p className='text-xl font-mediu leading-6 my-10'>The Al system monitors moisture and heat, keeping your hair hydrated and healthy while delivering beautiful, lasting styles. The Al system monitors moisture and heat, keeping your hair hydrated and healthy while delivering beautiful, lasting styles.</p>
                            <h2 className='w-fit flex items-center gap-2 font-semibold opacity-50 duration-150 ease-in hover:cursor-pointer hover:opacity-100 hover:text-[var(--primaryColor)]'>Know more <FaArrowRightLong /></h2>
                        </article>
                        <aside className="w-1/5 h-[300px] bg-linear-to-t from-[var(--primaryColor)] to-white p-5 rounded-2xl">
                            <video className='w-full' src=""></video>
                        </aside>
                    </div>
                    <More />
                </figure>
            </section>
        </>
    );
};

export default About;