/* eslint no-unused-vars:0 */

import React from 'react/addons';
import tweenState from 'react-tween-state';
import Node from './scatter-node';
import d3 from 'd3';
import EasingSelector from './easing-selector';

const Scatter = React.createClass({
  getInitialState: function() {

    var svgWidth = 800;
    var svgHeight = 600;

    return {
      svgWidth: svgWidth,
      svgHeight: svgHeight,
      data: this.createData(20), // this doesn't work. i don't know why yet.
      easingOption: 'easeInOutBack',
      started: false
    }
  },
  createData: function(n) {

    // hacky... just trying to center things... should be a function of width/height
    var xOffset = 100;
    var yOffset = 100;

    var arr = [];
    for (var i = 0; i<n; i++) {
      arr.push([
        Math.floor(Math.random() * (400) + yOffset),
        Math.floor(Math.random() * (600) + xOffset),
        Math.floor(Math.random() * 30 /* max radius */ + 5 /* in case super small */) // radius
      ])
    }
    return arr;
  },
  drawNodes: function(data) {
    var nodes = data.map((d, index) => {
      console.log(this.state.easingOption)
      return (<Node
        key={index}
        x={d[0]}
        y={d[1]}
        r={d[2]}
        color={'#' + (Math.random().toString(16) + '0000000').slice(2, 8)}
        easing={this.state.easingOption}/>
      )
    })
    return nodes;
  },
  handleSVGClick: function() {
    this.setState({
      data: this.createData(20),
      started: true
    })
  },
  handleChoice: function(e) {
    this.setState({
      easingOption: e.target.value
    })
  },
  render: function() {
    return (
      <div>
        <div style={{'marginLeft': '20px', 'fontFamily': 'Futura, Helvetica'}}>
          <h1> D3 and React: Part II </h1>
          <button
            onClick={this.handleSVGClick}
            style={{
              color: 'rgba(52,152,220, .4)',
              backgroundColor: 'rgba(240,240,240,1)',
              fontFamily: 'Futura',
              textTransform: 'uppercase',
              border: 'none',
              padding: '10px 20px',
              cursor: 'pointer',
              fontSize: '28px',
              borderRadius: '5px'
            }}>
            {this.state.started ? 'Change' : 'Start'}
          </button>
          <EasingSelector
            handleChoice={this.handleChoice}
          />
        </div>
        <svg
          style={{
            'border': '2px solid black',
            'margin': '20px'
          }}
          width={this.state.svgWidth}
          height={this.state.svgHeight}>
        {this.drawNodes(this.state.data)}
        </svg>
      </div>
    )
  }
});

export default Scatter;
