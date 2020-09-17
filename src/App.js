import React from 'react'
import Index from './pages/Index'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import PortfolioPage from './pages/PortfolioPage'
import ContactPage from './pages/ContactPage'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


const PageNotFound = () =>(
  <h1 className="text-primary">404 | Page not found</h1>
)

const Routes = (
  <BrowserRouter>
    <Navbar/>
    <Switch>
      <Route path="/" component={Index} exact={true}/>
      <Route path="/portfolio" component={Index} exact={true}/>
      <Route path="/about" component={AboutPage}/>
      <Route path="/services" component={ServicesPage}/>
      <Route path="/recent-works" component={PortfolioPage}/>
      <Route path="/contact" component={ContactPage}/>
      <Route component={PageNotFound}/>
    </Switch>
    <Footer/>
  </BrowserRouter>
);

export default Routes