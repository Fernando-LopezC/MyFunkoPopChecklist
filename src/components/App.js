import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignIn from '../Pages/SignIn';
import SignUp from '../Pages/SignUp';
import Home from '../Pages/Home';
import Navbar from './Navbar';
import Footer from './Footer';
import { ROUTES } from '../helpers/constants';
import { Container } from '@mui/material';
import Checklist from './Checklist';


const App = () => { 
   return (
     <BrowserRouter>
       <Navbar />
       <Route exact path={ROUTES.signIn} component={SignIn} />
       <Route exact path={ROUTES.signUp} component={SignUp} />
     <Container>
     <Switch>
       <Route exact path={ROUTES.checklist} component={Checklist} />
       <Route exact path={ROUTES.home} component={Home} />
     </Switch>
     <Footer />
     </Container>
     </BrowserRouter>
   );
  };
       
  export default App;

