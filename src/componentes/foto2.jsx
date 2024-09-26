import foto2 from '../assets/img/foto2.jpg';
import PropTypes from 'prop-types';

export const Foto2 = ( { className } ) => {
  return (
    <img src={foto2} alt="Foto 2 recuerdo" className={className} />
  )
}

Foto2.propTypes = {
  className: PropTypes.string
}
