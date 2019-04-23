import React from 'react'
import {firebase} from '../../../base'
import '../dashboard.css'

export default class Dashboard extends React.Component{
  constructor(props){
    super()
    this.state = {

    }
  }

  handleAddItemChange = (event) => {
    this.setState({newItem: event.target.value});
  }

  addItem = (event) => {
    event.preventDefault()
    firebase.database().ref('/to-do-list').push({
      item: this.state.newItem,
      uid: this.props.uid
    })
    document.getElementById("add-item-form").reset();
  }


  deleteItem = (key) => {
    firebase.database().ref('/to-do-list').child(key).remove();
  }

  render(){

    const listItems = this.props.items.map((eachItem, key) =>
      <p key={eachItem.key}>{eachItem.item} <button onClick={() => this.deleteItem(eachItem.key)}>x</button></p>
    );

    return (
      <div>
        {/* Authorization  */}
       <div id="to-do-list" className="dashed-container">
         <div className="cut-sentence">
           <i className="fa fa-scissors"></i> cut and use in your program
           <span className="orange-words">Authorization</span>
         </div>

         <form id="add-item-form" onSubmit={this.addItem}>
           <h3>To do list</h3>
           <input value={this.state.value} onChange={this.handleAddItemChange} type="text" placeholder="to do item" required></input>
           <button type="submit">Add item</button>
         </form>

         <div id="to-do-list-items">{listItems}</div>

       </div>
      </div>
    )
  }
}
