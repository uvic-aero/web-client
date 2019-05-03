import React from "react";
import { Route, IndexRoute } from "react-router";

import AppComponent from "./components/App/AppComponent";
import ImageQueue from "./components/ImageQueue/ImageQueue";
import ImageBrowser from "./components/ImageBrowser/ImageBrowser";
import TargetAnalysis from "./components/TargetAnalysis/TargetAnalysis";
import SpectatorView from "./components/SpectatorView/SpectatorView";
import Services from "./components/Services/Services";
import Liveview from "./components/Liveview/Liveview";
import MapView from "./components/MapView/MapView"

export default (
  <Route>
    <Route path="/" component={AppComponent}>
      <IndexRoute component={ImageQueue} />
      <Route path="browser" component={ImageBrowser} />
      <Route path="targets" component={TargetAnalysis} />
      <Route path="spectate" component={SpectatorView} />
      <Route path="services" component={Services} />
      <Route path="liveview" component={Liveview} />
      <Route path="mapview" component={MapView} />
    </Route>
  </Route>
);
