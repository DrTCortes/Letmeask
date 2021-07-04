import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Button} from './components/Button'

import './services/firebase'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Button text={'ContLeft: '}/>
    <Button text={'ContRight: '}/>
  </React.StrictMode>,
  document.getElementById('root')
);
