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

    onClickHandler = (kitty, cats) => {
        this.setState({ activeCat: kitty })
        console.log(kitty)
        return(
            <div>
                <card>
                    <title>{kitty.nickName}</title>
                </card>
            </div>
        )
    }

    componentDidMount() {
        this.getCollection('All')
    }

    // get entire collection
    getCollection = (_Id) => {

        axios
            .get(`http://localhost:5000/api/kittys/getByUserId/${this.props.user._id}`)
            .then(res => {
                const cats = res.data
                this.setState({cats: cats})
            })
    }

    render() {
        return (
            <div>
                <p style={{display:"flex", justifyContent:"center"}}>Selected Cat: {this.state.activeCat.nickName}</p>

                <Dropdown
                    style={{
                    display: "flex",
                    justifyContent: "center"
                }}
                    className="cat-list">
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        My Cats
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {this
                            .state
                            .cats
                            .map((kitty, index) => {
                                return (
                                    <div >
                                        <Dropdown.Item onClick={() => this.onClickHandler(kitty)}>{kitty.nickName}</Dropdown.Item>
                                    </div>
                                )
                            })}
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        )
    }
}

