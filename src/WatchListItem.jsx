import * as React from 'react';
import PropTypes from 'prop-types';

class WatchListItem extends React.Component {
    onClickedButtonRemove() {
        const { hash } = this.props.children;
        this.props.onRemoveClicked(hash);
    }

    render() {
        const { children } = this.props;
        const { confs, hash, time } = children;
        let color = 'demo-card-event mdl-card mdl-cell mdl-shadow--2dp mdl-cell--12-col card_red';
        if ((confs > 0) && (confs < 3)) {
            color = 'demo-card-event mdl-card mdl-cell mdl-shadow--2dp mdl-cell--12-col card_orange';
        } else if (confs >= 3 && confs < 6) {
            color = 'demo-card-event mdl-card mdl-cell mdl-shadow--2dp mdl-cell--12-col card_yellow';
        } else if (confs >= 6) {
            color = 'demo-card-event mdl-card mdl-cell mdl-shadow--2dp mdl-cell--12-col card_green';
        }
        const blockchainLink = `https://blockchain.info/tx/${hash}`;
        const timeText = (time in window) ? 'This transaction has not been confirmed yet!' : time;
        return (
            <section className={color}>
                <div className="mdl-card__title mdl-card--expand">
                    <ul className="demo-list-icon mdl-list">
                        <li className="mdl-list__item">
                            <span className="mdl-list__item-primary-content">
                                <i className="material-icons mdl-list__item-icon">confirmation_number</i>
                                <a className="word_break" target="_blank" href={blockchainLink}>{hash}</a>
                            </span>
                        </li>
                        <li className="mdl-list__item">
                            <span className="mdl-list__item-primary-content">
                                <i className="material-icons mdl-list__item-icon">date_range</i>
                                <span className="word_break">{timeText}</span>
                            </span>
                        </li>
                        <li className="mdl-list__item">
                            <span className="mdl-list__item-primary-content">
                                <i className="material-icons mdl-list__item-icon">check</i>
                                <span className="word_break">{confs} Confirmation(s)</span>
                            </span>
                        </li>
                    </ul>
                    <div className="mdl-card__menu">
                        <button className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" onClick={this.onClickedButtonRemove}>
                            <i className="material-icons">delete</i>
                            <span className="mdl-button__ripple-container"><span className="mdl-ripple is-animating"></span></span>
                        </button>
                    </div>
                </div>
            </section>
        );
    }
}

WatchListItem.propTypes = {
    onRemoveClicked: PropTypes.func.isRequired,
    children: PropTypes.array.isRequired
};

export default WatchListItem;
