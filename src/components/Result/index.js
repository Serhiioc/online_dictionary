import styles from "./Result.module.css";

function Result({progress, onRefresh}) {
    const result = progress * 10;
    let message = '';
    switch (true) {
        case progress < 5:
            message = 'Треба ще повчити'
            break;
        case progress < 7:
            message = 'Не погано'
            break;
        case progress <= 10:
            message = 'Все супер'
            break;
    
        default:
            message = ''
            break;
    }
    return ( 
            <div className= {styles.result}>
                <p>{message} <br/>Ваш результат - {result}%</p>
                <button className= {styles.refresh} onClick={() => onRefresh()}>Повторити знову</button>
            </div>
     );
}

export default Result;