import React, { useEffect, useState } from 'react';
import { Admin } from './Admin';
import { Box, Divider, HStack, Heading, Icon, Image, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import styled from '@emotion/styled';
import { useToast } from '@chakra-ui/react';

const backendUrl = "http://localhost:8080";

const products1 = [
  {
    "image": "https://rukminim1.flixcart.com/image/832/832/xif0q/t-shirt/b/s/8/m-t410-bllafb-eyebogler-original-imagf6qcnavh29vv-bb.jpeg?q=70",
    "title": "T410 Men Printed Hooded Neck Maroon, Black T-Shirt",
    "price": "299",
    "rating": "4.5",
    "category": "T-Shirt",
    "brand": "Levis",
  },
  {
    "image": "https://rukminim1.flixcart.com/image/832/832/kzegk280/t-shirt/r/o/t/s-t285hs-as7whdngr-eyebogler-original-imagbfygwtubscjw.jpeg?q=70",
    "title": "Pack of 2 Men Striped Polo Neck Yellow, Blue T-Shirt",
    "price": "499",
    "rating": "4.7",
    "category": "T-Shirt",
    "brand": "Puma",
  }
]

export const AdminProducts = () => {
  const [products, setProducts] = useState(products1);
  const toast = useToast()
  
  useEffect(() => {
    fetch(`${backendUrl}/products`)
    .then(res => res.json())
    .then(res => {
      // console.log(res);
      setProducts(res);
    })
    .catch(err => {
      console.log(err);
    })
  }, [])

  const handleEdit = (id) => {
    console.log("Edit", id);
  }

  const handleDelete = (id) => {
    // console.log("Delete", id);

    fetch(`${backendUrl}/products/delete/${id}`, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then(res => {
      console.log(res);
      setProducts(products.filter(el => el._id != id));
      toast({
        title: 'Product deleted successfully',
        status: 'success',
        duration: 2000,
        isClosable: true,
      })
    })
    .catch(err => {
      console.log(err);
    })
  }

  return (
    <Div>
      <Admin>
        <Heading as="h3" size="lg" marginBottom="20px">Products</Heading>
        <Box id="products">
          <TableContainer>
            <Table variant='simple'>
              <Thead>
                <Tr>
                  <Th>Image</Th>
                  <Th>Name</Th>
                  <Th>Price</Th>
                  <Th>Rating</Th>
                  <Th>Category</Th>
                  <Th>Brand</Th>
                  <Th>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                {products.map((el, i) =>
                  <Tr key={i}>
                    <Td><Image src={el.image} alt="" height="70px" /></Td>
                    <Td>{el.title.substring(0, 25)}...</Td>
                    <Td>₹{el.price}</Td>
                    <Td>★{el.rating}</Td>
                    <Td>{el.category}</Td>
                    <Td>{el.brand}</Td>
                    <Td>
                      <HStack spacing={6}>
                      <Icon w={6} h={6} color="green" as={FaEdit} onClick={() => handleEdit(el._id)} _hover={{cursor: "pointer"}} />
                      <Icon w={6} h={6} color="red" as={MdDelete} onClick={() => handleDelete(el._id)} _hover={{cursor: "pointer"}} />
                      </HStack>
                      </Td>
                  </Tr>
                )}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Admin>
    </Div>
  )
}

const Div = styled.div`
    #products {
      border-radius: 4px;
      border: 1px solid lightgrey;
    }
    th {
      font-size: 14px;
    }
`;

