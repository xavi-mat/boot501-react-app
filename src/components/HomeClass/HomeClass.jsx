import React, { Component } from 'react';

export class HomeClass extends Component {
    render() {
        const bioLine = this.props.bioItems.map(line => <p>{line}</p>)
        return (
            <div className="container row">
                <div className="col-md-6 mt-3">
                    <h4>Bio</h4>
                    {bioLine}
                </div>
                <div className="col-md-6">
                    <img className="img-fluid rounded" src={'./assets/' + this.props.img + '.jpg'} alt="careto" />
                </div>
            </div>
        );
    }
}

export default HomeClass;
