'use client'

import { createElement, ElementType, useState } from 'react';
import { usePathname } from 'next/navigation';
import { CaretDown, CaretUp, CaretLeft, CaretRight, House, Note, Factory, Lightbulb, SignOut, Gear } from '@phosphor-icons/react';
import Link from 'next/link';
import Image from 'next/image';
import logotipo from '@/public/assets/logotipo.svg';
import logotipoPequeno from '@/public/assets/logotipoPequeno.svg';
import companyPlaceholder from '@/public/assets/companyPlaceholder.svg';
import { ThemeSwitcher } from "@/shared/components/ThemeSwitcher";


const animationsConfig = {
    transitionDuration: 'duration-500',
    animation: 'transition-opacity',
    animationAlt: 'transition-all',
};

// Se true, usa botão para abrir/fechar, se false, usa hover
const sidebarConfig = {
    toggleButton: true,
};

const textStyles = {
    menuTitle: {
        fontSize: 'text-[14px]',
        fontWeight: 'font-bold',
        lineHeight: 'leading-[18px]',
        letterSpacing: 'tracking-wide',
    },
    menuItem: {
        fontSize: 'text-[12px]',
        fontWeight: 'font-normal',
        lineHeight: 'leading-[18px]',
        letterSpacing: 'tracking-[0.04em]',
    },
};

type MenuItem = {
    name: string;
    icon?: ElementType;
    link?: string;
    dropdownItems?: MenuItem[];
};

