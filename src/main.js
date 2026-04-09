import './style.css'
import { setupEvents, setupRootApp } from './setupRootApp.js'
import { iniciaLista } from './lista.js';

const app = document.querySelector('#app');
app.append(setupRootApp());
iniciaLista();

setupEvents(app);