import { connect } from 'react-redux';
import Select from '../components/Select';
import { addAnswerAction } from '../actions/answerActions';


const mapStateToProps = state => ({
    currentChoices: state.choices.currentChoices,
    currentQuestion: state.questions.currentQuestion,
});

const mapDispatchToProps = {
    addAnswer: addAnswerAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Select);
