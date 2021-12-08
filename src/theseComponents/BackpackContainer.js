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

// Container Component - a container does data fetching and then renders its corresponding sub-component
// https://learning.flatironschool.com/courses/1883/pages/react-container-components?module_item_id=259637
// https://medium.com/@learnreact/container-components-c0e67432e005#.2kd1wuyp4