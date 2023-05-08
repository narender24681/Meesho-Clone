import React from 'react';
import { Admin } from './Admin';
import { Box, Divider, HStack, Heading, Icon, Image, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import styled from '@emotion/styled';

const products = [
  {
    "image": "https://images.meesho.com/images/products/269575507/tc0b5_400.webp",
    "name": "Pretty Sensational Men Shirts",
    "category": "Top Wear",
    "price": "₹390",
    "date": "07/04/2023",
  }
]

export const AdminProducts = () => {
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
                  <Th>Category</Th>
                  <Th>Price</Th>
                  <Th>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                {products.map((el, i) =>
                  <Tr key={i}>
                    <Td><Image src={el.image} alt="" height="70px" /></Td>
                    <Td>{el.name}</Td>
                    <Td>{el.category}</Td>
                    <Td>{el.price}</Td>
                    {/* <Td><Text as="span" color={el.paid === "Paid" ? "green" : "white"} backgroundColor={el.paid === "Paid" ? "lightGreen" : "orangered"} borderRadius="9px" padding="1.4px 10px">{el.paid}</Text></Td> */}
                    {/* <Td><Text as="span" color="white" backgroundColor={el.status === "Delivered" ? "green" : "black"} borderRadius="9px" padding="1.4px 10px">{el.status}</Text></Td> */}
                    <Td>
                      <HStack spacing={6}>
                      <Icon w={6} h={6} color="green" as={FaEdit} />
                      <Icon w={6} h={6} color="red" as={MdDelete} />
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
    margin-bottom: 40px;

    #products {
      border-radius: 4px;
      border: 1px solid lightgrey;
    }
    th {
      font-size: 14px;
    }
`;

