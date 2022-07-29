import { registerPlugin } from '@wordpress/plugins';
import { PluginDocumentSettingPanel } from '@wordpress/edit-post';

registerPlugin(
  'salcode-share-desc', // Unique identifier for our plugin.
  {
    render: () => {
      return (
        <PluginDocumentSettingPanel
          title={'Social Share'}
        >
          <p>Placeholder for future input field for share description</p>
        </PluginDocumentSettingPanel>
      );
    },
  },
);
