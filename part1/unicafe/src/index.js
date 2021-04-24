import React, { useState } from "react";
import ReactDOM from "react-dom";

const Statistic = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  average,
  positivePercentage,
}) => {
  return (
    <table>
      <tbody>
        <Statistic text="GOOD:" value={good} />
        <Statistic text="NEUTRAL:" value={neutral} />
        <Statistic text="BAD:" value={bad} />
        <Statistic text="TOTAL:" value={total} />
        <Statistic text="AVERAGE SCORE:" value={average} />
        <Statistic text="POSITIVE PERCENTAGE:" value={positivePercentage} />
      </tbody>
    </table>
  );
};

const Message = ({ text }) => <p>{text}</p>;

const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>;

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClickGood = () => {
    setGood(good + 1);
  };

  const handleClickNeutral = () => {
    setNeutral(neutral + 1);
  };

  const handleClickBad = () => {
    setBad(bad + 1);
  };

  const total = () => good + bad + neutral;

  const average = () => (good + bad * -1) / total();

  const positivePercentage = () => `${(good / total()) * 100} %`;

  return (
    <div>
      <h2>FEEDBACK</h2>
      <Button text="GOOD" onClick={handleClickGood} />
      <Button text="NEUTRAL" onClick={handleClickNeutral} />
      <Button text="BAD" onClick={handleClickBad} />
      <h2>STATICS</h2>
      {!good & !bad & !neutral ? (
        <Message text="NO FEED GIVEN" />
      ) : (
        <Statistics
          good={good}
          bad={bad}
          neutral={neutral}
          total={total()}
          average={average()}
          positivePercentage={positivePercentage()}
        />
      )}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
