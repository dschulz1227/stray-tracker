// import React, { Component } from 'react'
// import axios from 'axios';
// import {
//     Card, CardImg, CardText, CardBody,
//     CardTitle, CardSubtitle, Button
// } from 'reactstrap';

// export default class FriendRequestStatus extends Component {

//     constructor(props) {
//         super(props.userInfo._id)

//         this.state = {
//             friendRequestStatus: 'pending',
//             firstName: 'null',
//             pendingFriends: []
//         }
//     }

//     getFriendRequestStatus = async () => {

//         axios.get(`http://localhost:5000/api/friends/pendingRequests/${this.props.userInfo._id}`)
//             .then(result => {
//                 console.log(result.data)
//                 //this.setState({ friendRequestStatus: 'confirmed' })
//                 this.setState({ pendingFriends: result.data })
//             })
//             .catch(error => {
//                 console.log('error', error)
//                 //this.setState({ friendRequestStatus: 'pending' })
//                 this.setState({ firstName: 'no first name found' })
//             })

//     }
//     componentDidMount() {
//         this.getFriendRequestStatus()
//     }

//     render() {
//         return (
//             <div>
//                 { this.state.pendingFriends.length &&  this.state.pendingFriends.map((item) =>
//                     <Card>
//                         {/* <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */}
//                         <CardBody>
//                             <CardTitle><p>{item.requestedByInfo.firstName}</p></CardTitle>
//                             <CardSubtitle><p>{item.requestedByInfo.lastName}</p></CardSubtitle>
//                             <CardText><p>{item.requestedByInfo.email}</p></CardText>
//                             <Button>Confirm</Button>
//                         </CardBody>
//                     </Card>

//                 )
//                 }
//             </div>
//         )
//     }
// }
