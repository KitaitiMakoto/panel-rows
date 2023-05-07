import {define, html} from 'hybrids';
import '@spectrum-web-components/theme/sp-theme.js';
import '@spectrum-web-components/theme/src/themes.js';

import './style.css'

interface PanelRows {
}

export default define<PanelRows>({
  tag: 'panel-rows',
  render: () => html`
    <sp-theme>
      <h1>Panel Rows</h1>
    </sp-theme>
  `
});
