import { makeStyles } from "@mui/styles";

export const reviewsListStyles = makeStyles((theme) => ({
  leftColumn: {
    display: "flex",
    flexDirection: "column",
    width: 700,
    [theme.breakpoints.down("desktop")]: {
      width: "100%",
      alignSelf: "center",
    },
  },
  reviewsContainer: {
    display: "flex",
    flexDirection: "column",
    rowGap: 10,
  },
  descriptionTitle: {
    fontWeight: "bold",
    fontSize: 24,
  },
}));
