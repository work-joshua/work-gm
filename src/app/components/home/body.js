
import Image from 'next/image';
import styles from './styles/body.module.scss';
import { icons } from '../../assets/icons';

function Jumbotron() {

    return (
        <>
            <div className={styles.jumbotron}>
                <div className={styles.jumbotron_image}>
                    <Image 
                        src={'/stock/neon.jpg'}
                        alt={'Image from Unsplash.com'}
                        fill={true}
                        priority={true}
                        // placeholder='blur'
                        loading='eager'
                    />
                </div>
                <div className={styles.jumbotron_text}>
                    <h1>Quality</h1>
                    <p>GM Concept is a multidisplinary studio for all things photography and its relevant services.</p>
                    <a href="#">
                        <button><span>Learn more</span> <span>{ icons.chevron_right }</span></button>
                    </a>
                </div>
            </div>
        </>
    )
}

function Canvas() {

    return (
        <>
            <div className={styles.canvas}>
                <div className={styles.canvas_image_cover}>
                    <Image 
                        src={'/stock/frame.jpg'}
                        alt={'frames'}
                        width={300}
                        height={400}
                    />
                </div>
                <div className={styles.canvas_text_cover}>
                    <div>
                        <h1>Frames</h1>
                        <p>Create beautiful and classic frams for your pictures.</p>
                        <a href="#">
                            <button><span>Shop Frames</span><span>{ icons.chevron_right }</span></button>
                        </a>
                    </div>
                </div>
            </div>

            <div className={styles.canvas}>
                <div className={styles.canvas_image_cover}>
                    <Image 
                        src={'/stock/caleb.jpg'}
                        alt={'studio shoot'}
                        width={300}
                        height={400}
                    />
                </div>
                <div className={styles.canvas_text_cover}>
                    <div className={styles.order_rightt}>
                        <h1>Studio Shoot</h1>
                        <p>Leverage on our best-in-class materials for unrealistic photos.</p>
                        <a href="#">
                            <button><span>Book a session</span><span>{ icons.chevron_right }</span></button>
                        </a>
                    </div>
                </div>
            </div>

            <div className={styles.canvas}>
                <div className={styles.canvas_image_cover}>
                    <Image 
                        src={'/stock/jeo.jpg'}
                        alt={'weddings'}
                        fill={true}
                        priority={true}
                        loading='eager'
                        styles={{
                            borderRadius: '10px 0 0 10px'
                        }}
                    />
                </div>
                <div className={styles.canvas_text_cover}>
                    <div>
                        <h1>Weddings</h1>
                        <p>A picture is worth a thousand words. Let's help you capture that special moment.</p>
                        <a href="#">
                            <button><span>Fix a date</span><span>{ icons.chevron_right }</span></button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default function Body() {

    return (
        <>
            <Jumbotron />
            <Canvas />
        </>
    )
}