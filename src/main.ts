import {define, html} from 'hybrids';

interface PanelRows {
}

export default define<PanelRows>({
  tag: 'panel-rows',
  render: () => html`<h1>Panel Rows</h1>`
});
