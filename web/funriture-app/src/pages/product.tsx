import React, { useEffect, useState } from "react";
import AppHeader from "../components/header";
import { Flex, Card } from "antd";
import { getproduct } from "../queries/products";

const { Meta } = Card;
function Product() {
  const [produc, setProduc] = useState();
  useEffect(() => {
    async function getpro() {
      const prod = await getproduct();
      setProduc(prod);
    }

    getpro();
  }, []);
  return (
    <>
      <AppHeader />
      <Flex>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </Flex>
    </>
  );
}

export default Product;
