import React from "react";
import { Provider } from "react-redux";
import { store } from "./reducers/store/userStore";
import Test from "./components/Test";
const App = () => {
  return <Provider store={store}><Test /></Provider>;
};

export default App;
