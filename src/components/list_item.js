import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {deleteItem} from '../actions';
import {connect} from 'react-redux';

class ListItem extends Component{
    render(){

        console.log("Props in ListItem");

        handleDelete(id){

        }

        return {
            return (
                <li className="list-group-item row">
                    <Link to={`/item/${props._id}`} >{props.title}</Link>
                    <button onClick={props.deleteItem(props._id)} className="btn btn-outline-danger float-right">DELETE</button>
                </li>
            )
        }
    }
}

export default connect(null, {deleteItem})(ListItem);