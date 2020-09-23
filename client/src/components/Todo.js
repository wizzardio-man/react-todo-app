import React from 'react';
import { connect } from 'react-redux';

import { deleteItem, doneItem } from '../middleware/actions/itemsActions';
import Delete from './common/actions/Delete';

const Todo = (props) => {
    return (
      <li className='ui-state-default'>
        <div className='checkbox'>
          <label className='form-check-label'>
              <label>
              { !props.content.isDone && (
                <input type="checkbox" value="" onClick={() => {props.doneItem(props.id)}} />
              )}
               <p className={(props.content.isDone && 'completed')}>{props.content.title}</p>
              </label>
            <Delete id={props.id} />
          </label>
        </div>
      </li>
    );
}

const mapDispatchToProps = {
  deleteItem,
  doneItem
};

export default connect(null, mapDispatchToProps)(Todo);