import {
  handleDecrement,
  increment,
  setName,
  startLoading,
  stopLoading,
  toggleVisibility,
} from '@/shared/stores/counter-slice';
import type { RootState } from '@/shared/stores/store';
import type { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state: RootState) => state.counter.counter);
  const name = useSelector((state: RootState) => state.counter.name);
  const isLoading = useSelector((state: RootState) => state.counter.isLoading);
  const isVisible = useSelector((state: RootState) => state.counter.isVisible);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrementAction = () => {
    dispatch(handleDecrement(counter - 1));
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setName(event.target.value));
  };

  const handleToggleVisibility = () => {
    dispatch(toggleVisibility());
  };

  const handleFetchData = async () => {
    dispatch(startLoading());
    // Simulate an async action (e.g., fetching data)
    setTimeout(() => {
      dispatch(stopLoading());
    }, 2000); // Stops loading after 2 seconds
  };

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrementAction}>-</button>

      <div>
        <input type="text" value={name} onChange={handleNameChange} placeholder="Enter name" />
        <p>Name: {name}</p>
      </div>

      {/* Toggle visibility of this section */}
      <button onClick={handleToggleVisibility}>{isVisible ? 'Hide' : 'Show'} Section</button>
      {isVisible && <div>This section is toggleable</div>}

      {/* Display loading indicator */}
      <button onClick={handleFetchData}>Fetch Data</button>
      {isLoading && <p>Loading...</p>}
    </div>
  );
};

export default Home;
