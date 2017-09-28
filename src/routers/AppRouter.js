import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ExpenseDashboardPage from '../app/components/ExpenseDashboardPage';
import Header from '../app/components/Header';
import AddExpensePage from '../app/components/AddExpensePage';
import EditExpensePage from '../app/components/EditExpensePage';
import HelpPage from '../app/components/HelpPage';
import NotFoundPage from '../app/components/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" exact={true} component={ExpenseDashboardPage} />
                <Route path="/create" exact={true} component={AddExpensePage} />
                <Route path="/edit" exact={true} component={EditExpensePage} />
                <Route path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" exact={true} component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>      
        </div>  
    </BrowserRouter>
);

export default AppRouter;