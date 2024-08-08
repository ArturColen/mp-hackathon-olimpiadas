import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Header() {
    const [isHeaderOpen, setIsHeaderOpen] = useState(false);

    const navigationLinks = [
        {
            name: 'Home',
            link: '/',
        },
        {
            name: 'Ranking',
            link: '/',
        },
        {
            name: 'Esportes',
            link: '/',
        },
        {
            name: 'Eventos',
            link: '/',
        },
    ];

    return (
        <header
            className={`shadow-headerShadow w-full sticky top-0 left-0 transition-colors duration-500 bg-midnight-blue z-10`}
        >
            <div className="h-20 px-7 flex items-center justify-between lg:px-32 xl:h-24">
                <div className="w-10 h-10 xl:w-14 xl:h-14">
                    <Link to="/">
                        <img
                            src="/logo.svg"
                            alt="Logo da Space For Development"
                            className="w-full h-full"
                        />
                    </Link>
                </div>
                <div
                    onClick={() => setIsHeaderOpen(!isHeaderOpen)}
                    className="text-white right-8 top-6 cursor-pointer md:hidden"
                >
                    {isHeaderOpen ? <X /> : <Menu />}
                </div>
                <ul
                    className={`w-full absolute pl-9 transition-all duration-500 ease-in ${isHeaderOpen ? 'top-[81px]' : 'top-[-490px]'} text-white left-0 bg-midnight-blue md:flex md:items-center md:pb-0 md:static md:w-auto md:pl-0`}
                >
                    {navigationLinks.map((navigationLink) => (
                        <li
                            key={navigationLink.name}
                            className="text-sm my-7 md:ml-8 md:my-0 xl:text-base"
                        >
                            <Link
                                to={navigationLink.link}
                                className="duration-500 hover:border-b hover:border-white"
                            >
                                {navigationLink.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}
