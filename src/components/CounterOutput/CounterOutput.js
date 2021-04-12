import React from 'react';
import {connect} from 'react-redux';
import './CounterOutput.css';

const counterOutput = (props) => (
    <div className="CounterOutput">
        Current Counter: {props.val}
    </div>
);

const mapStateToProps=(state)=>{
    return {
    val:state.counter
    }
}

export default connect(mapStateToProps,null)(counterOutput);