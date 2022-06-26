import { useState, FC } from 'react';
import { Loading } from '../components/Loading';
import clsx from 'clsx';

export const LoadingDesign: FC = () => {
  const [resize, setResize] = useState(true);
  return (
    <div>
      <p>
        <label>
          resize <input type="checkbox" checked={resize} onChange={(e) => setResize(e.target.checked)} />
        </label>
      </p>
      <div className={clsx('w-[20em] h-[20em]', resize && 'overflow-scroll resize')}>
        <Loading />
      </div>
    </div>
  );
};
