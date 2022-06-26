import React, { CSSProperties, MutableRefObject, useEffect, useMemo, useRef, useState } from 'react';
import { arrow, autoUpdate, flip, offset, shift, useFloating } from '@floating-ui/react-dom';

import { Button } from '../components/fundamental/Button';
import { Select } from '../components/fundamental/Select';
import styles from './PopoverDesign.module.css';
import clsx from 'clsx';

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
        <div
          ref={boxRef}
          className="w-[30em] h-[20em] relative overflow-scroll border border-black overscroll-contain resize bg-gray-100 dark:bg-gray-900"
        >
          <div className="inner w-[2000px] h-[2000px] flex justify-center items-center">
            <Button ref={reference}>I am a useless button</Button>
            <div
              ref={floating}
              style={{
                position: strategy,
                top: y ?? '',
                left: x ?? '',
              }}
              className={clsx(
                styles.tooltip,
                'tooltip rounded-sm p-4 inline-block min-w-[8em] max-w-[10em]',
                'bg-tooltip text-black'
              )}
              role="tooltip"
            >
              大人になるって事は近づいたり离れたりを缲り返して、お互いがあんまり伤つかずにすむ距离を见つけ出すって事に…
              <div
                style={arrowStyle}
                ref={arrowRef}
                data-placement={placement}
                className={clsx(styles.arrow, 'arrow -z-10 absolute w-4 h-4 bg-tooltip')}
              />
            </div>
          </div>
        </div>

        <div className="mt-4">
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
