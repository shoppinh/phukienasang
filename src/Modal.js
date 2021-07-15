import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Slide from "@material-ui/core/Slide";
import CloseIcon from "@material-ui/icons/Close";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import "./Modal.css";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Modal() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="openModalButton">
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Open modal
        </Button>
      </div>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        style={{ height: "100vh" }}
      >
        <DialogContent
          style={{
            display: "flex",
            overflowY: "hidden",
            paddingBottom: "5px",
          }}
        >
          <img
            src="https://cdn.tgdd.vn//GameApp/-1//2-800x500.png"
            alt=""
            style={{ width: "95px", height: "95px" }}
          />
          <DialogContentText style={{ marginLeft: "15px", color: "black" }}>
            250VND
          </DialogContentText>
        </DialogContent>
        <DialogContent
          style={{
            display: "flex",
            alignItems: "center",
            borderBottom: "1px solid #333",
          }}
        >
          <AddIcon
            style={{
              fontSize: "1.7rem",
              marginRight: "15px",
              backgroundColor: "rgba(211, 217, 227)",
              borderRadius: "25%",
            }}
          />
          <span style={{ fontSize: "1.2rem" }}>5</span>
          <RemoveIcon
            style={{
              fontSize: "1.7rem",
              margin: "0 15px",
              backgroundColor: "rgba(211, 217, 227)",
              borderRadius: "25%",
            }}
          />
        </DialogContent>

        <DialogContent style={{ minHeight: "50vh" }}>
          <DialogContentText style={{ color: "black", fontSize: "1.1rem" }}>
            Ghi chú :
          </DialogContentText>
          <DialogContentText>1 cáp sạc iphone</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            color="primary"
            style={{ backgroundColor: "red", width: "100%", color: "white" }}
          >
            Agree
          </Button>
          <Button
            onClick={handleClose}
            style={{ position: "absolute", top: 12, right: 0 }}
          >
            <CloseIcon />
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
