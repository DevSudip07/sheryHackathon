import { AiTwotoneShop } from "react-icons/ai";
import Button from "../utilities/Button";

const Header = () => {
  const navItems = ["Home", "About Us", "Shop", "Product", "Feature", "Contact"]
  return (
    <>
        <header className="sticky top-0 w-full h-18 md:px-10">
            <nav className="container mx-auto w-[90%] h-full flex items-center justify-between py-1">
                <h1 className="text-2xl font-bold">LOGO</h1>
                <ul className="flex items-center gap-5">
                  {navItems.map((navItem, index) => (
                    <li key={index} className="font-semibold duration-150 ease-in hover:cursor-pointer hover:scale-105">{navItem}</li>
                  ))}
                </ul>
                <Button title="Shop" icon={<AiTwotoneShop />} />
            </nav>
        </header>
    </>
  )
}

export default Header