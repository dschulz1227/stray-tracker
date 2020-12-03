import React, {Component} from 'react';
import Axios from 'axios';
import Button from '@material-ui/core/Button';
import {Jumbotron, Container} from 'react-bootstrap';

export default class AddCat extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nickName: "",
            age: "",
            color: "",
            gender: "",
            userId: props.userInfo._id,
            activeUser: props.userInfo.firstName

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
        const {userId, nickName, age, gender, color} = this.state
        Axios
            .post(`http://localhost:5000/api/kittys/`, {
            userId: userId,
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
                alert("Cat NOT Added", error);
            });
    }

    render() {
        return (
            <div>
                <Jumbotron
                    fluid
                    style={{
                    position: "relative",
                    fontSize: "xx-large"
                }}>
                    <Container>
                        Add New Cat
                    </Container>
                </Jumbotron>

                <form>
                    
                    <div  style={{display:"flex", justifyContent:"center", flexDirection:"column"}}>
                        <input
                            type="text"
                            name="nickName"
                            placeholder="Enter Cat's Name"
                            value={this.state.nickName}
                            onChange={this.handleChange}
                            required/>
                    
                        <input
                            type="text"
                            name="gender"
                            placeholder="Enter the Cat's Gender"
                            value={this.state.gender}
                            onChange={this.handleChange}
                            required/>
                    
                        <input
                            type="number"
                            name="age"
                            placeholder="Enter the cat's age"
                            value={this.state.age}
                            onChange={this.handleChange}
                            required/>
                    
                        <input
                            type="string"
                            name="color"
                            placeholder="Enter the cat's color"
                            value={this.state.color}
                            onChange={this.handleChange}
                            required/>
                    

                        <span>
                            <Button
                                id="loginButtons"
                                variant="outlined"
                                color="primary"
                                onClick={this.addCat}
                                className="submit"
                                type="submit">Add Cat</Button>
                        </span>

                    </div>
                </form>
            </div>
        )
    }

}