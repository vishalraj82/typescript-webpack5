import { createRoot } from 'react-dom/client';
import { useEffect, useState } from 'react';
import { pad } from './utils';
import { ClockProps } from './types';
import styles from './styles.sass';

const Clock = (props: ClockProps) => {
    const [hours, setHours] = useState(props.hours);
    const [minutes, setMinutes] = useState(props.minutes);
    const [seconds, setSeconds ] = useState(props.seconds);

    useEffect(() => {
        const handler = setTimeout(() => {
            setSeconds(seconds < 59 ? seconds + 1: 0);

            if (seconds === 59) {
                setMinutes(minutes < 59 ? minutes + 1 : 0);
            }

            if (minutes === 59) {
                setHours(hours < 23 ? hours + 1 : 0);
            }
        }, 1000);

        return () => clearTimeout(handler);
    });

    return (
        <h1 className={styles.clock}>
            <span className={styles.hours}>{pad(hours)}</span>:
            <span className={styles.minutes}>{pad(minutes)}</span>:
            <span className={styles.seconds}>{pad(seconds)}</span>
        </h1>
    );
};

const rootDiv = document.getElementById('root');
if (rootDiv) {
    const now = new Date();
    createRoot(rootDiv).render(
        <Clock
            hours={now.getHours()}
            minutes={now.getMinutes()}
            seconds={now.getSeconds()}
        />
    );
}
