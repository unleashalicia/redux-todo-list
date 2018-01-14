import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {deleteItem, getItems} from '../actions';
import {connect} from 'react-redux';

class ListItem extends Component{
    handleDelete(id){
        console.log('I want to delete this: ', id);
        this.props.deleteItem(id).then(()=>{this.props.getItems});
    }

    render(){

        console.log("Props in ListItem");

        return (
            <li className="list-group-item row">
                <Link to={`/item/${this.props._id}`} >{this.props.title}</Link>
                <button onClick={()=>{this.handleDelete(this.props._id).bind(this)}} className="btn btn-outline-danger float-right">DELETE</button>
            </li>
        )

    }
}

// function mapStateToProps(state){
//     return {
//         delete: state.todos.deleteItem
//     }
// }

export default connect(null, {deleteItem, getItems})(ListItem);