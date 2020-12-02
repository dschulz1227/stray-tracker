import React, {Component} from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';





export class EditProfile extends Component {
    constructor(props) {
        super(props)

        this.state = {}

        this.handleChange = this
            .handleChange
            .bind(this);
    }

    editUserDetails = event => {
        event.preventDefault();
        const {firstName, lastName, age, location, email} = this.state
        axios
            .put(`http://localhost:5000/api/users/${this.props.user._id}`, {
            firstName: firstName,
            lastName: lastName,
            email: email,
            age: age,
            location: location,
                        
        })
            .then(response => {
                alert('Profile Updated!')
                console.log(response)
                if (response.data.status === "updated") {
                    this
                        .props
                        .handleSuccessfulAuth(response.data);
                }
            })

    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }



    render() {
        return (
            <div style={{display:"grid", justifyContent:"center", marginTop:"75px"}}>
                <form>
                    <div style={{
                        marginTop: "3px"
                    }}>
                         <div style={{
                        marginTop: "3px"
                    }}>
                            <input
                                type="text"
                                name="name"
                                placeholder={this.props.user.name}
                                value={this.state.name}
                                onChange={this.handleChange}
                                required/>
                        </div>

                        <div style={{
                        marginTop: "3px"
                    }}>
                            <input
                                type="text"
                                name="email"
                                placeholder={this.props.user.email}
                                value={this.state.email}
                                onChange={this.handleChange}
                                required/>
                        </div>

                        <div style={{
                        marginTop: "3px"
                    }}>
                            <input
                                type="text"
                                name="password"
                                placeholder="Change password"
                                value={this.state.password}
                                onChange={this.handleChange}
                                required/>
                        </div>
                    <div style={{
                        marginTop: "3px"
                    }}>
                        <input
                            type="text"
                            name="occupation"
                            placeholder="what is your job?"
                            value={this.state.occupation}
                            onChange={this.handleChange}
                            required/>
                    </div>

                    <div style={{
                        marginTop: "3px"
                    }}>
                        <input
                            type="text"
                            name="age"
                            placeholder="Enter your age"
                            value={this.state.age}
                            onChange={this.handleChange}
                            required/>
                    </div>

                    </div>
                    <span style={{display:"grid", justifyContent:"center", marginTop:"10px"}}>
                        <Button variant="outlined" color="primary" onClick={this.addUserDetails} className="submit" type="submit">Update Profile</Button>
                    </span>
                </form>
            </div>
       
        )
    }

}

export default EditProfile