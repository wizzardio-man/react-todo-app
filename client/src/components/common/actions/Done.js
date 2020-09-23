import React from 'react';
import { connect } from 'react-redux';

import { doneItem } from '../../../middleware/actions/itemsActions';

const Delete = ({ doneItem, id }) => {
    return (
        <input type="checkbox" value="" onClick={() => {doneItem(id)}} />
    );
}

const mapDispatchToProps = {
    doneItem
};

export default connect(null, mapDispatchToProps)(Delete);