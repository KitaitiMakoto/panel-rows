import {Model, store} from 'hybrids';

import Item from './Item';

interface Board {
  id: string;
  items: Item[];
}

const Board: Model<Board> = {
  id: true,
  items: [Item],
  [store.connect]: (id) => ({items: [{src: 'runes/01/sugasuga_01_00003.jpg', alt: ''}]})
}

export default Board;
