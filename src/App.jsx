import { useState } from 'react'
import { data } from './data'
import Filter from './Filter.jsx'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme()

export default function App() {
  const [solutions, setSolutions] = useState(data)
  
  function filterSolutions(e) {
    const filterType = e.target.textContent
    if (filterType === 'All') {
      setSolutions(data)
    } else { 
      setSolutions((solutions) => {
        solutions = data.filter((solution) => solution.type === filterType)
        return solutions
      })
    }
  }

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
          <Filter onChoose={filterSolutions}></Filter>
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
  )
}
