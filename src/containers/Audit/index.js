import styles from './Audit.module.css';
import { Component } from "react";
import { connect } from "react-redux";
import Buttons from '../../components/Buttons';
import Result from '../../components/Result';
import Question from '../../components/Question';



class Audit extends Component {

    state = {
        auditArr: [],
        answerArr: [],
        index: 0,
        progress: 0,
    }

    componentDidMount = () => {
        this.onRefreshAudit(0)
    }

    componentDidUpdate = () => {
        return !(this.state.index === this.state.auditArr.length)
    }

    randomNum = (num) => Math.round(Math.random() * num);

    createWordsArrayForAudit = (array, count) => {
        let result = [];
        for (let i = 0; i < count; ) {
            const index = this.randomNum((array.length - 1));
            if (!result.includes(array[index])) {
                result.push(array[index]);
                i++
            }
        }
        return result;
    }

    createAnswerArray = (array, num = 0) => {
        const answerArr = this.createWordsArrayForAudit(array, 4);
        if (!answerArr.includes(array[(this.state.index + num)])) {
            const count = this.randomNum(answerArr.length-1);
            answerArr[count] = array[(this.state.index + num)];
        }
        return answerArr;
    }
    
    handleClick = (e) => {
        if(e.target.tagName === 'BUTTON') {
            this.updateButtons();
        }
        this.checkedAnswer(e)
        
     }

    checkedAnswer = (e) => {
        if(this.state.auditArr[this.state.index].eng === e.target.dataset.id) {
            this.setState({
                progress: this.state.progress + 1
            })
        }
    }


    updateButtons = () => {
        this.setState(
            {
                index: this.state.index+1,
                answerArr: this.createAnswerArray(this.state.auditArr, 1),
            }
        )
    }

    onRefreshAudit = (num) => {
        const { arrWords } = this.props;
        const result = this.createWordsArrayForAudit(arrWords, 10);
        this.setState({
            auditArr: result,
            answerArr: this.createAnswerArray(result, num),
            index: 0,
            progress: 0,
        })
    }

    render() { 
        if (!this.state.auditArr[0]) {
            return 
        }

        return (
            <div className= {styles.audit__wrapper}> 
                {this.state.index < (this.state.auditArr.length)
                    ?<> 
                        <Question title={this.state.auditArr[this.state.index].eng}/>
                        <Buttons answerArr={this.state.answerArr} handleClick = {this.handleClick}/>
                     </>
                    :<Result progress = {this.state.progress} onRefresh = {this.onRefreshAudit} />
                }
            </div>
        );
    }
}


const mapState = state => {
    return {
        arrWords: state.words
    }
}



export default connect(mapState)(Audit);
 
