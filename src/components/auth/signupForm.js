import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './login.css';

 class SignupForm extends Component {
     constructor(props){
         super(props);

         this.state = {
             name: "",
             email: "",
             password: "",
             role: "",
             errors: {},
             isLoading: false,
             message: ""
             };

            
     }

     onChangeHandle = name => event=> {
         this.setState({[name]: event.target.value});
      
     }

     onSubmit = event => {
        event.preventDefault();
          this.setState({errors: {}, isLoading: true});
          this.props.userSignupRequest(this.state)
          .then((message) => {
            
                this.setState({message: message});
                this.context.router.push('/');

          })
          .catch(error => {
              this.setState({error: error})
          })
          }
      
     


     render(){

        return(
            <form className="form-signin mt-5" onSubmit={this.onSubmit}>
                    <h1 className="h3 mb-3 font-weight-bold"> Please sign-up </h1>

                    <label className="sr-only">Full Name</label>
                    <input type="text" 
                     onChange={this.onChangeHandle("name")}
                     className="form-control mt-2"
                     placeholder="Full Name" required 
                     value = {this.state.name}
                    
                     />
    
                    <label  className="sr-only">Email address</label>
                    <input type="email" 
                    onChange={this.onChangeHandle("email")}
                    className="form-control mt-2" 
                    placeholder="Email address" required
                    value = {this.state.email}
                    
                    />
    
                    <label  className="sr-only">Password</label>
                    <input type="password" 
                     onChange={this.onChangeHandle("password")}
                    className="form-control mt-2" 
                    placeholder="Password" required 
                    value = {this.state.password}
                   
                    />
    
                    <label className="sr-only">Role</label>
                    <input type="text" 
                     onChange={this.onChangeHandle("role")}
                    className="form-control mt-2" 
                    placeholder="Role" required 
                    value = {this.state.role}
                    />
                   
                    <button 
                    className="btn btn-lg btn-primary btn-block btn-raised" 
                    type="submit"
                    onClick={this.submitHandle}
                    >Sign Up</button>
                  
           </form>
        )

     }
   
}

SignupForm.propTypes = {
    userSignupRequest: PropTypes.func.isRequired,
    isUserExists: PropTypes.func.isRequired
}

SignupForm.contextType = {
    router: PropTypes.object.isRequired
}


export default SignupForm;