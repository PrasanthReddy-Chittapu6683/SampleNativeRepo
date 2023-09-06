import { useEffect, useState } from "react";

export async function catchify(p) {
  try {
    const res = await p;

    return [null, res];
  } catch (e) {
    return [e, null];
  }
}

export function useDebounce(value, delay) {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Update debounced value after delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export const timeout = () => {
  return new Promise((resolve) => setTimeout(resolve, 1000));
};
