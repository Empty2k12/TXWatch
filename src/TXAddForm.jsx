import * as React from 'react';
import PropTypes from 'prop-types';

class TXWatch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.value || '',
            valid: "disabled"
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        var hash = this.refs.task.value.trim();
        if(!hash) {
            return;
        }
        this.refs.task.value = "";
        this.props.onFormSubmit(hash);
        this.setState({
            value: "",
            valid: "disabled"
        });
        return;
    }

    setValue(event) {
        this.setState({
            value: event.currentTarget.value,
            valid: validateHash(event.currentTarget.value) ? "" : "disabled"
        });
    }

    render() {
        return (
            <section className="mdl-cell mdl-cell--12-col mdl-shadow--2dp">
                <form className="search" onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Bitcoin Transaction Hash" id="task" ref="task" onChange={this.setValue} value={this.state.value}></input>
                    <button type="submit" disabled={this.state.valid}>
                        <i className="material-icons md-light search_btn">add</i>
                    </button>
                </form>
            </section>
        );
    }

}

export default TXWatch;
