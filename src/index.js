import { registerPlugin } from '@wordpress/plugins';
import { PluginDocumentSettingPanel } from '@wordpress/edit-post';
import { __ } from '@wordpress/i18n';
import ShareDesc from './components/ShareDesc';

registerPlugin(
  'salcode-share-desc', // Unique identifier for our plugin.
  {
    render: () => {
      return (
        <PluginDocumentSettingPanel
          title={__('Social Share', 'salcode-share-desc')}
        >
          <ShareDesc />
        </PluginDocumentSettingPanel>
      );
    },
  },
);
