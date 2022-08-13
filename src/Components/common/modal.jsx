import { Close } from '@mui/icons-material';
import { AppBar, Box, Button, Dialog, Divider, IconButton, List, ListItem, Slide, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

let Modal = (props) => {

    let { content, closeButtonContent, openButtonColor, openIcon, openButtonContent, headerContent, closeFunc } = props;
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
            {
                openButtonContent ?
                <Button variant='contained' color={openButtonColor ? openButtonColor : 'info'} onClick={handleClickOpen}>{openButtonContent}</Button> : 
                <IconButton variant="contained" onClick={handleClickOpen}>
                    {openIcon}
                </IconButton>
            }
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
                >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <Close />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                                {headerContent}
                        </Typography>
                        <Button color='inherit' variant='text' onClick={() => { handleClose(); closeFunc() }}>
                            {closeButtonContent}
                        </Button>
                    </Toolbar>
                </AppBar>
                <List>
                    <Box style={{ position : 'relative' }}> 
                            {content}
                    </Box>
                </List>
            </Dialog>
        </div>
    </>)
}

export default Modal;