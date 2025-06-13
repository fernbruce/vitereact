import React from "react";
import PropTypes from "prop-types";
function Son2(props) {
  //   console.log(props);
  const btn = React.createRef();
  return (
    <div>
      {props.num}-- {props.msg}
      <input type="text" ref={btn} />
      <button
        onClick={() => {
          console.log(btn.current);
        }}
      >
        点击按钮
      </button>
    </div>
  );
}

Son2.propTypes = {
  num: PropTypes.number.isRequired,
};

Son2.defaultProps = {
  num: 100,
  msg: "msg的默认值",
};

export default Son2;
