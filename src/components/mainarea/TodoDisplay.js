import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography, Fade } from "@material-ui/core";
import ActionsBar from "../todo/Actions";
import LabelsBar from "../todo/Labels";

const useStyles = makeStyles(theme => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    border: "1px",
    borderColor: theme.palette.divider,
    borderStyle: "solid"
  },
  textTitle: {
    ...theme.custom.fontFamily.metropolis,
    padding: theme.spacing(1.5, 2, 0, 2),
    fontWeight: 500,
    fontSize: "1rem",
    color: theme.palette.text.primary,
    lineHeight: theme.spacing(0.18)
  },
  textNote: {
    ...theme.custom.fontFamily.roboto,
    padding: theme.spacing(0.5, 2, 1.5, 2),
    fontWeight: 400,
    fontSize: "14px",
    color: theme.palette.text.primary
  },
  barWrapper: {
    display: "flex",
    flexDirection: "row",
    padding: theme.spacing(1, 2),
    justifyContent: "space-between"
  }
}));

export default function({ title, notes, labels }) {
  const classes = useStyles();
  const [isHovered, setHovered] = useState(false);

  return (
    <Paper onMouseOver={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className={classes.wrapper} elevation={isHovered ? 2 : 0}>
      <Typography className={classes.textTitle} variant="subtitle1">
        {title}
      </Typography>
      <Typography className={classes.textNote} variant="body1">
        {notes}
      </Typography>
      <LabelsBar labels={labels} />
      <Fade in={isHovered}>
        <div className={classes.barWrapper}>
          <ActionsBar isCreateMode={false} />
        </div>
      </Fade>
    </Paper>
  );
}