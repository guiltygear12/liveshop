import { useParams } from "react-router-dom";
import { Container, Wrapper } from "../GlobalStyled";
import styled from "styled-components";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { IProducts, cartState, likelistState, productsState } from "../atom";
import { useEffect, useState } from "react";
import { fetchAllProducts } from "../Api";

const DetailWrapper = styled(Wrapper)`
    padding-top: 160px;
`;
const DetailButton = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    button {
        cursor: pointer;
        width: 100%;
        padding: 12px 16px;
        font-size: 14px;
        border: none;
    }
`;
const DetailText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    h2 {
        font-size: 30px;
    }
    h3 {
        font-size: 24px;
    }
    div {
        display: flex;
        gap: 16px;
    }
`;
const Detail = styled.div`
    padding: 16px;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 24px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
`;
const Thumbnail = styled.div`
    flex: 2;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
    img {
        height: 100%;
        transform: scale(0.8);
        transition: 0.3s;
    }
    :hover {
        img {
            transform: scale(0.9);
        }
    }
`;
const DetailTop = styled.div`
    width: 100%;
    height: 600px;
    gap: 8px;
    padding: 16px;
    display: flex;
    justify-content: space-between;
`;

const DetailBottom = styled.div`
    padding: 16px 32px;
    width: 100%;
    display: flex;
    justify-content: center;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
`;
function ProductDetail() {
    const { itemId } = useParams();
    const products = useRecoilValue(productsState);
    const [likeList, setLikelist] = useRecoilState(likelistState);
    const [cart, setCart] = useRecoilState(cartState);
    const [item, setItem] = useState<IProducts>();
    const addLike = () => {
        if (itemId != undefined) {
            const isDuplicate = likeList.some(
                (product) => product.id === +itemId
            );
            console.log(isDuplicate);
            if (!isDuplicate) {
                if (item != undefined) {
                    setLikelist([...likeList, item]);
                }
            } else {
                alert("이미 있음");
            }
        }
    };
    const addCart = () => {
        if (item != undefined) {
            const index = cart.findIndex((product) => product.id === item.id);

            if (index === -1) {
                setCart([...cart, { ...item, count: 1 }]);
            } else {
                const newCart = cart.map((product) =>
                    product.id === item.id
                        ? { ...product, count: product.count + 1 }
                        : product
                );
                setCart(newCart);
            }
        }
    };
    useEffect(() => {
        if (itemId != undefined) {
            setItem(products.find((products) => products.id === +itemId));
        }
    }, [itemId]);
    return (
        <Container>
            <DetailWrapper>
                <DetailTop>
                    <Thumbnail>
                        <img src={item?.image} alt="" />
                    </Thumbnail>
                    <Detail>
                        <DetailText>
                            <h2>{item?.title}</h2>
                            <h3>{item?.price}$</h3>
                            <div>
                                <p>Rating: {item?.rating.rate}/5.0</p>
                                <p>Count: {item?.rating.count}</p>
                            </div>
                        </DetailText>
                        <DetailButton>
                            <button
                                onClick={() => {
                                    addLike();
                                }}
                            >
                                찜하기
                            </button>
                            <button
                                onClick={() => {
                                    addCart();
                                }}
                            >
                                장바구니
                            </button>
                        </DetailButton>
                    </Detail>
                </DetailTop>
                <DetailBottom>{item?.description}</DetailBottom>
            </DetailWrapper>
        </Container>
    );
}

export default ProductDetail;
