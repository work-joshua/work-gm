
'use client'

import Image from 'next/image';
import { usePathname } from "next/navigation";
import { useState, useEffect } from 'react';
import styles from './header.module.scss';
import { icons } from '@/app/assets/icons';


function FindCurrentPage() {

    const pathname = usePathname().replace(/^\/+/, ""); // Get the pathname

    switch (true) {
        case pathname.startsWith('works'):
            return 'works'
        case pathname.startsWith('about'):
            return 'about'
        case pathname.startsWith('booking'):
            return 'booking'
        default:
            return 'home'
    }
}

export const Menu = ({  }) => {
    const [isOpen, setIsOpen] = useState(false);

    const thisPage = FindCurrentPage()

    useEffect(() => {
            document.body.style.overflow = 'hidden'; // Disable scrolling
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className={styles.header}>
                <div className={styles.header_one}>
                    <a href="/" title="GM Concept and Creativity">
                        <Image
                            src={'/icons/gm.png'}
                            alt={'GM Logo'}
                            width={60}
                            height={40}
                        />
                    </a>
                </div>
                <div className={styles.header_two}>
                    <a href="/works" title="Projects we have worked on">
                        <button className={`${thisPage=='works' ? styles.menu_active : ''}`}>WORKS</button>
                    </a>
                    <a href="#" title="About GM">
                        <button className={`${thisPage=='about' ? styles.menu_active : ''}`}>ABOUT</button>
                    </a>
                    <a href="#" title="Schedule a session">
                        <button className={`${thisPage=='booking' ? styles.menu_active : ''}`}>BOOKING</button>
                    </a>
                </div>
                <div className={styles.header_three}>
                    <a href="#" title="Open Bag">
                        <button>{ icons.bag }</button>
                    </a>
                    <a href="#" title="Open Bag">
                        <button className={styles.mobile} onClick={toggleMenu}>{ icons.menu }</button>
                    </a>
                </div>
            </div>
            <div className={styles.header_under}>

            </div>
            {
                // isOpen &&
                <div className={`${styles.header_menu_mobile} ${isOpen ? styles.slideDown : ''}`}>
                    <button onClick={toggleMenu} className={`${styles.header_menu_close_mobile} ${isOpen ? styles.visible : ''}`}>
                        {
                            icons.close
                        }
                    </button>
                    <div className={`${styles.header_menu_list_mobile} ${isOpen ? styles.visible : ''}`}>
                        <a href="/works">
                            <p className={`${thisPage=='works' ? styles.menu_mobile_active : ''}`}>Works</p>
                        </a>
                        <a href="#">
                            <p className={`${thisPage=='about' ? styles.menu_mobile_active : ''}`}>About</p>
                        </a>
                        <a href="#">
                            <p className={`${thisPage=='booking' ? styles.menu_mobile_active : ''}`}>Booking</p>
                        </a>
                    </div>
                </div>
            }
        </>
    );
};
