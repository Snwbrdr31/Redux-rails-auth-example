import React from 'react';
import { connect } from 'react-redux';

const Home = ({ isAuthenticated }) => (
  <div>
    <h3>Home</h3>
    <p>
      { isAuthenticated ? 'Logged In' : 'Logged Out' }
    </p>
  </div>
);

const mapStateToProps = (state) => {
  return { isAuthenticated: state.auth.isAuthenticated }
}

export default connect(mapStateToProps)(Home);
