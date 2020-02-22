import { app, Component, html } from 'apprun';

class App extends Component {
  view = () => html`<div>Hello World!</div>`
}

app.render(document.body, <App />);

