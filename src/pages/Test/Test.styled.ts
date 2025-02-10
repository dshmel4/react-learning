import styled from 'styled-components';

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Центрируем содержимое */
  justify-content: center;
  height: 100vh; /* Полноэкранный контейнер */
`;

export const Count = styled.div`
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  background-color: gray; /* Серый фон */
  color: white;
  border: 2px solid green; /* Зелёная граница */
  border-radius: 10px; /* Закруглённые края */
  padding: 10px 20px;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    background-color: darkgray; /* Темнее при наведении */
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;
