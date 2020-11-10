import React, {Component} from 'react';
import Axios from 'axios';
import Button from '@material-ui/core/Button';


export default class SignupForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nickName: "",
            age:"",
            color: "",
            gender:"",
            
        }

        this.addCat = this
            .addCat
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
    addCat(event) {
        event.preventDefault();
        const {nickName, age, gender, color} = this.state
        Axios
            .post(`http://localhost:5000/api/kittys/`, {
            nickName: nickName,
            age: age,
            gender: gender,
            color: color
            
        })
            .then(response => {
                
                    alert('Cat Added')
                    console.log(response.data)
                
            })
            .catch(error => {
                console.log("Registration error", error);
            });
    }

    render() {
        return (
            <div className="registerWrap">
                <form >
                    <div id="loginTitle" style={{marginLeft:"55px"}}>
                        <strong>New User</strong>
                    </div>

                    <div style={{
                        marginTop: "3px"
                    }}>
                        <input
                            type="text"
                            name="nickName"
                            placeholder="Enter Cat's Name"
                            value={this.state.nickName}
                            onChange={this.handleChange}
                            required/>
                    </div>
                    <div>
                    <input
                            type="text"
                            name="gender"
                            placeholder="Enter the Cat's Gender"
                            value={this.state.gender}
                            onChange={this.handleChange}
                            required/>
                    </div>

                    <div style={{
                        marginTop: "3px"
                    }}>
                        <input
                            type="number"
                            name="age"
                            placeholder="Enter the cat's age"
                            value={this.state.age}
                            onChange={this.handleChange}
                            required/>
                    </div>

                    <div style={{
                        marginTop: "3px"
                    }}>
                        <input
                            type="string"
                            name="color"
                            placeholder="Enter the cat's color"
                            value={this.state.color}
                            onChange={this.handleChange}
                            required/>
                    </div>

                    <div style={{
                        marginTop: "3px"
                    }}>

                        <span>
                            <Button id="loginButtons" variant="outlined" color="primary" onClick={this.addCat} className="submit" type="submit">Add Cat</Button>
                        </span>

                    </div>
                </form>
            </div>
        )
    }

}