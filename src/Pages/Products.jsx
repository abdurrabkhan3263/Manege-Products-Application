import React, { useState, useEffect } from "react";
import Container from "../Container/Container";
import ProductCard from "../Component/Card/ProductCard";
import { Button } from "../Component/UI";
import { Add } from "../../public/Assets";
import "../index.css";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetDeleteData } from "../store/slice";
import DataDelete from "../Component/Delete/DataDelete";

function Products() {
  const [isAddProduct, setIsAddProduct] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showDeleteSection = useSelector((state) => state.deleteData);
  const handleAddProduct = () => {
    setIsAddProduct((prev) => !prev);
    navigate("addproduct", { state: "/products" });
  };
  const productData = [
    {
      $id: 1,
      productName: "round white watch with white band",
      productImage:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      productPrice: 2343,
      productPriceOption: "",
    },
    {
      $id: 2,
      productName: "flatlay photography of wireless headphones",
      productImage:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      productPrice: 134,
      productPriceOption: "",
    },
    {
      $id: 3,
      productName:
        "white and black Polaroid One Step 2 instant camera on white board",
      productImage:
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      productPrice: "",
      productPriceOption: [
        { name: "Height 200", price: 14 },
        { name: "Height 400", price: 2344 },
        { name: "Height 500", price: 22 },
        { name: "Height 600", price: 1343 },
      ],
    },
    {
      $id: 4,
      productName: "sunglasses beside a purse",
      productImage:
        "https://images.unsplash.com/photo-1509695507497-903c140c43b0?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      productPrice: "",
      productPriceOption: [
        { name: "Height 400", price: 900 },
        { name: "Height 900", price: 1000 },
      ],
    },
    {
      $id: 5,
      productName: "white corded headphones",
      productImage:
        "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      productPrice: 122,
      productPriceOption: "",
    },
    {
      $id: 6,
      productName: "white Sony PS4 Original with controller",
      productImage:
        "https://images.unsplash.com/photo-1486401899868-0e435ed85128?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      productPrice: "",
      productPriceOption: [
        { name: "Width 400", price: 111 },
        { name: "Width 900", price: 122 },
        { name: "Width 100", price: 212 },
        { name: "Width 400", price: 221 },
      ],
    },
    {
      $id: 7,
      productName: "Stockholms Branneri bottle",
      productImage:
        "https://images.unsplash.com/photo-1530914547840-346c183410de?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      productPrice: 444,
      productPriceOption: "",
    },
    {
      $id: 8,
      productName: "white and black usb flash drive",
      productImage:
        "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=1953&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      productPrice: "",
      productPriceOption: [
        { name: "Width 500", price: 444 },
        { name: "Width 100", price: 2234 },
        { name: "Width 900", price: 543 },
      ],
    },
    {
      $id: 9,
      productName: "person holding round black analog watch",
      productImage:
        "https://images.unsplash.com/photo-1532667449560-72a95c8d381b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      productPrice: 900,
      productPriceOption: "",
    },
    {
      $id: 10,
      productName: "person holding round black analog watch",
      productImage:
        "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      productPrice: "",
      productPriceOption: [
        { name: "Length 400", price: 111 },
        { name: "Length 900", price: 434 },
        { name: "Length 200", price: 645 },
        { name: "Length 200", price: 899 },
      ],
    },
  ];
  useEffect(() => {
    if (showDeleteSection.deleteStatus) {
      console.log("delete Karnai hai", showDeleteSection.id);
      setTimeout(() => {
        dispatch(resetDeleteData());
      }, 1500);
    }
  }, [showDeleteSection]);
  return (
    <Container className={"relative"}>
      {showDeleteSection.showDelete && <DataDelete />}
      <div className="w-full h-full">
        <Outlet />
        <div className="w-full flex justify-end h-[5%]">
          <Button
            type={"button"}
            className={"flex items-center px-4 py-1 text-white bg-blue-600 "}
            onClick={handleAddProduct}
          >
            <Add /> Add Product
          </Button>
        </div>
        <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-10 w-full h-[95%] overflow-y-scroll py-4 scroll-smooth">
          {productData.map((data, index) => {
            return (
              <div
                key={index}
                className="h-max rounded-lg overflow-hidden shadow-2xl select-none"
              >
                <ProductCard productData={data} />
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
}

export default Products;
