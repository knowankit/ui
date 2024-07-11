import { configure, addParameters, addDecorator } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import { withA11y } from '@storybook/addon-a11y';
import centered from '@storybook/addon-centered/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import TableComponent from './components/props-table-info';
import CodeHighlighter from './components/code-higlighter';
import H1 from './components/h1';
import H2 from './components/h1';
import styles from './components/custom-styles';
import '../dist/admin/styles.css';

addParameters({
  options: {
    /**
     * name to display in the top left corner
     * @type {String}
     */
    name: 'BTT Storybook',
    /**
     * URL for name in top left corner to link to
     * @type {String}
     */
    url: 'https://github.com/bangthetable/ui',
    /**
     * show story component as full screen
     * @type {Boolean}
     */
    goFullScreen: false,
    /**
     * display panel that shows a list of stories
     * @type {Boolean}
     */
    showStoriesPanel: true,
    /**
     * display panel that shows addon configurations
     * @type {Boolean}
     */
    showAddonPanel: true,
    /**
     * display floating search box to search through stories
     * @type {Boolean}
     */
    showSearchBox: true,
    /**
     * show addon panel as a vertical panel on the right
     * @type {Boolean}
     */
    addonPanelInRight: true,
    /**
     * sorts stories
     * @type {Boolean}
     */
    sortStoriesByKind: true,
    /**
     * sidebar tree animations
     * @type {Boolean}
     */
    sidebarAnimations: true
  }
});

// Fixed version for addon-a11y is 4.2.0-alpha - https://github.com/storybooks/storybook/issues/4889
addDecorator(withA11y);
addDecorator(centered);
addDecorator(
  withInfo({
    source: false,
    /**
     * Overrides styles of addon. The object should follow this shape:
     * https://github.com/storybooks/storybook/blob/master/addons/info/src/components/Story.js#L19.
     * This prop can also accept a function which has the default stylesheet passed as an argument
     */
    styles,
    // For Reference goto: https://github.com/storybooks/storybook/blob/release/4.1/addons/info/src/index.js#L23
    components: {
      h1: H1,
      h2: H2,
      code: CodeHighlighter
    },
    TableComponent
  })
);
addDecorator(withKnobs);

const req = require.context('../stories', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
