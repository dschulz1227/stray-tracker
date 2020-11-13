import React, {Component} from 'react';
import axios from 'axios';
import {Card, CardTitle, Row, Col} from 'reactstrap';

//css component imports
import Button from '@material-ui/core/Button';
// import DeleteIcon from '@material-ui/icons/Delete';
// import CreateOutlinedIcon from '@material-ui/icons/CreateOutlinedIcon';

////////////

export default class DisplayCats extends Component {
    constructor(props) {
        super(props);
        console.log(props.user,'my user')
        this.state = {
            cats: [],
            age: '',
            color: '',
            location: '',
            anchorEl: null,
            dateLogged: null,
        }
        console.log(props.user)
    }

    componentDidMount() {
        this.getCollection('All')
        console.log(this.props.user)
    }

    //get entire collection
    getCollection = (_Id) => {
        console.log(this.props.user)
        console.log(this.state.cats)

        axios
            .get(`http://localhost:5000/api/kittys/getByUserId/${this.props.user._id}`)
            .then(res => {
                console.log('you will see me', res.data)
                const cats = res.data
                console.log(cats)
                this.setState({       
                    cats: cats
                     })
            })
    }

    // getAllCats = (userId) => {
    //     axios
    //         .get(`http://localhost:5000/api/kittys/`)
    //         .then(res => {
    //             const cats = res.data
    //             console.log(cats, 'all existing cats')
    //             console.log(this.props.user)
    //             this.setState({
    //                 cats: cats
    //             })
    //             for(let i = cats.userId; i < cats.length; i+1){
    //                 if(i === this.props.user._Id){
    //                     console.log(i)
    //                 }
    //             }
                
                
                
    // })}

    // deleteTask(taskId) {
    //     console.log(taskId, 'Check if the id we passed in is not undefined')
    //     console.log(this.props.userId, 'this is the userid')
    //     console.log(this.props, 'props data')
    //     axios
    //         .delete(`http://localhost:5000/api/tasks/delete/${this.props.user._id}/${taskId}`)
    //         .then(res => {
    //             const thisTask = (res.taskId)
    //             alert('Task deleted')
    //         })
    // }

    //task complete
    // markTaskComplete = (taskId) => {
    //     console.log(taskId, 'Are we getting the id?')
    //     console.log(this.props.userId, 'this is the userid')
    //     console.log(this.props, 'props data')
    //     console.log(this.props.user._id, 'userId')
    //     this.setState({isCompleted: true})
    //     // alert('You have completed this task!')
    //         console.log(this.state.cards)
    //     }
    

    //Set category to search by
    handleChange = (value) => {
        this.setState({category: value});
    }

    //dropdown menu functions
    handleClick = (event) => {
        this.setState({anchorEl: event.currentTarget})
    };

    handleClose = () => {
        this.setState({anchorEl: null});
    }


    // completeTask = (task) => {
    //     console.log(task)
    //     task.completedDate = new Date();
    //     axios
    //         .put(`http://localhost:5000/api/tasks/update/${task._id}`, task)
    //         .then(res => {

    //             this.getCollection('All')
    //             return;
    //             //Update specific object in cards array by task id
                
    //             //get copy of cards
    //             let newArrayOfCards = [...this.state.cards];

    //             //update task by id
    //             for(let i = 0; newArrayOfCards.length; i++){
    //                 if(newArrayOfCards[i]._id === task._id){
    //                     newArrayOfCards[i].completedDate = new Date();
    //                     break;
    //                 }
    //             }
                
    //         })
    // }

    render() {
        return (
            <div className="container-fluid">
                <div
                    className="row"
                    style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "45px",
                    marginLeft: "15px",
                    marginRight: "15px"
                }}>
                    <Button
                        variant="outlined"
                        color="primary"
                        style={{
                        marginLeft: "15px",
                        marginRight: "15px"
                    }}
                        onClick={() => this.getCollection('All')}
                        value={this.state.cats}>Display All</Button>
                </div>
                <div
                    className="row"
                    style={{
                    justifyContent: "space-evenly"
                }}>
                    {this
                        .state
                        .cats
                        .map((kitty, index) => {
                            return (
                                <div
                                    className="col-md-4 col-lg-2 col-sm-12 mr-auto"
                                    key={index}
                                    style={{
                                    alignItems: "center",
                                    justifyContent: "center",
                                    display: "grid",
                                    fontWeight: "lighter",
                                    padding: "20px"
                                }}>
                                    <Card
                                        style={{
                                        marginBottom: "5px",
                                        padding: "20px",
                                        display: "grid",
                                        justifyContent: "center",
                                        color:"black"
                                    }}>
                                        <CardTitle
                                            style={{
                                            color: "black",
                                            fontWeight: "bold",
                                            fontSize: "20px",
                                            justifyContent: "center",
                                            display: "flex"
                                        }}>
                                            {kitty.nickName}
                                        </CardTitle>

                                        <div
                                            style={{
                                            display: "grid",
                                            justifyContent: "center"
                                        }}>
                                            <div>
                                                <strong>
                                                    Color:
                                                </strong>
                                            </div>
                                            <div>
                                                <span>
                                                    {kitty.color}
                                                </span>
                                            </div>
                                            <div>
                                                <strong>
                                                    Age:
                                                </strong>
                                            </div>
                                            <div>
                                                <span>
                                                    {kitty.age}
                                                </span>
                                            </div>
                                            <div>
                                                <strong>
                                                    Date:
                                                </strong>
                                            </div>
                                            {/* <div>
                                                <span>
                                                    <div>
                                                        {this.state.cats
                                                            .date
                                                            .toString()}</div>
                                                </span>
                                            </div> */}
                                            <div>
                                                <strong>
                                                   Location:
                                                </strong>
                                                <span>
                                                    <div>
                                                       {kitty.location}     
                                                    </div>\
                                                </span>
                                            </div>

                                            {/* { task.completedDate && 
                                                <div>
                                                    <strong>
                                                        Complete Date:
                                                    </strong>
                                                    <span>
                                                        <div>{task.completedDate}</div>
                                                    </span>
                                                </div>
                                            } */}
                                            <Row>


                                                {/* <Col>
                                                    <Button
                                                        size="small"
                                                        variant="contained"
                                                        color="primary"
                                                        // startIcon={<CreateOutlinedIcon/>}
                                                        value={this.state.isCompleted}
                                                        onClick={() => this.completeTask(task)} 
                                                        disabled={task.completedDate}>
                                                        Completed
                            
                                                    </Button>
                                                </Col> */}


                                                {/* <Col>
                                                    <Button
                                                        size="small"
                                                        variant="contained"
                                                        color="secondary"
                                                        // startIcon={< DeleteIcon />}
                                                        onClick={() => this.deleteTask(task._id)}>
                                                        Delete
                                                    </Button>
                                                </Col> */}
                                            </Row>

                                            <Row>
                                                <Col
                                                    style={{
                                                    display: "grid",
                                                    justifyContent: "center",
                                                    marginTop: "5px"
                                                }}>

                                                    //Create Edit Task functionality
                                                    <Button color="primary">
                                                        Edit Task
                                                    </Button>

                                                    {/* <input id="todo-0" type="checkbox" defaultChecked={false} isCompleted={false} /> */}

                                                </Col>
                                            </Row>
                                        </div>
                                    </Card>

                                </div>

                            )
                        })}
                </div>
            </div>

        )
    }
}
