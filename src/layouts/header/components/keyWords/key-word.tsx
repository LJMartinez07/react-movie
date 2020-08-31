import React, { FC } from 'react';
import styles from './key-word.module.scss';

interface suggestion {
    id: number;
    name: string;
}
interface KeyWordsProps {
    suggestions: suggestion[];
}
export const KeyWordsComponent: FC<KeyWordsProps> = (props) => {
    return (
        <div className={styles.key_word}>
            <ul className={styles.list_suggestions}>
                {props.suggestions.map((suggestion) => (
                    <li className={styles.list_item}>{suggestion.name}</li>
                ))}
            </ul>
        </div>
    );
};
