import * as React from 'react';

import CommonFunctions from './CommonFunctions';

import TxWatchWidget from './TXWatchWidget.jsx';

class TXWatch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            lastblock: {
                time: 0,
                displaytime: '0',
                height: 0
            }
        };
    }

    componentDidMount() {
        let { items } = this.state;
        const confs = 0;
        const time = '0';
        const keys = Object.keys(localStorage);
        let i = keys.length;
        for (i--; i >= 0; i--) {
            const hash = localStorage.getItem(keys[i]);
            if (CommonFunctions.validateHash(hash)) {
                items = [{ hash, confs, time }].concat(items);
            }
        }
        this.setState({ items }, function afterSetState() {
            this.updateItems();
        });
    }

    onNewBlock(event) {
        const { lastblock } = this.state;
        lastblock.height = event.x.height;
        lastblock.time = event.x.time;
        lastblock.displaytime = new Date(parseInt(`${event.x.time}000`, 10)).toString();
        this.setState({ lastblock });
        this.updateItems();
        setTimeout(this.updateItems, 5000);
    }

    addItem(hash) {
        let { items } = this.state;
        const confs = '█ ██████████';
        const time = '██████ ███████████ ███████████████ ███████ █████████';
        items = [{ hash, confs, time }].concat(items);
        localStorage.setItem(hash, hash);
        this.setState({ items }, function afterSetState() {
            this.updateItems();
        });
    }

    updateItems() {
        const { items } = this.state;
        const pending = items.map(item => new Promise(resolve => CommonFunctions.checkConfirmation(item.hash, resolve)));
        Promise
            .all(pending)
            .then(returnedData => returnedData.map((data, i) => {
                const item = items[i];
                const confs = Number.isNaN(data.block_height) ? 0 : ((this.state.lastblock.height - data.block_height) + 1);
                if ((item.confs !== -1) && (confs > item.confs) && (confs <= 6)) {
                    const audio = new Audio('https://notificationsounds.com/soundfiles/d67d8ab4f4c10bf22aa353e27879133c/file-sounds-859-enough.mp3');
                    audio.play();

                    CommonFunctions.notify(`Transaction ${item.hash} now has ${confs} Confirmations!`, true);
                }
                return Object.assign({}, item, {
                    confs: `${confs}`,
                    time: `${new Date(parseInt(`${data.time}000`, 10)).toString()}`,
                    hash: `${item.hash}`
                });
            }))
            .then(finalItems => this.setState({ finalItems }));
    }

    removeItem(hash) {
        let { items } = this.state;
        items = items.filter(el => el.hash !== hash);
        localStorage.removeItem(hash);
        this.setState({ items });
    }

    render() {
        return (
            <TxWatchWidget addItem={this.addItem} removeItem={this.removeItem} items={this.state.items}/>
        );
    }
}

export default TXWatch;
