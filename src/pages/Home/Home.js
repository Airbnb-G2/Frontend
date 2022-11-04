import React, { useState } from 'react';
import {
  Divider, Grid, Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../../components/CustomButton/CustomButton';
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

const user = {
  role: 'guest',
  id: 4,
};

const Home = () => {
  const styles = homeStyles();
  const { role, id } = user;

  const [isHost, setIsHost] = useState(role === 'host');
  const navigate = useNavigate();

  const handleCreatePublicationButton = () => {
    navigate('/create-publication');
  };

  return (
    <div className={styles.homeContainer}>
      <div className={styles.titleContainer}>
        <Typography className={styles.title}>
          {isHost ? 'Tus publicaciones' : 'Publicaciones destacadas'}
        </Typography>
        {isHost && (
        <CustomButton onClick={handleCreatePublicationButton}>
          Crear nueva publicación
        </CustomButton>
        )}
      </div>
      <Divider sx={{ mt: 2 }} />
      <Grid container spacing={5} className={styles.publicationsGrid}>
        {publications.map(publication => (
          <Grid key={publication.id} item>
            <PublicationCard publication={publication} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
