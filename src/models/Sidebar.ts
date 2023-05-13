import {Model} from 'hybrids';

interface Sidebar {
  open: boolean;
}

const Sidebar: Model<Sidebar> = {
  open: false
};

export default Sidebar;
