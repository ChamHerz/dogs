import styled from 'styled-components';

const Spinner = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100px;
  height: 100px;
  margin-top: -10px;
  margin-left: -10px;
  border-radius: 50%;
  border: 15px solid transparent;
  border-top-color: var(--dark-brown);
  border-bottom-color: var(--dark-brown);
  animation: spinner 0.8s ease infinite;

  @keyframes spinner {
    to {
      transform: rotate(180deg);
    }
  }
`;

export default Spinner;
