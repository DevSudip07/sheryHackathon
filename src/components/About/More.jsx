import img1 from '../../assets/images/about-image_1.webp';
import img2 from '../../assets/images/about-image_2.webp';
import img3 from '../../assets/images/case-image.webp';
const More = () => {

    const counts = [
        {
            num: "5+",
            title: "Colours"
        },
        {
            num: "6M+",
            title: "Guarantee"
        },
        {
            num: "15+",
            title: "Users"
        }
    ];

    return (
        <>
            <div className='w-full h-[40vh] flex items-center justify-between gap-10 mt-20'>
                <div className='w-1/3 h-full flex flex-col justify-between'>
                    <article className='px-5 py-10 bg-[var(--secBg)] border-2 border-[var(--primaryColor)] rounded-2xl text-2xl font-semibold leading-8'>
                        Enjoy a serene styling experience with cutting-edge noise-reduction technology.
                    </article>
                    <div className='w-full py-5 flex items-center justify-between'>
                        {counts.map((count, index) => (
                            <div key={index} className='w-fit text-center'>
                                <h1 className='text-3xl font-bold'>{count.num}</h1>
                                <small className='font-bold uppercase opacity-50'>{count.title}</small>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='w-1/3 h-full flex gap-5'>
                    <div className="w-1/2 h-full bg-[var(--secBg)] border-2 border-[var(--primaryColor)] rounded-2xl p-4 flex flex-col justify-between">
                        <img className='w-full bg-[var(--primaryColor)] rounded-xl' src={img1} alt="" />
                        <h1 className='text-xl font-bold text-center'>Rapid Drying Efficiency</h1>
                    </div>
                    <div className='w-1/2 h-full flex flex-col gap-5'>
                        <article className='h-1/2 px-5 py-5 flex flex-col items-center justify-center gap-2 bg-[var(--secBg)] border-2 border-[var(--primaryColor)] rounded-2xl font-semibold text-center'>
                            <h2 className='text-lg'>Noise Reduction</h2>
                            <div className='w-fit px-10 py-0.5 rounded-full bg-gray-200'></div>
                            <h2 className='text-lg'>Eco Energy</h2>
                            <div className='w-fit px-10 py-0.5 rounded-full bg-gray-200'></div>
                            <h2 className='text-lg'>Health Tracker</h2>
                        </article>
                        <div className='w-full h-1/2 bg-[var(--primaryColor)] rounded-xl flex items-center justify-center'>
                            <img className='w-2/3 h-3/4 object-contain' src={img2} alt="" />
                        </div>
                    </div>
                </div>
                <div className='w-1/3 h-full bg-linear-to-b from-[var(--primaryColor)] to-white rounded-2xl flex items-center justify-center'>
                    <img src={img3} alt="" />
                </div>
            </div>
        </>
    );
};

export default More;