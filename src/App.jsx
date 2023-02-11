import { Button, Text, Box, Container } from '@chakra-ui/react';
import styled from '@emotion/styled';
import axios from 'axios';
import { useReducer, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchReducer, { initialState, ACTIONS } from './features/fetch/useReducerHook';

function App() {
  // useState hook from react
  // const [weatherList, setWeatherList] = useState({});
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  // async function handleFetch() {
  //   try {
  //     const data = await axios(`http://api.timezonedb.com/v2.1/list-time-zone?key=${import.meta.env.VITE_API_KEY}&format=json`);
  //     console.log(data);
  //     setLoading(false);
  //     setError(null);
  //   } catch (err) {
  //     setError(err.message);
  //     setLoading(false);
  //   }
  // }

  const [state, dispatch] = useReducer(fetchReducer, initialState);

  async function handleFetch() {
    try {
      dispatch({ type: ACTIONS.FETCH });
      const data = await axios(`http://api.timezonedb.com/v2.1/list-time-zone?key=${import.meta.env.VITE_API_KEY}&format=json`);
      console.log(data);
      dispatch({ type: ACTIONS.SUCCESS, payload: { data } });
    } catch (err) {
      dispatch({ type: ACTIONS.ERROR, payload: { error: err.message } });
    }
  }

  // redux toolkit
  // const count = useSelector((state) => state.counter.count);
  // const dispatch = useDispatch();

  // async function handleFetch() {}

  return (
    <>
      <ContainerScreen maxW="5xl">
        <Card>
          <FetchButton type="button" onClick={handleFetch}>
            fetch
          </FetchButton>
          {state.loading ? <Text>Fetching Weather Data ...</Text> : <Text>{state.error ? 'Something went wrong' : 'Check your browser console, click the button if data has not been sent'}</Text>}
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
