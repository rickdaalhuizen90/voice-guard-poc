import { useState } from 'react';
import './App.css';

interface SharedButtonProps {
  onClick: () => void;
  count: number;
}

function MyButton() {
  const [count, setCount] = useState<number>(0);
  const handleClick = () => setCount(count + 1);
  return <button onClick={handleClick}>{`Clicked ${count} times`}</button>;
}

function SharedButton({ onClick, count }: SharedButtonProps) {
  return <button onClick={onClick}>{`Clicked ${count} times`}</button>;
}

const App = () => {
  const [count, setCount] = useState<number>(0);
  const handleClick = () => setCount(count + 1);
  return (
    <>
      <div className="container">
        <h1>React Example</h1>
        <p>These button share the same state:</p>
        <SharedButton onClick={handleClick} count={count} />
        <SharedButton onClick={handleClick} count={count} />
        <p>These button have their own state:</p>
        <MyButton />
        <MyButton />
      </div>
    </>
  );
};

export default App;
