import React from "react";

export function useAsyncFunction<T>(
  asyncFunction: () => Promise<T>,
  defaultValue: T
): [T, string | null, boolean, () => void] {
  const [state, setState] = React.useState({
    value: defaultValue,
    error: null,
    isPending: true,
  });

  React.useEffect(() => {
    asyncFunction()
      .then((value) => setState({ value, error: null, isPending: false }))
      .catch((error) =>
        setState({
          value: defaultValue,
          error: error.toString(),
          isPending: false,
        })
      );
  }, [asyncFunction, defaultValue]);

  const refetch = () => {
    setState({ ...state, isPending: true });
    asyncFunction()
      .then((value) => setState({ value, error: null, isPending: false }))
      .catch((error) =>
        setState({
          value: defaultValue,
          error: error.toString(),
          isPending: false,
        })
      );
  };

  const { value, error, isPending } = state;
  return [value, error, isPending, refetch];
}
