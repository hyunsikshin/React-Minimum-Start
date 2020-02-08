import React, { Component } from "react";
import LoginPresenter from "./LoginPresenter";

class LoginContainer extends Component {
  state = {
    something: null,
    loading: false,
    error: null
  };

  render() {
    const { something, loading, error } = this.state;
    return (
      <LoginPresenter something={something} loading={loading} error={error} />
    );
  }
}

export default LoginContainer;
