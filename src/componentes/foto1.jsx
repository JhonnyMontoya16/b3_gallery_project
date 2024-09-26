import foto1 from '../assets/img/foto1.jpg';
import PropTypes from 'prop-types';

export const Foto1 = ( { className } ) => {
  return (
    <img src={foto1} alt="Foto 1 recuerdo" className={className} />
  )
}

Foto1.propTypes = {
  className: PropTypes.string
}
