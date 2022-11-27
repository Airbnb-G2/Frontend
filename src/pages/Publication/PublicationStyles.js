import { makeStyles } from "@mui/styles";

export const publicationStyles = makeStyles((theme) => ({
  publicationContainer: {
    display: "flex",
    flexDirection: "column",
    padding: 43,
    rowGap: 30,
    maxWidth: 1200,
    margin: "0 auto",
    [theme.breakpoints.down("tablet")]: {
      margin: 0,
      padding: 22,
    },
  },
  columnsContainer: {
    display: "flex",
    columnGap: 40,
    height: "min-content",
    [theme.breakpoints.down("desktop")]: {
      flexDirection: "column",
      rowGap: 20,
    },
  },
  leftColumn: {
    display: "flex",
    flexDirection: "column",
    width: 700,
    [theme.breakpoints.down("desktop")]: {
      width: "100%",
      alignSelf: "center",
    },
  },
  rightColumn: {
    display: "flex",
    flexDirection: "column",
    rowGap: 15,
    flex: 1,
  },
  location: {
    display: "flex",
    alignItems: "center",
  },
  priceContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  pricePerNight: {
    color: theme.palette.primary.main,
    fontWeight: "bold",
    fontSize: 36,
  },
  amenitiesContainer: {
    display: "flex",
    columnGap: 5,
    flexWrap: "wrap",
    rowGap: 5,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    [theme.breakpoints.down("tablet")]: {
      fontSize: 25,
    },
  },
  descriptionContainer: {
    display: "flex",
    flexDirection: "column",
    rowGap: 5,
  },
  descriptionTitle: {
    fontWeight: "bold",
    fontSize: 24,
  },
  description: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    lineClamp: 10,
    "-webkit-box-orient": "vertical",
  },
  image: {
    objectFit: "fill",
    [theme.breakpoints.down("desktop")]: {
      objectFit: "contain",
      margin: "0 auto",
      maxHeight: 500,
    },
  },
  loader: {
    margin: "0 auto",
  },
}));
