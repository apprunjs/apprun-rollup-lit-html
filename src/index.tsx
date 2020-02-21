import { app, Component, html, svg } from 'apprun';

class App extends Component {
  view = () => html`<div>Hello World!</div>`
}

new App().start(document.body);

