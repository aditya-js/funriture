import React, { useEffect, useMemo, useState } from "react";
import AppHeader from "../components/header";
import { Flex, Card } from "antd";
import { getproduct } from "../queries/products";
import { useSearchParams } from "react-router-dom";
import { Skeleton } from "antd";

type product = {
  name: string;
  _id: string;
  description: string;
  categoryId: string;
};

const { Meta } = Card;
function Product() {
  const [produc, setProduc] = useState<Array<product>>([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    async function getpro() {
      // console.log("url", Object.fromEntries(searchParams.entries()));
      const prod = await getproduct({
        categoryId: searchParams.get("categoryId"),
        searchString: searchParams.get("searchString"),
      });
      console.log(prod);
      setProduc(prod.data);
    }

    getpro();
  }, [searchParams]);

  return (
    <>
      <AppHeader />
      <div style={{ padding: "30px" }}>
        <Skeleton.Node active={true}></Skeleton.Node>
        <div style={{ paddingTop: "30px", backgroundColor: "white" }}>
          <Skeleton.Input active={true}></Skeleton.Input>
          <br></br>
          <Skeleton.Input active={true}></Skeleton.Input>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex align-middle justify-between mt-14">
          {produc &&
            produc.map((productdata: product) => {
              return (
                <Card
                  key={productdata._id}
                  hoverable
                  style={{ width: 240, cursor: "pointer" }}
                  cover={
                    <img
                      alt="example"
                      src="/images/bed-img1.jpg"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                  }
                >
                  <Meta
                    title={productdata.name}
                    description={
                      <p style={{ height: "50px" }}>
                        {productdata.description}
                      </p>
                    }
                  />
                  <p className="flex align-middle justify-between mt-5">
                    INR 50,000{" "}
                    <span className="text-slate-400">
                      <del>INR 1,00,000</del>
                    </span>
                  </p>
                </Card>
              );
            })}
          {produc.length < 1 && <p>No Product found</p>}
        </div>
      </div>
    </>
  );
}

export default Product;
