import { useState } from 'react';
import { IconMenu2, IconMenu, IconHome } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';

import LanguageSelector from './language-selector';

const navbarItems = [
    { name: 'skills', href: '#skills-section' },
    { name: "training", href: "#training-section" },
    { name: 'projects', href: '#projects-section' },
    { name: 'working', href: '#working-section' },
    { name: 'contact', href: '#contact-section' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation();

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-200 p-4 sticky w-full top-0 z-10">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <a href="#" className=" font-bold text-xl">
                        <IconHome size={28} />
                    </a>
                </div>
                <div className="hidden md:flex space-x-4">
                    {
                        navbarItems.map((item, i) => (
                            <a
                                key={i}
                                href={item.href}
                                className="py-2 px-2 hover:text-gray-600"
                            >
                                {t(item.name)}
                            </a>
                        ))
                    }
                </div>
                <LanguageSelector />
                <div className="md:hidden">
                    <button
                        className=" hover:text-gray-600 focus:outline-none"
                        onClick={toggleNavbar}
                    >
                        {isOpen ? < IconMenu size={28} /> : <IconMenu2 size={28} />}
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden absolute top-16 left-0 right-0 bg-slate-300 px-2">
                    {
                        navbarItems.map((item, i) => (
                            <a
                                key={i}
                                href={item.href}
                                className={"py-2 px-2 hover:text-gray-600 block"}
                            >
                                {t(item.name)}
                            </a>
                        ))
                    }
                </div>
            )}
        </nav>
    );
};

export default Navbar;
