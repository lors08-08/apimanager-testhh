import React, { useState } from "react";
import DialogActions from "@material-ui/core/DialogActions";
import TextField from "@material-ui/core/TextField";
import DialogContent from "@material-ui/core/DialogContent";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { useDispatch, useSelector } from "react-redux";
import { startLogIn } from "../../redux/actions";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(() => ({
  root: {
    "& h2": {
      fontSize: "2em",
      textTransform: "uppercase",
      fontWeight: "700",
      textAlign: "center",
      letterSpacing: "4px",
    },
  },
  authorization: {
    overflowY: "hidden",
    minHeight: "125px",
  },
  login: {
    margin: "auto",
    "& button": {
      fontSize: "24px",
      padding: "10px 30px 10px 30px",
    },
  },
  error: {
    padding: 0,
    color: "red",
    textAlign: "center",
    "& h2": {
      fontSize: "15px",
    },
  },
}));

function LogInPage() {
  const dispatch = useDispatch();
  const classes = useStyles();

  const error = useSelector((state) => state.logging.error);

  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");

  const [length, setLengthError] = useState(false);

  const handleLogin = (e) => {
    setLogin(e.target.value);
  };
  const handlePass = (e) => {
    setPass(e.target.value);
  };
  const handleLogIn = () => {
    if (login.length && pass.length > 1) {
      dispatch(startLogIn());
      setLengthError(false);
    } else {
      setLengthError(true);
    }
  };

  return (
    <div>
      <Dialog fullWidth={true} open={true} aria-labelledby="form-dialog-title">
        <DialogTitle className={classes.root} id="form-dialog-title">
          авторизация
        </DialogTitle>
        <DialogContent className={classes.authorization}>
          <TextField
            value={login}
            onChange={handleLogin}
            autoFocus
            margin="dense"
            id="name"
            label="Логин/Почта"
            type="email"
            fullWidth={true}
          />
          <TextField
            value={pass}
            onChange={handlePass}
            autoFocus
            margin="dense"
            id="pass"
            label="Пароль"
            type="password"
            fullWidth={true}
          />
        </DialogContent>
        {error && (
          <div className={classes.error} id="form-dialog-title">
            Неверный пароль или логин
          </div>
        )}
        {length && (
          <div className={classes.error} id="form-dialog-title">
            Пароль или логин слишком короткий
          </div>
        )}
        <DialogActions className={classes.login}>
          <Button onClick={handleLogIn} variant="outlined" color="primary">
            Вход
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default LogInPage;
