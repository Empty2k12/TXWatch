import React from 'react';
import ReactDOM from 'react-dom';

import TXWatch from './TXWatch.jsx';

import './index.css';

ReactDOM.render(
    <TXWatch/>,
    document.getElementById('app')
);

module.hot.accept();
