// import React, { Component } from 'react'
// // import { Container, Row, Col } from 'reactstrap';

// // import { FaDesktop } from 'react-icons/fa';
// import Axios from 'axios';

// class ListFriends extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             users: []
//         }
//     }

//     componentDidMount() {
//         this.getCollections()
//     }

//     getCollections = () => {
//         Axios.get(`http://localhost:5000/api/friends/friends/${this.props.userInfo._id}`).then(res => {
//             console.log(res)
//             this.setState({
//                 users: res.data
//             })
//         })
//     }

//     removeFriend2 = (user) => {
//         Axios.delete(`http://localhost:5000/api/friends/deleteFriend/${this.props.userInfo._id}/${user._id}`).then(res => {
//             this.getCollections()
//         })
//     }

//     render() {
//         return (
//             < >

//                 <div className="row text-white">
//                     <div className="col-lg-12">
//                         <h4>Friend List <small className="float-right">Total Friends ({this.state.users.length})</small></h4>
//                         <hr />
//                         {!this.state.users.length && <p>You have no friends! <a href="/AddFriends"><button className="btn-danger btn btn-sm">Add a friend</button></a> </p>}
//                         {
//                             this.state.users.length > 0 && this.state.users.map((user, index) =>
//                                 <div className="media">
//                                     <img src={user.profileImage} alt="John Doe" className="dark-red rounded-circle  rounded" style={{ maxWidth: "40px", maxheight: "40px", marginBottom: "15px" }} />
//                                     <div className="media-body margin-left-10 text-white">
//                                         <h5 className="mt-2">{user.firstName}
//                                             <button onClick={() => this.removeFriend2(user)} className="float-right btn btn-sm btn-danger"> Remove Friend</button></h5>
//                                         {user.loginTime && <small className="text-white"><FaDesktop className="text-success" /> ONLINE</small>}

//                                     </div>
//                                 </div>
//                             )
//                         }
//                     </div>
//                 </div>
//             </>
//         )
//     }
// }
// export default ListFriends;


