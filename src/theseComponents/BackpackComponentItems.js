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

        return (<>
                    <h3>BackpackComponentItems</h3>
                    <Items items={ this.props.items.results }/>
                </>)
    }
}

const mapStateToProps = state => { return { items: state.combineRedTwo.items }}

const mapDispatchToProps = dispatch => { return { fetchingItems: (item) => dispatch(fetchItems(item)) }}

export default connect(mapStateToProps, mapDispatchToProps )(BackpackComponentItems);

// Class Component - fully featured React component
// https://learning.flatironschool.com/courses/1883/pages/types-of-components?module_item_id=259634
