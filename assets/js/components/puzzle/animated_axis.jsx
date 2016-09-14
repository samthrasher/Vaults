import React, { PropTypes } from 'react';

class AnimatedAxis extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.moved && this.props.moved) {
      //dirty hack to get the animation to trigger again when the same
      //wheel is rotated twice... see https://css-tricks.com/restart-css-animation/

      const animation = this._axis.style.animationName;
      this._axis.style.animationName = "none";
      void this._axis.offsetWidth;
      this._axis.style.animationName = animation;
    }
  }

  render () {
    const n = this.props.children.length;
    let animation = "none";
    if (this.props.moved)
      animation = this.props.moved < 0 ? "rotate-cw-" + n : "rotate-ccw-" + n;

    return (
      <div className="axis" ref={axis => {this._axis = axis;}} style={{
          animationName: animation,
          animationTimingFunction: "ease-in-out",
          animationDuration: "0.6s"
        }}>
        {this.props.children}
      </div>
    );
  }
}

export default AnimatedAxis;
