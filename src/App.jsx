import { Routes, Route, Link } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import './assets/styles/main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Layout from './components/layout/layout';
import Home from './main-pages/home';
import MyProjects from './main-pages/my-projects';
import AboutMe from './main-pages/about-me';
import ContactMe from './main-pages/contact-me';
import MyGithub from './main-pages/my-github';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout> <Home/> </Layout>}/>
      {/* <Route path="/my-projects" element={<Layout> <MyProjects/> </Layout>}/> */}
      <Route path="/about-me" element={<Layout> <AboutMe/> </Layout>}/>
      <Route path="/contact-me" element={<Layout> <ContactMe/> </Layout>}/>
      {/* <Route path="/my-github" element={<Layout> <MyGithub/> </Layout>}/> */}
    </Routes>
  )

}

export default App
