import { useReducer } from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const questionsFromPairs = (pairs) => {
  return pairs.reduce((acc, cur, _idx, arr) => {
    const word = cur[0];
    const actual = cur[1];
    const answers = _.shuffle([
      ..._.sampleSize(_.without(_.unzip(arr)[1], actual), 3),
      actual,
    ]);
    const checked = null;

    return [...acc, { word, actual, answers, checked }];
  }, []);
};

const init = (pairs) => ({
  position: 0,
  questions: questionsFromPairs(pairs),
});

const checkQuestions = (questions, value, position) => {
  return questions.map((question, index) => {
    if (position !== index) return question;
    return {
      ...question,
      checked: value,
    };
  });
};

const reducer = (state, action) => {
  switch (action.type) {
    case "check":
      return {
        ...state,
        questions: checkQuestions(
          state.questions,
          action.value,
          state.position
        ),
        position: state.position + 1,
      };

    case "reset":
      return init(action.value);
    default:
      throw new Error();
  }
};

const Rehearsal = ({ render, pairs }) => {
  const [state, dispatch] = useReducer(reducer, init(pairs));

  const handleChoice = (answer) =>
    dispatch({
      type: "check",
      value: answer,
    });

  const handleReset = () => dispatch({ type: "reset", value: pairs });

  return render(state.position, state.questions, handleChoice, handleReset);
};

Rehearsal.propTypes = {
  render: PropTypes.func.isRequired,
  pairs: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export default Rehearsal;
