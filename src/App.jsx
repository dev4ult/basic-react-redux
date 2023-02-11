import { Button, ButtonGroup, Text, Box, Container } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import { decremented, incremented } from './redux/counter.js';

function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <>
      <Container height="100vh" display="flex" justifyContent="center" alignItems="center">
        <Card maxW="xl" shadow="md" borderRadius="md">
          <Text fontSize="xl">React Counter</Text>
          <ButtonGroup mx="auto">
            <StyledButton
              onClick={() => {
                dispatch(decremented());
              }}
            >
              decrement
            </StyledButton>
            <StyledButton
              onClick={() => {
                dispatch(incremented());
              }}
            >
              increment
            </StyledButton>
          </ButtonGroup>
          <Text fontWeight="bold">Count : {count}</Text>
        </Card>
      </Container>
    </>
  );
}

const Card = styled(Box)`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-inline: auto;
  text-align: center;
`;

const StyledButton = styled(Button)`
  font-weight: semibold;
  text-transform: uppercase;
`;

export default App;
