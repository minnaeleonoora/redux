import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
   
    render() {
        return(
            <div>
                <h1>Your score is: {this.props.ctr}</h1>

                <div>
                    <button onClick={this.props.onIncCounter}>Add one</button>
                    <button onClick={this.props.onDecCounter}>Remove one</button>
                    <button onClick={this.props.addCounter}>Add five</button>
                    <button onClick={this.props.removeCounter}>Remove five</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncCounter: () => dispatch({type: 'INCREMENT'}),
        onDecCounter: () => dispatch({type: 'DECREMENT'}),
        addCounter: () => dispatch({ type: 'ADD'}),
        removeCounter: () => dispatch({type: 'REMOVE'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);