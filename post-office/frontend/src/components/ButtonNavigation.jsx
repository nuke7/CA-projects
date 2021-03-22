import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Mail from "@material-ui/icons/Mail";
import Inbox from "@material-ui/icons/Inbox";
import Search from "@material-ui/icons/Search";
import { useFetch } from "./UseFetch";

const useStyles = makeStyles({
  root: {
    maxWidth: 750,
    margin: "auto",
  },
});

export default function ButtonNavigation() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const allMailOptions = {
    method: "GET",
  };
  const allMail = useFetch("http://localhost:9000/mails", allMailOptions);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        console.log(value);
        console.log(allMail[0].mails);
      }}
      showLabels
      className={classes.root}>
      <BottomNavigationAction label="All Mail" icon={<Inbox />} />
      <BottomNavigationAction label="New Mail" icon={<Mail />} />
      <BottomNavigationAction label="Search" icon={<Search />} />
      
    </BottomNavigation>
  );
}