const Sidebar = () => {
    const menuItems: MenuItem[] = [
        {
            name: 'Inicio',
            icon: House,
            link: '/home',
        },
        {
            name: 'Empresa',
            icon: Factory,
            link: '/companies',
        },
        {
            name: 'Oportunidades',
            icon: Lightbulb,
            link: '/opportunities'
        },
        {
            name: 'Minhas aplicações',
            icon: Note,
            link: '/applications',
        },
    ];

    const pathname = usePathname();
    const [openDropdowns, setOpenDropdowns] = useState<{ [key: string]: boolean }>({});
    const [darkMode, setDarkMode] = useState(true);
    const [language, setLanguage] = useState('pt');
    const [languageOpen, setLanguageOpen] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleDropdown = (name: string) => {
        setOpenDropdowns((prev) => ({ ...prev, [name]: !prev[name] }));
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const toggleLanguageDropdown = () => {
        setLanguageOpen(!languageOpen);
    };

    const handleLanguageChange = (lang: string) => {
        setLanguage(lang);
        setLanguageOpen(false);
    };

    const handleMouseEnter = () => {
        if (!sidebarConfig.toggleButton) setSidebarOpen(true);
    };

    const handleMouseLeave = () => {
        if (!sidebarConfig.toggleButton) setSidebarOpen(false);
    };

    const handleSidebarToggle = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="flex h-screen">
            <aside
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`${sidebarOpen ? 'w-64' : 'w-16'} ${animationsConfig.transitionDuration} bg-card text-colorTitle flex flex-col justify-between fixed h-screen`}
            >
                <div className="flex flex-col h-full">
                    <div className="p-4 flex items-center justify-center h-20">
                        {sidebarOpen ? (
                            <Image
                                src={logotipo}
                                alt="Logotipo"
                                width={90}
                                height={40}
                                className={`${animationsConfig.animation} ${animationsConfig.transitionDuration} opacity-100`}
                            />
                        ) : (
                            <Image
                                src={logotipoPequeno}
                                alt="Logotipo Pequeno"
                                width={32}
                                height={40}
                                className={`${animationsConfig.animation} ${animationsConfig.transitionDuration} opacity-100`}
                            />
                        )}
                    </div>
                    <div className="p-4 gap-4 flex items-center h-20">
                        <Image
                            src={companyPlaceholder}
                            alt="Logo da sua companhia"
                            width={48}
                            height={48}
                            className={`${animationsConfig.animationAlt} ${animationsConfig.transitionDuration} ${sidebarOpen ? 'w-12 h-12' : 'w-8 h-8'}`}
                        />
                        {sidebarOpen ? (
                            <span
                                className={`${textStyles.menuTitle.fontSize} ${textStyles.menuTitle.fontWeight} ${textStyles.menuTitle.letterSpacing} transition-opacity duration-500 opacity-100 whitespace-nowrap`}>
                                Sua empresa
                            </span>
                        ) : null}
                    </div>

                    <div className="px-4 flex justify-between items-center">
                        {sidebarOpen ? (
                            <span
                                className={`${textStyles.menuTitle.fontSize} h-5 ${textStyles.menuTitle.fontWeight} uppercase ${textStyles.menuTitle.letterSpacing} ${animationsConfig.animation} ${animationsConfig.transitionDuration} opacity-100`}
                            >
                                Menu
                            </span>
                        ) : (
                            <div
                                className={`${animationsConfig.animation} hover:scale-125  ${animationsConfig.transitionDuration}`}>
                                {sidebarConfig.toggleButton ? (
                                    <button
                                        onClick={handleSidebarToggle}
                                    >
                                        <CaretRight size={24}/>
                                    </button>
                                ) : (
                                    <div className="h-5">
                                    </div>
                                )}
                            </div>
                        )}
                        {sidebarConfig.toggleButton && (
                            <div className={`items-center justify-end ${sidebarOpen ? '' : 'opacity-0'}`}>
                                <button
                                    onClick={handleSidebarToggle}
                                    className={`p-2 ${animationsConfig.animation} hover:scale-125 ${animationsConfig.transitionDuration}`}
                                >
                                    <div className={`items-center`}>
                                        <CaretLeft size={24}/>
                                    </div>
                                </button>
                            </div>
                        )}
                    </div>

                    <nav className="flex-1 overflow-auto">
                        <ul className="space-y-2">
                            {menuItems.map((item, index) => {
                                const isActive = pathname === item.link;

                                return (
                                    <li key={index} className="px-4 py-2">
                                        {item.dropdownItems ? (
                                            <>
                                                <button
                                                    onClick={() => toggleDropdown(item.name)}
                                                    className={`flex justify-between items-center w-full ${textStyles.menuItem.fontSize} ${textStyles.menuItem.lineHeight} ${textStyles.menuItem.letterSpacing} ${textStyles.menuItem.fontWeight} hover:text-primary ${openDropdowns[item.name] ? 'font-bold text-primary' : 'font-normal'}`}
                                                >
                                                    <span className="flex items-center">
                                                        <div className="flex-shrink-0">
                                                            {item.icon && createElement(item.icon, {
                                                                size: 24,
                                                                className: "mr-2 group-hover:text-primary"
                                                            })}
                                                        </div>
                                                        <span
                                                            className={`${animationsConfig.animation} ${animationsConfig.transitionDuration} ${sidebarOpen ? 'opacity-100 break-normal' : 'opacity-0 break-normal'}`}>{item.name}</span>
                                                    </span>
                                                    {sidebarOpen && (openDropdowns[item.name] ? <CaretUp size={24}/> :
                                                        <CaretDown size={24}/>)}
                                                </button>
                                                {sidebarOpen && (
                                                    <div
                                                        className={`${animationsConfig.transitionDuration} overflow-hidden ${openDropdowns[item.name] ? 'max-h-40' : 'max-h-0'}`}
                                                    >
                                                        <ul className="mt-2 ml-4 space-y-2">
                                                            {item.dropdownItems.map((subItem, subIndex) => (
                                                                <li key={subIndex}
                                                                    className={`pl-4 py-1 ${textStyles.menuItem.fontSize} ${textStyles.menuItem.lineHeight} ${textStyles.menuItem.letterSpacing} ${textStyles.menuItem.fontWeight}`}>
                                                                    {subItem.dropdownItems ? (
                                                                        <>
                                                                            <button
                                                                                onClick={() => toggleDropdown(subItem.name)}
                                                                                className={`flex justify-between items-center w-full ${openDropdowns[subItem.name] ? 'font-bold text-primary' : 'font-normal'}`}
                                                                            >
                                                                                <div className="flex-shrink-0">
                                                                                    {subItem.icon && createElement(subItem.icon, {
                                                                                        size: 12,
                                                                                        className: "mr-2 group-hover:text-primary"
                                                                                    })}
                                                                                </div>
                                                                                <span
                                                                                    className={`${animationsConfig.animation} ${animationsConfig.transitionDuration} ${sidebarOpen ? 'opacity-100 break-normal' : 'opacity-0 break-normal'}`}>{subItem.name}</span>
                                                                                {openDropdowns[subItem.name] ?
                                                                                    <CaretUp size={24}/> :
                                                                                    <CaretDown size={24}/>}
                                                                            </button>
                                                                            <div
                                                                                className={`${animationsConfig.transitionDuration} overflow-hidden ${openDropdowns[subItem.name] ? 'max-h-40' : 'max-h-0'}`}
                                                                            >
                                                                                <ul className="mt-2 ml-4 space-y-2">
                                                                                    {subItem.dropdownItems.map((nestedItem, nestedIndex) => (
                                                                                        <li key={nestedIndex}
                                                                                            className={`pl-4 py-1 ${textStyles.menuItem.fontSize} ${textStyles.menuItem.lineHeight} ${textStyles.menuItem.letterSpacing} ${textStyles.menuItem.fontWeight}`}>
                                                                                            <Link
                                                                                                href={nestedItem.link || '#'}
                                                                                                className="hover:text-primary flex items-center">
                                                                                                <div
                                                                                                    className="flex-shrink-0">
                                                                                                    {nestedItem.icon && createElement(nestedItem.icon, {
                                                                                                        size: 12,
                                                                                                        className: "mr-2 group-hover:text-primary"
                                                                                                    })}
                                                                                                </div>
                                                                                                <span
                                                                                                    className={`${animationsConfig.animation} ${animationsConfig.transitionDuration} ${sidebarOpen ? 'opacity-100 break-normal' : 'opacity-0 break-normal'}`}>{nestedItem.name}</span>
                                                                                            </Link>
                                                                                        </li>
                                                                                    ))}
                                                                                </ul>
                                                                            </div>
                                                                        </>
                                                                    ) : (
                                                                        <Link href={subItem.link || '#'}
                                                                              className="hover:text-primary flex items-center">
                                                                            <div className="flex-shrink-0">
                                                                                {subItem.icon && createElement(subItem.icon, {
                                                                                    size: 24,
                                                                                    className: "mr-2 group-hover:text-primary"
                                                                                })}
                                                                            </div>
                                                                            <span
                                                                                className={`${animationsConfig.animation} ${animationsConfig.transitionDuration} ${sidebarOpen ? 'opacity-100 break-normal' : 'opacity-0 break-normal'}`}>{subItem.name}</span>
                                                                        </Link>
                                                                    )}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}
                                            </>
                                        ) : (
                                            <Link
                                                href={item.link || '#'}
                                                className={`hover:text-primary flex items-center group ${textStyles.menuItem.fontSize} ${textStyles.menuItem.lineHeight} ${textStyles.menuItem.letterSpacing} ${isActive ? 'font-bold text-primary' : textStyles.menuItem.fontWeight}`}
                                            >
                                                <div className="flex-shrink-0">
                                                    {item.icon && createElement(item.icon, {
                                                        size: 24,
                                                        className: "mr-2 group-hover:text-primary"
                                                    })}
                                                </div>
                                                <div className="overflow-hidden">
                                                    <span
                                                        className={`whitespace-nowrap ${animationsConfig.animation} ${animationsConfig.transitionDuration} ${sidebarOpen ? 'opacity-100 break-normal' : 'opacity-0 break-normal'} ${isActive ? 'font-bold' : ''}`}>{item.name}</span>
                                                </div>
                                            </Link>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </div>
                <div className="p-3 flex flex-col gap-4">
                    {sidebarOpen ? (
                        <>
                            <div
                                className={`${textStyles.menuItem.fontSize} font-semibold mb-2 text-left ${textStyles.menuItem.lineHeight} ${textStyles.menuItem.letterSpacing} transition-opacity duration-300 opacity-100`}>CONFIGURAÇÕES
                            </div>
                            <div className="flex items-center p-2 justify-between mb-4">
                                <span
                                    className={`${textStyles.menuItem.fontSize} whitespace-nowrap ${textStyles.menuItem.lineHeight} ${textStyles.menuItem.letterSpacing} ${animationsConfig.animation} ${animationsConfig.transitionDuration} ${sidebarOpen ? 'opacity-100' : ' opacity-0'}`}>Modo escuro</span>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <ThemeSwitcher/>
                                </label>
                            </div>
                            <div className="relative mb-4">
                                <button
                                    onClick={toggleLanguageDropdown}
                                    className={`appearance-none bg-transparent text-colorTitle p-2 rounded w-full flex justify-between items-center focus:outline-none focus:ring-0 focus:border-none ${textStyles.menuItem.fontSize} ${textStyles.menuItem.lineHeight} ${textStyles.menuItem.letterSpacing}`}
                                >
                                    <span>{language.toUpperCase()}</span>
                                    <CaretDown size={24} className="text-colorTitle"/>
                                </button>
                                <div
                                    className={`absolute top-full left-0 w-full bg-transparent opacity-95 text-colorTitle rounded mt-2 transition-all duration-300 ${languageOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                                    style={{overflow: 'hidden', zIndex: 10}}
                                >
                                    <ul className="space-y-2 py-2 px-4">
                                        <li onClick={() => handleLanguageChange('pt')}
                                            className={`cursor-pointer hover:text-primary ${textStyles.menuItem.fontSize} ${textStyles.menuItem.lineHeight} ${textStyles.menuItem.letterSpacing}`}>PT
                                        </li>
                                        <li onClick={() => handleLanguageChange('en')}
                                            className={`cursor-pointer hover:text-primary ${textStyles.menuItem.fontSize} ${textStyles.menuItem.lineHeight} ${textStyles.menuItem.letterSpacing}`}>EN
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <button
                                className={`w-full py-2 px-4 bg-error hover:bg-red-700 text-colorTitle rounded-lg flex items-center justify-center transition-transform duration-300 hover:scale-105 ${textStyles.menuItem.fontSize} ${textStyles.menuItem.lineHeight} ${textStyles.menuItem.letterSpacing}`}
                                style={{ width: '200px', height: '40px', padding: '12px 16px', gap: '16px' }}
                            >
                                <span
                                    className={`transition-opacity duration-300 ${sidebarOpen ? 'opacity-100' : 'opacity-0'}`}>Sair</span>
                                <SignOut size={24} className="ml-2" />
                            </button>
                        </>
                    ) : (
                        <div className={`flex items-center justify-center h-[56px]`}>
                            <Link href="/settings">
                                <Gear size={32} className="text-colorTitle cursor-pointer" />
                            </Link>
                        </div>
                    )}
                </div>
            </aside>
            <main className={`flex-1 ${sidebarOpen ? 'ml-64' : 'ml-16'} transition-all duration-500`}>

            </main>
        </div>
    );
};

export default Sidebar;
