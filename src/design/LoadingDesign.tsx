import { useState, VFC } from 'react';
import { Loading } from '../components/Loading';
import { css } from '@emotion/react';

const styles = {
  box: css`
    width: 20em;
    height: 20em;

    &[data-resize='true'] {
      overflow: scroll;
      resize: both;
    }
  `,
};

export const LoadingDesign: VFC = () => {
  const [resize, setResize] = useState(true);
  return (
    <div>
      <p>
        <label>
          resize <input type="checkbox" checked={resize} onChange={(e) => setResize(e.target.checked)} />
        </label>
      </p>
      <div css={styles.box} data-resize={resize}>
        <Loading />
      </div>
    </div>
  );
};
export default LoadingDesign;
