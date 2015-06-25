import React from 'react/addons';
import tweenState from 'react-tween-state';

const Node = React.createClass({
  mixins: [tweenState.Mixin],
  getInitialState: function() {
    return {
      x: this.props.x,
      y: this.props.y
    }
  },
  componentWillReceiveProps: function(nextProps) {

    this.tweenState('x', {
      // beginValue (default: the current value the state being tweened
      // this.state[stateNameString])
      easing: tweenState.easingTypes[this.props.easing],
      duration: 2000,
      endValue: nextProps.x
    });

    this.tweenState('y', {
      easing: tweenState.easingTypes[this.props.easing],
      duration: 2000,
      endValue: nextProps.y
    });

    this.tweenState('r', {
      easing: tweenState.easingTypes[this.props.easing],
      duration: 500,
      endValue: nextProps.r
    });

    this.tweenState('color', {
      easing: this.colorEasing,
      duration: 500,
      endValue: nextProps.color
    })
  },
  // colorEasingSetup: function (beginValue, endValue, totalDuration) {

  //   return {
  //     colorInterpolator: colorInterpolator,
  //     colorTimeScale: colorTimeScale
  //   }
  // },
  colorEasing: function(currentTime, beginValue, endValue, totalDuration) {
    var colorInterpolator = d3.interpolateRgb(beginValue, endValue);
    var colorTimeScale = d3.scale.linear().domain([0, totalDuration]).range([0, 1]);
    var scaledTime = colorTimeScale(currentTime)

    // console.log(scaledTime)
    // console.log(colorInterpolator(scaledTime))
    return colorInterpolator(scaledTime)

  },
  render: function() {
    // console.log(this.getTweeningValue('color'))
    return (
      <g transform={'translate(' + this.getTweeningValue('y') + ',' + this.getTweeningValue('x') + ')'}>
        <circle
          style={{
            fill: this.getTweeningValue('color')
          }}
          r={this.getTweeningValue('r')} //Ken - why does it snap to the first time?
          className={'kitten'} />
      </g>
    )
  }
});

module.exports = Node;
