import React from 'react';
import Axios from 'axios';
import Button from '@material-ui/core/Button';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props)
        this.state = {
            email: "",
            password: ""
        };
        this.handleSubmit = this
            .handleSubmit
            .bind(this);
        this.handleChange = this
            .handleChange
            .bind(this);
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const {email, password} = this.state
        Axios
            .post('http://localhost:5000/api/auth', {
            email: email,
            password: password
        })
            .then(response => {

                this
                    .props
                    .setCookieApp(response.data);
                this
                    .props
                    .handleLogin(event)

                if (response.data.logged_in) {
                    this
                        .props
                        .handleSuccessfulAuth(response.data);
                }
            })
            .catch(error => {
                console.log("Unable to find this user!!!!!", error)
                console.log("Oops! something went wrong, check your credentials and try again.", error);
            });
    }
    render() {
        return (
            <div className="container-fluid" style={{padding:"0", margin:"0"}}>

                <form className="input LoginForm" onSubmit={this.handleSubmit} style={{dispay:"flex", justifyContent:"center"}}>
                    
                        <strong id="loginTitle" >Log In</strong>
                   
                    <input
                    style={{
                        marginTop: "15px",
                        display: "grid",
                        justifyContent: "center"
                    }}
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        required/>
                    
                        <input
                         style={{
                            marginTop: "15px",
                            display: "grid",
                            justifyContent: "center"
                        }}
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            required/>
                    

                    <Button
                        type="submit"
                        id="loginButtons"
                        variant="outlined"
                        color="primary"
                        className="submit"
                        onClick={this.handleSubmit}>Enter</Button>

                </form>
                </div>
            
        )
    }
}
export default LoginForm