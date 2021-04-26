import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>;

const Anecdote = ({ anecdote }) => <p>{anecdote}</p>;

const Vote = ({ votes }) => <p>has {votes} votes.</p>;

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(6).fill(0));

  const handleVotes = () => {
    const copyVotes = [...votes];
    copyVotes[selected] += 1;
    setVotes(copyVotes);
  };

  const handleAnecdotes = () => setSelected(selected + 1);

  const maxVotes = () => votes.indexOf(Math.max(...votes));

  return (
    <>
      <h2>Anecdote of the day</h2>
      {typeof props.anecdotes[selected] === "undefined" ? (
        <p>There are no more acnedotes</p>
      ) : (
        <>
          <Anecdote anecdote={props.anecdotes[selected]} />
          <Vote votes={votes[selected]} />
          <Button text="VOTE" onClick={handleVotes} />
          <Button text="NEXT ACNEDOTE" onClick={handleAnecdotes} />
        </>
      )}
      <h2>Anecdote with most votes</h2>
      <Anecdote anecdote={props.anecdotes[maxVotes()]} />
      <Vote votes={votes[maxVotes()]} />
    </>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
