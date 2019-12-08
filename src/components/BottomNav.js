import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles({
    root: {
      width: 450,
    },
  });
  
  export default function SimpleBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState('recents');
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
        <BottomNavigationAction label="GitHub" value="github" icon={<GitHubIcon />} />
        <BottomNavigationAction label="LinkedIn" value="linkedin" icon={<LinkedInIcon />} />
        <BottomNavigationAction label="Instagram" value="instagram" icon={<InstagramIcon />} />
        <BottomNavigationAction label="Twitter" value="twitter" icon={<TwitterIcon />} />
        <BottomNavigationAction label="Contact" value="contact" icon={<EmailIcon />} />
      </BottomNavigation>
    );
  }