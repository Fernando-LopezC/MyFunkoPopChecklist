import PropTypes from 'prop-types'
import React, { useState } from 'react';
import { Typography } from '@mui/material';

function Funko({picture, name, number}) {
    const [checked, setChecked] = useState(false);

    function handleChange(event) {
        setChecked(event.target.checked);
    }

    return (
        <figure>
            <img src= {picture} alt= {name} />
            <input
            type='checkbox'
            checked={checked}
            onChange={handleChange}
            sx= {{
                position: 'absolute'
            }}
                />
            <figcaption>
                <Typography>
                    {name} #{number}
                </Typography>
            </figcaption>
        </figure>
    );
};

Funko.propTypes = {
    picture: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired
};

export default Funko