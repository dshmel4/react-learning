import React, { useState } from 'react';
import * as Styled from './Test.styled';

export const Test = () => {
  const [count, setCount] = useState<number>(1); // Начальное значение 1

  return (
    <Styled.Root>
      <Styled.Count>{count}</Styled.Count> {/* Отображение счётчика */}
      <Styled.ButtonContainer>
        <Styled.Button onClick={() => setCount(prev => prev + 1)}>+</Styled.Button>
        <Styled.Button onClick={() => setCount(prev => prev - 1)}>-</Styled.Button>
        <Styled.Button onClick={() => setCount(() => 0)}>Сбросить</Styled.Button> {/* Обнуление */}
      </Styled.ButtonContainer>
    </Styled.Root>
  );
};
