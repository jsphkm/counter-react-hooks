import Store from './index';

const initialState = 0;
const useCount = () => {
  const [{ count }, setState] = Store.useStore();

  const increment = () => (
    setState(draft => {
      draft.count++;
    })
  );

  const decrement = () => (
    setState(draft => {
      draft.count--;
    })
  );

  return [
    count,
    {
      increment,
      decrement
    }
  ];
};

export { initialState, useCount };