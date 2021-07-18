import './App.css';
import Header from './Components/Header/Header';
import FooterContainer from './Components/Footer/FooterContainer';
import {BrowserRouter} from 'react-router-dom';
import Container from './Components/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import './vendor/bootstrap/css/bootstrap.min.css';
// import './css/form.css';
// import './css/heroic-features.css';
import './css/custom.css';

function App() {
  return (
    <div class = "app">
    <BrowserRouter>
      <Header></Header>
      <Container></Container>
      <FooterContainer></FooterContainer>
    </BrowserRouter>
  </div>
  );
}

export default App;
