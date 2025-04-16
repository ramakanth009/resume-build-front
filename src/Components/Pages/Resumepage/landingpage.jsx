import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography, Grid, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

const useStyles = makeStyles({
  root: {
    minHeight: '90vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '32px 0',
    backgroundColor: '#ffffff',
    // overflow: 'hidden',
  },
  title: {
    marginBottom: '38px !important',
    fontWeight: 'bold !important',
    color: '#1a1a1a',
  },
  buttonContainer: {
    '& .MuiButton-root': {
      height: '400px',

      borderRadius: '16px',
      padding: '32px',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      '&:hover': {
        transform: 'translateY(-8px)',
        boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
      },
    },
  },
  button: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
  },
  icon: {
    fontSize: '48px !important',
    marginBottom: '8px',
    backgroundColor:"#00000010",
    padding:"30px",
    borderRadius:"50px"
  },
  buttonTitle: {
    fontWeight: 'bold',
    fontSize: '34px !important',
  },
  buttonRange: {
    fontSize: '20px !important',
    opacity: 0.9,
  },
  badge: {
    marginTop: '16px',
    padding: '8px 16px',
    borderRadius: '20px',
    backgroundColor: 'rgba(255,255,255,0.2)',
    fontSize: '18px !important',
  },
});

const LandingPage = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const experienceLevels = [
    { 
      path: '/fresher', 
      title: 'Fresher', 
      range: '0-6 MONTHS',
      color: 'primary',
      icon: <PersonOutlineIcon className={classes.icon} />,
      badge: 'Perfect for Beginners'
    },
    { 
      path: '/entry-level', 
      title: 'Experienced', 
      range: '6 MONTHS - 3 YEARS',
      color: 'success',
      icon: <WorkOutlineIcon className={classes.icon} />,
      badge: 'Ready for Professional Role'
    },
  ];

  const handleNavigation = (path) => {
    const level = path.substring(1); // Remove the leading slash
    navigate(path, { state: { experienceLevel: level } });
  };

  return (
    <Box className={classes.root}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h1" className={classes.title} align="center">
          Select Your Experience Level
        </Typography>
        <Grid container spacing={12} className={classes.buttonContainer}>
          {experienceLevels.map((level) => (
            <Grid item xs={12} md={6} key={level.path}>
              <Button
                variant="contained"
                color={level.color}
                onClick={() => handleNavigation(level.path)}
                fullWidth
                className={classes.button}
              >
                {level.icon}
                <Typography variant="h6" component="h2" className={classes.buttonTitle}>
                  {level.title}
                </Typography>
                <Typography variant="body1" className={classes.buttonRange}>
                  {level.range}
                </Typography>
                <Typography variant="body2" className={classes.badge}>
                  {level.badge}
                </Typography>
              </Button>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default LandingPage;