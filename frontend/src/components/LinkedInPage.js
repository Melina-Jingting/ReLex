import React, { Component } from 'react';

import LinkedIn from '../../node_modules/react-linkedin-login-oauth2/lib/LinkedIn';
import linkedin from 'react-linkedin-login-oauth2/assets/linkedin.png'

class LinkedInPage extends Component {
  state = {
    code: '',
    errorMessage: '',
  };


  handleSuccess = (data) => {
    this.setState({
      code: data.code,
      errorMessage: '',
    });
  }

  handleFailure = (error) => {
    this.setState({
      code: '',
      errorMessage: error.errorMessage,
    });
  }

  render() {
    console.log("hello");
    const { code, errorMessage } = this.state;
    return (
      <div>
        
        <LinkedIn
          clientId="78ioflr7umfzey"
          redirectUri="http://localhost:3000/linkedin"
        //   redirectUri={`${window.location.origin}/linkedin`}
          scope="r_emailaddress"
          state="34232423"
          onFailure={this.handleFailure}
          onSuccess={this.handleSuccess}
          supportIE
          redirectPath='/linkedin'
        >
          <img src={linkedin} alt="Log in with Linked In" style={{ maxWidth: '180px' }} />
        </LinkedIn>
        {!code && <div>No code</div>}
        {code && <div>Code: {code}</div>}
        {errorMessage && <div>{errorMessage}</div>}
      </div>
    );
  }
}

export default LinkedInPage;
