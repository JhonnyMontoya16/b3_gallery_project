import foto3 from '../assets/img/foto3.jpg';
import PropTypes from 'prop-types';

export const Foto3 = ( { className } ) => {
  return (
    <img src={foto3} alt="Foto 3 recuerdo" className={className} />
  )
}

Foto3.propTypes = {
  className: PropTypes.string
}
