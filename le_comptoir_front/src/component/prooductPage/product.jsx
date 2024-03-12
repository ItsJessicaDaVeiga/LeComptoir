import {
  Card,
  Image,
  Text,
  CardBody,
  Stack,
  Heading,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Container,
  ChakraBaseProvider,
} from "@chakra-ui/react";
import React from "react";
import Header from '../header'
import { useLocation } from "react-router-dom";

function Product() {
  const location = useLocation();
  const product = location.state?.product; 

  if (!product) {
    return (
      <>
      <Header />
      <Container maxW="2xl" centerContent>
        <Text>Product not found</Text>
      </Container>
      </>
    );
  }
  
  return (

<>
<Header />
<Card height="800px" width="50%">
  <CardBody>
    <Image src={product.image} 
    objectFit="cover"
    />
  </CardBody>
</Card>
</>


/* <>
      <Header />

    <Container width={"100%"} centerContent>

    

      <Card maxW="100%">
        <CardBody>
          <Image
            src={product.image} 
            alt={product.nom} 
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{product.nom}</Heading>
            <Text>{product.type}</Text>
            <Text color="#A67B5B" fontSize="2xl">
              {product.prix}€
            </Text>
            <Text> {product.description} </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="teal">
              Buy now
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Container>
</>  */

  );
}

export default Product;
