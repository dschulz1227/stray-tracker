import React from 'react';

// import Post from './post';
//  import AnswerFriendRequest from './AnswerFriendRequest'; 
// import ListFriends from './ListFriends';

const Homepage = props => {
    console.log(props.userInfo)
    return (
        <div className="container-fluid">
            <header className="row" style={{
                paddingTop: "50px",
                width:"100%",
                border:"black 1px solid",
                display:"flex",
                justifyItems:"flex-start"
            }}>
                <div
                    style={{
                    width: "18rem",
                    margin: "0 auto",
                    paddingTop: "10px",
                    marginBottom: "30px",
                    borderStyle: "solid",
                    borderWidth:"1px",
                    borderColor:"black",
                    height:"fit-content"
                }}>
                    {/* <img className="card-img-top" src={props.userInfo.profileImage} alt="Card image cap" style={{ width: "80px" }} /> */}
                    <div className="card-body">
                        <h3>Currently tracking {props.userInfo.firstName}'s Cats</h3>
                    </div>
                </div>
            </header>

            {/* <div className="col-lg-6 shadow-lg p-4 mb-4">
            <Post user={props.userInfo} />
          </div> */}
            <div
                className="col-lg-3"
                style={{
                padding: "50px"
            }}>
                {/* <ListFriends userInfo={props.userInfo} /> */}
                 <div>
               {/* <AnswerFriendRequest currentUserId={props.userInfo._id} /> */}
            </div>
            </div>
        </div>
    )
};

export default Homepage;