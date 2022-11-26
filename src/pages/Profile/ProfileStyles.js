import { makeStyles } from "@mui/styles";

export const profileStyles = makeStyles((theme) => ({
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 43,
    rowGap: 30,
    [theme.breakpoints.down("tablet")]: {
      padding: 22,
    },
  },
  profilePicture: {
    width: 200,
    height: 200,
    borderRadius: "50%",
    objectFit: "cover",
    border: `3px solid ${theme.palette.primary.main}`,
  },
}));
