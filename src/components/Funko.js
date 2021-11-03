import PropTypes from 'prop-types'

function Funko({picture, name}) {
    return (
        <figure>
            <img src={picture} alt={name} />
            <figcaption>
                <h4>{name}</h4>
            </figcaption>
        </figure>
    );
};

Funko.propTypes = {
    picture: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

export default Funko