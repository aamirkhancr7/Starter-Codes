import React from 'react';
import { connect } from 'react-redux';
import { dummyAction } from '../actions';

class Sample extends React.Component {

    componentDidMount() {
        this.props.dummyAction(10);
    }

    render() {
        console.log(this.props);
        return (
            <div>Hello from Sample</div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        myState: state.dummyReducer
    }
}

export default connect(mapStateToProps, {
    dummyAction: dummyAction
})(Sample);
