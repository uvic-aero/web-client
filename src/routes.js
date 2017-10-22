import React from "react";
import { Route, IndexRoute } from "react-router";

import AppComponent from "./components/App/AppComponent";
import ImageQueue from "./components/ImageQueue/ImageQueue";
import ImageBrowser from "./components/ImageBrowser/ImageBrowser";
import TargetAnalysis from "./components/TargetAnalysis/TargetAnalysis";
import SpectatorView from "./components/SpectatorView/SpectatorView";
import Report from "./components/Report/Report";

export default (
  <Route>
    <Route path="/" component={AppComponent}>
      <IndexRoute component={ImageQueue} />
      <Route path="browser" component={ImageBrowser} />
      <Route path="targets" component={TargetAnalysis} />
      <Route path="spectate" component={SpectatorView} />
      <Route path="report" component={Report} />
    </Route>
  </Route>
);
