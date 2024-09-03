import { useNavigate } from 'react-router-dom';

export function Header() {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };

    return (
        <div className="w-full flex items-center justify-between px-10 fixed font-montserrat">
            <div className="flex items-center text-sky-4 h-20 cursor-pointer">
                <img src="logoSky.png" className="h-5/6" alt="logo" />
                <h1 className="text-2xl">Decidueye</h1>
            </div>
            <ul className="flex text-forest-4 gap-10 text-md">
                <li className="hover:text-xl duration-300 cursor-pointer">Tinkaton</li>
                <li className="hover:text-xl duration-300 cursor-pointer">Gallade</li>
            </ul>
            <ul className="flex text-forest-4 gap-10 text-xl">
                <li
                    className="cursor-pointer rounded-full hover:bg-forest-4 hover:text-forest-2 duration-500 px-1"
                    onClick={handleLoginClick}
                >
                    <i className="ri-user-line" />
                </li>
            </ul>
        </div>
    );
}
