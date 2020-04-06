import React from 'react';


class Like extends React.Component {

    render() {
        return (
            <>
                <button className="btn btn-primary btn-lg" style={{ width: "100%" }} onClick={this.clickAddLike} count={this.state.clickCount}> Likes
                </button>
                <h6 style={{ textAlign: "center"}}> Number of Likes: { Number (this.state.clickCount) }</h6>
            </>
        );
    }
    constructor(props) {
        super(props);
        this.state = {
            clickCount: 0
        }
    }
    clickAddLike = () => {
        this.setState({
            clickCount: this.state.clickCount + 1
        })
    } 

}

export default Like;