import { Route, Routes, useLocation } from 'react-router-dom'
import React from 'react';
import { createTheme, CssBaseline, Grid, ThemeProvider } from '@mui/material';
import { NavigationBar, AdminNavigationBar, Notification } from './Components';
import { useQuery } from '@apollo/client';
import { DARK_MODE } from './gql';
import { AdminRouter, ClientRouter } from './routers';

let App = () => {

    let location = useLocation();
    let darkMode = useQuery(DARK_MODE);
    let darkTheme = createTheme({
        palette: {
            mode: 'dark',
        }
    })

    let lightTheme = createTheme({
        palette: {
            mode: 'light',
        }
    })

    
    return (
    <ThemeProvider theme={darkMode.data?.on === "true" ? darkTheme : lightTheme}>
        <CssBaseline />
        {location.pathname.indexOf('adminDashboard') === -1 && <NavigationBar />}
        <Grid container style={{ width : "auto" }}>
            <Routes>
                {location.pathname.indexOf('adminDashboard') > -1 && (
                <Route path='/adminDashboard/*' element={<AdminNavigationBar routes={
                    <AdminRouter />
                    }/>}/>
                )}
                <Route path='/*' element={<ClientRouter />} />
            </Routes>
            <Notification />
        </Grid> 
    </ThemeProvider>
    )
}

export default App;