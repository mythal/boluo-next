import { FC } from 'react';
import { Overlay } from './Overlay';
import { css, keyframes } from '@emotion/react';
import { Button } from './Button';
import { useIntl } from 'react-intl';
import { m } from '../../styles/utility/spacing';
import { text } from '../../styles/utility/typography';
import { shadow } from '../../styles/utility/effect';
import { Theme } from '../../styles/theme';
import { useTransition } from 'transition-hook';
import { ChildrenProps, StyleProps } from '../../helper/props';

interface Props extends StyleProps, ChildrenProps {
  title?: string;
  show?: boolean;
  dismiss: () => void;
  showDismissButton?: boolean;
  dismissText?: string;
  onSubmit?: () => void;
  submitText?: string;
}

const dialogIn = keyframes`
  0% {
    transform: translateX(-50%) translateY(-30em);
    opacity: 0;
  }
  100% {
    opacity: 100%;
    transform: translateX(-50%) translateY(-50%);
  }
`;

const dialogOut = keyframes`
  0% {
    transform: translateX(-50%) translateY(-50%);
    opacity: 100%;
  }
  100% {
    transform: translateX(-50%) translateY(30em);
    opacity: 0;
  }
`;

const styles = {
  container: (theme: Theme) => css`
    background-color: ${theme.dialog.bg};
    top: 50%;
    left: 50%;
    padding: 1em;
    min-width: 14em;
    transform: translateX(-50%) translateY(-50%);
    border: 1px solid rgba(128, 128, 128, 0.5);
    border-radius: 0.25em;
    ${shadow.lg};

    &[data-stage='enter'] {
      animation: 300ms ease-in-out ${dialogIn};
    }
    &[data-stage='leave'] {
      animation: 320ms ease-in-out ${dialogOut};
    }
  `,
  title: css`
    ${text.xl};
    margin-bottom: 0.5em;
    padding-bottom: 0.25em;
  `,
};

export const Dialog: FC<Props> = ({
  children,
  title,
  onSubmit,
  submitText,
  className,
  show = true,
  dismiss,
  showDismissButton = true,
  dismissText,
}) => {
  const transitionTimeMs = 300;
  const { stage, shouldMount } = useTransition(show, transitionTimeMs);
  const intl = useIntl();
  if (!submitText) {
    submitText = intl.formatMessage({ defaultMessage: 'Submit', id: 'submit' });
  }
  if (!dismissText) {
    dismissText = intl.formatMessage({ defaultMessage: 'Cancel', id: 'cancel' });
  }
  if (!shouldMount) {
    return null;
  }

  return (
    <Overlay css={styles.container} dismiss={dismiss} className={className} data-stage={stage}>
      {title && <div css={styles.title}>{title}</div>}
      <div>{children}</div>
      {(onSubmit || showDismissButton) && (
        <div css={[m.t(4), text.textRight]}>
          {showDismissButton && <Button onClick={() => dismiss()}>{dismissText}</Button>}
          {onSubmit && (
            <Button data-type="primary" onClick={() => onSubmit()} css={[m.l(1)]} type="submit">
              {submitText}
            </Button>
          )}
        </div>
      )}
    </Overlay>
  );
};
