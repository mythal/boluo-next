import Oops from '../components/Oops';
import { css } from '@emotion/react';
import { useState } from 'react';

const styles = {
  container: css`
    width: 50vw;
    height: 50vh;
    border: 1px solid black;
  `,

  resize: css`
    resize: both;
    overflow: scroll;
  `,
};

export const ErrorHandlingDesign = () => {
  const [resize, setResize] = useState(true);
  return (
    <div>
      <p>
        <label>
          resize <input type="checkbox" onChange={(e) => setResize(e.target.checked)} checked={resize} />
        </label>
      </p>
      <div css={[styles.container, resize && styles.resize]}>
        <Oops error={'Something'} />
      </div>
    </div>
  );
};
export default ErrorHandlingDesign;
