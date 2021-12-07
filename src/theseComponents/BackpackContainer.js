import React, { Component} from 'react';
import BackpackComponentItems from './BackpackComponentItems';
import BackpackComponentBerries from './BackpackComponentBerries';

class BackpackComponent extends Component {

    render () {
        return (
            <>
                <h3>BackpackContainer</h3>
                <BackpackComponentItems />
                <BackpackComponentBerries />
            </>
        )
    }
}

export default BackpackComponent;