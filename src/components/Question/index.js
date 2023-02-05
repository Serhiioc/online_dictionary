import styles from './Question.module.css';

function Question({title}) {
    return ( 
        <p className= {styles.question}> {title}</p>
     );
}

export default Question;