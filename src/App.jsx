import { Button, Text, Box, Container } from '@chakra-ui/react';
import styled from '@emotion/styled';
import axios from 'axios';

// useState hook
// import { useState } from 'react';

// useReducer hook
// import { useReducer } from 'react';
// import fetchReducer from './features/fetch/useReducerHook';
// import ACTIONS from './features/fetch/actions';
// import initialState from './features/fetch/initialState';

// React Redux | Toolkit
import { useDispatch, useSelector } from 'react-redux';
import fetchSlice, { start, success, failed, selectData, getWeather } from './features/fetch/reactRedux';

function App() {
  // useState hook from react
  // const [weatherList, setWeatherList] = useState({});
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  // async function handleFetch() {
  //   try {
  //     const data = await axios(`https://api.timezonedb.com/v2.1/list-time-zone?key=${import.meta.env.VITE_API_KEY}&format=json`);
  //     console.log(data);
  //     setLoading(false);
  //     setError(null);
  //   } catch (err) {
  //     setError(err.message);
  //     setLoading(false);
  //   }
  // }

  // const [state, dispatch] = useReducer(fetchReducer, initialState);

  // async function handleFetch() {
  //   try {
  //     dispatch({ type: ACTIONS.FETCH });
  //     const data = await axios(`https://api.timezonedb.com/v2.1/list-time-zone?key=${import.meta.env.VITE_API_KEY}&format=json`);
  //     console.log(data);
  //     dispatch({ type: ACTIONS.SUCCESS, payload: { data } });
  //   } catch (err) {
  //     dispatch({ type: ACTIONS.ERROR, payload: { error: err.message } });
  //   }
  // }

  // redux toolkit
  const { weatherList, loading, error } = useSelector(selectData);
  const dispatch = useDispatch();

  function handleFetch() {
    dispatch(getWeather());
  }

  console.log(weatherList);

  return (
    <>
      <ContainerScreen maxW="5xl">
        <Card>
          <FetchButton type="button" onClick={handleFetch}>
            fetch
          </FetchButton>

          {/* dont forget to change code below if you want to try for another state management */}
          {loading ? <Text>Fetching Weather Data ...</Text> : <Text>{error ? 'Something went wrong' : 'Check your browser console, click the button if data has not been sent'}</Text>}
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
