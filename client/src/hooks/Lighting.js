import useLocal from "./LocalStorage";

const useLiteMode = (key, initialValue) => {
  const [liteMode, setLiteMode] = useLocal(key, initialValue);

  return [liteMode, setLiteMode];
};
export default useLiteMode;
