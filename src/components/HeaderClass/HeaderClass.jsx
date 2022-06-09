import React, { Component } from 'react';

export class HeaderClass extends Component {
    render() {
        return (
            <div className="p-4 bg-dark text-white d-flex justify-content-between align-items-center rounded-top">
            <div className="me-3">
                <img className="rounded" src={'./assets/' + this.props.img + '.png'} width="50" alt="chibi" />
            </div>
                <span className="me-3 display-5">
                    {this.props.name}
                </span>
                <span className="me-3">
                    {this.props.nick}
                </span>
        </div>
        );
    }
}

export default HeaderClass