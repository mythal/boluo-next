import { FC } from 'react';
import { Overlay } from './fundamental/Overlay';
import { css, keyframes } from '@emotion/react';
import { Button } from './fundamental/Button';
import { FormattedMessage, useIntl } from 'react-intl';
import { m } from '../styles/utility/spacing';
import { text } from '../styles/utility/typography';
import { shadow } from '../styles/utility/effect';
import { Theme } from '../styles/theme';
import { useTransition } from 'transition-hook';

interface Props {
  className?: string;
  title?: string;
  show?: boolean;
  dismiss: () => void;
  onSubmit?: () => void;
  submitText?: string;
}

const dialogIn = keyframes`
  from {
    translate: 0 -5em;
    opacity: 0;
  }
  to {
    translate: none;
    opacity: 100%;
  }
`;

const dialogOut = keyframes`
  from {
    opacity: 100%;
    translate: none;
  }
  to {
    translate: 0 5em;
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
    transform: translateY(-50%) translateX(-50%);
    border: 1px solid rgba(128, 128, 128, 0.5);
    border-radius: 0.25em;
    ${shadow.lg};

    &[data-stage='enter'] {
      animation: 300ms ease-in-out ${dialogIn};
    }
    &[data-stage='leave'] {
      animation: 300ms ease-in-out ${dialogOut};
    }
  `,
  title: css`
    ${text.xl};
    margin-bottom: 0.5em;
    padding-bottom: 0.25em;
  `,
};

export const Dialog: FC<Props> = ({ children, title, dismiss, onSubmit, submitText, className, show = true }) => {
  const transitionTimeMs = 300;
  const { stage, shouldMount } = useTransition(show, transitionTimeMs);
  const intl = useIntl();
  if (!submitText) {
    submitText = intl.formatMessage({ defaultMessage: 'Submit', id: 'submit' });
  }
  if (!shouldMount) {
    return null;
  }

  return (
    <Overlay css={styles.container} dismiss={dismiss} className={className} data-stage={stage}>
      {title && <div css={styles.title}>{title}</div>}
      <div>{children}</div>
      {onSubmit && (
        <div css={[m.t(4), text.textRight]}>
          <Button onClick={() => dismiss()}>
            <FormattedMessage id="cancel" defaultMessage="Cancel" />
          </Button>
          <Button data-type="primary" onClick={() => onSubmit()} css={[m.l(1)]} type="submit">
            {submitText}
          </Button>
        </div>
      )}
    </Overlay>
  );
};
