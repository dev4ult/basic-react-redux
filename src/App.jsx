import { ChakraProvider, Heading, Button, ButtonGroup, Text, Box } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { decremented, incremented } from './redux/counter.js';

function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <ChakraProvider>
      <Box height={'100vh'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Box padding={'5'} display={'flex'} flexDir={'column'} gap={'3'} textAlign={'center'} maxW={'xl'} bgColor={'gray.100'} borderRadius={'2xl'} mx={'auto'}>
          <Heading>React Counter</Heading>
          <ButtonGroup mx={'auto'}>
            <Button
              textTransform={'uppercase'}
              fontWeight={'bold'}
              onClick={() => {
                dispatch(decremented());
              }}
            >
              decrement
            </Button>
            <Button
              textTransform={'uppercase'}
              fontWeight={'bold'}
              onClick={() => {
                dispatch(incremented());
              }}
            >
              increment
            </Button>
          </ButtonGroup>
          <Text>Count : {count}</Text>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
