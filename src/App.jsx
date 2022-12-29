import { useState } from 'react'
import NavBar from './Components/NavBar'
import { ItemListContainer } from './Components/ItemListContainer'
import { Container } from '@chakra-ui/react'

function App() {

  return (
    <Container width="100%" maxWidth="100vw">
    <NavBar/>
    <ItemListContainer greeting={"Mensaje de bienvenida"}/>
    </Container>

  )
}

export default App
