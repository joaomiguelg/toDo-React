import ToDos from "./containers/ToDos"
import SideBar from "./containers/SideBar"
import GlobalStyle, { Container } from "./styles"
import { Provider } from 'react-redux'
import store from './store'


function App() {
  

  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
      <SideBar />
      <ToDos />
    </Container>
      
    </Provider>
  )
}

export default App
