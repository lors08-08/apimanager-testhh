import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import TextField from "@material-ui/core/TextField";
import DialogContentText from "@material-ui/core/DialogContentText";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../redux/actions";
import Loader from "../LoadingAndLogIn/Loader";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  iconAdd: {
    width: "100px",
    height: "100px",
    boxShadow: "0 0 10px black",
    marginLeft: "10px",
  },
}));

function AddUser() {
  const classes = useStyles();
  const history = useHistory();
  const loading = useSelector((state) => state.users.loading);

  const dispatch = useDispatch();

  const [mail, setMail] = useState("");
  const [name, setName] = useState("");
  const [surName, setSurname] = useState("");
  const [num, setNum] = useState("");
  const [aboutMe, setAboutMel] = useState("");

  const handleMail = (e) => {
    setMail(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleSurname = (e) => {
    setSurname(e.target.value);
  };
  const handleNumber = (e) => {
    setNum(e.target.value);
  };
  const handleAboutMe = (e) => {
    setAboutMel(e.target.value);
  };
  const handleClose = () => {
    history.push("/dashboard");
  };
  const handleAdd = () => {
    if (mail.length && name.length && surName.length && num.length > 3) {
      dispatch(addUser(mail, name, surName, num, aboutMe));
      history.push("/dashboard");
    }
    return false;
  };
  if (loading) {
    return <Loader />;
  }
  return (
    <div className={classes.root}>
      <Dialog open onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">
          Информация о пользователе
        </DialogTitle>
        <DialogContent>
          <DialogContentText color="primary">
            *Заполните все поля
          </DialogContentText>
          <TextField
            value={mail}
            onChange={handleMail}
            autoFocus
            margin="dense"
            id="email"
            label="Ваш e-mail адрес"
            type="email"
            fullWidth={true}
          />
          <TextField
            value={name}
            onChange={handleName}
            autoFocus
            margin="dense"
            id="name"
            label="Ваше имя"
            type="name"
            fullWidth={true}
          />
          <TextField
            value={surName}
            onChange={handleSurname}
            autoFocus
            margin="dense"
            id="surName"
            label="Ваша фамилия"
            type="name"
            fullWidth={true}
          />
          <TextField
            value={num}
            onChange={handleNumber}
            autoFocus
            margin="dense"
            id="number"
            label="Ваш номер"
            type="number"
            fullWidth={true}
          />
          <TextField
            value={aboutMe}
            onChange={handleAboutMe}
            autoFocus
            margin="dense"
            id="about"
            label="Расскажите о себе"
            type="name"
            fullWidth={true}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Отмена
          </Button>
          <Button onClick={handleAdd} color="primary">
            Добавить
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddUser;
