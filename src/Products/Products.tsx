import { useEffect, useState } from "react";
import { fetchAllProducts } from "../Api";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { productsState } from "../atom";
import { Container, Wrapper } from "../GlobalStyled";
import styled from "styled-components";

const ProductTopArea = styled.div`
    width: 100%;
    height: 400px;
    background-color: #ccc;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
`;
const Title = styled.h2`
    font-size: 36px;
    font-family: "LINESeedKR-Bd";
`;
const Category = styled.div`
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
`;
const CategoryItem = styled.div`
    padding: 8px 24px;
    font-family: "LINESeedKR-Th";
    font-size: 16px;
    border: 3px solid #999;
    border-radius: 8px;
    transition: all 0.3s;
    &.active {
        font-family: "LINESeedKR-Rg";
        border: 3px solid tomato;
        font-size: 18px;
    }
`;
function Products() {
    const [category, setCategory] = useState(0);
    const [products, setProducts] = useRecoilState(productsState);
    const loadProducts = async () => {
        setProducts(await fetchAllProducts());
    };
    useEffect(() => {
        loadProducts();
    }, []);
    return (
        <Container>
            <Wrapper>
                <ProductTopArea>
                    <Title>Products</Title>
                    <Category>
                        <CategoryItem
                            className={category === 0 ? "active" : ""}
                            onClick={() => setCategory(0)}
                        >
                            All
                        </CategoryItem>
                        <CategoryItem
                            className={category === 1 ? "active" : ""}
                            onClick={() => setCategory(1)}
                        >
                            Electronics
                        </CategoryItem>
                        <CategoryItem
                            className={category === 2 ? "active" : ""}
                            onClick={() => setCategory(2)}
                        >
                            Jewelery
                        </CategoryItem>
                        <CategoryItem
                            className={category === 3 ? "active" : ""}
                            onClick={() => setCategory(3)}
                        >
                            Men's Clothing
                        </CategoryItem>
                        <CategoryItem
                            className={category === 4 ? "active" : ""}
                            onClick={() => setCategory(4)}
                        >
                            Women's Clothing
                        </CategoryItem>
                    </Category>
                </ProductTopArea>
            </Wrapper>
        </Container>
    );
}
export default Products;
