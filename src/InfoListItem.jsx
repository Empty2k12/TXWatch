import * as React from 'react';
import PropTypes from 'prop-types';

class TXWatch extends React.Component {
    render() {
        return (
            <section className="mdl-cell mdl-cell--12-col mdl-shadow--2dp">
                <div className="demo-card-event mdl-card safe_confirmed">
                    <div className="mdl-card__title mdl-card--expand">
                        <ul className="demo-list-icon mdl-list">
                            <li className="mdl-list__item">
                                <span className="mdl-list__item-primary-content">
                                    <i className="material-icons mdl-list__item-icon">info</i>
                                    <span className="word_break">Add a Bitcoin Transction ID to the List to get started!</span>
                                </span>
                            </li>
                            <li className="mdl-list__item">
                                <span className="mdl-list__item-primary-content">
                                    <i className="material-icons mdl-list__item-icon">hearing</i>
                                    <span className="word_break">Recieve sound notifications on confirmation change!</span>
                                </span>
                            </li>
                            <li className="mdl-list__item">
                                <span className="mdl-list__item-primary-content">
                                    <i className="material-icons mdl-list__item-icon">color_lens</i>
                                    <span className="word_break">The card will be red on 0 Confirmations, orange on 1+ Confirmations, yellow on 3+ Confirmations and green 6+ Confirmations!</span>
                                </span>
                            </li>
                            <li className="mdl-list__item">
                                <span className="mdl-list__item-primary-content">
                                    <i className="material-icons mdl-list__item-icon">bug_report</i>
                                    <span className="word_break">Send feedback to <a href="mailto:feedback@txwat.ch">feedback@txwat.ch</a></span>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}