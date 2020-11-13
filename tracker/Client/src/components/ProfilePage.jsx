import React, {useState} from 'react';
import {EditProfile} from './EditProfile'
import DisplayCats from './DisplayCats'
import Button from '@material-ui/core/Button';
import Axios from 'axios';

function ProfilePage(props){
    console.log(props.userInfo)

    const user = props.userInfo
    console.log(user)

    // getLocation = () => {
    //     navigator
    //         .geolocation
    //         .getCurrentPosition(function (position) {
    //             console.log(position)
    //         });
    // }

    const clickHandler = (e) => {
        this
            .props
            .history
            .push('/DisplayCats')
    }

    const findMyCats = (userId) => {
        Axios
        .get(`http://localhost:5000/api/kittys/${this.props.user._id}/`)
        .then(res => {
            // console.log('you will see me', res.data)
            console.log('cats', res)
            this.setState({cats: res.data})
        })
}


    return (
        <div style={{
            color: "white"
        }}>
            <h5>This is {props.userInfo.firstName}'s Profile Page</h5>
            <h5>Last name: {props.userInfo.lastName}</h5>
            <h5>Age: {props.userInfo.age}</h5>
            <h5>Location:{props.userInfo.location}</h5>

            
            <Button
                variant="outlined"
                color="primary"
                onClick={clickHandler}
                component={DisplayCats}
                user={user}>
                Display Cats            
            </Button>
{/* 
            <Button
                variant="outlined"
                color="primary"
                onClick={this.clickHandler}
                component={this.EditProfile}
                user={this.props.user}>
                Edit Info
            </Button> */}

        </div>
    )
}

export default ProfilePage;
