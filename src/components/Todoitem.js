import React, { Component } from 'react'

export default class Todoitem extends Component {

  render() {
      const {title}= this.props;
    return (

        <li className='list-group-item text-capitalize d-flex justify-content-between my-2'>
            <h6>{title}</h6>
            <div>
                <button className="btn btn-primary">Undate</button>
                
                <button className="btn btn-danger">Delete</button>
            </div>
        </li>
    )
  }
}
