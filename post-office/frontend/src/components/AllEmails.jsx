import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";
/* import React, { useState } from "react";

import styled from "styled-components"; */
/* import { useData } from "./UseData"; */

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    width: "80%",
    margin: "1rem auto",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: "1.8rem",
  },
  pos: {
    marginBottom: 12,
  },
  small: {
    fontSize: "0.9rem",
    marginTop: "1rem",
  },
  titleSpan: {
    fontSize: "1.2rem",
    marginTop: 0,
  },
});

export const Allmails = (props) => {
  const classes = useStyles();

  return (
    <div className="mailcontainer">
      <h1>
        There are {typeof props.mailData === "object" && props.mailData.length} emails in
        the system:
      </h1>
      {typeof props.mailData === "object" &&
        props.mailData.map((mail) => {
          return (
            <div className="mailDiv" key={mail.id}>
              <Card className={classes.root} variant="outlined">
                <CardContent>
                  <h3 className={classes.titleSpan}>
                    <em>From:</em> {mail.From}
                  </h3>
                  <h3>
                    <em>To:</em> {mail.To}
                  </h3>
                  <Typography variant="body1">
                    <em className={classes.small}>Message:</em> {mail.Content}
                  </Typography>
                  <Typography color="textSecondary" className={classes.small}>
                    Reference Number: {mail.id}
                  </Typography>
                </CardContent>
              </Card>
            </div>
          );
        })}
    </div>
  );
};
