import { Button, ButtonGroup, Text, Box, Container, Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decremented, incremented } from './features/fetch/counter.js';

function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [weatherList, setWeatherList] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleFetch() {
    try {
      setLoading(true);
      const data = await axios(`http://api.timezonedb.com/v2.1/list-time-zone?key=${import.meta.env.VITE_API_KEY}&format=json`);
      console.log(data);
      setLoading(false);
      setError(null);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }

  return (
    <>
      <ContainerScreen maxW="5xl">
        <Card>
          <FetchButton type="button" onClick={handleFetch}>
            fetch
          </FetchButton>
          {loading ? <h2>Fetching Weather Data ...</h2> : <h2>{error ? 'Something went wrong' : 'Check your browser console, click the button if data has not been sent'}</h2>}
        </Card>
      </ContainerScreen>
    </>
  );
}

const ContainerScreen = styled(Container)`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Card = styled(Box)`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-inline: auto;
  text-align: center;
`;

const FetchButton = styled(Button)`
  font-weight: semibold;
  text-transform: uppercase;
  width: fit-content;
  margin-inline: auto;
`;

export default App;
