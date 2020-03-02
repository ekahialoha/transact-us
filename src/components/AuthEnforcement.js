import React, { Component } from 'react';
import jwtDecode from 'jwt-decode';

const AuthEnforcement = (NextComponent) => {
  return class CheckAuthorization extends Component {
    constructor(props) {
      super(props);
      this.state = { hasToken: false }
    };

    componentDidMount = () => {
      const token = localStorage.getItem('session_key');
      if (token !== null) {
        const decoded = jwtDecode(token);
        this.setState({ hasToken: true });
        if (this.props.user.id === undefined) {
          this.props.updateUser(decoded.user);
        }
      } else {
        this.props.history.push('/login');
      }
    };

    render() {
      if(this.state.hasToken) {
        return <NextComponent {...this.props} />;
      } else {
        return null;
      }
    };
  };
};

export default AuthEnforcement;
