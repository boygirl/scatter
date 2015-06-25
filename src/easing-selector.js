
import React from 'react/addons';

const EasingSelector = React.createClass({
  getInitialState: function() {
    return {

    }
  },
  _easingOptions: [
    'linear',
    'easeInQuad',
    'easeOutQuad',
    'easeInOutQuad',
    'easeInCubic',
    'easeOutCubic',
    'easeInOutCubic',
    'easeInQuart',
    'easeOutQuart',
    'easeInOutQuart',
    'easeInQuint',
    'easeOutQuint',
    'easeInOutQuint',
    'easeInSine',
    'easeOutSine',
    'easeInOutSine',
    'easeInExpo',
    'easeOutExpo',
    'easeInOutExpo',
    'easeInCirc',
    'easeOutCirc',
    'easeInOutCirc',
    'easeInElastic',
    'easeOutElastic',
    'easeInOutElastic',
    'easeInBack',
    'easeOutBack',
    'easeInOutBack',
    'easeInBounce',
    'easeOutBounce',
    'easeInOutBounce'
  ],
  render: function() {
    var options = this._easingOptions.map((option) => {
      return (
        <option value={option} > {option} </option>
      )
    })
    return (
      <select onChange={this.props.handleChoice}
        style={{
          color: 'rgba(52,152,220, .4)',
          backgroundColor: 'rgba(240,240,240,1)',
          fontFamily: 'Futura',
          border: 'none',
          marginLeft: '20px',
          padding: '10px 20px',
          cursor: 'pointer',
          fontSize: '14px',
          borderRadius: 'none',
          height: '45px',
          width: '240px'
        }}
      >
        <option value={'linear'}> {'Select an easing function'} </option>
        {options}
      </select>
    )
  }
});

module.exports = EasingSelector;



