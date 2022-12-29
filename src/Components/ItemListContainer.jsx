import { SimpleGrid, Box, Heading, GridItem, Grid, Breadcrumb, BreadcrumbItem, BreadcrumbLink  } from '@chakra-ui/react'
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
  Input,
  } from '@chakra-ui/react'
export function ItemListContainer({ greeting }) {
return (
<Grid
  templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
  gridTemplateRows={'50px 1fr 30px'}
  gridTemplateColumns={'150px 1fr'}
  h='600px'
  gap='1'
  color='blackAlpha.700'
>
<GridItem  colSpan={12} h='10' bg='#e6e6e173' >
<Breadcrumb>
<BreadcrumbItem>
    <BreadcrumbLink href='#'>Home</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbItem>
    <BreadcrumbLink href='#'>Bienvenida</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>
</GridItem>

<GridItem  area={'nav'} bg='#e6e6e173' Spacing={4}>
<Box p='2'>
  <Heading as='h6' size='xs'>
      Precio
    </Heading>
    <RangeSlider aria-label={['min', 'max']} defaultValue={[10, 30]}>
      <RangeSliderTrack>
        <RangeSliderFilledTrack />
      </RangeSliderTrack>
      <RangeSliderThumb index={0} />
      <RangeSliderThumb index={1} />
    </RangeSlider>

<Input placeholder='Buscar' />
<Button as={Button} colorScheme='blue' px={4}>
Aplicar filtros
</Button>


</Box>

</GridItem>

<GridItem area={'main'}>
    {greeting}
</GridItem>

</Grid>

)
}

export default ItemListContainer