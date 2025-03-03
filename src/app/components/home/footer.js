
import { icons } from '@/app/assets/icons';
import styles from './styles/footer.module.scss';


export function Footer() {

    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.footer_list_cover}>
                    <div className={styles.footer_lists_item}>
                        <p>Product</p>
                        <section>
                            <span>Product</span>
                            <button>
                                {
                                    icons.chevron_down
                                }
                            </button>
                        </section>
                        <ul>
                            <li>
                                <a href="#">Frames</a>
                            </li>
                            <li>
                                <a href="#">Studio Shoot</a>
                            </li>
                            <li>
                                <a href="#">Events</a>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.footer_lists_item}>
                        <p>About GM</p>
                        <section>
                            <span>About GM</span>
                            <button>
                                {
                                    icons.chevron_down
                                }
                            </button>
                        </section>
                        <ul>
                            <li>
                                <a href="#">Our Story</a>
                            </li>
                            <li>
                                <a href="#">Leadership</a>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.footer_lists_item}>
                        <p>Contact</p>
                        <section>
                            <span>Contact</span>
                            <button>
                                {
                                    icons.chevron_down
                                }
                            </button>
                        </section>
                        <ul>
                            <li>
                                112, Lorem Ipsum Street, Lagos
                            </li>
                            <li>
                                <a href="tell:08036464149">08036464149</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.footer_socials}>
                    <a href="#">
                        <p>
                            {
                                icons.social.facebook
                            }
                        </p>
                    </a>
                    <a href="#">
                        <p>
                            {
                                icons.social.twitter
                            }
                        </p>
                    </a>
                    <a href="#">
                        <p>
                            {
                                icons.social.instagram
                            }
                        </p>
                    </a>
                </div>
                <p>Copyright 2025, GM Creative Concept</p>
            </footer>
        </>
    )
}