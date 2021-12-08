import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItems } from '../actions/backpackActions';
// Items
import Items from './Items/Display/Items'

class BackpackComponentItems extends Component {
    // We use the constructor to set the INITIAL STATE We call super in the constructor since we are inheriting from another class via
    // the extends keyword.
    constructor() {
        super();
        this.state = {
            count: 0,
            comment: '',
            callbackone: 0,
            siblingNumber: 0,
            parentToChild: 1,
            toggled: false
        };
    }

    // our add methods makes use of the 'setState' method, which is whay we use to alter state
    add = () => {
        let newCount = this.state.count + 1;
        console.log(`Before : ${this.state.count}`);
        this.setState({ count: newCount },
            () => { console.log(`Inside: ${this.state.count}`); } ); 
            console.log(`After: ${this.state.count}`
        );
    };

    handleChange = event => {
        this.setState({ comment: event.target.value });
        console.log(`After: ${this.state.comment}`);
    }

    handleCallbackOne = event => {
        this.setState({ 
            callbackone: this.state.callbackone + 2
        })
    }

    handleSiblingNumber = () => {
        this.setState({
            siblingNumber: this.state.siblingNumber + 0.5
        })
    }

    handleParentToChild = event => {
        this.setState({
            parentToChild: this.state.parentToChild + 3
        })
    }

    handleClick = () => {
        this.setState(
            previousState => {
                return { 
                    toggled: !previousState.toggled, 
                }; 
        }); 
    };

    componentDidMount() {
        // this.props.fetchItems();
        this.props.fetchingItems();
    }

    componetWillUnmount() {
        this.props.fetchingItems();
    }

    render () {
        // console.log(this.props.items.results)
        if(!this.props.items.results) { return <p>Items Not Found</p>}

        return (<>
                    <h3>BackpackComponentItems</h3>
                    <p>Count: { this.state.count }</p><button onClick={ this.add }>Add</button><br />
                    <input type="text" value={this.state.comment} onChange={this.handleChange}/>
                    <p>Callback One: { this.state.callbackone }</p>
                    <p>siblingNumber: { this.state.siblingNumber } </p>
                    <button onClick={this.handleParentToChild}>Parent To Child</button>
                    <button onClick={this.handleClick}>Toggle</button>
                    <>{this.state.toggled ? "ON" : "OFF"}</>

                    <Items 
                        items={ this.props.items.results } 
                        handleCallbackOne={ this.handleCallbackOne }
                        handleSiblingNumber={ this.handleSiblingNumber } 
                        siblingNumber={ this.state.siblingNumber }
                        parentToChild={ this.state.parentToChild }
                        />
                </>)
    }
}

const mapStateToProps = state => { 
    return { 
        items: state.combineRedTwo.items 
    }
}

const mapDispatchToProps = dispatch => { 
    return { 
        fetchingItems: (item) => dispatch(fetchItems(item)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps )(BackpackComponentItems);

// Class Component - fully featured React component
// https://learning.flatironschool.com/courses/1883/pages/types-of-components?module_item_id=259634
