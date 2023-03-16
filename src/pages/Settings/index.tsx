import React, { useState, useMemo } from 'react';

const Child = ({ value }: { value: number }): JSX.Element => {
  console.log('Child re-renders', value);
  return <div>{value}</div>;
};

const values = [1, 2, 3];

const ChildMemo = React.memo(Child);

const Settings = (): JSX.Element => {
  const [state, setState] = useState(1);

  const onClick = (): void => {
    setState(state + 1);
  };

  return (
    <>
      <h2>Open console, click a button</h2>
      <p>Static lists with index and id as key</p>
      <p>both lists are fine</p>
      <p>Children should not re-render</p>
      {/* eslint-disable-next-line react/button-has-type */}
      <button onClick={onClick}>click here {state}</button>
      <br />
      <br />
      {values.map((val, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <ChildMemo value={val} key={index} />
      ))}
      <br />
      <br />
      {values.map((val) => (
        <ChildMemo value={val} key={val} />
      ))}
    </>
  );
};

export default Settings;
