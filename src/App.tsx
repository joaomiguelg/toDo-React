import ToDos from "./containers/ToDos"
import SideBar from "./containers/SideBar"
import GlobalStyle, { Container } from "./styles"


function App() {
  

  return (
    <>
    <GlobalStyle />
    <Container>
      <SideBar />
      <ToDos />
    </Container>
    </>
  )
}

export default App
