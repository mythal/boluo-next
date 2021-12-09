import { NextPage } from 'next';
import { useState } from 'react';
import { Button } from '../components/fundamental/Button';

const Messenger: NextPage = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      hello, world ({counter}) <Button onClick={() => setCounter((counter) => counter + 1)}>+1</Button>
    </div>
  );
};

export default Messenger;
