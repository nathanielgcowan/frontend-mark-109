import React, { Component} from 'react';
import { connect } from 'react-redux';
import { fetchBerries, fetchItems } from '../actions/backpackActions';
import { Link } from 'react-router-dom';
import Berry from '../components/Berry';
import Item from '../components/Item';

class BackpackContainer extends Component {
    componentDidMount() {
        this.props.fetchBerries();
        this.props.fetchItems();
    }
    render () {
        console.log(this.props.berries.results)
        if(!this.props.berries.results) {
            return <p>"Not Found"</p>
        }
        if(!this.props.items.results) {
            return <p>"Not Found"</p>
        }
        let listOfBerries = this.props.berries.results.map( berry => {
            return (
                <Berry name={berry.name}/>
            )
        });
        let listofItems = this.props.items.results.map( item => {
            return ( <Item name={item.name} /> )
        })

        console.log(listofItems)
        return (
            <div>
                <h1>Backpack</h1>
                { listOfBerries }
                { listofItems }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        berries: state.combineRedTwo.berries,
        items: state.combineRedTwo.items
    }
}

export default connect(mapStateToProps, { fetchBerries, fetchItems })(BackpackContainer);