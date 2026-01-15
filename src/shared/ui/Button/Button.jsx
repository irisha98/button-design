import { Ellipsis } from "lucide-react";
import { getStyle } from "../../lib/getStyle/getStyle";
import styles from './Button.module.scss';

export const Button = (props) => {
    const {
        children,
        className,
        color = 'primary',
        circle,
        cta,
        loading, 
        ...otherProps
    } = props;

    const mode = {
        [styles.circle]: circle,
        [styles.cta]: cta,
        [styles.loading]: loading,
    }

    const additional = [
        styles[color],
        className,
    ]

    return (
        <button 
        className={getStyle(styles.button, mode, additional)}
        {...otherProps}
        >
            {loading ? <Ellipsis className={styles.loader} /> : children}
            {!cta && <div className={styles.underLine} />}
        </button>
    )
}