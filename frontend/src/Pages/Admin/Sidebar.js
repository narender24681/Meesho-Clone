import styled from '@emotion/styled';
import React from 'react';
import { List, ListItem, ListIcon, Link } from '@chakra-ui/react';
import { FaHome, FaShoppingBag, FaUserAlt } from 'react-icons/fa';
import { BsFillCartPlusFill, BsCartCheckFill } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';

export const Sidebar = () => {
  return (
    <Div>
      <List spacing={4}>
        <ListItem>
          <Link href="/admin">
            <ListIcon as={FaHome} />
            Dashboard
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/admin/products">
            <ListIcon as={FaShoppingBag} />
            Products
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/admin/add-product">
            <ListIcon as={BsFillCartPlusFill} />
            Add Product
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/admin/orders">
            <ListIcon as={BsCartCheckFill} />
            Orders
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/admin/users">
            <ListIcon as={FaUserAlt} />
            Users
          </Link>
        </ListItem>
      </List>
    </Div>
  )
}

const Div = styled.div`
  width: 270px;
  padding: 25px;
  border: 1px solid lightgrey;
  height: 100vh;
  /* position: fixed; */

  ul {
    font-size: 18px;
  }
  ul > li {
    border-radius: 7px;
    padding: 7px 0px 9px 10px;
    border: 1px solid lightgray;
  }
  ul > li:hover {
    background: lightgray;
  }
  ul > li > a:hover {
    cursor: pointer;
    text-decoration: none;
  }
`;
