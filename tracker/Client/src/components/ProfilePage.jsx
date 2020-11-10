import React from 'react'

const ProfilePage = props => {
    console.log(props.userInfo)

    function getLocation() {
        navigator.geolocation.getCurrentPosition(function(position) {
          console.log(position)
        });
      }
    

    return (
        <div style={{color:"white"}}>
            <h5>This is {props.userInfo.firstName}'s Profile Page</h5>
            <h5>Last name: {props.userInfo.lastName}</h5>
            <h5>Age: {props.userInfo.age}</h5>
            <h5>Location:{props.userInfo.location}</h5>
            
        </div>
    )
}

export default ProfilePage;