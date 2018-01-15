import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {deleteItem, getItems} from '../actions';
import {connect} from 'react-redux';

class ListItem extends Component{

    //this could be functional component.

    handleDelete(id){
        this.props.deleteItem(id).then(()=>{this.props.getItems()});
    }

    render(){

        return (
            <li className="list-group-item">
                <Link to={`/item/${this.props._id}`} >{this.props.title}</Link>
                <button onClick={()=>{this.handleDelete(this.props._id)}} className="btn btn-outline-danger float-right">DELETE</button>
            </li>
        )

    }
}

export default connect(null, {deleteItem, getItems})(ListItem);