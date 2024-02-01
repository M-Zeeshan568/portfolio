import styled, { keyframes } from "styled-components";

const blinkAnimation = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const BlinkingTextWrapper = styled.div`
  animation: ${blinkAnimation} 3s infinite;
`;

const BlinkingText = ({ text, className }) => {
  return (
    <BlinkingTextWrapper className={`${className}`}>{text}</BlinkingTextWrapper>
  );
};

export default BlinkingText;
