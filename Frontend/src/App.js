import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//Screens
import HomeScreen from './components/screens/HomeScreen/HomeScreen';
import ProductScreen from './components/screens/ProductScreen/ProductScreen';
import CartScreen from './components/screens/CartScreen/CartScreen';
import Navbar from './components/Nav/Navbar';

function App() {
  return (
    <>
      <Router>
        <Navbar />
          {/* SiderDrawer */}
          {/* Backdrop */}
        <main>
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/product/:id" component={ProductScreen} />
            <Route exact path="/cart" component={CartScreen} />
          </Switch> 
        </main>  
      </Router>
    </>
  );
}

export default App;
