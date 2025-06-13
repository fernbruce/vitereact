import React, { Component } from "react";
import PropTypes from "prop-types";

class Banner extends Component {
  static propTypes = {
    msg: PropTypes.string.isRequired,
    num: PropTypes.number.isRequired,
    fn: PropTypes.func.isRequired,
    msg1: PropTypes.string.isRequired,
  };
  static defaultProps = {
    msg1: "默认值",
  };
  state = {
    msg: "子组件的信息",
  };
  render() {
    return (
      <div>
        <div>{this.state.msg}</div>
        轮播图组件:{this.props.msg}-{this.props.num}
        <button
          onClick={() => {
            this.changeNum();
          }}
        >
          改变数据
        </button>
        <div>{this.props.msg1}</div>
      </div>
    );
  }

  changeNum() {
    console.log(typeof this.props.num);
    this.props.changeNumber(this.props.num + 1);
  }
}

Banner.propTypes = {
  msg: PropTypes.string.isRequired,
  num: PropTypes.number.isRequired,
};
// Banner.defaultProps = { msg1: "default message" };
export default Banner;
