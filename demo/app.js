'use strict';

import React from 'react/addons';
import Scatter from '../src/scatter';

const App = React.createClass({

  render() {
    return (
      <div className="demo">
        < Scatter >
          component stuff goes here
        </ Scatter >
      </div>
    )
  }
});

const content = document.getElementById('content');

React.render(<App/>, content)

