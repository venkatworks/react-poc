import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PortfolioDashBoardComponent from './components/portfolio-dashboard.component';
import PortDetailComponent from './components/portfolio-detail.component';

const AppRoutes =( <Switch>
        <Route exact path="/" component={PortfolioDashBoardComponent} />,
        <Route exact path="/:portfolioId" component={PortDetailComponent} />
    </Switch>)

export default AppRoutes;
