import React, { useEffect, useState } from 'react';
import { Admin } from './Admin';
import { Heading, Input, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { useToast } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';

const backendUrl = "http://localhost:8080";

const initialProductFormData = {
    "image": "",
    "imagesArr": [],
    "title": "",
    "price": "",
    "rating": "",
    "description": "",
    "size": [],
    "category": "",
    "brand": "",
    "color": "",
    "discount": "",
    "quantity": 1,
    "gender": "",
    "name": "",
    "material": "",
    "type": "",
    "pattern": "",
    "countryOfOrigin": ""
}

export const AdminEditProduct = () => {
  const [productForm, setProductForm] = useState(initialProductFormData);
  const {id} = useParams();
  const toast = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${backendUrl}/products/${id}`)
    .then(res => res.json())
    .then(res => {
        // console.log(res);

        setProductForm({...res, ["imagesArr"]: res.imagesArr.join(" "), ["size"]: res.size.join(" ")});
    })
    .catch(err => {
        console.log(err);
    })
  }, [])
  
  const handleChange = (e) => {
    // console.log(e.target.name, e.target.value);

    setProductForm({...productForm, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {...productForm, ["imagesArr"]: productForm.imagesArr.split(" "), ["size"]: productForm.size.split(" ")};
    // console.log(newProduct);

    fetch(`${backendUrl}/products/update/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct)
    })
    .then(res => res.json())
    .then(res => {
      console.log(res);

      toast({
        title: 'Product updated successfully',
        status: 'success',
        duration: 2000,
        isClosable: true,
      })

      navigate("/admin/products");
    })
    .catch(err => {
      console.log(err);
    })
  }

  return (
    <Div>
      <Admin>
        <Heading textAlign="center" as="h3" size="lg" marginBottom="20px">Edit Product</Heading>

        <form id="checkout-container" onSubmit={handleSubmit} >
          <div className="checkout-hr"></div>

          <Input name="image" value={productForm.image} onChange={handleChange} borderColor="lightgrey" marginTop="15px" type="text" placeholder="Image url" required />

          <Input name="imagesArr" value={productForm.imagesArr} onChange={handleChange} borderColor="lightgrey" marginTop="25px" type="text" placeholder="Images url" required />

          <div className="checkout-two-input">
            <Input name="title" value={productForm.title} onChange={handleChange} borderColor="lightgrey" width="31%" type="text" placeholder="Title" required />
            <Input name="price" value={productForm.price} onChange={handleChange} borderColor="lightgrey" width="31%" type="text" placeholder="Price" required />
            <Input name="rating" value={productForm.rating} onChange={handleChange} borderColor="lightgrey" width="31%" type="text" placeholder="rating" required />
          </div>

          <Input name="description" value={productForm.description} onChange={handleChange} borderColor="lightgrey" marginTop="25px" type="text" placeholder="Description" required />

          <div className="checkout-hr"></div>

          <div className="checkout-two-input">
            <Input name="size" value={productForm.size} onChange={handleChange} borderColor="lightgrey" width="20%" type="text" placeholder="Sizes" required />
            <Input name="category" value={productForm.category} onChange={handleChange} borderColor="lightgrey" width="20%" type="text" placeholder="Category" required />
            <Input name="brand" value={productForm.brand} onChange={handleChange} borderColor="lightgrey" width="20%" type="text" placeholder="Brand" required />
            <Input name="color" value={productForm.color} onChange={handleChange} borderColor="lightgrey" width="20%" type="text" placeholder="Color" required />
          </div>

          <div className="checkout-two-input">
            <Input name="discount" value={productForm.discount} onChange={handleChange} borderColor="lightgrey" width="20%" type="text" placeholder="Discount" required />
            <Input name="gender" value={productForm.gender} onChange={handleChange} borderColor="lightgrey" width="20%" type="text" placeholder="Gender" required />
            <Input name="name" value={productForm.name} onChange={handleChange} borderColor="lightgrey" width="20%" type="text" placeholder="Name" required />
            <Input name="material" value={productForm.material} onChange={handleChange} borderColor="lightgrey" width="20%" type="text" placeholder="Material" required />
          </div>

          <div className="checkout-two-input">
            <Input name="type" value={productForm.type} onChange={handleChange} borderColor="lightgrey" width="31%" type="text" placeholder="Type" required />
            <Input name="pattern" value={productForm.pattern} onChange={handleChange} borderColor="lightgrey" width="31%" type="text" placeholder="Pattern" required />
            <Input name="countryOfOrigin" value={productForm.countryOfOrigin} onChange={handleChange} borderColor="lightgrey" width="31%" type="text" placeholder="Country Of Origin" required />
          </div>

          <div className="checkout-hr"></div>

          <button type="submit" id="checkout-place-order">Edit Product</button>
        </form>
      </Admin>
    </Div>
  )
}

const Div = styled.div`
  #checkout-container {
    width: 70%;
    margin: auto;
    margin-top: 30px;
    margin-bottom: 50px;
    /* border: 1px solid lightgrey; */
}
.checkout-hr {
    border: 1px solid gray;
    margin: 25px 0px;
}
.checkout-two-input {
    margin-top: 25px;
    display: flex;
    justify-content: space-between;
}
.checkout-h2 {
    font-size: 26px;
    font-weight: 700;
}
.checkout-h3 {
    font-size: 20px;
    font-weight: 700;
}
#checkout-place-order {
    font-size: 18px;
    margin: auto;
    margin-top: 25px;
    margin-bottom: 10px;
    display: block;
    color: white;
    width: 250px;
    padding: 7px 25px;
    border-radius: 3px;
    background-color: rgb(244, 51, 151);
}


#placeholer-container {
    margin: 70px auto;
    margin-bottom: 150px;
    text-align: center;
}
#placeorder-h1 {
    font-size: 28px;
    margin-bottom: 10px;
}
#placeorder-h3 {
    font-size: 20px;
    color: gray;
}
`;

