import React, { Component } from 'react';
import Api from '../helpers/api';
import Button from 'react-bootstrap/Button';
import '../styles/home.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        };
    }

    handleClick() {
        Api.sendMessage().then(data => {
            console.log(data);
        });
    }

    render() {
        return (
            <div className="main-frame">
                <Button onClick={() => this.handleClick()} className="main-button">Send Message</Button>
            </div>
        );
    }
}

export default Home;
