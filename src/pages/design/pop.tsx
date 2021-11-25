import { Page } from '../../helper/layout';
import { getLayout } from '../../components/DesignLayout';
import { Button } from '../../components/fundamental/Button';
import { usePopper } from 'react-popper';
import React, { MutableRefObject, useEffect, useRef, useState } from 'react';
import { css, Theme } from '@emotion/react';

const styles = {
  tooltip: (theme: Theme) => css`
    border-radius: 2px;
    padding: 1rem;
    font-size: max(0.75rem, 12px);
    display: inline-block;
    max-width: 10em;
    background-color: ${theme.tooltip.bg};
    color: black;
    filter: drop-shadow(0 1px 3px rgba(0, 0, 0, 0.1)) drop-shadow(0 1px 2px rgba(0, 0, 0, 0.06));

    &[data-popper-reference-hidden='true'] {
      visibility: hidden;
      pointer-events: none;
    }
  `,
  arrow: css`
    pointer-events: none;

    &,
    &::before {
      position: absolute;
      width: 8px;
      height: 8px;
      background: inherit;
    }

    & {
      visibility: hidden;
    }

    &::before {
      visibility: visible;
      content: '';
      transform: rotate(45deg);
    }

    [data-popper-reference-hidden='true'] > &::before {
      visibility: hidden;
    }

    [data-popper-placement^='top'] > & {
      bottom: -4px;
    }

    [data-popper-placement^='bottom'] > & {
      top: -4px;
    }

    [data-popper-placement^='left'] > & {
      right: -4px;
    }

    [data-popper-placement^='right'] > & {
      left: -4px;
    }
  `,
  box: (theme: Theme) => css`
    margin: 2rem 0;
    width: 30em;
    height: 20em;
    position: relative;
    overflow: scroll;
    border: 1px solid #000;
    overscroll-behavior: contain;
    background-color: ${theme.mode === 'light' ? '#EEE' : '#333'};
  `,
  inner: css`
    width: 40em;
    height: 40em;
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

const Buttons: Page = () => {
  const [referenceElement, setReferenceElement] = useState<HTMLButtonElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);
  const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(null);
  const popper = usePopper(referenceElement, popperElement, {
    placement: 'right',
    modifiers: [
      { name: 'arrow', options: { element: arrowElement } },
      { name: 'offset', options: { offset: [0, 20] } },
    ],
  });
  const boxRef = useBoxScrollPosition();

  return (
    <div>
      <div>
        <div>
          <a href="https://popper.js.org/react-popper/v2/">Popper Documentation</a>
        </div>
        <div ref={boxRef} css={styles.box}>
          <div className="inner" css={styles.inner}>
            <Button ref={setReferenceElement}>I am a useless button</Button>
            <div
              ref={setPopperElement}
              {...popper.attributes.popper}
              style={popper.styles.popper}
              css={styles.tooltip}
              role="tooltip"
            >
              大人になるって事は近づいたり离れたりを缲り返して、お互いがあんまり伤つかずにすむ距离を见つけ出すって事に…
              <div ref={setArrowElement} style={popper.styles.arrow} css={styles.arrow} data-popper-arrow={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Buttons.getLayout = getLayout;
Buttons.title = 'Tooltip & Menu';

export default Buttons;
