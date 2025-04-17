import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import LandingPage from './Components/Pages/Resumepage/landingpage';
import ResumeBuilder from './Components/Pages/Resumepage/resumeinput';
import ChooseTemplate from './Components/Pages/Resumepage/choosetemplate';

const useStyles = makeStyles({
  root: {
    fontFamily: '"Inter", "Arial", sans-serif',
    backgroundColor: '#f5f7fa',
    minHeight: '100vh',
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Router>
        <Routes>
          {/* Landing Page Route */}
          <Route path="/" element={<LandingPage />} />
          
          {/* Resume Builder Route - Single entry point */}
          <Route path="/resume-builder" element={<ResumeBuilder />} />
          
          {/* Template Selection Route */}
          <Route path="/choose-template" element={<ChooseTemplate />} />
          
          {/* Default to Landing Page for any unknown routes */}
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;