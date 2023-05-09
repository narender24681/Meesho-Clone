import React from 'react';
import { Admin } from './Admin';
import { Box, Heading, Icon, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react';
import { FaEye } from 'react-icons/fa';
import styled from '@emotion/styled';

const orders = [
  {
    "name": "Admin",
    "email": "admin@gmail.com",
    "total": "₹390",
    "paid": "Paid",
    "date": "07/04/2023",
    "status": "Delivered",
  },
  {
    "name": "Admin",
    "email": "admin@gmail.com",
    "total": "₹540",
    "paid": "Not Paid",
    "date": "07/04/2023",
    "status": "Not Delivered",
  },
  {
    "name": "Admin",
    "email": "admin@gmail.com",
    "total": "₹790",
    "paid": "Paid",
    "date": "07/04/2023",
    "status": "Delivered",
  },
  {
    "name": "Admin",
    "email": "admin@gmail.com",
    "total": "₹340",
    "paid": "Paid",
    "date": "07/04/2023",
    "status": "Delivered",
  },
  {
    "name": "Admin",
    "email": "admin@gmail.com",
    "total": "₹935",
    "paid": "Paid",
    "date": "06/04/2023",
    "status": "Delivered",
  },
  {
    "name": "Admin",
    "email": "admin@gmail.com",
    "total": "₹499",
    "paid": "Not Paid",
    "date": "06/04/2023",
    "status": "Not Delivered",
  },
  {
    "name": "Admin",
    "email": "admin@gmail.com",
    "total": "₹560",
    "paid": "Paid",
    "date": "05/04/2023",
    "status": "Delivered",
  },
  {
    "name": "Admin",
    "email": "admin@gmail.com",
    "total": "₹686",
    "paid": "Paid",
    "date": "05/04/2023",
    "status": "Delivered",
  },
  {
    "name": "Admin",
    "email": "admin@gmail.com",
    "total": "₹857",
    "paid": "Not Paid",
    "date": "05/04/2023",
    "status": "Not Delivered",
  },
  {
    "name": "Admin",
    "email": "admin@gmail.com",
    "total": "₹978",
    "paid": "Paid",
    "date": "05/04/2023",
    "status": "Delivered",
  },
  {
    "name": "Admin",
    "email": "admin@gmail.com",
    "total": "₹987",
    "paid": "Paid",
    "date": "04/04/2023",
    "status": "Delivered",
  },
  {
    "name": "Admin",
    "email": "admin@gmail.com",
    "total": "₹680",
    "paid": "Not Paid",
    "date": "04/04/2023",
    "status": "Not Delivered",
  },
  {
    "name": "Admin",
    "email": "admin@gmail.com",
    "total": "₹987",
    "paid": "Paid",
    "date": "04/04/2023",
    "status": "Delivered",
  },
  {
    "name": "Admin",
    "email": "admin@gmail.com",
    "total": "₹580",
    "paid": "Paid",
    "date": "02/04/2023",
    "status": "Delivered",
  }
]

export const AdminOrders = () => {
  return (
    <Div>
      <Admin>
        <Heading as="h3" size="lg" marginBottom="20px">Orders</Heading>
        <Box id="orders">
          <TableContainer>
            <Table variant='simple'>
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Email</Th>
                  <Th>Total</Th>
                  <Th>Paid</Th>
                  <Th>Date</Th>
                  <Th>Status</Th>
                  <Th>Action</Th>
                </Tr>
              </Thead>
              <Tbody>
                {orders.map((el, i) =>
                  <Tr key={i}>
                    <Td fontWeight="600">{el.name}</Td>
                    <Td>{el.email}</Td>
                    <Td>{el.total}</Td>
                    <Td><Text as="span" color={el.paid === "Paid" ? "green" : "white"} backgroundColor={el.paid === "Paid" ? "lightGreen" : "orangered"} borderRadius="9px" padding="1.4px 10px">{el.paid}</Text></Td>
                    <Td>{el.date}</Td>
                    <Td><Text as="span" color="white" backgroundColor={el.status === "Delivered" ? "green" : "black"} borderRadius="9px" padding="1.4px 10px">{el.status}</Text></Td>
                    <Td><Icon w={5} h={5} color="green" as={FaEye} /></Td>
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
    #orders {
      border-radius: 4px;
      border: 1px solid lightgrey;
    }
    th {
      font-size: 14px;
    }
`;
