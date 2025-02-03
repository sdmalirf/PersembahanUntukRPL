import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation';
import Rounded from '../../common/RoundedButton';

export default function IndexComponent() {
    const phrase = "Saya ingin masuk RPL, karena menjadi Software Engineering adalah jalan ninjaku🥷";
    const description = useRef(null);
    const isInView = useInView(description)
    return (
        <div ref={description} className={styles.description}>
            <div className={styles.body}>
                <p>
                {
                    phrase.split(" ").map( (word, index) => {
                        return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                    })
                }
                </p>
                <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>Semoga saya diterima di RPL ini, belejar bersama para sepuh dan jalan ninja saya untuk menjadi seorang Fullstack Website + Project Manager bisa tercapai!</motion.p>
                <div data-scroll data-scroll-speed={0.1}>
                    <Rounded className={`${styles.button}`}>
                        <p>Plis Terima <br/> Aku RPL🥹</p>
                    </Rounded>
                </div>
            </div>
        </div>
    )
}
