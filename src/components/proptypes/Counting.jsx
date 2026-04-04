import React from "react";
import PropTypes from "prop-types";

class Counting extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const {count} = this.props;

    return <h1>Your saldo {count}</h1>
  }
}

Counting.propTypes = {
  count: PropTypes.number.isRequired
}

export default Counting;