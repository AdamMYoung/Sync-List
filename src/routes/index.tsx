import { Switch, Route } from 'react-router-dom';
import Home from './home';
import Page from './page';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/:id" component={Page} />
            <Route path="/" component={Home} />
        </Switch>
    );
};

export default Routes;
