import React, {Component} from 'react';
import Axios from 'axios';
import Button from '@material-ui/core/Button';


export default class SignupForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            lastName:"",
            email: "",
            password: "",
            age: "",
            location:""
            
        }

        this.addUser = this
            .addUser
            .bind(this);
        this.handleChange = this
            .handleChange
            .bind(this);
    }

    //handle User input

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    // submit form/add user
    addUser(event) {
        event.preventDefault();
        const {email, password, firstName, lastName, age, location} = this.state
        Axios
            .post(`http://localhost:5000/api/users/`, {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            age: age,
            location: location
            
        })
            .then(response => {
                alert('registered')
                if (response.data.status === "created") {
                    this
                        .props
                        .handleSuccessfulAuth(response.data);
                        console.log(response.data)
                }
            })
            .catch(error => {
                console.log("A user with this email already exists", error);
            });
    }

    render() {
        return (
            <div className="container-fluid">
                <form >
                    
                        <strong id="loginTitle">New User</strong>
                    
                        <input
                        style={{
                            marginTop: "15px",
                            display: "grid",
                            justifyContent: "center"
                        }}
                            type="text"
                            name="firstName"
                            placeholder="Enter your first name"
                            value={this.state.name}
                            onChange={this.handleChange}
                            required/>
                    
                    <input
                    style={{
                        marginTop: "15px",
                        display: "grid",
                        justifyContent: "center"
                    }}
                            type="text"
                            name="lastName"
                            placeholder="Enter your last name"
                            value={this.state.name}
                            onChange={this.handleChange}
                            required/>
                    
                        <input
                        style={{
                            marginTop: "15px",
                            display: "grid",
                            justifyContent: "center"
                        }}
                            type="text"
                            name="email"
                            placeholder="Enter your email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            required/>
                    
                        <input
                        style={{
                            marginTop: "15px",
                            display: "grid",
                            justifyContent: "center"
                        }}
                            type="text"
                            name="password"
                            placeholder="New password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            required/>
                    
                        <input
                        style={{
                            marginTop: "15px",
                            display: "grid",
                            justifyContent: "center"
                        }}
                            type="number"
                            name="age"
                            placeholder="What is your age?"
                            value={this.state.age}
                            onChange={this.handleChange}
                            required/>
                   
                        <input
                        style={{
                            marginTop: "15px",
                            display: "grid",
                            justifyContent: "center"
                        }}
                            type="string"
                            name="location"
                            placeholder="Where do you live?"
                            value={this.state.location}
                            onChange={this.handleChange}
                            required/>
                    

                        <span>
                            <Button id="loginButtons" variant="outlined" color="primary" onClick={this.addUser} className="submit" type="submit">Create</Button>
                        </span>

                    
                </form>
                </div>
        )
    }

}