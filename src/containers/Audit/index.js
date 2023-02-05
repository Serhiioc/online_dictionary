import styles from './Audit.module.css';
import { Component } from "react";
import { connect } from "react-redux";
import Buttons from '../../components/Buttons';
import Result from '../../components/Result';
import Question from '../../components/Question';



class Audit extends Component {

    state = { 
        index: 0,
        auditArr: [],
        answerArr: [],
        progress: 0,
        }
    
    randomNum = (num) => Math.round(Math.random() * num);
     

    selectedAnswers = (array, num = 0) => {
        const answerArr = this.selectedWordForAudit(array, 4);
        if (!answerArr.includes(array[(this.state.index + num)])) {
            const count = this.randomNum(answerArr.length-1);
            answerArr[count] = array[(this.state.index + num)];
        }
        return answerArr;
     }

    selectedWordForAudit = (array, count) => {
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

    componentDidMount = () => {
        const { arrWords } = this.props;
        const result = this.selectedWordForAudit(arrWords, 6);
        const answerArr = this.selectedAnswers(result);

        this.setState({
            auditArr: result,
            answerArr: answerArr
        })
        
        console.log(this.state);
    }
    
    handleClick = (e) => {
        console.log('click');
        if(e.target.tagName === 'BUTTON' && this.state.index < (this.state.auditArr.length-1)) {
            this.updateButtons();
        } else {
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
                index:this.state.index+1,
                answerArr: this.selectedAnswers(this.state.auditArr, 1),
            }
        )
    }

    render() { 
        const audit = this.state.auditArr[0] && 
            <> 
                <Question title={this.state.auditArr[this.state.index].eng}/>
                <Buttons answerArr={this.state.answerArr} handleClick = {this.handleClick}/>
            </>
        
        return (
            <div className= {styles.audit__wrapper}> 
                {this.state.index < (this.state.auditArr.length-1)
                    ?audit
                    :<Result progress = {this.state.progress}/>
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
 
