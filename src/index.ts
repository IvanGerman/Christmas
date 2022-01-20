import './style.scss';
import './css/all.min.css';
import './css/garlandStyle.css';
import { router } from './router/index.routes';
import StartPage from './views/start-page/start-page';

const content = document.querySelector('.page-container');
content!.appendChild(StartPage());

window.addEventListener('hashchange', () => {
  router(window.location.hash);
});
