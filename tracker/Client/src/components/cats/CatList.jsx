import React, {Component} from 'react';
import axios from 'axios';
import {Dropdown} from 'react-bootstrap';

export default class CatList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cats: [],
            activeCat: ''

        }
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
                console.log(this.state.cats)

            })
    }

    render() {
        return (
            <div className="cat-list">
            <Dropdown
                style={{
                justifyContent: "space-between"
            }}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    My Cats
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {this
                        .state
                        .cats
                        .map((kitty, index) => {
                            return (
                                <div key={index}>
                                    <Dropdown.Item>{kitty.nickName}</Dropdown.Item>
                                </div>
                            )
                        })}
                </Dropdown.Menu>
            </Dropdown>
            </div>
        )
    }
}
