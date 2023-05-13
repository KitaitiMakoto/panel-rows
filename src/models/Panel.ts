import {Model} from 'hybrids';
import Item from './Item';

interface Panel {
  name?: string;
  content?: Item;
}

const Panel: Model<Panel> = {
  name: "",
  content: undefined
}

export default Panel;
