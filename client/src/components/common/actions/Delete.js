import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import { deleteItem } from '../../../middleware/actions/itemsActions';
import { deleteLIst } from '../../../middleware/actions/listsActions';

const Delete = ({ deleteItem, deleteLIst, id, type }) => {
    const { listId } = useParams();
    const deleteObject = () => {
        if ( listId ) {
            deleteItem(id);
        } else {
            deleteLIst(id);
        }
    }

    return (
        <button
            className='remove-item btn btn-default btn-xs right'
            onClick={ deleteObject }
        >
            <span className='glyphicon glyphicon-remove'></span>
        </button>
    );
}

const mapDispatchToProps = {
    deleteItem,
    deleteLIst
};

export default connect(null, mapDispatchToProps)(Delete);