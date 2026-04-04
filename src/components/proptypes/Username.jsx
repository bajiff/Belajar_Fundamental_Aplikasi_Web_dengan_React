import React from 'react';
import PropTypes from 'prop-types';

class Username extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    const {username} = this.props;
    
    return <p>Infokan {username} kamu.</p>
  }
}

Username.propTypes = {
  username: PropTypes.string.isRequired
}

export default Username;