import styles from './Words.module.css';

function Words ({eng, ukr}) {
    return ( 
        <li className = {styles.item} >
            <span className = {styles.word} >{eng}</span> - <span className = {styles.word} >{ukr}</span>
        </li>
     );
}

export default Words ;