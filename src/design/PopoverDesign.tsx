import React, { CSSProperties, MutableRefObject, useEffect, useMemo, useRef, useState } from 'react';
import { css, Theme } from '@emotion/react';
import { arrow, autoUpdate, flip, offset, shift, useFloating } from '@floating-ui/react-dom';

import { Button } from '../components/fundamental/Button';
import { Select } from '../components/fundamental/Select';
import { m } from '../styles/utility/spacing';

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
  arrow: (theme: Theme) => css`
    z-index: -1;
    position: absolute;
    background: ${theme.tooltip.bg};
    width: 1em;
    height: 1em;
    --translateX: 0;
    --translateY: 0;
    transform: translateX(var(--translateX)) translateY(var(--translateY)) rotate(45deg);

    &[data-placement='right'] {
      --translateX: -50%;
      left: var(--arrow-x, 0);
      top: var(--arrow-y, 0);
    }

    &[data-placement='left'] {
      --translateX: 50%;
      right: var(--arrow-x, 0);
      top: var(--arrow-y, 0);
    }

    &[data-placement='top'] {
      --translateY: 50%;
      left: var(--arrow-x, 0);
      bottom: var(--arrow-y, 0);
    }

    &[data-placement='bottom'] {
      --translateY: -50%;
      left: var(--arrow-x, 0);
      top: var(--arrow-y, 0);
    }
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
  const [placementSetting, setPlacementSetting] = useState<'top' | 'bottom' | 'right' | 'left'>('right');
  const arrowRef = useRef<HTMLDivElement>(null);
  const {
    x,
    y,
    reference,
    floating,
    strategy,
    placement,
    middlewareData: { arrow: { x: arrowX, y: arrowY } = {} },
  } = useFloating({
    placement: placementSetting,
    whileElementsMounted: autoUpdate,
    middleware: [shift(), flip(), offset(12), arrow({ element: arrowRef })],
  });
  const boxRef = useBoxScrollPosition();

  const arrowStyle: CSSProperties | undefined = useMemo(() => {
    return {
      '--arrow-x': `${arrowX ?? 0}px`,
      '--arrow-y': `${arrowY ?? 0}px`,
    } as CSSProperties;
  }, [arrowX, arrowY]);

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
              <div style={arrowStyle} ref={arrowRef} css={[styles.arrow]} data-placement={placement} />
            </div>
          </div>
        </div>

        <div css={m.t(4)}>
          <Select
            items={[
              { label: 'Left', value: 'left' },
              { label: 'Right', value: 'right' },
              { label: 'Top', value: 'top' },
              { label: 'Bottom', value: 'bottom' },
            ]}
            value={placementSetting}
            onChange={(value: string) => setPlacementSetting(value as typeof placementSetting)}
          />
        </div>
      </div>
    </div>
  );
};
