import React, {Component} from 'react';
import axios from 'axios';
import {Card, CardTitle} from 'reactstrap';
import {Table, Button} from 'react-bootstrap';
import moment from 'moment';

//css component imports
// import Button from '@material-ui/core/Button';
// import DeleteIcon from '@material-ui/icons/Delete'; import CreateOutlinedIcon
// from '@material-ui/icons/CreateOutlinedIcon'; //////////

export default class DisplayCats extends Component {
    constructor(props) {
        super(props);
        console.log(props.user, 'my user')
        this.state = {
            cats: [],
            age: '',
            color: '',
            location: '',
            anchorEl: null,
            dateLogged: null
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
                this.setState({cats: cats})
            })
    }


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


    render() {
        return (
            <div className="container-fluid">

                <div
                    className="row"
                    style={{
                    justifyContent: "space-between"
                }}>
                    {this
                        .state
                        .cats
                        .map((kitty, index) => {
                            return (
                                <div className="cat-displayer" key={index}>
                                    <Card style={{height:"auto"}}>
                                        <CardTitle>
                                            {kitty.nickName}
                                        </CardTitle>
                                        <Table responsive='true'>
                                            <tr>
                                                <th>
                                                    Color:
                                                </th>
                                                <td>{kitty.color}</td>
                                            </tr>
                                            <tr>
                                                <th>
                                                    Age:
                                                </th>
                                                <td>{kitty.age}</td>
                                            </tr>

                                            <tr>
                                                <th>
                                                    Date:
                                                </th>
                                                <td>{kitty.dateModified}</td>
                                            </tr>
                                            <tr>
                                                <th>
                                                    Location:
                                                </th>
                                                <td>{kitty.location}</td>
                                            </tr>
                                        </Table>
                                            <Button>
                                                Edit Cat
                                            </Button>
                                    </Card>
                                </div>
                            )
                        })}
                </div>
            </div>

        )
    }
}
