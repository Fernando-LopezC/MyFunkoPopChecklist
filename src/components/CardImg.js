import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { COLOR, FONTS } from "../helpers/constants";

function CardImg() {
    return (
        <Card sx={{
            maxWidth: '100%', 
            display: 'flex',
            alignItems: 'center',
            backgroundColor: COLOR.mainBlue,
            borderRadius: 5,
            boxShadow: 10
            }}>
			<CardContent>
				<Typography sx={{
                    fontFamily: FONTS.bebasNeue,
                    color: COLOR.lightBlue,
                    fontSize: 45
                }} 
                    gutterBottom 
                    variant='h3' 
                    component='div'>
					¡Haciendo la gestión de tu colección mucho más sencilla!
				</Typography>
				<Typography sx={{
                    color: COLOR.lightBlue,
                    fontSize: '20px' 
                }}>
					En ésta página podrás encontrar checklists para tus fandoms
					y series POP! favoritas, olvidate de tener que descargar una
					imagen nueva cada vez que se anuncien piezas nuevas de tus fandoms
					favoritos.
					<br />
                    <br />
					Creando una cuenta podrás guardar y marcar tus fandoms favoritos con
					las plantillas actualizadas lo más rápido posible en cuanto un POP!
					sea anunciado. 
				</Typography>
			</CardContent>
            <CardMedia
            sx={{
                maxWidth: '40%',
                height: '100%'
            }}
			component='img'
			image='/Assets/HomeAssets/ChecklistMHA.jpg'
			alt= 'MHA Checklist example'
			/>
		</Card>
    )
}

export default CardImg;