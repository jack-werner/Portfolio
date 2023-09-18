import { LinkCard } from "./LinkCard";
import styles from "./styles/link-page.module.css";

export const LinkPage = () => {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <LinkCard text="Software" link="https://github.com/jack-werner" />
        <LinkCard text="Blog" link="https://jackwerner.substack.com" />
        <LinkCard
          text="Music"
          link="https://soundcloud.com/jack-wolfgang-music"
        />
        <LinkCard
          text="Art"
          link="https://www.flickr.com/photos/198848904@N05"
        />
      </div>
    </div>
  );
};
