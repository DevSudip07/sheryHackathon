import image from '../../assets/images/bg-boxes.webp';
import heroImage from '../../assets/images/dopes-image.webp';
const Image = () => {
  return (
    <>
        <aside className="relative w-2/3 h-full z-50">
            <div className="w-full h-full">
                <img className='w-full h-full object-contain' src={image} alt="" />
            </div>
            <div className='absolute inset-0 w-full h-full'>
                <div className='absolute w-2/3 h-[90%] right-0 bottom-0 z-50'>
                    <img className='w-full h-full object-contain z-50' src={heroImage} alt="" />
                </div>
            </div>
        </aside>
    </>
  )
}

export default Image