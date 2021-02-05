import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Editor } from 'primereact/editor';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span className="p-float-label">
          <InputText id="in" />
          <label htmlhtmlFor="in">Login</label>
        </span>
        <div className="card">
                <h5>Editor</h5>
                <Editor style={{ height: '220px' }} value="Digite o texto" />
            </div>
        <Button label="Enviar" />
      </header>
    </div>
  );
}

export default App;
