import React from 'react';
import { Admin } from './Admin';
import { Text, Box, Icon, HStack, Heading, TableContainer, Table, Tbody, Tr, Td } from '@chakra-ui/react';
import styled from '@emotion/styled';
import Chart from "react-apexcharts";
import { FaEye } from 'react-icons/fa';

export const AdminDashboard = () => {
    const orders = [
        {
            "name": "Admin",
            "email": "admin@gmail.com",
            "total": "₹390",
            "paid": "Paid",
            "date": "07/04/2023"
        },
        {
            "name": "Admin",
            "email": "admin@gmail.com",
            "total": "₹540",
            "paid": "Not Paid",
            "date": "06/04/2023"
        },
        {
            "name": "Admin",
            "email": "admin@gmail.com",
            "total": "₹976",
            "paid": "Paid",
            "date": "06/04/2023"
        },
        {
            "name": "Admin",
            "email": "admin@gmail.com",
            "total": "₹859",
            "paid": "Paid",
            "date": "06/04/2023"
        },
        {
            "name": "Admin",
            "email": "admin@gmail.com",
            "total": "₹894",
            "paid": "Not Paid",
            "date": "05/04/2023"
        }
    ]

    return (
        <Div>
            <Admin>
                <Box id="total">
                    <Box className="total-card">
                        <HStack>
                            <Icon />
                            <Box>
                                <Text as="b">Total Sales</Text>
                                <Text>97050</Text>
                            </Box>
                        </HStack>
                    </Box>
                    <Box className="total-card">
                        <HStack>
                            <Icon />
                            <Box>
                                <Text as="b">Total Orders</Text>
                                <Text>264</Text>
                            </Box>
                        </HStack>
                    </Box>
                    <Box className="total-card">
                        <HStack>
                            <Icon />
                            <Box>
                                <Text as="b">Total Products</Text>
                                <Text>287</Text>
                            </Box>
                        </HStack>
                    </Box>
                </Box>

                <Box id="statistics">
                    <Box className="statistics-card">
                        <Heading fontSize="20px" marginBottom="15px">Sale Statistics</Heading>
                        <Chart
                            options={{
                                chart: {
                                    id: "basic-bar"
                                },
                                xaxis: {
                                    categories: [2019, 2020, 2021, 2022, 2023]
                                }
                            }}
                            series={[
                                {
                                    name: "products",
                                    data: [30, 40, 25, 50, 49]
                                }
                            ]}
                            type="bar"
                            width="450"
                        />
                    </Box>
                    <Box className="statistics-card">
                        <Heading fontSize="20px" marginBottom="30px">Products Statistics</Heading>
                        <Chart options={{ labels: ['Mens', 'Womens', 'Kids', 'Accessories', 'Jewellery'] }} series={[30, 40, 25, 50, 49]} type="donut" width="400" />
                    </Box>
                </Box>

                <Box id="latest-orders">
                    <Heading fontSize="19px" padding="7px 10px">Latest Orders</Heading>
                    <TableContainer>
                        <Table variant='simple'>
                            <Tbody>
                                {orders.map((el, i) =>
                                    <Tr key={i}>
                                        <Td><Text as="b">{el.name}</Text></Td>
                                        <Td><Text>{el.email}</Text></Td>
                                        <Td><Text>{el.total}</Text></Td>
                                        <Td><Text as="b" color={el.paid === "Paid" ? "green" : "white"} backgroundColor={el.paid === "Paid" ? "lightGreen" : "orangered"} borderRadius="9px" padding="1px 10px">{el.paid}</Text></Td>
                                        <Td><Text>{el.date}</Text></Td>
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
    #total {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 25px;
        margin-bottom: 25px;
    }
    .total-card {
        padding: 7px 15px;
        border-radius: 4px;
        border: 1px solid lightgrey;
    }

    #statistics {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        margin-bottom: 25px;
    }
    .statistics-card {
        padding: 15px;
        border-radius: 4px;
        border: 1px solid lightgrey;
    }

    #latest-orders {
        border: 1px solid lightgray;
    }
`;
