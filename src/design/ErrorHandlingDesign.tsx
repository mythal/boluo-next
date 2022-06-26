import Oops from '../components/Oops';
import { useState } from 'react';
import clsx from 'clsx';

export const ErrorHandlingDesign = () => {
  const [resize, setResize] = useState(true);
  return (
    <div>
      <p>
        <label>
          resize <input type="checkbox" onChange={(e) => setResize(e.target.checked)} checked={resize} />
        </label>
      </p>
      <div className={clsx(resize && 'resize overflow-scroll', 'w-[50vw] h-[50vh] border')}>
        <Oops error={'Something'} />
      </div>
    </div>
  );
};
