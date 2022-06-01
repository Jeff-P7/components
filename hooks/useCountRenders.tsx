import React, { useRef, useState } from 'react';

export const useCountRenders: Function = (): Array<any> => {
  const renders = useRef<number>(0);
  //   const [count, setCount] = useState<number>(renderCount || 0);

  //   useEffect(() => {
  //     // Divided renderCount values to 2 due to React.StrictMode double renders
  //     setCount(renderCount >= 3 ? renderCount / 2 : renderCount - 1);
  //   }, [renderCount]);
  renders.current++;
  const numCurrent: number =
    renders.current >= 3 ? renders.current / 2 : renders.current - 1;
  const renderCount: number = Math.round(numCurrent);

  return [renderCount];
};

export default useCountRenders;
