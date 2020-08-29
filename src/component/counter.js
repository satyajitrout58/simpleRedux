import React, { Component } from 'react';
import { connect } from 'react-redux';
import { doIncrement, doDecrement } from '../actions';

class Counter extends Component {
    increment = () => {
        this.props.doIncrementFromComponent(5);
    }

    decrement = () => {
        this.props.doDecrementFromComponent();
    }

    render() {
        console.log(this.props);
        const { count } = this.props;
        return (
            <div>
                <h1>Count {count}</h1>
                <button
                    onClick={this.increment}
                >
                    Click
                </button>
                <button
                    onClick={this.decrement}
                >
                    Click DECREMENT
                </button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}
  
const mapDispatchToProps = (dispatch) => {
    return {
        doIncrementFromComponent: (payload) => dispatch(doIncrement(payload)),
        doDecrementFromComponent: () =>dispatch(doDecrement())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
