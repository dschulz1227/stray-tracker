import React from 'react';
import {EditProfile} from './EditProfile'
import Button from '@material-ui/core/Button';

function ProfilePage(props){
    console.log(props.userInfo)

    // getLocation = () => {
    //     navigator
    //         .geolocation
    //         .getCurrentPosition(function (position) {
    //             console.log(position)
    //         });
    // }

    // clickHandler = (e) => {
    //     this
    //         .props
    //         .history
    //         .push('/EditProfile')
    // }

    return (
        <div style={{
            color: "white"
        }}>
            <h5>This is {props.userInfo.firstName}'s Profile Page</h5>
            <h5>Last name: {props.userInfo.lastName}</h5>
            <h5>Age: {props.userInfo.age}</h5>
            <h5>Location:{props.userInfo.location}</h5>
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
