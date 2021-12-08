import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchItems } from "../actions/backpackActions";
// Items
import Items from "./Items/Display/Items";

class BackpackComponentItems extends Component {
  // We use the constructor to set the INITIAL STATE We call super in the constructor since we are inheriting from another class via
  // the extends keyword.
    constructor() {
        super();
        this.state = {
        count: 0,
        comment: "",
        callbackone: 0,
        siblingNumber: 0,
        parentToChild: 1,
        toggled: false,
        amount: 0,
        color: ""
        };
    }

//   our add methods makes use of the 'setState' method, which is whay we use to alter state
    add = () => {
        let newCount = this.state.count + 1;
        console.log(`Before : ${this.state.count}`);
        this.setState({ count: newCount }, () => {
            console.log(`Inside: ${this.state.count}`);
        });
        console.log(`After: ${this.state.count}`);
    };
    subtract = () => {
        let lessCount = this.state.count -1;
        console.log(`Before: ${this.state.count}`)
        this.setState({ count: lessCount }, () => {
            console.log(`Inside: ${this.state.count}`);
        });
        console.log(`After: ${this.state.count}`);
    };
    handleChange = (event) => {
    this.setState({ comment: event.target.value });
    console.log(`After: ${this.state.comment}`);
    };
    handleCallbackOne = (event) => {
    this.setState({
      callbackone: this.state.callbackone + 2,
    });
    };
    handleSiblingNumber = () => {
    this.setState({
      siblingNumber: this.state.siblingNumber + 0.5,
    });
    };
    handleParentToChild = (event) => {
    this.setState({
      parentToChild: this.state.parentToChild + 3,
    });
    };
    handleClick = () => {
    this.setState((previousState) => {
      return {
        toggled: !previousState.toggled,
      };
    });
    };
    handleSubmit = event => {
        event.preventDefault();
        console.log('handleSubmit', ' We will make a POST request here')
        const item = {
            amount: this.state.amount
        }
        console.log(item);
    }
    // Lifecycle
    static getDerivedStateFromProps(state) {
        console.log('getDerivedStateFromProps')
        return {
            color: "#FFFFFF",
        };
    }
    changeCardColor = () => {
        this.setState({
            color: "blue"
        })
    }
    componentDidMount() {
        // this.props.fetchItems();
        this.props.fetchingItems();
        // updater, [callback]
        console.log('Amount','componentDidMount')
    }
    getSnapshotBeforeUpdate() {
        console.log('Amount', 'getSnapshotBeforeUpdate')
    }
    // shouldComponentUpdate is useful in stopping unwanted component updates and is mainly used for performance enhancement.
    shouldComponentUpdate() {
        console.log('Amount', 'shouldComponentUpdate')
        return true;
    }
    // componentDidUpdate is useful for DOM manipulation and updating 3rd party libraries.
    componentDidUpdate() {
        console.log('Amount', 'componentDidUpdate')
    }
    componentWillUnmount() {
        clearInterval(this.interval);
        // alert("This amount is about to be unmounted")
        console.log('Amount', 'componentWillUnmount')
    }

    // Math.floor(Math.random() * 16777215).toString(16)
    // Item Amount Functions
    amountTick = () => {
        this.setState({
            amount : this.state.amount + 1
        })
    }
    stopAmount = () => {
        clearInterval(this.interval)
        console.log('Amount','Stop')
    }
    startAmount = () => {
        this.interval = setInterval(this.amountTick, 1000)
        console.log('Amount','Start')
    }

    render() {
        console.log('Amount','Render')
        if (!this.props.items.results) {
        return <p>Items Not Found</p>; }

        let { color } = this.state;
        console.log(color)

    return (
            <>  
                <form onSubmit={this.handleSubmit} style={{backgroundColor: "white"}}>
                    <h4> Add an Item to Backpack </h4>
                    <label>Count:{this.state.count}</label>{' '}
                        <button type="button" onClick={this.add}>Add to Amount</button>{' '}
                        <button type="button" onClick={this.subtract}>Subtract</button>{' '}
                        <button onClick={this.changeCardColor}>Change Nothing</button>
                    <br />
                    <input type="text" value={this.state.comment} onChange={this.handleChange} />
                    <p>Callback One: {this.state.callbackone}</p>
                    <p>siblingNumber: {this.state.siblingNumber} </p>
                    <button onClick={this.handleParentToChild}>Parent To Child</button>
                    <button onClick={this.handleClick}>Toggle</button>
                    <>{this.state.toggled ? "ON" : "OFF"}</>
                    <section className="Amount" style={{ background: color }}>
                        <h1>{ this.state.amount }</h1>
                        <button onClick={this.stopAmount}>Stop</button>
                        <button onClick={this.startAmount}>Start</button>
                    </section>
                    {/* Submit */}
                    <button type="submit">Submit</button>
                </form>
                <Items
                        items={this.props.items.results}
                        handleCallbackOne={this.handleCallbackOne}
                        handleSiblingNumber={this.handleSiblingNumber}
                        siblingNumber={this.state.siblingNumber}
                        parentToChild={this.state.parentToChild} />
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.combineRedTwo.items,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchingItems: (item) => dispatch(fetchItems(item)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BackpackComponentItems);

// Class Component - fully featured React component
// https://learning.flatironschool.com/courses/1883/pages/types-of-components?module_item_id=259634
