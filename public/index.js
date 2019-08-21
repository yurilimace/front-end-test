import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimesCircle, faCheckCircle} from '@fortawesome/free-solid-svg-icons'

library.add(faTimesCircle,faCheckCircle)

ReactDOM.render(<App />, document.getElementById('root'));


