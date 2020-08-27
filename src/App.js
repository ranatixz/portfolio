import React from 'react'
// import Navbar from './components/navbar/Navbar'
// import Banner from './components/banner/Banner'
// import About from './components/about/About'
// import Services from './components/service/Services'
// import Portfolio from './components/portfolio/Portfolio'
import Index from './pages/Index'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import PortfolioPage from './pages/PortfolioPage'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// const App = () =>{
//   return <Index/>
// }

// export default App
const PageNotFound = () =>(
  <h1 className="text-primary">404 | Page not found</h1>
)

const Routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Index} exact={true}/>
      <Route path="/portfolio" component={Index} exact={true}/>
      <Route path="/about" component={AboutPage}/>
      <Route path="/services" component={ServicesPage}/>
      <Route path="/recent-works" component={PortfolioPage}/>
      <Route component={PageNotFound}/>
    </Switch>
  </BrowserRouter>
);

export default Routes