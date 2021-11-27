import React, { Component} from 'react';
import { connect } from 'react-redux';
import { fetchBerries } from '../actions/backpackActions';
import { Link } from 'react-router-dom';
import Berry from '../components/Berry';

class BackpackContainer extends Component {
    componentDidMount() {
        this.props.fetchBerries();
    }
    render () {
        console.log(this.props.berries.results)
        if(!this.props.berries.results) {
            return <p>"Not Found"</p>
        }
        let listOfBerries = this.props.berries.results.map( berry => {
            return (
                <Berry name={berry.name}/>
            )
        })
        return (
            <div>
                <h1>Backpack</h1>
                <p>Berries</p>
                { listOfBerries }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        berries: state.combineRedTwo.berries
    }
}

export default connect(mapStateToProps, { fetchBerries })(BackpackContainer);