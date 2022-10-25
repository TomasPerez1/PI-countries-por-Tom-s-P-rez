import {Route} from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import HeaderForm from "./components/Header/HeaderForm.jsx";
import Landing from "./components/Landing/Landing.jsx";
import Main from "./components/Main/Main.jsx";
import CountryDetail from "./components/CountryDetail/CountryDetail.jsx";
import CreateActivity from "./components/CreateActivity/CreateActivity.jsx";
import Redirect from "./components/CreateActivity/Redirect/Redirect.jsx";


function App() {
  return (
    <>
    <Route exact path='/'>
      <Landing/>
    </Route>
    <Route path='/main'>
      <Header/>
      <Main/>
    </Route>
    <Route path='/detail'>
      <Header/>
      <CountryDetail/>
    </Route>
    <Route path='/create_activity'>
      <HeaderForm/>
      <CreateActivity/>
    </Route>
    <Route path='/redirect'>
      <Redirect/>
    </Route>
    </>
  );
}

export default App;
