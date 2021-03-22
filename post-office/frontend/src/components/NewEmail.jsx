import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import { useState, useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export const NewEmail = (props) => {
  const classes = useStyles();
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState({
    To: "",
    From: "",
    Content: "",
  });

  useEffect(() => {
    if (email.To !== "" && email.From !== "") {
      fetch("http://localhost:9000/mails", {
        method: "POST",
        mode: "cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(email),
      })
        .then(console.log(email))
        .then(setMessage(() => ""))
        .then(setTo(() => ""))
        .then(setFrom(() => ""))
        .then(props.setRender((render) => !render));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email]);

  const handleFrom = (e) => {
    setFrom(e.target.value);
  };
  const handleTo = (e) => {
    setTo(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField value={from} id="standard-basic" label="From" onChange={handleFrom} />
      <TextField
        value={to}
        id="filled-basic"
        label="To"
        onChange={handleTo} /* variant="filled" */
      />
      <TextField
        value={message}
        id="outlined-basic"
        label="Message"
        onChange={handleMessage} /* variant="outlined" */
      />{" "}
      <br />
      <Button
        variant="outlined"
        color="primary"
        className={classes.button}
        endIcon={<Icon>send</Icon>}
        onClick={() => {
          if (to !== "" && from !== "" && message !== "") {
            setEmail({ To: to, From: from, Content: message });
          } else {
            alert("no empty fields!");
          }
        }}>
        Send
      </Button>
    </form>
  );
};
