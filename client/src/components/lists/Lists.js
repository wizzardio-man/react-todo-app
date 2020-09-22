import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchLists } from '../../middleware/actions/listsActions';
import Header from '../common/Header';
import IterableObject from '../common/IterableObject';

const Lists = ({ fetchLists, loading, lists, hasErrors }) => {
    useEffect(() => {
        fetchLists()
    }, []);

    const renderLists = () => {
        if (loading) return <p>Loading lists...</p>
        if (hasErrors) return <p>Unable to display lists...</p>
        if (lists) {
            const objects = lists.map((list, index) => {
                return <IterableObject 
                    content={list}
                    ket={index}
                    id={list._id}
                />
            })
            return (
                <div>
                    <Header msg={`Number of lists ${lists.length}`}/>
                    <ul className='list-unstyled' id='sortable'>
                        {objects}
                    </ul>
                </div>
            )
        }
    }

    return (
        <div>
            { renderLists() }
        </div>
    );
}

const mapStateToProps = state => ({
    loading: state.lists.loading,
    lists: state.lists.lists.data,
    hasErrors: state.lists.hasErrors
});

const mapDispatchToProps = {
    fetchLists
};

export default connect(mapStateToProps, mapDispatchToProps)(Lists);