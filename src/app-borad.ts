import {define, html, store} from 'hybrids';
import Board from './models/Board';

interface AppBoard {
  src: string;
  board?: Board;
}

export default define<AppBoard>({
  tag: 'app-board',
  src: '',
  board: store(Board, {id: 'src'}),
  render: ({board}) => html`
    <h2>Board</h2>
    ${store.ready(board) && html`
      <h3>Loaded</h3>
      ${board?.items.map(({src, alt}) => html`<img src=${src} alt=${alt}>`)}
    `}
    <button>+</button>
  `
});
