import * as React from 'react';
import PropTypes from 'prop-types';

import WatchListItem from './WatchListItem.jsx';
import InfoListItem from './InfoListItem.jsx';
import TXAddForm from './TXAddForm.jsx';

class TXWatchWidget extends React.Component {
    addItem(hash) {
        this.props.addItem(hash);
    }

    removeHash(hash) {
        this.props.removeItem(hash);
    }

    render() {
        const { items } = this.props;
        const createItem = items.map(function createItem(item) {
            return (
                <WatchListItem onRemoveClicked={this.removeHash} key={item.hash}>{item}</WatchListItem>
            );
        }, this);
        let loginButton;
        if (items.length > 0) {
            loginButton = '';
        } else {
            loginButton = <InfoListItem/>;
        }
        return (
            <div className="mdl-grid section--center">
                <TXAddForm onFormSubmit={this.addItem}/>
                {createItem}
                {loginButton}
            </div>
        );
    }
}

TXWatchWidget.propTypes = {
    addItem: PropTypes.func.isRequired,
    removeItem: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
};

export default TXWatchWidget;
