import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import { useState } from "react";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";

import { useData } from "./UseData";

const useStyles = makeStyles({
  textInput: {
    width: "25ch",
    margin: "1rem auto",
  },
  root: {
    minWidth: 200,
    width: "80%",
    margin: "1rem auto",
    "& input:invalid": {
      borderColor: "red",
      borderWidth: 2,
    },
  },
});

export const SearchComponent = () => {
  const classes = useStyles();
  const [search, setSearch] = useState("");
  /*  const [error, setError] = useState(false); */

  let searchUrl = `http://localhost:9000/mails/${search}`;

  /*   const handleSearch = (e) => {
    if (e.target.value !== "number") {
      setError(true);
      console.log(e.target.value);
    }
  }; */

  const searchMail = useData(searchUrl);

  return (
    <div className="search">
      <TextField
        type={"number"}
        className={classes.textInput}
        /* onChange={handleSearch} */
        id="standard-basic"
        label="Type ID here"
      />
      <br />
      <Button
        variant="outlined"
        color="primary"
        className={classes.button}
        endIcon={<Icon>search</Icon>}
        onClick={() => {
          setSearch(document.getElementById("standard-basic").value);
          console.log(searchMail);
        }}>
        Search
      </Button>
      {searchMail.From ? (
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <h3 className={classes.titleSpan}>
              <em>From:</em> {searchMail.From}
            </h3>
            <h3>
              <em>To:</em> {searchMail.To}
            </h3>
            <Typography variant="body1">
              <em className={classes.small}>Message:</em> {searchMail.Content}
            </Typography>
            <Typography color="textSecondary" className={classes.small}>
              Reference Number: {searchMail.id}
            </Typography>
          </CardContent>
        </Card>
      ) : (
        <p>No such message</p>
      )}
    </div>
  );
};
