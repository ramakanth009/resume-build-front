import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Box, 
  Button, 
  Typography, 
  Container, 
  Paper,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import DescriptionIcon from '@mui/icons-material/Description';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StarIcon from '@mui/icons-material/Star';

const useStyles = makeStyles({
  root: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#f5f7fa',
    overflow: 'hidden',
  },
  header: {
    padding: '24px 0',
    textAlign: 'center',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
  },
  title: {
    marginBottom: '8px !important',
    fontWeight: 'bold !important',
    color: '#1a1a1a',
  },
  subtitle: {
    color: '#666666',
    maxWidth: '800px',
    margin: '0 auto !important',
  },
  content: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px 0',
  },
  mainCard: {
    maxWidth: '700px',
    width: '90%',
    padding: '40px',
    borderRadius: '16px',
    textAlign: 'center',
    backgroundColor: '#ffffff',
    boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  icon: {
    fontSize: '80px !important',
    color: '#3f51b5',
    marginBottom: '24px',
    padding: '20px',
    borderRadius: '50%',
    backgroundColor: 'rgba(63, 81, 181, 0.1)',
  },
  mainText: {
    fontSize: '32px !important',
    fontWeight: 'bold !important',
    marginBottom: '16px !important',
    color: '#1a1a1a',
  },
  description: {
    color: '#666666',
    marginBottom: '32px !important',
    maxWidth: '500px',
  },
  button: {
    borderRadius: '28px',
    padding: '12px 32px',
    fontSize: '16px !important',
    fontWeight: 'bold !important',
    backgroundColor: '#3f51b5 !important',
    boxShadow: '0 4px 14px rgba(63, 81, 181, 0.4) !important',
    transition: 'transform 0.3s, box-shadow 0.3s !important',
    '&:hover': {
      backgroundColor: '#303f9f !important',
      transform: 'translateY(-2px) !important',
      boxShadow: '0 6px 20px rgba(63, 81, 181, 0.6) !important',
    },
  },
  features: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '40px',
    padding: '16px',
    backgroundColor: 'rgba(0,0,0,0.02)',
    borderRadius: '8px',
    maxWidth: '600px',
    width: '100%',
  },
  feature: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '24px',
  },
  featureIcon: {
    color: '#ffc107',
    marginRight: '8px',
  },
  featureText: {
    fontSize: '14px !important',
    color: '#555',
  },
  footer: {
    backgroundColor: '#ffffff',
    padding: '16px 0',
    textAlign: 'center',
    boxShadow: '0 -2px 10px rgba(0,0,0,0.05)',
  },
  footerText: {
    color: '#666666',
  },
});

const LandingPage = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const features = [
    "Multiple Templates",
    "ATS-Optimized",
    "Instant Download"
  ];

  const handleGetStarted = () => {
    navigate('/resume-builder');
  };

  return (
    <Box className={classes.root}>
      {/* Header Section */}
      <Box className={classes.header}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h1" className={classes.title}>
            Gigaversity Resume Builder
          </Typography>
          <Typography variant="subtitle1" className={classes.subtitle}>
            Create a professional resume in minutes with our easy-to-use builder
          </Typography>
        </Container>
      </Box>

      {/* Main Content */}
      <Box className={classes.content}>
        <Paper elevation={0} className={classes.mainCard}>
          <DescriptionIcon className={classes.icon} />
          <Typography variant="h4" className={classes.mainText}>
            Build Your Professional Resume
          </Typography>
          <Typography variant="body1" className={classes.description}>
            Stand out from the crowd with a professionally designed resume that showcases your skills and experience effectively.
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={handleGetStarted}
            className={classes.button}
            endIcon={<ArrowForwardIcon />}
          >
            Start Building Your Resume
          </Button>
          
          {/* Features as a horizontal bar */}
          <Box className={classes.features}>
            {features.map((feature, index) => (
              <Box key={index} className={classes.feature}>
                <StarIcon className={classes.featureIcon} />
                <Typography className={classes.featureText}>{feature}</Typography>
              </Box>
            ))}
          </Box>
        </Paper>
      </Box>

      {/* Footer */}
      <Box className={classes.footer}>
        <Typography variant="body2" className={classes.footerText}>
          © {new Date().getFullYear()} Gigaversity Resume Builder
        </Typography>
      </Box>
    </Box>
  );
};

export default LandingPage;