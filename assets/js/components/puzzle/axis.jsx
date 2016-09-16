import React, { PropTypes } from 'react';
import AnimatedAxis from './animated_axis';

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
    const {active, displayOptions, children, moved} = this.props;
    const {x, y, z, radius, angle} = displayOptions;
    const marbleRadius = active ? 12.5 : 2.5;
    const axisRadius = radius - 30;
    const ringClass = active ? "ring" : "ring-goal";

    const marbles = children.map((marble, i) => {
      const marbleAngle = i * 360/children.length;
      return <div className="marble-container" style={{
          top: -marbleRadius,
          left: -marbleRadius,
          transform: "translate("+ (axisRadius) + "px, " + (axisRadius) + "px) rotate(" + (marbleAngle + angle) + "deg)"
        }} key={marble.key || "null" + i}>
        <div style={{
            transform: "translate(" + (radius - 15) + "px, 0)"
          }}
            >
          {marble}
        </div>
      </div>;
    });

    return (
      <div className={ringClass} onMouseDown={this.clickAxis} style={{
          transform: "translate("+x+"px, " +y+"px)",
          width: active ? 2*radius : 0,
          height: active ? 2*radius : 0,
          borderRadius: radius,
          zIndex: z
        }}>
        <AnimatedAxis moved={moved} active={active}>
          {marbles}
        </AnimatedAxis>
      </div>
    );
  }
}

export default Axis;
