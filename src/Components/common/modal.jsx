import Close from "@mui/icons-material/Close";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import List from "@mui/material/List";
import Slide from "@mui/material/Slide";
import React, { useState } from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

let Modal = (props) => {
  let {
    content,
    closeButtonContent,
    openButtonColor,
    openIcon,
    openButtonContent,
    headerContent,
    closeFunc,
  } = props;
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div>
        {openButtonContent ? (
          <Button
            variant="contained"
            color={openButtonColor ? openButtonColor : "info"}
            onClick={handleClickOpen}
          >
            {openButtonContent}
          </Button>
        ) : (
          <IconButton variant="contained" onClick={handleClickOpen}>
            {openIcon}
          </IconButton>
        )}
        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <Box style={{ overflowX: "hidden" }}>
            <AppBar sx={{ position: "relative" }}>
              <Toolbar>
                <IconButton
                  edge="start"
                  color="inherit"
                  onClick={() => {
                    handleClose();
                    if (closeFunc) closeFunc();
                  }}
                  aria-label="close"
                >
                  <Close />
                </IconButton>
                <Typography
                  sx={{ ml: 2, flex: 1 }}
                  variant="h6"
                  component="div"
                >
                  {headerContent}
                </Typography>
                <Button
                  color="inherit"
                  variant="text"
                  onClick={() => {
                    handleClose();
                    if (closeFunc) closeFunc();
                  }}
                >
                  {closeButtonContent}
                </Button>
              </Toolbar>
            </AppBar>
            <List>
              <Box style={{ position: "relative" }}>{content}</Box>
            </List>
          </Box>
        </Dialog>
      </div>
    </>
  );
};

export default Modal;
