import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Home,
        Pre,
        Questions,
        Questions2,
        Questions3,
        Questions4,
        WorkDone,
        WorkDone2,
        WorkDone3,
        WorkDone4,
        WrapUp} from '../containers';



export default () => (
        <BrowserRouter>
          <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/pre" exact component={Pre}/>
              <Route path="/questions:one" exact component={Questions}/>
              <Route path="/q2" exact component={Questions2}/>
              <Route path="/q3" exact component={Questions3}/>
              <Route path="/q4" exact component={Questions4}/>
              <Route path="/workdone:one" exact component={WorkDone}/>
              <Route path="/w2" exact component={WorkDone2}/>
              <Route path="/w3" exact component={WorkDone3}/>
              <Route path="/w4" exact component={WorkDone4}/>
              <Route path="/wrapup" exact component={WrapUp}/>
          </Switch>
        </BrowserRouter>
);
