import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

const UserAuthorized = ({status}) => {
  if(status) {
    return null;    
  }
  return (
    <Redirect to="/signup" />
  );
}

const mapStateToProps = store => ({
  status: store.status,
});

export default connect(mapStateToProps)(UserAuthorized);
