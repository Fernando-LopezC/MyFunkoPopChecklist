import React from "react";
import { Box } from '@mui/system'
import { COLOR, FONTS } from '../helpers/constants'

function Banner() {
	return (
		<Box
		sx={{
			fontFamily: FONTS.bebasNeue,
            color: COLOR.lightBlue,
			backgroundImage: 'Url(/Assets/HomeAssets/wallpaperuse.com-funko-pop-wallpaper-302906.jpg)',
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover',
            borderRadius: 5,
            boxShadow: 10,
			fontSize: 50,
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
            my: 5

		}}>
			<h1>
				My Funko Pop! checklist
			</h1>
		</Box>
	);
};

export default Banner;