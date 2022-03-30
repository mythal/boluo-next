import React, { MutableRefObject, useEffect, useRef } from 'react';
import { css, Theme } from '@emotion/react';
import { autoUpdate, flip, offset, shift, useFloating } from '@floating-ui/react-dom';

import { Button } from '../components/fundamental/Button';

const styles = {
  tooltip: (theme: Theme) => css`
    border-radius: 2px;
    padding: 1rem;
    font-size: max(0.75rem, 12px);
    display: inline-block;
    min-width: 8em;
    max-width: 10em;
    background-color: ${theme.tooltip.bg};
    color: black;
    filter: drop-shadow(0 1px 3px rgba(0, 0, 0, 0.1)) drop-shadow(0 1px 2px rgba(0, 0, 0, 0.06));

    &[data-popper-reference-hidden='true'] {
      visibility: hidden;
      pointer-events: none;
    }
  `,
  box: (theme: Theme) => css`
    //margin: 2rem 0;
    width: 30em;
    height: 20em;
    position: relative;
    overflow: scroll;
    border: 1px solid #000;
    overscroll-behavior: contain;
    background-color: ${theme.mode === 'light' ? '#EEE' : '#333'};
    resize: both;
  `,
  inner: css`
    width: 2000px;
    height: 2000px;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};
const useBoxScrollPosition = (): MutableRefObject<HTMLDivElement | null> => {
  const boxRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (boxRef.current) {
      const element = boxRef.current;
      element.scrollLeft = element.scrollWidth / 2 - element.clientWidth / 2;
      element.scrollTop = element.scrollHeight / 2 - element.clientHeight / 2;
    }
  }, []);
  return boxRef;
};

export const PopoverDesign = () => {
  const { x, y, reference, floating, strategy, update, refs } = useFloating({
    placement: 'right',
    middleware: [shift(), flip(), offset(12)],
  });
  useEffect(() => {
    if (!refs.reference.current || !refs.floating.current) {
      return;
    }
    return autoUpdate(refs.reference.current, refs.floating.current, update);
  }, [refs.floating, refs.reference, update]);
  const boxRef = useBoxScrollPosition();

  return (
    <div>
      <div>
        <p>
          <a href="https://floating-ui.com/docs/getting-started">Floating UI Documentation</a>
        </p>
        <div ref={boxRef} css={styles.box}>
          <div className="inner" css={styles.inner}>
            <Button ref={reference}>I am a useless button</Button>
            <div
              ref={floating}
              style={{
                position: strategy,
                top: y ?? '',
                left: x ?? '',
              }}
              css={styles.tooltip}
              role="tooltip"
            >
              大人になるって事は近づいたり离れたりを缲り返して、お互いがあんまり伤つかずにすむ距离を见つけ出すって事に…
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PopoverDesign;
