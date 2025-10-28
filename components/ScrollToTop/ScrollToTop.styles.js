import styled from "@emotion/styled";

export const ScrollButtonContainer = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 1000;
  transition: all 0.3s ease-in-out;
`;

export const ScrollButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
  transition: all 0.3s ease-in-out;
  opacity: 0.9;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
    opacity: 1;
  }

  &:active {
    transform: translateY(-1px);
  }

  &:focus {
    outline: none;
    box-shadow:
      0 4px 15px rgba(102, 126, 234, 0.4),
      0 0 0 3px rgba(102, 126, 234, 0.2);
  }

  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
    font-size: 16px;
    bottom: 20px;
    right: 20px;
  }
`;
