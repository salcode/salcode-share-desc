import PropTypes from 'prop-types';

import { TextareaControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export default function ShareDesc({
  desc,
}) {
  return (
    <p>
      <TextareaControl
        label={__('Share Description', 'salcode-share-desc')}
        value={desc}
      />
    </p>
  );
}

ShareDesc.propTypes = {
  desc: PropTypes.string.isRequired,
};
