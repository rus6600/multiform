import styled, { css } from 'styled-components';
import { Logo } from './PageSelectPlan.tsx';
import Thanks from '../assets/images/icon-thank-you.svg';

export const PageExit = () => {
  return (
    <Wrapper>
      <Logo src={Thanks}></Logo>
      <h1>Thank you!</h1>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support,
        please feel free to email us at support@loremgaming.com.
      </p>
    </Wrapper>
  );
};

const Wrapper = styled('div')`
  ${({ theme }) => css`
    display: flex;
    padding: 4rem;
    gap: 2rem;
    flex-direction: column;
    place-items: center;
    height: 100%;
    aspect-ratio: 1;
    justify-content: center;
    margin: auto;
    text-align: center;

    ${Logo} {
      width: 20%;
      aspect-ratio: 1;
    }
    & h1 {
      font-weight: 600;
      color: ${theme.colors.marineBlue};
    }

    & p {
      color: ${theme.colors.coolGray};
    }
  `}
`;
