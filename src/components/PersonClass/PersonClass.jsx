import React, { Component } from 'react'

export class PersonClass extends Component {

    render() {
        return (
            <div>
                Name: <span className='lead'>{this.props.name} </span>
                Surname: <span className='lead'>{this.props.surname} </span>
                Age: <span className='small'>{this.props.age} </span>
            </div>
        );
    }
}

export default PersonClass