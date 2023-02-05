import styles from "./Result.module.css";

function Result({progress}) {
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
            <div className= {styles.result}><p>{message}</p> Ваш результат - {result}%</div>
     );
}

export default Result;