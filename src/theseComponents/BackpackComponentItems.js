import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItems } from '../actions/backpackActions';
// Items
import Items from './Items/Items'

class BackpackComponentItems extends Component {

    componentDidMount() {
        // this.props.fetchItems();
        this.props.fetchingItems();
    }

    render () {
        // console.log(this.props.items.results)
        if(!this.props.items.results) { return <p>Items Not Found</p>}
        let listOfItems = this.props.items.results

        return (<>
                    <h3>BackpackComponentItems</h3>
                    <Items items={ listOfItems }/>
                </>)
    }
}

const mapStateToProps = state => { return { items: state.combineRedTwo.items }}

const mapDispatchToProps = dispatch => { return { fetchingItems: (item) => dispatch(fetchItems(item)) }}

export default connect(mapStateToProps, mapDispatchToProps )(BackpackComponentItems);