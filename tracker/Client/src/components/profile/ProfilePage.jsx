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

            <div className="col" style={{textAlign:"center"}}>
                <img  className="profileImage" src={DefaultImg} alt="Profile Photo"/>
            </div>
                <table className="col-sm-12 col-md-2 col-lg-2" style={{maxWidth:"300px", textOverflow:"clip", borderColor:"red", marginLeft:"-100px", borderWidth:"2px" , borderStyle:"solid", paddingRight:"15px", paddingTop:"100px", display:"flex", justifyContent:"flex-start", flexDirection:"column"}}>
                   <tr>
                    <th>Age: </th>
                    <td>{props.userInfo.age}</td>
                    </tr>
                    <tr>
                        <th>Location: </th>
                        <td>{props.userInfo.location}</td>
                    </tr>
                    <tr>
                        <th>Biography: </th>
                        <td>{props.userInfo.biography}</td>
                    </tr>
            </table>

    
            <div className="col" style={{textAlign:"center"}}>
                <img  className="profileImage" src={DefaultImg} alt="Profile Photo"/>
            </div>
            
            
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
