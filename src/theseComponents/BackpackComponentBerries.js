import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBerries } from "../actions/backpackActions";
import Button from '../components/Button';
import '../App.css'
// Items
import Items from "./Items/Display/Items";

class BackpackComponentBerries extends Component {
  // We use the constructor to set the INITIAL STATE We call super in the constructor since we are inheriting from another class via
  // the extends keyword.
    constructor() {
        super();
            this.state = {
                name: "",
                amount: 0,
                count: 0,
                callbackone: 0,
                siblingNumber: 0,
                parentToChild: 1,
                toggled: false,
                color: "",
                growthTime: "",
                maxHarvest: "",
                naturalGiftPower:"",
                size: 0,
                smoothness: 0,
                soilDryness: 0,
                firmness: "",
                potency: 0,
                flavor: "",
                naturalGiftType: "",
                berryname: ""
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
            console.log(`Before: Name = ${this.state.name}, Amount = ${this.state.amount}, 
                        Growth Time = ${this.state.growthTime}, Max Harvest = ${this.state.maxHarvest},
                        Natural Gift Power = ${this.state.naturalGiftPower}, Size = ${this.state.size},
                        Smoothness = ${this.state.smoothness}, Soil Dryness = ${this.state.soilDryness},
                        Firmness = ${this.state.firmness}, Potency= ${this.state.potency},
                        Flavor = ${this.state.flavor}, Natural Gift Type = ${this.state.naturalGiftType}`)
        this.setState({ [event.target.name]: event.target.value }, () => { 
            console.log(`Inside: Name = ${this.state.name}, Amount = ${this.state.amount}, 
                        Growth Time = ${this.state.growthTime}, Max Harvest = ${this.state.maxHarvest},
                        Natural Gift Power = ${this.state.naturalGiftPower}, Size = ${this.state.size},
                        Smoothness = ${this.state.smoothness}, Soil Dryness = ${this.state.soilDryness},
                        Firmness = ${this.state.firmness}, Potency= ${this.state.potency},
                        Flavor = ${this.state.flavor}, Natural Gift Type = ${this.state.naturalGiftType}`)
        });
            console.log(`After: Name = ${this.state.name}, Amount = ${this.state.amount}, 
                        Growth Time = ${this.state.growthTime}, Max Harvest = ${this.state.maxHarvest},
                        Natural Gift Power = ${this.state.naturalGiftPower}, Size = ${this.state.size},
                        Smoothness = ${this.state.smoothness}, Soil Dryness = ${this.state.soilDryness},
                        Firmness = ${this.state.firmness}, Potency= ${this.state.potency},
                        Flavor = ${this.state.flavor}, Natural Gift Type = ${this.state.naturalGiftType}`)
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
            name: this.state.name,
            amount: this.state.amount,
            cardtext: this.state.cardtext,
            print: this.state.print,
            ereaderData: this.state.ereaderData,
            releaseInformation: this.state.releaseInformation
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
        this.props.fetchingBerries();
        // updater, [callback]
        console.log('Amount','componentDidMount')
    }
    // getSnapshotBeforeUpdate() {
    //     console.log('Amount', 'getSnapshotBeforeUpdate')
    // }
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
        if (!this.props.berries.results) {
        return <p>Berries Not Found</p>; }

        let { color } = this.state;
        console.log(color)

    return (
            <>
                <form onSubmit={this.handleSubmit} style={{ 
                    backgroundColor: "white", border:"1px solid black", borderRadius: "8px"}}>
                    <h4> Add an Berry to Backpack </h4>
                    <label>Name:</label>
                        <input type="text" name="name" placeholder="Name"
                            value={this.state.name} onChange={this.handleChange} /><br />
                    <label>Amount:</label>
                        <input type="number" name="amount" placeholder="Amount"
                            value={this.state.amount} onChange={this.handleChange} /><br />
                    <label>Growth Time:</label>
                        <input type="number" name="growthTime" placeholder="Growth Time"
                            value={this.state.growthTime} onChange={this.handleChange} /><br />
                    <label>Max Harvest:</label>
                        <input type="number" name="maxHarvest" placeholder="Max Harvest"
                            value={this.state.maxHarvest} onChange={this.handleChange} /><br />
                    <label>Natural Gift Power:</label>
                        <input type="number" name="naturalGiftPower" placeholder="Natural Gift Power"
                            value={this.state.naturalGiftPower} onChange={this.handleChange} /><br />
                    <label>Size:</label>
                        <input type="number" name="size" placeholder="Size"
                            value={this.state.size} onChange={this.handleChange} /><br />
                    <label>Smoothness:</label>
                        <input type="number" name="smoothness" placeholder="Smoothness"
                            value={this.state.smoothness} onChange={this.handleChange} /><br />
                    <label>Soil Dryness:</label>
                        <input type="number" name="soilDryness" placeholder="Soil Dryness"
                            value={this.state.soilDryness} onChange={this.handleChange} /><br />
                    <label>Firmness:</label>
                        <input type="text" name="firmness" placeholder="Firmness"
                            value={this.state.firmness} onChange={this.handleChange} /><br />
                    <label>Potency:</label>
                        <input type="number" name="potency" placeholder="Potency"
                            value={this.state.potency} onChange={this.handleChange} /><br />
                    <label>Flavor:</label>
                        <input type="text" name="flavor" placeholder="Flavor"
                            value={this.state.flavor} onChange={this.handleChange} /><br />
                    <label>Natural Gift Type:</label>
                        <input type="text" name="naturalGiftType" placeholder="Natural Gift Type"
                            value={this.state.naturalGifyType} onChange={this.handleChange} /><br />
                    <Button type="submit">Submit</Button>
                </form><br />
                <section className="Amount" style={{ 
                    backgroundColor: "white", border:"1px solid black", borderRadius: "8px"}}>
                    <label>Callback One: {this.state.callbackone}</label><br />
                    <label>Sibling Component: {' '}{this.state.siblingNumber}</label><br />
                    <label>Handle Parent To Child</label>
                        <Button type="button" onClick={this.handleParentToChild}>Parent To Child</Button><br />
                    <label>Toggle: {this.state.toggled ? "ON" : "OFF"}</label>{' '}
                        <Button type="button" onClick={this.handleClick}>Toggle</Button>
                </section>
                <Button onClick={this.changeCardColor}>Change and Do Nothing</Button><br />
                <Items
                        items={this.props.berries.results}
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
        berries: state.combineRedTwo.berries,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchingBerries: (berry) => dispatch(fetchBerries(berry)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BackpackComponentBerries);

// Class Component - fully featured React component
// https://learning.flatironschool.com/courses/1883/pages/types-of-components?module_item_id=259634
