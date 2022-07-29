import PropTypes from 'prop-types';

export default function ShareDesc({
  desc,
}) {
  return (
    <p>
      {desc}
    </p>
  );
}

ShareDesc.propTypes = {
  desc: PropTypes.string.isRequired,
};
