
import { Route, Switch } from 'react-router-dom';
import { HeaderApp } from './components/HeaderApp';
import { CartProductView } from './views/CartProductView';
import {Home} from './views/Home';
import { Purchase } from './views/Purchase';

function App() {
  return (
    <>
      <HeaderApp/>
      <Switch>
        <Route path={"/cartproduct/:id"} component={CartProductView} />
        <Route path={"/purchase"} component={Purchase} />

        <Route exact path={"/"} component={Home} />
      </Switch>
    </>
  );
}

export default App;
