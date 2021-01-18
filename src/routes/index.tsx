import { Switch, Route } from 'react-router-dom';
import Home from './home';
import List from './list';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/:id" component={List} />
            <Route path="/" component={Home} />
        </Switch>
    );
};

export default Routes;
