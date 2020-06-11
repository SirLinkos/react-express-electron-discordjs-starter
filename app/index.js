import ReactDom from 'react-dom';
import Routes from './components/routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/app.css';

ReactDom.render(
    Routes,
    document.getElementById('app')
);
