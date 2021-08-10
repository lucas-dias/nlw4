import styles from '../styles/components/Profile.module.css';

export function Profile(){
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/lucas-dias.png" alt="Eu" />
            <div>
                <strong>Lucas Dias</strong>
                <p>
                    <img src="icons/Up.svg" alt="Level" />
                    Level 1</p>
            </div>
        </div>
    );
}