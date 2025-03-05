
'use client'

import styles from './styles/home.module.scss';
import Image from 'next/image';
import { useState } from 'react';
import { icons } from '../../assets/icons';



export default function Home() {

    const images = [
        "/stock/frame.jpg",
        "/stock/events/1.jpg",
        "/stock/studio/1.jpg",
        "/stock/frame/1.jpg",
        "/stock/wedding/1.jpg",
        "/stock/events/2.jpg",
        "/stock/studio/2.jpg",
        "/stock/frame/2.jpg",
        "/stock/wedding/2.jpg",
        "/stock/events/3.jpg",
        "/stock/studio/3.jpg",
        "/stock/frame/3.jpg",
        "/stock/wedding/3.jpg",
        "/stock/events/4.jpg",
        "/stock/studio/4.jpg",
        "/stock/frame/4.jpg",
        "/stock/wedding/4.jpg",
    ];

    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(false);

    const changeImage = (direction) => {
        setFade(true);
        setTimeout(() => {
            setIndex((prevIndex) => {
                if (direction === "next") {
                    return (prevIndex + 1) % images.length;
                } else {
                    return (prevIndex - 1 + images.length) % images.length;
                }
            });
        }, 300);
    };

    return (
        <>
            <div className={styles.home_gallery}>
                <div className={`${styles.photos} ${fade ? styles.fade : ''}`}>
                    <Image
                        alt="Gallery Image"
                        src={images[index]}
                        fill={true}
                        quality={90}
                        loading="lazy"
                        styles={{
                            objectFit: 'contain',
                            objectPosition: 'center',
                        }}
                        onLoad={(e) => setFade(false)}
                    />
                </div>
                <div className={styles.actions}>
                    <button onClick={() => changeImage("prev")}>
                        {
                            icons.arrow_left
                        }
                    </button>
                    <p>QUALITY</p>
                    <button onClick={() => changeImage("next")}>
                        {
                            icons.arrow_right
                        }
                    </button>
                </div>
            </div>
        </>
    )
}