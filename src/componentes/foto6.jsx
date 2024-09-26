import foto6 from '../assets/img/foto6.jpg';
import PropTypes from 'prop-types';

export const Foto6 = ( { className } ) => {
  return (
    <img src={foto6} alt="Foto 6 recuerdo" className={className} />
  )
}

Foto6.propTypes = {
  className: PropTypes.string
}
