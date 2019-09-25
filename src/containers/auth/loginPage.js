import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import LoginForm from '../../components/auth/loginForm';
import {userSigninRequest, isUserExists} from '../../redux/reducers/user/userAction'

class LoginPage extends Component {
  

    render() {
        const {userSigninRequest, isUserExists} = this.props;
        return(
            <div>
                <LoginForm
                    userSigninRequest = {userSigninRequest}
                    isUserExists= {isUserExists}
                />
            </div>

        )

    }

}

LoginPage.propTypes = {
    userSigninRequest: PropTypes.func.isRequired,
    isUserExists: PropTypes.func.isRequired
}
export default  connect(null, {userSigninRequest, isUserExists})(LoginPage);