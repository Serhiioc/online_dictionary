import styles from "./Result.module.css";

function Result({progress}) {
    const result = progress * 10;
    return ( 
            <div className= {styles.result}>{result}%</div>
     );
}

export default Result;