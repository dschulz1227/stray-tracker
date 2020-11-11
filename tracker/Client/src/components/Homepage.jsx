import React from 'react';

// import Post from './post'; import AnswerFriendRequest from
// './AnswerFriendRequest'; import ListFriends from './ListFriends';

const Homepage = props => {
    console.log(props.userInfo)
    return (
        <div>
            <div className="row" style={{
                paddingTop: "50px"
            }}>
                <div
                    className="text-center dark-red"
                    style={{
                    width: "18rem",
                    margin: "0 auto",
                    paddingTop: "10px",
                    marginBottom: "30px"
                }}>
                    {/* <img className="card-img-top" src={props.userInfo.profileImage} alt="Card image cap" style={{ width: "80px" }} /> */}
                    <div className="card-body">
                        <h5>This is {props.userInfo.firstName}'s Homepage</h5>
                    </div>
                </div>
            </div>

            {/* <div className="col-lg-6 shadow-lg p-4 mb-4">
            <Post user={props.userInfo} />
          </div> */}
            <div
                className="col-lg-3"
                style={{
                padding: "50px"
            }}>
                {/* <ListFriends userInfo={props.userInfo} /> */}
                <hr/> {/* <div>
              <AnswerFriendRequest currentUserId={props.userInfo._id} />
            </div> */}
            </div>
        </div>
    )
};

export default Homepage;