//import { useState } from 'react'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const solutions = [
  {
    title: '3-column preview',
    codename: '3-column-preview',
    level: '1-Newbie',
    type: 'Component',
    desc: 'This challenge is perfect if you\'re just getting started. The shift between the layouts will be a nice test if you\'re new to building responsive projects.'
  },
  {
    title: 'Article preview',
    codename: 'article-preview',
    level: '1-Newbie',
    type: 'Component',
    desc: 'Practice your layout skills with this article preview component. There\'s lots of fun to be had playing around with animations for the sharing icons as well.'
  },
  {
    title: 'Base Apparel coming soon page',
    codename: 'base-apparel-coming-soon',
    level: '1-Newbie',
    type: 'Landing Page',
    desc: 'This layout looks simple enough, but there are some interesting details to it that will test your CSS skills. You\'ll also get to practice basic form validation.'
  },
  {
    title: 'FAQ accordion',
    codename: 'faq-accordion',
    level: '1-Newbie',
    type: 'Component',
    desc: 'In this challenge, you\'ll be building out an FAQ accordion. This is an extremely common front-end pattern, so it\'s a great opportunity to get some practice in!'
  },
  {
    title: 'Four card feature',
    codename: 'four-card-feature',
    level: '1-Newbie',
    type: 'Component',
    desc: 'A nice layout-based challenge for beginners. This will test anyone who is new to multi-column and responsive layouts.'
  },
  {
    title: 'Huddle landing page with a single introductory section',
    codename: 'huddle-landing-page',
    level: '1-Newbie',
    type: 'Landing Page',
    desc: 'A perfect challenge for beginners, this project will get you working with a two column layout.'
  },
  {
    title: 'Interactive rating',
    codename: 'interactive-rating',
    level: '1-Newbie',
    type: 'Component',
    desc: 'This is a nice, small project to practice handling user interactions and updating the DOM. Perfect for anyone who has learned the basics of JavaScript!'
  },
  {
    title: 'Intro component with sign-up form',
    codename: 'intro-component-with-signup-form',
    level: '1-Newbie',
    type: 'Component',
    desc: 'Practice building out a sign-up form complete with client-side validation using JavaScript.'
  },
  {
    title: 'NFT preview',
    codename: 'nft-preview',
    level: '1-Newbie',
    type: 'Component',
    desc: 'This HTML & CSS only challenge is perfect for anyone just starting out or anyone wanting a small project to play around with.'
  },
  {
    title: 'Order summary',
    codename: 'order-summary',
    level: '1-Newbie',
    type: 'Component',
    desc: 'A perfect project for newbies who are starting to build confidence with layouts!'
  },
  {
    title: 'Ping single column coming soon',
    codename: 'ping-coming-soon',
    level: '1-Newbie',
    type: 'Landing Page',
    desc: 'This challenge is great for beginners and offers a chance to practice basic client-side form validation.'
  },
  {
    title: 'Product preview',
    codename: 'product-preview',
    level: '1-Newbie',
    type: 'Component',
    desc: 'This HTML & CSS-only challenge will be perfect for anyone starting to build responsive projects.'
  },
  {
    title: 'Profile',
    codename: 'profile',
    level: '1-Newbie',
    type: 'Component',
    desc: 'This is a perfect challenge to test your layout skills. The card layout doesn\'t shift, so it\'s also great for those that haven\'t dived into responsive websites yet!'
  },
  {
    title: 'QR code',
    codename: 'qr-code',
    level: '1-Newbie',
    type: 'Component',
    desc: 'A perfect first challenge if you\'re new to HTML and CSS. The card layout doesn\'t shift, so it\'s ideal if you haven\'t learned about building responsive layouts yet.'
  },
  {
    title: 'Results summary',
    codename: 'results-summary',
    level: '1-Newbie',
    type: 'Component',
    desc: 'This challenge has something for everyone. It\'s a HTML and CSS only project, but we\'ve also provided a JSON file of the test results for anyone wanting to practice JS.'
  },
  {
    title: 'Single price grid',
    codename: 'single-price-grid',
    level: '1-Newbie',
    type: 'Component',
    desc: 'In this challenge, you will build out the pricing component to the designs provided. This is perfect for beginners and people who want to complete a smaller challenge.'
  },
  {
    title: 'Social proof',
    codename: 'social-proof',
    level: '1-Newbie',
    type: 'Component',
    desc: 'This project will test your layout skills. If you\'re starting to get confident with Flexbox or Grid, this will provide a nice challenge!'
  },
  {
    title: 'Stats preview',
    codename: 'stats-preview',
    level: '1-Newbie',
    type: 'Component',
    desc: 'This is a great small challenge to help get you used to building to a design. There\'s no JS in this project, so you\'ll be able to focus on your HTML & CSS skills.'
  },
  {
    title: 'Advice generator',
    codename: 'advice-generator-app',
    level: '2-Junior',
    type: 'JavaScript',
    desc: 'The perfect project if you\'re learning how to interact with 3rd-party APIs. This challenge uses the Advice Slip API to generate random quotes of advice.'
  },
  {
    title: 'Age calculator',
    codename: 'age-calculator-app',
    level: '2-Junior',
    type: 'JavaScript',
    desc: 'This challenge is designed to sharpen your JavaScript and form validation skills. Working with dates in JavaScript can be tricky, so this will be a nice test!'
  },
  {
    title: 'Blogr',
    codename: 'blogr-landing-page',
    level: '2-Junior',
    type: 'Landing Page',
    desc: 'Flex your layout muscles with this landing page challenge. You\'ll mostly be working with HTML & CSS for this project with a tiny bit of JS for the mobile menu.'
  },
];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          {<Container>
            <Typography
              component='h1'
              variant='h2'
              align='center'
              color='text.primary'
              gutterBottom
            >
              Frontend Mentor Solutions
            </Typography>
            <Typography variant='h5' align='center' color='text.secondary' paragraph>
              My solutions in Frontend Mentor challenges. All written in pure HTML, CSS, and JavaScript.
            </Typography>
          </Container>}
        </Box>
        <Container sx={{ mb: 8 }}>
          {/* End hero unit */}
          <Grid container spacing={4}>
            {solutions.map((details, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component='div'
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image={`https://raw.githubusercontent.com/toreyes0/Frontend-Mentor-Challenge/main/${details.level}/${details.codename}/design/desktop-preview.jpg`}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant='h5' component='h2'>
                      {details.title}
                    </Typography>
                    <Typography gutterBottom typography='subtitle2' fontStyle='italic'>
                      {details.type}
                    </Typography>
                    <Typography>
                      {details.desc}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Stack
                      sx={{pb: 2}}
                      direction='row'
                      justifyContent='space-around'
                      width='100%'
                    >
                      <Button
                        variant='contained'
                        size='small'
                        href={`https://github.com/toreyes0/Frontend-Mentor-Challenge/tree/main/${details.level}/${details.codename}`}
                        target='_blank'
                      >
                        Source Code
                      </Button>
                      <Button
                        variant='contained'
                        size='small'
                        href={`https://toreyes0.github.io/Frontend-Mentor-Challenge/${details.level}/${details.codename}/index.html`}
                        target='_blank'
                      >
                        Live Preview
                      </Button>
                    </Stack>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}
