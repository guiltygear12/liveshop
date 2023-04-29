import { useEffect, useState } from "react";
import { fetchAllProducts } from "../Api";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { productsSelector, productsState } from "../atom";
import { Container, Wrapper } from "../GlobalStyled";
import styled from "styled-components";
import { Link, useNavigate, useParams } from "react-router-dom";

const ProductTopArea = styled.div`
    width: 100%;
    height: 400px;
    background-color: ${(props) => props.theme.boxColor};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
    border-radius: 16px;
`;
const Title = styled.h2`
    font-size: 36px;
    font-family: "LINESeedKR-Bd";
    color: ${(props) => props.theme.textColor};
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
        border: 3px solid ${(props) => props.theme.pointColor2};
        font-size: 18px;
    }
`;
const ProductBottomArea = styled.div`
    width: 100%;
    height: fit-content;
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(4, 1fr);
    @media (min-width: 769px) and (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;
const ProductItem = styled.div`
    width: 100%;
    height: 500px;
    padding: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 16px;
    box-shadow: 0 0 4px ${(props) => props.theme.shadowColor};
    background-color: ${(props) => props.theme.boxColor};
    div {
        width: 80%;
        height: 300px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 16px;
        box-shadow: 0 0 4px ${(props) => props.theme.shadowColor};
        background-color: #ffffff;
        img {
            width: 100%;
            transform: scale(0.75);
            transition: 0.3s;
        }
        :hover {
            img {
                transform: scale(1);
            }
        }
    }
    h4 {
        font-size: 18px;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
`;

function Products() {
    const { CategoryId } = useParams();
    const navigate = useNavigate();
    const [category, setCategory] = useState(0);
    const [products, setProducts] = useRecoilState(productsState);
    const selector = useRecoilValue(productsSelector);
    const loadProducts = async () => {
        setProducts(await fetchAllProducts());
    };

    useEffect(() => {
        loadProducts();
    }, []);
    useEffect(() => {
        if (CategoryId != undefined) {
            setCategory(+CategoryId);
        }
    }, [CategoryId]);
    return (
        <Container>
            <Wrapper>
                <ProductTopArea>
                    <Title>Products</Title>
                    <Category>
                        <CategoryItem
                            className={category === 0 ? "active" : ""}
                            onClick={() => {
                                navigate("/Products/0");
                            }}
                        >
                            All
                        </CategoryItem>
                        <CategoryItem
                            className={category === 1 ? "active" : ""}
                            onClick={() => {
                                navigate("/Products/1");
                            }}
                        >
                            Electronics
                        </CategoryItem>
                        <CategoryItem
                            className={category === 2 ? "active" : ""}
                            onClick={() => {
                                navigate("/Products/2");
                            }}
                        >
                            Jewelery
                        </CategoryItem>
                        <CategoryItem
                            className={category === 3 ? "active" : ""}
                            onClick={() => {
                                navigate("/Products/3");
                            }}
                        >
                            Men's Clothing
                        </CategoryItem>
                        <CategoryItem
                            className={category === 4 ? "active" : ""}
                            onClick={() => {
                                navigate("/Products/4");
                            }}
                        >
                            Women's Clothing
                        </CategoryItem>
                    </Category>
                </ProductTopArea>
                <ProductBottomArea>
                    {category === 0
                        ? products.map((itm) => {
                              return (
                                  <ProductItem key={itm.id}>
                                      <div>
                                          <img src={itm.image}></img>
                                      </div>
                                      <p>{itm.price}$</p>
                                      <p>Rating: {itm.rating.rate}/5.0</p>
                                      <h4>{itm.title}</h4>
                                      <Link
                                          to={`/Detail/${itm.id}`}
                                          style={{
                                              padding: "4px 16px",
                                              backgroundColor: "#ccc",
                                          }}
                                      >
                                          Product Detail
                                      </Link>
                                  </ProductItem>
                              );
                          })
                        : selector[category - 1].map((itm) => {
                              return (
                                  <ProductItem key={itm.id}>
                                      <div>
                                          <img src={itm.image}></img>
                                      </div>
                                      <p>{itm.price}$</p>
                                      <h4>{itm.title}</h4>
                                      <Link
                                          to={`/Detail/${itm.id}`}
                                          style={{
                                              padding: "4px 16px",
                                              backgroundColor: "#ccc",
                                          }}
                                      >
                                          Product Detail
                                      </Link>
                                  </ProductItem>
                              );
                          })}
                </ProductBottomArea>
            </Wrapper>
        </Container>
    );
}
export default Products;
