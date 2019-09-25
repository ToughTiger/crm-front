import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './login.css';
import {Redirect} from 'react-router-dom';

 class LoginForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            error: {},
            isLoading: false,
            redirectTo: false
                      
        };
      
    }

    onChange = (name) => event => {
       this.setState({[name]: event.target.value})
       
    }
    onSubmit = (event) => {

        const user = {
            email: this.state.email,
            password: this.state.password
        }

        event.preventDefault();
        this.setState({error: {}, isLoading:true});
        this.props.userSigninRequest(user)
        .then(res => {
            console.log(JSON.stringify(res))
        this.setState({redirectTo: true, isloading: false})
        })
        .catch(error => {
            console.log(error)
            this.setState({error: error, isLoading: false});
        })
        
    };

    render(){
        const {redirectTo} = this.state;
        if(redirectTo) {
            return <Redirect to='/' />
        }
     
        return(
          
            <form className="form-signin" onSubmit={this.onSubmit}>
                    <img className="mb-4" src="/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"/>

                    <h1 className="h3 mb-3 font-weight-bold">Please sign in</h1>
                  
                    <label  className="sr-only">Email address</label>
                    <input 
                    type="email" 
                    id="inputEmail" 
                    className="form-control" 
                    placeholder="Email address" 
                    required autoFocus
                    onChange={this.onChange("email")}
                    value = {this.state.value}
                    />
                    <label  className="sr-only">Password</label>
                    <input 
                    type="password" id="inputPassword" 
                    className="form-control" 
                    placeholder="Password" required
                    onChange = {this.onChange('password')}
                    value= {this.state.password}
                    />
                    <div className="checkbox mb-3">
                      
                    </div>
                    <button className="btn btn-lg btn-primary btn-block btn-raised" type="submit">Sign in</button>
                  
            </form>
        )

    }
   
}

 LoginForm.propTypes = {
    userSigninRequest: PropTypes.func.isRequired
 }

//  LoginForm.contextTypes = {
//      router: PropTypes.object.isRequired
//  }
 
export default LoginForm;