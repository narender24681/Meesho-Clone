import React from 'react'
import { Sidebar } from './Sidebar'
import styled from '@emotion/styled'
import { Box } from '@chakra-ui/react'

export const Admin = (props) => {
  return (
    <Div>
      <Sidebar />

      <Box id="admin-container">
        {props.children}
      </Box>
    </Div>
  )
}

const Div = styled.div`
  margin-right: 30px;

  #admin-container {
    margin-left: 300px;
    /* border: 1px solid lightgrey; */
  }
`;
