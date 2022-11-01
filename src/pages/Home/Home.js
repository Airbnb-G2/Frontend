import { Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import PublicationCard from '../../components/PublicationCard/PublicationCard';
import { homeStyles } from './HomeStyles';

const publications = [
  {
    id: 1,
    images: ['https://www.carza.com/blog/wp-content/uploads/2018/03/ventajas-y-beneficios-de-vivir-en-un-departamento.jpg'],
    title: 'Departamento 3 ambientes, Palermo',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque velit massa mattis donec fames. Dictum varius egestas sed iaculis quisque ullamcorper in vitae turpis.',
    pricePerNight: 350,
    city: 'Palermo',
  },
  {
    id: 1,
    images: ['https://www.carza.com/blog/wp-content/uploads/2018/03/ventajas-y-beneficios-de-vivir-en-un-departamento.jpg'],
    title: 'Departamento 3 ambientes, Palermo',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque velit massa mattis donec fames. Dictum varius egestas sed iaculis quisque ullamcorper in vitae turpis.',
    pricePerNight: 350,
    city: 'Palermo',
  },
  {
    id: 1,
    images: ['https://www.carza.com/blog/wp-content/uploads/2018/03/ventajas-y-beneficios-de-vivir-en-un-departamento.jpg'],
    title: 'Departamento 3 ambientes, Palermo',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque velit massa mattis donec fames. Dictum varius egestas sed iaculis quisque ullamcorper in vitae turpis.',
    pricePerNight: 350,
    city: 'Palermo',
  },
  {
    id: 1,
    images: ['https://www.carza.com/blog/wp-content/uploads/2018/03/ventajas-y-beneficios-de-vivir-en-un-departamento.jpg'],
    title: 'Departamento 3 ambientes, Palermo',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque velit massa mattis donec fames. Dictum varius egestas sed iaculis quisque ullamcorper in vitae turpis.',
    pricePerNight: 350,
    city: 'Palermo',
  },
  {
    id: 1,
    images: ['https://www.carza.com/blog/wp-content/uploads/2018/03/ventajas-y-beneficios-de-vivir-en-un-departamento.jpg'],
    title: 'Departamento 3 ambientes, Palermo',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque velit massa mattis donec fames. Dictum varius egestas sed iaculis quisque ullamcorper in vitae turpis.',
    pricePerNight: 350,
    city: 'Palermo',
  },
  {
    id: 1,
    images: ['https://www.carza.com/blog/wp-content/uploads/2018/03/ventajas-y-beneficios-de-vivir-en-un-departamento.jpg'],
    title: 'Departamento 3 ambientes, Palermo',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque velit massa mattis donec fames. Dictum varius egestas sed iaculis quisque ullamcorper in vitae turpis.',
    pricePerNight: 350,
    city: 'Palermo',
  },
  {
    id: 1,
    images: ['https://www.carza.com/blog/wp-content/uploads/2018/03/ventajas-y-beneficios-de-vivir-en-un-departamento.jpg'],
    title: 'Departamento 3 ambientes, Palermo',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque velit massa mattis donec fames. Dictum varius egestas sed iaculis quisque ullamcorper in vitae turpis.',
    pricePerNight: 350,
    city: 'Palermo',
  },
  {
    id: 1,
    images: ['https://www.carza.com/blog/wp-content/uploads/2018/03/ventajas-y-beneficios-de-vivir-en-un-departamento.jpg'],
    title: 'Departamento 3 ambientes, Palermo',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque velit massa mattis donec fames. Dictum varius egestas sed iaculis quisque ullamcorper in vitae turpis.',
    pricePerNight: 350,
    city: 'Palermo',
  },
  {
    id: 1,
    images: ['https://www.carza.com/blog/wp-content/uploads/2018/03/ventajas-y-beneficios-de-vivir-en-un-departamento.jpg'],
    title: 'Departamento 3 ambientes, Palermo',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque velit massa mattis donec fames. Dictum varius egestas sed iaculis quisque ullamcorper in vitae turpis.',
    pricePerNight: 350,
    city: 'Palermo',
  },
  {
    id: 1,
    images: ['https://www.carza.com/blog/wp-content/uploads/2018/03/ventajas-y-beneficios-de-vivir-en-un-departamento.jpg'],
    title: 'Departamento 3 ambientes, Palermo',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque velit massa mattis donec fames. Dictum varius egestas sed iaculis quisque ullamcorper in vitae turpis.',
    pricePerNight: 350,
    city: 'Palermo',
  },
];

const Home = () => {
  const styles = homeStyles();

  return (
    <div className={styles.homeContainer}>
      <Typography className={styles.title}>Publicaciones destacadas</Typography>
      <Divider sx={{ mt: 2 }} />
      <Grid container rowSpacing={5} columnSpacing={5} className={styles.publicationsGrid}>
        {publications.map(publication => (
          <Grid key={publication.id} item spacing={4}>
            <PublicationCard publication={publication} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
