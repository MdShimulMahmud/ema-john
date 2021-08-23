import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Error from './components/Error/Error';
import Header from './components/Header/Header';
import Manage from './components/Manage/Manage';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Review from './components/Review/Review';
import Shop from './components/Shop/Shop';

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/" component={Shop} />
                <Route path="/shop" component={Shop} />
                <Route path="/review" component={Review} />
                <Route path="/manage" component={Manage} />
                <Route path="/product/:productKey" component={ProductDetail} />

                <Route component={Error} />
            </Switch>
        </Router>
    );
}

export default App;
