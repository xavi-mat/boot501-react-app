import React, { Component } from 'react';
import jochibi from '../../assets/jochibi.jpg'

export class HomeClass extends Component {
    constructor(props) {
        super(props);
        this.state = { chibi: false };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({chibi: !this.state.chibi});
    }
    render() {
        const bioLine = this.props.bioItems.map((line, num) => <p key={num}>{line}</p>)
        const chibi = this.state.chibi;
        return (
            <div className="container row">
                <div className="col-md-6 mt-3">
                    <h4>Bio</h4>
                    {bioLine}
                </div>
                <div className="col-md-6 text-center">
                    <button className='btn btn-primary m-2 w-100' onClick={this.handleClick}>
                        {chibi ? 'Serious' : 'Chibi' } image
                    </button>
                    <div className={chibi ? 'd-none' : ''}>
                        Image in public<br />
                        <img className="img-fluid rounded" src={'./assets/' + this.props.img + '.jpg'} alt="careto" />
                    </div>
                    <div className={chibi ? '' : 'd-none'}>
                        Image in src<br />
                        <img src={jochibi} alt="" />
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeClass;
