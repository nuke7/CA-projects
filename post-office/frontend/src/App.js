import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Mail from "@material-ui/icons/Mail";
import Inbox from "@material-ui/icons/Inbox";
import Search from "@material-ui/icons/Search";
import { Allmails } from "./components/AllEmails";
import { useData } from "./components/UseData";
import { NewEmail } from "./components/NewEmail";

/* import Buttons from "./components/Buttons"; */
import "./App.css";
import { SearchComponent } from "./components/SearchComponent";

const useStyles = makeStyles({
  root: {
    maxWidth: 750,
    margin: "auto",
  },
});

function App() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [render, setRender] = useState(true);
  const [allMailUrl, setAllMailUrl] = useState("http://localhost:9000/mails");

  /*   const newMailOptions = {
    method: "POST",
    mode: "cors",
  }; */

  const allMail = useData(allMailUrl);
  const mailData = () => {
    if (typeof allMail === "object") {
      return allMail.mails;
    } else {
      return "No emails yet";
    }
  };

  function refreshPage() {
    window.location.reload();
  }

  useEffect(() => {
    setAllMailUrl("http://localhost:9000");
  }, [value]);

  return (
    <div className="App">
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          console.log(newValue);
        }}
        showLabels
        className={classes.root}>
        <BottomNavigationAction label="All Mail" icon={<Inbox />} onClick={refreshPage} />
        <BottomNavigationAction label="New Mail" icon={<Mail />} />
        <BottomNavigationAction label="Search" icon={<Search />} />
      </BottomNavigation>
      {value === 0 && <Allmails mailData={mailData()} />}
      {value === 1 && <NewEmail setRender={() => setRender()} render={render} />}
      {value === 2 && <SearchComponent />}
    </div>
  );
}

export default App;
