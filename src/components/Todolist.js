import React, { Component } from 'react'
import Todoitem from './Todoitem'

export default class Todolist extends Component {
  render() {
      const{items}= this.props
    return (
        <ul className='list-group my-5'>
            <h3 className='text-capitalize text-center'> To Do list </h3>
            {
                items.map(item=>{
                    return(
                        <Todoitem key={item} title={item.title}/>

                    )
                })
            }

            <button type='button' className="btn btn-outline-danger"> Clear</button>
        </ul>
    )
  }
}
