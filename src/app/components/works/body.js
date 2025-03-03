
"use client"

import Image from 'next/image';
import styles from './body.module.scss';
import { icons } from '@/app/assets/icons';


export function StudioWorks() {

    return (
        <>
            <div className={styles.studioworks_grid}>
                <div className={styles.studioworks_canvas}>
                    <Image
                        src={'/stock/studio/1.jpg'}
                        alt={'GM Logo'}
                        fill={true}
                        loading='eager'
                        style={{
                            objectFit: 'cover',
                            objectPosition: 'center center',
                        }}
                    />
                </div>
                <div className={styles.studioworks_canvas}>
                    <Image
                        src={'/stock/studio/2.jpg'}
                        alt={'GM Logo'}
                        fill={true}
                        loading='eager'
                        style={{
                            objectFit: 'cover',
                            objectPosition: 'center center',
                        }}
                    />
                </div>
                <div className={styles.studioworks_canvas}>
                    <Image
                        src={'/stock/studio/3.jpg'}
                        alt={'GM Logo'}
                        fill={true}
                        loading='eager'
                        style={{
                            objectFit: 'cover',
                            objectPosition: 'center center',
                        }}
                    />
                </div>
                <div className={styles.studioworks_canvas}>
                    <Image
                        src={'/stock/studio/4.jpg'}
                        alt={'GM Logo'}
                        fill={true}
                        loading='eager'
                        style={{
                            objectFit: 'cover',
                            objectPosition: 'center center',
                        }}
                    />
                </div>
                <div className={styles.studioworks_canvas}>
                    <Image
                        src={'/stock/studio/5.jpg'}
                        alt={'GM Logo'}
                        fill={true}
                        loading='eager'
                        style={{
                            objectFit: 'cover',
                            objectPosition: 'center center',
                        }}
                    />
                </div>
                <div className={styles.studioworks_canvas}>
                    <Image
                        src={'/stock/studio/6.jpg'}
                        alt={'GM Logo'}
                        fill={true}
                        loading='eager'
                        style={{
                            objectFit: 'cover',
                            objectPosition: 'center center',
                        }}
                    />
                </div>
            </div>
        </>
    )
}

export function WorkTab({ thisWork='Works', thisLink='/works', currentWork='' }) {

    return (
        <div className={styles.works_tab}>
            <a href={ thisLink }>
                <span>{ thisWork }</span>
                <span>{ icons.chevron_right }</span>
            </a>
            <span>{ currentWork }</span>
        </div>
    )
}