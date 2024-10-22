import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function MyAppBar() {

  return (
    <AppBar position="static" sx={{ backgroundColor: 'orange' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* imageをロゴとして追加 */}
          <Box
            component="img"
            sx={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              mr: 2,
            }}
            alt="logo"
            src="./jack_logo.jpg"
            // クリックされたらhttps://jack-website.netlify.app/に遷移
            onClick={() => window.open('https://jack-website.netlify.app/')}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Jack Ice Store
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
