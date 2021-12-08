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
        time: 0,
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
    handleSubmit = () => {
        console.log('handleSubmit', ' We will make a POST request here')
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
        console.log('Clock','componentDidMount')
    }
    getSnapshotBeforeUpdate() {
        console.log('Clock', 'getSnapshotBeforeUpdate')
    }
    // shouldComponentUpdate is useful in stopping unwanted component updates and is mainly used for performance enhancement.
    shouldComponentUpdate() {
        console.log('Clock', 'shouldComponentUpdate')
        return true;
    }
    // componentDidUpdate is useful for DOM manipulation and updating 3rd party libraries.
    componentDidUpdate() {
        console.log('Clock', 'componentDidUpdate')
    }
    componentWillUnmount() {
        clearInterval(this.interval);
        alert("This time is about to be upmounted")
        console.log('Clock', 'componentWillUnmount')
    }

    // Math.floor(Math.random() * 16777215).toString(16)
    // Clock Functions
    clockTick = () => {
        this.setState({
            time : this.state.time + 1
        })
    }
    stopClock = () => {
        clearInterval(this.interval)
        console.log('Clock','Stop')
    }
    startClock = () => {
        this.interval = setInterval(this.clockTick, 1000)
        console.log('Clock','Start')
    }

    render() {
        console.log('Clock','Render')
        if (!this.props.items.results) {
        return <p>Items Not Found</p>; }

        let { color } = this.state;
        console.log(color)

    return (
        <>  
            <form onsubmit={this.handleSubmit}>
                Form
                <input type="text" value={this.state.comment} onChange={this.handleChange} />
                <input type="submit" />
            </form>
            <h3>BackpackComponentItems</h3>
            <p>Count: {this.state.count}</p>
            <button onClick={this.add}>Add</button>
            <button onClick={this.changeCardColor}>Change Nothing</button>
            <br />
            <input
                type="text"
                value={this.state.comment}
                onChange={this.handleChange}
            />
            <p>Callback One: {this.state.callbackone}</p>
            <p>siblingNumber: {this.state.siblingNumber} </p>
            <button onClick={this.handleParentToChild}>Parent To Child</button>
            <button onClick={this.handleClick}>Toggle</button>
            <>{this.state.toggled ? "ON" : "OFF"}</>
            <section className="Timer" style={{ background: color }}>
                <h1>{ this.state.time }</h1>
                <button onClick={this.stopClock}>Stop</button>
                <button onClick={this.startClock}>Start</button>
            </section>
            <Items
                items={this.props.items.results}
                handleCallbackOne={this.handleCallbackOne}
                handleSiblingNumber={this.handleSiblingNumber}
                siblingNumber={this.state.siblingNumber}
                parentToChild={this.state.parentToChild}
            />
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
