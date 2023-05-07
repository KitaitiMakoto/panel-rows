import { define, html } from "hybrids";

import '@spectrum-web-components/action-group/sp-action-group.js';
import '@spectrum-web-components/action-button/sp-action-button.js';
import '@spectrum-web-components/icons-workflow/icons/sp-icon-settings.js';

interface AppControls {
}

export default define<AppControls>({
  tag: 'app-controls',
  render: () => html`
    <sp-action-group>
    </sp-action-group>
    <sp-action-group>
      <sp-action-button>
        <sp-icon-settings slot="icon"></sp-icon-settings>
        設定
      </sp-action-button>
    </sp-action-group>
  `.css`
    :host {
      display: flex;
      justify-content: space-between;
      align-items: center;
      block-size: 100%;
      padding-inline: var(--spectrum-alias-grid-gutter-small);
      border-block-end: 1px solid var(--spectrum-global-color-gray-200);
      background-color: var(--spectrum-global-color-gray-50);
    }
  `
});
