import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Article from './components/Article';
import { Container, Grid } from '@mui/material';

function App() {
  return (
    <Container fixed>
      <Header />
      <Grid container>
        <Grid item xs={2}>
          <Nav />
        </Grid>
        <Grid item xs={8} marginLeft={'30px'}>
          <Article />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
