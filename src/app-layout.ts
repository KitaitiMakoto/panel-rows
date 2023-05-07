import { define, html } from "hybrids";

interface AppLayout {
  sidebarOpen: boolean;
}

export default define<AppLayout>({
  tag: 'app-layout',
  sidebarOpen: false,
  render: ({sidebarOpen}) => html`
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div class="body">
      <div class="main">
        <slot name="main"></slot>
      </div>
      <div class="sidebar" aria-hidden="${!sidebarOpen}">
        <slot name="sidebar"></slot>
      </div>
    </div>
  `.css`
    :host {
      --header-height: 4rem;
      --body-height: calc(100vh - var(--header-height));
      --sidebar-width: 12rem;

      display: block;
      overflow: hidden;
    }

    .header {
      block-size: var(--header-height);
    }

    .body {
      display: flex;
      position: relative;
      block-size: var(--body-height);
    }

    .main {
      flex-shrink: 0;
      inline-size: ${sidebarOpen ? 'calc(100% - var(--sidebar-width))' : '100%'};
      block-size: 100%;
      transition: inline-size 200ms;
      overflow: scroll;
    }

    .sidebar {
      flex-shrink: 0;
      position: relative;
      inline-size: var(--sidebar-width);
      block-size: 100%;
      overflow-y: scroll;
    }
  `
});
