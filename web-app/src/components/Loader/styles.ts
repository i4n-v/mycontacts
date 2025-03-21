import styled from 'styled-components';

const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(246, 245, 252, 0.7);
  backdrop-filter: blur(5px);
`;

export { Overlay };
