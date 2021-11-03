import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { COLOR, FONTS, ROUTES } from '../helpers/constants';
import { Link } from 'react-router-dom'

function FandomList() {
  return (
    <Card sx={{
      display: 'flex',
      alignItems: 'center',
      backgroundColor: COLOR.mainBlue,
      borderRadius: 5,
      boxShadow: 10,
      my: 5
    }}>
      <CardMedia>
      <ImageList sx={{ width: 500, height: 450 }}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
                to={`/checklist/${item.endpoint}`} 
                component={Link}
              >
                <ArrowRightAltIcon/>
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
      </CardMedia>
      <CardContent>
        <Typography sx={{
          fontFamily: FONTS.bebasNeue,
          color: COLOR.lightBlue,
          fontSize: 45
        }}
        gutterBottom
        variant= 'h3'
        component='div'>
          Funko POP! fandoms
        </Typography>
        <Typography sx={{
          color: COLOR.lightBlue,
          fontSize: '20px'
        }}>
        Los fandoms de Funko POP! Son aquellos que están basados en algúna franquicia especifica, 
        por lo general es la forma más sencilla de coleccionar, 
        eligiendo un fandom e intentar conseguir todos los POP! de dicha franquicia.
        </Typography>
        <Button 
        color= 'secondary'
        variant='contained' 
        to={ROUTES.checklist}
        component={Link}
        sx={{
           mt: 3,
           mb: 2
        }}
        >
          Crea tu propia Checklist
        </Button>
      </CardContent>
    </Card>
  );
}

const itemData = [
  {
    img: 'https://wallpapers.com/images/high/my-hero-academia-world-heroes-mission-ophg4qsse6vc3peo.jpg',
    title: 'My Hero Academia',
    endpoint: 'myheroacademia',
    rows: 2,
    cols: 2,
    featured: true
  },
  {
    img: 'https://www.wallpaperflare.com/static/797/291/781/pok%C3%A9mon-ash-ketchum-retro-games-nintendo-wallpaper.jpg',
    title: 'Pokemon',
    endpoint: 'pokemon'
  },
  {
    img: 'https://c4.wallpaperflare.com/wallpaper/893/877/320/digimon-adventure-digimon-taichi-yagami-sora-takenouchi-wallpaper-preview.jpg',
    title: 'Digimon',
    endpoint: 'digimon'
  },
  {
    img: 'http://www.pdvg.it/es/wp-content/uploads/2017/08/DCLgcq1V0AA9H4k-1.jpg',
    title: 'Monster Hunter',
    endpoint: 'monsterhunter',
    cols: 2
  },
  {
    img: 'https://cdn.wallpapersafari.com/93/52/Kez0Br.jpg',
    title: 'Yu-Gi-Oh',
    endpoint: 'yugioh',
    cols: 2
  },
  {
    img: 'https://wallpaperaccess.com/full/1445798.jpg',
    title: 'Naruto',
    endpoint: 'naruto',
    rows: 2,
    cols: 2,
    featured: true
  },
  {
    img: 'https://media.redadn.es/imagenes/animanga-0_339162.jpg',
    title: 'Demon Slayer',
    endpoint: 'demonslayer'
  },
  {
    img: 'https://wallpaperaccess.com/full/1225510.png',
    title: 'Jurassic Park',
    endpoint: 'jurassicpark'
  },
  {
    img: 'https://cdna.artstation.com/p/assets/images/images/016/113/776/large/amir-bahador-zare-harry-potter-logo-fan-art-2019-amir-bahador-zare.jpg?1550946147',
    title: 'Harry Potter',
    endpoint: 'harrypotter',
    rows: 2,
    cols: 2
  },
  {
    img: 'https://wallpaperset.com/w/full/9/6/2/87029.jpg',
    title: 'Star Wars',
    endpoint: 'starwars'
  },
  {
    img: 'https://wallpaperaccess.com/full/2379005.jpg',
    title: 'League Of Legends',
    endpoint: 'leagueoflegends'
  },
  {
    img: 'https://i.ytimg.com/vi/9r8DpnNFrsc/maxresdefault.jpg',
    title: 'Avatar: The Last Airbender',
    endpoint: 'avatar',
    cols: 2
  },
];

export default FandomList;