import React, { Component } from 'react';

const AuthEnforcement = (NextComponent) => {
  return class CheckAuthorization extends Component {
    constructor(props) {
      super(props);
      this.state = { hasToken: false }
    };

    componentDidMount = () => {
      const token = localStorage.getItem('session_key');
      if (token !== null) {
        this.setState({ hasToken: true })
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
