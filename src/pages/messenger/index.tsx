import { NextPage } from 'next';
import { p } from '../../styles/spacing';
import { useState } from 'react';

const Messenger: NextPage = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div css={[p.n(10)]}>
      hello, world ({counter}) <button onClick={() => setCounter((counter) => counter + 1)}>+1</button>
    </div>
  );
};

export default Messenger;
