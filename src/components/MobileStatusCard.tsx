import styled from 'styled-components';
import Image from 'next/image';
import Loader from './LoadingSpinner';

export interface MobileStatusCardProps {
  title: string;
  subtitle: string;
  buttonText: string;
  isLoading: boolean;
  loadingText: string;
  isError: boolean;
  errorText: string;
  onClick: () => unknown;
}
export default function MobileStatusCard(props: MobileStatusCardProps) {
  return (
    <Card>
      {props.isLoading && (
        <Right>
          <Loader height={20} width={20} />
        </Right>
      )}
      {props.isError && (
        <Right>
          <Image
            src="/assets/images/MobileErrorIndicator.svg"
            height={20}
            width={20}
            alt="error"
          />
        </Right>
      )}
      <Title>{props.title}</Title>
      <Subtitle>{props.subtitle}</Subtitle>
      <Button onClick={props.onClick}>
        {props.isLoading
          ? props.loadingText
          : props.isError
          ? props.errorText
          : props.buttonText}
      </Button>
    </Card>
  );
}

const Right = styled.div`
  float: right;
`;

const Card = styled.div`
  max-width: 456px;
  border-radius: 8px;
  background-color: #100817;
  border: 2px solid #402b5b;
  padding: 24px;
  position: relative;
`;

const Title = styled.h1`
  /* Headline/Headline 3 */
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  letter-spacing: -0.01em;
  color: #ffffff;
`;

const Subtitle = styled.h6`
  margin-top: 8px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  align-items: center;
  letter-spacing: -0.01em;
  color: #dad0e6;
`;

const Button = styled.button`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  background-color: #271d47;
  border-radius: 8px;
  padding: 16px;
  border: none;
  height: 48px;
  margin-top: 32px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  display: flex;
  align-items: center;
  color: #ffffff;
  &:hover {
    background: #543a6e;
  }
  &:active {
    background: #9867ce;
  }
  &:hover {
    cursor: pointer;
  }
`;
