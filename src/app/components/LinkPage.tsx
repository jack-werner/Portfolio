import { LinkCard } from "./LinkCard";
import styles from "./styles/link-page.module.css";

export const LinkPage = () => {
    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <LinkCard text="Software" link=""/>
                <LinkCard text="Blog" link=""/>
                <LinkCard text="Music" link="https://soundcloud.com/jack-wolfgang-music"/>
                <LinkCard text="Art" link=""/>
            </div>
        </div>
    )
}