import React, { PropTypes } from 'react';

class Axis extends React.Component {
  constructor (props) {
    super(props);
    this.clickAxis = this.clickAxis.bind(this);
  }

  clickAxis (e) {
    e.preventDefault();
    if (this.props.active) {
      if (e.shiftKey) {
        this.props.triggerAxis(-1);
      }
      else {
        this.props.triggerAxis(1);
      }
    }
  }

  render () {
    const {active, displayOptions, children} = this.props;

    return (
      <div>
        <h2 onMouseDown={this.clickAxis}> Axis, active: {active ? "true" : "false"}</h2>
        {children}
      </div>
    );
  }
}

export default Axis;
