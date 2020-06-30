import { useState, useEffect, useCallback } from 'react';
import stateverse from 'stateverse';

export const useWatch = <T>(
  watchable: stateverse.Store<T> | stateverse.WatchStore<any, T>
) => {
  const [, setState] = useState(watchable.state);
  const fn = useCallback((v: T) => setState(v), []);
  useEffect(() => {
    watchable.watch(fn);
    return () => {
      watchable.unwatch(fn);
    };
  }, [watchable, fn]);
};

export { createStore, watchable } from 'stateverse';
export default stateverse;
