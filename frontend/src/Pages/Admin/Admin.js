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
  display: flex;
  /* margin-right: 30px; */

  #admin-container {
    margin: 25px 15px;
    width: 100%;
    /* border: 1px solid lightgrey; */
  }
`;
