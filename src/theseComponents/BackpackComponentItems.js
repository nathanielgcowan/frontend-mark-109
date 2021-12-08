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
        name: "",
        amount: 0,
        cardtext: "",
        print: "",
        ereaderData: "",
        releaseInformation: "",
        count: 0,
        callbackone: 0,
        siblingNumber: 0,
        parentToChild: 1,
        toggled: false,
        color: ""
        };
    }

//   our add methods makes use of the 'setState' method, which is whay we use to alter state
    add = () => {
        let newAmount = this.state.amount + 1;
            console.log(`Before : ${this.state.amount }`);
        this.setState({ amount: newAmount }, () => {
            console.log(`Inside: ${this.state.amount}`);
        });
            console.log(`After: ${this.state.amount}`);
    };
    subtract = () => {
        let lessAmount = this.state.amount -1;
            console.log(`Before: ${this.state.amount}`)
        this.setState({ amount: lessAmount }, () => {
            console.log(`Inside: ${this.state.amount}`);
        });
            console.log(`After: ${this.state.amount}`);
    };
    reset = () => {
        let resetNumber = this.state.amount = 0;
            console.log(`Before: ${this.state.amount}`)
        this.setState({ amount: 0 }, () => {
            console.log(`Inside: ${this.state.amount}`);
        });
            console.log(`After: ${this.state.amount}`);
    };
    handleChange = (event) => {
            console.log(`Before: ${this.state.cardtext}`)
        this.setState({ cardtext: event.target.value }, () => { 
            console.log(`Inside: ${this.state.cardtext}`)
        });
            console.log(`After: ${this.state.cardtext}`);
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
                    <label>Name:</label>
                        <input type="text" placeholder="Name" value={this.state.name} onChange={this.handleChange} /><br />
                    <label>Amount:{' '}{this.state.amount}</label>{' '}
                        <button onClick={this.startAmount}>Start</button>{' '}
                        <button onClick={this.stopAmount}>Stop</button>{' '}
                        <button type="button" onClick={this.add}>Add</button>{' '}
                        <button type="button" onClick={this.subtract}>Subtract</button>{' '}
                        <button type="button" onClick={this.reset}>Reset</button>{' '}<br />
                    <label>Print:</label>
                        <input type="text" placeholder="Print" value={ this.state.print } 
                            onChange={this.handleChange} /><br />
                    <label>Card Text:</label>{' '}
                        <input type="text" placeholder="Card Text"
                            value={this.state.cardtext} onChange={this.handleChange} /><br />
                    <label>Callback One: {this.state.callbackone}</label><br />
                    <label>Sibling Component: {' '}{this.state.siblingNumber}</label><br />
                    <label>Handle Parent To Child</label>
                        <button onClick={this.handleParentToChild}>Parent To Child</button><br />
                    <label>Toggle: {this.state.toggled ? "ON" : "OFF"}</label>{' '}
                        <button onClick={this.handleClick}>Toggle</button>
                    <section className="Amount" style={{ background: color }}>
                        <p>{ this.state.amount }</p>
                    </section>
                    {/* Submit */}
                    <button type="submit">Submit</button>
                </form>
                    <button onClick={this.changeCardColor}>Change and Do Nothing</button><br />
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
