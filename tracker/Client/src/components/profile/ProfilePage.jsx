import React from 'react';
// import {EditProfile} from './EditProfile'
import DisplayCats from '../cats/DisplayCats'
// import Button from '@material-ui/core/Button';
// import Axios from 'axios';
import DefaultImg from './assets/DefaultImg.jpg'



function ProfilePage(props) {
    console.log(props.userInfo)

    const user = props.userInfo
    console.log(user)
    console.log(user._id)
    console.log(props.userInfo._id)

    // let [responseData,
    //     setResponseData] = useState('');

    // getLocation = () => {
    //     navigator
    //         .geolocation
    //         .getCurrentPosition(function (position) {
    //             console.log(position)
    //         });
    // }

 

    return (
        <div style={{
            color: "black"
        }}>
            <div className="row" style={{ display:"flex", width:"100%" ,justifyContent:"center"}}>
                <h2 className="col-md-6 col-sm-12 col-lg-6"style={{fontWeight:"bolder"}}>This is {props.userInfo.firstName}'s Profile Page</h2>
                </div>

            <div className="row" style={{backgroundColor:"grey"}}>

            <div className="col">
                <img  className="profileImage" src={DefaultImg} alt="Profile Photo"/>
            </div>
                <div className="col-sm-12 col-md-2 col-lg-2" style={{borderColor:"red", borderWidth:"2px" , borderStyle:"solid", padding:"15px"}}>
                    <h5>Last name: {props.userInfo.lastName}</h5>
                    <h5>Age: {props.userInfo.age}</h5>
                    <h5>Location:{props.userInfo.location}</h5>
                    <h5>Image:{props.userInfo.profileImage}</h5>
                    <h5>Biography:{props.userInfo.biography}</h5>
            </div>

            <div className="col"></div>
            
            </div>
           
            {/* <AddImage user={user}/> */}
            <DisplayCats user={user}/>
            

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
