import { makeStyles } from "@mui/styles";

export const userTitle = makeStyles((theme) => ({
  userTitle: {
    display: "flex",
    alignItems: "center",
    columnGap: 10,
    textDecoration: "none",
    color: theme.palette.grey[800],
  },
  name: {
    fontFamily: theme.typography.fontFamily,
    fontSize: 20,
    lineHeight: "26px",
    fontWeight: 300,
  },
  image: {
    width: 50,
    borderRadius: 100,
    height: 50,
    objectFit: "cover",
    border: `2px solid ${theme.palette.primary.main}`,
  },
}));
