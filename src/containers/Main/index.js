import styles from "./Main.module.css";
import { Component } from "react";
import Words from "../../components/Words";
import { connect } from "react-redux";





class Main extends Component {
   
    render() { 
        const { arrWords } = this.props;
        
            return (<ul  className={styles.list} >
                { arrWords.map((elem) => <Words key={elem.eng} eng= {elem.eng} ukr= {elem.ukr} />)}
                </ul> 
            )
    }
}
 

const mapState = state => {
    return {
        arrWords: state.words
    }
}



export default connect(mapState)(Main);