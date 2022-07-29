import PropTypes from 'prop-types';

import { TextareaControl } from '@wordpress/components';

export default function ShareDesc({
  desc,
}) {
  return (
    <p>
      <TextareaControl
        label="Share Description"
        value={desc}
      />
    </p>
  );
}

ShareDesc.propTypes = {
  desc: PropTypes.string.isRequired,
};
