import React from 'react';
import PropTypes from 'prop-types';

class Greeting extends React.Component {
  render() {
    const name = this.props;
    
    return <p>Hellow {name}</p>
  }
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired
}

export default Greeting;