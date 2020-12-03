import React from 'react';
import {Jumbotron, Container} from 'react-bootstrap';

// import Post from './post';
//  import AnswerFriendRequest from './AnswerFriendRequest'; 
// import ListFriends from './ListFriends';

const Homepage = props => {
    console.log(props.userInfo)
    return (
        <div className="container">
        <Jumbotron fluid style={{position:"relative",fontSize:"xxx-large"}}>
            <Container>
                Home
            </Container>
        </Jumbotron>
        <Container className="row">

        <div className="col-md-8 col-lg-8 col-sm-10" style={{height:"100vw", backgroundColor:"transparent",border:" 1px black solid", overflow:"auto", display:"flex", justifyContent:"center"}}>


            THIS IS WHERE HOME PAGE COMPONENTS GO


        </div>

        
        <div className="col-md-4 col-lg-4 col-sm-2" style={{border:"1px solid black"}}>
            
            This is where friends list will go
            
        </div>

        </Container>
        </div>
    )
};

export default Homepage;