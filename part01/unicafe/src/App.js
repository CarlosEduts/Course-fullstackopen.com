import FeedbackButton from "./components/FeedbackButton";
import { useState } from "react";
import StatisticLine from "./components/StatisticLine";

const Statistics = ({ good, neutral, bad, sumAll }) => {
  return (
    <div>
      
      <h1>statistics</h1>
      <table>
        <tbody>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <tr>
        <td>
          <h3>all </h3>
        </td>
        <td>
          <h3>{sumAll}</h3>
        </td>
      </tr>
      </tbody>
      </table>
      <h3>average {sumAll / 3}</h3>
      <h3>positive {(good / sumAll) * 100}%</h3>
    </div>
  );
};

const App = () => {
  // salve os cliques de cada botão em seu próprio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const sumAll = good + neutral + bad;

  const goodScoring = () => {
    setGood(good + 1);
    console.log(good);
  };

  const neutralScoring = () => {
    setNeutral(neutral + 1);
    console.log(neutral);
  };

  const badScoring = () => {
    setBad(bad + 1);
    console.log(bad);
  };

  return (
    <div>
      <h1>give feedback</h1>

      <FeedbackButton onClick={goodScoring} title="good" />
      <FeedbackButton onClick={neutralScoring} title="neutral" />
      <FeedbackButton onClick={badScoring} title="bad" />

      {sumAll ? (
        <Statistics good={good} neutral={neutral} bad={bad} sumAll={sumAll} />
      ) : (
        <div>
          <h1>statistics</h1>
          <h3>No feedback given</h3>
        </div>
      )}
    </div>
  );
};

export default App;
