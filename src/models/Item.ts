import {Model} from 'hybrids';

interface ImageItem {
  src: string;
  alt: string;
}

interface Item extends ImageItem {
}

const Item: Model<Item> = {
  src: 'runes/01/sugasuga_01_00003.jpg',
  alt: ''
}

export default Item;
