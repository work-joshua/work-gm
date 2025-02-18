
import Image from 'next/image';
import styles from './styles/header.module.scss';
import { icons } from '../../assets/icons';


export function Header() {

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
                </div>
            </div>
        </>
    );
}
