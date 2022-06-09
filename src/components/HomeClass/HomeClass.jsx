import React, { Component } from 'react';
import jochibi from '../../assets/jochibi.jpg'

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
                    Image in public<br/>
                    <img className="img-fluid rounded" src={'./assets/' + this.props.img + '.jpg'} alt="careto" />
                    Image in src<br/>
                    <img src={jochibi}/>
                </div>
            </div>
        );
    }
}

export default HomeClass;
