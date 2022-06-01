import React, { useState, useCallback } from 'react';

// Hook
// Parameter is the boolean, with default "false" value
const useToggle: Function = (
  initialState = false
): Array<boolean | Function> => {
  // Initialize the state
  const [state, setState] = useState<boolean>(initialState);

  // Define and memorize toggler function in case we pass down the component,
  // This function change the boolean value to it's opposite value
  const toggle = useCallback(() => setState((_state) => !_state), []);

  return [state, toggle];
};

export default useToggle;
