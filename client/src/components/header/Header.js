import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./Header.css";

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            addWaifu: false
        };
    }

    addWaifuRedirect = () =>{
        this.setState({
            addWaifu: true
        })
    }

    addWaifuRender = () => {
        if (this.state.addWaifu){
            return <Redirect to='/add' />
        }
    }
    render() {
        return(
            <div className="navbar-container">
                <div className="navbar">
                    <h1>The Waifu DB</h1>
                    {this.addWaifuRender()}
                    <button onClick={this.addWaifuRedirect}>
                        Add Waifu
                    </button>
                </div>
            </div>
        );
    }
}


export default Header;