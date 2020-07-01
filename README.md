# stateverse-react ⚛👩‍🚀

Complementary package for [Stateverse](https://github.com/fkrasnowski/stateverse) - painless manager for async state changes and side effects

## Installation

```sh
# npm
npm i --save stateverse-react

# yarn
yarn add stateverse-react
```

`stateverse-react` is the same as regular **Stateverse** with a difference at introducing the `useWatch` hook that synchronises state changes with component re-renders

### Example

```jsx
import { useWatch, createStore } from 'stateverse-react';

const counter = createStore(0)
  .addReducers({
    add: (state, v) => state + v,
    sub: (state, v) => state - v,
    reset: () => 0,
  })
  .addEffects({
    countDownFx: async (reducers, cleanup) => {
      const interval = setInterval(() => {
        if (counter.state > 0) reducers.sub(1);
        else clearInterval(interval);
      }, 1000);
      cleanup(() => {
        clearInterval(interval);
      });
    },
  });

const Counter = () => {
  useWatch(counter);
  return <h1>{counter.state}</h1>;
};
```

See [Stateverse](https://github.com/fkrasnowski/stateverse) for full documentation
