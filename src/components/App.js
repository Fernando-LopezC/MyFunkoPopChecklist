import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Home from './Home';
import Navbar from './Navbar';
import Footer from './Footer';
import { RUTAS } from '../helpers/constants';
import { Container } from '@mui/material';


const App = () => { 
   return (
     <BrowserRouter>
       <Navbar />
     <Container>
     <Switch>
       <Route exact path={RUTAS.home} component={Home} />
       <Route exact path={RUTAS.signIn} component={SignIn} />
       <Route exact path={RUTAS.signUp} component={SignUp} />
     </Switch>
     <Footer />
     </Container>
     </BrowserRouter>
   );
  };
       
  export default App;

