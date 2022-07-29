import { registerPlugin } from '@wordpress/plugins';
import { useSelect } from '@wordpress/data';
import { PluginDocumentSettingPanel } from '@wordpress/edit-post';
import { __ } from '@wordpress/i18n';
import ShareDesc from './components/ShareDesc';

registerPlugin(
  'salcode-share-desc', // Unique identifier for our plugin.
  {
    render: () => {
      const shareDescription = useSelect(
        (select) => {
          return select('core/editor')
            .getEditedPostAttribute('meta')
            .salcode_share_desc;
        }
      );

      return (
        <PluginDocumentSettingPanel
          title={__('Social Share', 'salcode-share-desc')}
        >
          <ShareDesc
            desc={shareDescription}
          />
        </PluginDocumentSettingPanel>
      );
    },
  },
);
