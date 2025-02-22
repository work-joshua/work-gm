
'use client'

import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from './styles/header.module.scss';
import { icons } from '@/app/assets/icons';

export const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);


    useEffect(() => {
        // if(isOpen) {
            document.body.style.overflow = 'hidden'; // Disable scrolling
        // } else {
        //     document.body.style.overflow = '';
        // }
        
    
        // Cleanup function to reset scrolling when the component unmounts
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
                    <a href="#" title="GM Concept and Creativity">
                        <Image
                            src={'/icons/gm.png'}
                            alt={'GM Logo'}
                            width={60}
                            height={40}
                        />
                    </a>
                </div>
                <div className={styles.header_two}>
                    <a href="#" title="Projects we have worked on">
                        <button>Works</button>
                    </a>
                    <a href="#" title="See product pricing">
                        <button>Pricing</button>
                    </a>
                    <a href="#" title="About GM">
                        <button>About</button>
                    </a>
                    <a href="#" title="Schedule a session">
                        <button>Booking</button>
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
            {
                // isOpen &&
                <div className={`${styles.header_menu_mobile} ${isOpen ? styles.slideDown : ''}`}>
                    <button onClick={toggleMenu} className={`${styles.header_menu_close_mobile} ${isOpen ? styles.visible : ''}`}>
                        {
                            icons.close
                        }
                    </button>
                    <div className={`${styles.header_menu_list_mobile} ${isOpen ? styles.visible : ''}`}>
                        <a href="#">
                            <p>Works</p>
                        </a>
                        <a href="#">
                            <p>Pricing</p>
                        </a>
                        <a href="#">
                            <p>About</p>
                        </a>
                        <a href="#">
                            <p>Booking</p>
                        </a>
                    </div>
                </div>
            }
        </>
    );
};
