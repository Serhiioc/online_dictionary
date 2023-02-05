import styles from './AddedNewWords.module.css';
import { Component } from "react";
import { connect } from "react-redux";
import { add } from "../../store/word.action";


class AddedWords extends Component {
    
    state = { 
        engWord : '',
        ukrWord : ''
    }

    handleChangeEng = e => {
        this.setState({engWord: e.target.value.trim()})
    };

    handleChangeUkr = e => {
        this.setState({ukrWord: e.target.value.trim()})
    };

    handleClick = (e) => {
        e.preventDefault();
        const newWords = {
            eng: this.state.engWord,
            ukr: this.state.ukrWord
        }
        if(this.state.engWord && this.state.ukrWord) {
            this.props.addWords(newWords)
            this.setState({
                engWord: '',
                ukrWord: ''
        })
        }
    }


    render() { 
        return (  
            <form className={styles.form}>
                <input className={styles.input} type = "text" title = 'please input english word' placeholder= 'please input english word' value={this.state.ukrWord} onChange = {this.handleChangeUkr} />
                <input className={styles.input} type = "text" title = 'please input translate' placeholder= 'please input translate' value={this.state.engWord}  onChange = {this.handleChangeEng} />
                <button className={styles.submit} type="submit" onClick={ this.handleClick}>Додати</button>
            </form> 
        );
    }
}

const mapState = state => {
    return {
        arrWords: state.words
    }
}

const mapDispatch = {
    addWords: add,
}



export default connect(mapState, mapDispatch)(AddedWords);