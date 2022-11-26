import React, { useContext, useEffect, useState } from "react";
import { CircularProgress, Divider, Grid, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import CustomButton from "../../components/CustomButton/CustomButton";
import PublicationCard from "../../components/PublicationCard/PublicationCard";
import { homeStyles } from "./HomeStyles";
import { dbGet } from "../../utils/db";
import { AuthContext } from "../../context/Auth";
import Searcher from "../../components/Searcher/Searcher";

const Home = () => {
  const styles = homeStyles();
  const { userInfo } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [publications, setPublications] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  const { role, id: userId } = userInfo;
  const search = queryString.parse(location.search);

  const isHost = role === "host";

  const handleCreatePublicationButton = () => {
    navigate("/create-publication");
  };

  const getPublications = () => {
    setLoading(true);
    dbGet(isHost ? `${userId}/rental` : "rental", search)
      .then(({ items }) => {
        setPublications(items);
        setLoading(false);
      })
      .catch(({ data }) => console.error(data));
  };

  useEffect(() => {
    getPublications();
  }, [isHost]);

  useEffect(() => {
    getPublications();
  }, [location]);

  return (
    <div className={styles.homeContainer}>
      {!isHost && <Searcher />}
      <div className={styles.titleContainer}>
        <Typography className={styles.title}>
          {isHost ? "Tus publicaciones" : "Publicaciones destacadas"}
        </Typography>
        {isHost && (
          <CustomButton onClick={handleCreatePublicationButton}>
            Crear nueva publicación
          </CustomButton>
        )}
      </div>
      <Divider />
      {loading ? (
        <CircularProgress size={40} className={styles.circularProgress} />
      ) : (
        <>
          {!publications.length && isHost && (
            <Typography className={styles.noPublicationsText}>
              No tienes publicaciones todavía
            </Typography>
          )}
          <Grid container spacing={5} className={styles.publicationsGrid}>
            {publications.map((publication) => (
              <Grid key={publication.id} item>
                <PublicationCard publication={publication} />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </div>
  );
};

export default Home;
