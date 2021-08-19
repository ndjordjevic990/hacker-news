import { Fragment, useState } from "react";
import Header from "./components/Header";
import DisplayUsers from "./components/DisplayUsers";

function App() {
  const [isListView, setIsListView] = useState(true);

  const onLayoutToggle = () => {
    setIsListView = !isListView;
  };

  return (
    <Fragment>
      <Header isListView={isListView} onLayoutToggle={onLayoutToggle} />
      <DisplayUsers isListView={isListView} />
    </Fragment>
  );
}

export default App;
