import styles from './Buttons.module.css';

function Buttons({answerArr, handleClick}) {

    const buttons = answerArr.map(elem => <button key = {elem.eng}className={styles.button} data-id= {elem.eng}> {elem.ukr}</button>);
    return ( 
        <div className = {styles.wrapper} onClick = { handleClick}>
                    {buttons}
        </div>
     );
}

export default Buttons;