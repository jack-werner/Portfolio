import React, {ReactNode} from "react";
import styles from './styles/text-card.module.css'

interface TextCardProps {
    title: string;
    children: ReactNode;
}

export const TextCard: React.FC<TextCardProps> = ({title, children}) => {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                {title}
            </div>
            <div className={styles.body}>
                {children}
            </div>
        </div>
    )  
}