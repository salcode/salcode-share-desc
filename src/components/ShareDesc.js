import PropTypes from 'prop-types';

import { TextareaControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export default function ShareDesc({
  desc,
  setShareDescription,
}) {
  return (
    <p>
      <TextareaControl
        help={__('This description will be added as a meta tag on the front-end rendering of the page', 'salcode-share-desc')}
        label={__('Share Description', 'salcode-share-desc')}
        onChange={setShareDescription}
        value={desc}
      />
    </p>
  );
}

ShareDesc.propTypes = {
  desc: PropTypes.string.isRequired,
  setShareDescription: PropTypes.func.isRequired,
};
