import React, { FC } from 'react';
import styles from './key-word.module.scss'

export const KeyWordsComponent: FC = (props) => {
    return <div className={styles.key_word}>
        <ul className={styles.list_suggestions}>
            <li className={styles.list_item} >Hola</li>
            <li>Hola</li>
            <li>Hola</li>
            <li>Hola</li>
            <li>Hola</li>
        </ul>
    </div>;
};
