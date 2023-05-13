import {define, html} from 'hybrids';
import '@spectrum-web-components/theme/sp-theme.js';
import '@spectrum-web-components/theme/src/themes.js';

import './style.css';

import './app-layout';
import './app-controls';
import './app-borad';

interface PanelRows {
}

export default define<PanelRows>({
  tag: 'panel-rows',
  render: () => html`
    <sp-theme scale="medium" color="light">
      <h1>Panel Rows</h1>
      <app-layout>
        <header slot="header">
          <app-controls></app-controls>
        </header>
        <div slot="main">
          <app-board src="/runes.json"></app-board>
        </div>
        <aside slot="sidebar">Settings</aside>
      </app-layout>
      <footer>
        <p><a href="https://gitlab.com/KitaitiMakoto/panel-rows">Source code</a></p>
      </footer>
    </sp-theme>
  `.css`
    header {
      block-size: 100%;
    }
  `
});
