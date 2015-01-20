var App = require('./components/App.react');
var React = require('react');
window.React = React;

React.render(
    <App />,
    document.getElementById('react')
);