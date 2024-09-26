import foto4 from '../assets/img/foto4.jpg';
import PropTypes from 'prop-types';

export const Foto4 = ( { className } ) => {
  return (
    <img src={foto4} alt="Foto 4 recuerdo" className={className} />
  )
}

Foto4.propTypes = {
  className: PropTypes.string
}
