import foto5 from '../assets/img/foto5.jpg';
import PropTypes from 'prop-types';

export const Foto5 = ( { className } ) => {
  return (
    <img src={foto5} alt="Foto 5 recuerdo" className={className} />
  )
}

Foto5.propTypes = {
  className: PropTypes.string
}
