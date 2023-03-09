import * as React from "react";
import { Alert, Snackbar } from "@mui/material";
import { useEffect } from "react";


const ErrorSnackbar: React.FC<{ error: Error | null }> = ({ error }) => {
    const [open, setOpen] = React.useState(false);
    
    useEffect(() => {
        if (error) setOpen(true)
    }, [error])

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <Snackbar autoHideDuration={6000} onClose={handleClose} open={open}>
            <Alert onClose={handleClose} severity="error"
                   variant="filled">{`Fehler beim Laden der Daten: ${error?.message}`}</Alert>
        </Snackbar>
    );

}

export default ErrorSnackbar