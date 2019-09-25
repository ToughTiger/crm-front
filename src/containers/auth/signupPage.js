import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import SignupForm from '../../components/auth/signupForm';
import  {userSignupRequest, isUserExists} from '../../redux/reducers/user/userAction';

class SignupPage extends Component {


render() {
    const {userSignupRequest, isUserExists} = this.props;
    return(
       
            <div>
                <SignupForm
                isUserExists={isUserExists}
                userSignupRequest={userSignupRequest}
                />
            </div>
     

    )
}

}

SignupPage.propTypes = {
    userSignupRequest: PropTypes.func.isRequired,
    isUserExists: PropTypes.func.isRequired
}

export default connect(null, {userSignupRequest, isUserExists})(SignupPage);