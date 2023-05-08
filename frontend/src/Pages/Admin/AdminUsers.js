import React from 'react';
import { Admin } from './Admin';
import { Box, Icon, Text, VStack } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { FaRegUserCircle } from 'react-icons/fa';

const users = [
  {
    "image": "",
    "name": "Admin",
    "email": "admin@gmail.com",
    "isAdmin": true
  }
]

export const AdminUsers = () => {
  return (
    <Div>
      <Admin>
        <Box id="users">
          {users.map((el, i) =>
            <Box className="user-card">
              {/* <Image /> */}
              <VStack spacing="4px">
                <Icon height="100px" width="100px" as={FaRegUserCircle} />
                <Text as="b" paddingTop="10px">{el.name}</Text>
                <Text>{el.isAdmin ? "Admin" : "Customer"}</Text>
                <Text color="deepskyblue">{el.email}</Text>
              </VStack>
            </Box>
          )}
        </Box>
      </Admin>
    </Div>
  )
}

const Div = styled.div`
    margin-bottom: 40px;

    #users {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      /* border-radius: 4px; */
      /* border: 1px solid lightgrey; */
    }
    .user-card {
      padding: 15px 10px;
      border-radius: 4px;
      border: 1px solid lightgrey;
    }
    
`;
