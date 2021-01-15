import React, { useState } from "react";

const UseLocal = (key, initialValue) => {
  const [data, setData] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });
  const setValue = (value) => {
    setData(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };
  return [data, setValue];
};
export default UseLocal;
