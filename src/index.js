import { registerPlugin } from '@wordpress/plugins';
import { PluginDocumentSettingPanel } from '@wordpress/edit-post';
import { __ } from '@wordpress/i18n';

registerPlugin(
  'salcode-share-desc', // Unique identifier for our plugin.
  {
    render: () => {
      return (
        <PluginDocumentSettingPanel
          title={__('Social Share', 'salcode-share-desc')}
        >
          <p>Placeholder for future input field for share description</p>
        </PluginDocumentSettingPanel>
      );
    },
  },
);
