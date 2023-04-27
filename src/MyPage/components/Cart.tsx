import styled from "styled-components";
import { cartState, totalPriceSelector } from "../../atom";
import { useRecoilState, useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const ListBottom = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    line-height: 100%;
    gap: 24px;
    button {
        border: none;
        cursor: pointer;
        font-size: 18px;
        padding: 8px 32px;
        transition: all 0.3s;
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
        :hover {
            box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
        }
    }
`;
const Count = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    h4 {
        grid-row: span 2;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    button {
        background-color: #efefef;
        border: none;
        cursor: pointer;
        transition: all 0.3s;
        :hover {
            background-color: #cccccc;
        }
    }
`;
const Delete = styled.button`
    padding: 8px 16px;
    border: none;
    border-radius: 8px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    transition: all 0.3s;
    cursor: pointer;
    :hover {
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
    }
`;
const ItemCount = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    @media (max-width: 769px) {
        justify-content: end;
    }
`;

const ItemImage = styled.div`
    width: 120px;
    height: 120px;
    overflow: hidden;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    padding: 8px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 100px;
    }
`;
const ItemThumbnail = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`;
const Item = styled.div`
    padding: 16px;
    display: flex;
    justify-content: space-between;
    border-radius: 24px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    @media (max-width: 769px) {
        flex-direction: column;
        gap: 8px;
    }
`;
const ListTop = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const List = styled.section`
    padding: 24px;
    display: flex;
    gap: 24px;
    flex-direction: column;
`;

function Cart() {
    const [cart, setCart] = useRecoilState(cartState);
    const totalPrice = useRecoilValue(totalPriceSelector);
    const navigate = useNavigate();

    const handleDelete = (id: number) => {
        console.log(id);
        setCart(cart.filter((product) => product.id !== id));
    };
    const updateItemCount = (id: number, newCount: number) => {
        const updatedCart = cart.map((item) =>
            item.id === id ? { ...item, count: newCount } : item
        );
        setCart(updatedCart);
    };
    const handleIncrease = (id: number, count: number) => {
        updateItemCount(id, count + 1);
    };

    const handleDecrease = (id: number, count: number) => {
        if (count > 1) {
            updateItemCount(id, count - 1);
        } else {
            alert("수량은 1개 이상이어야 합니다.");
        }
    };
    return (
        <List>
            <ListTop>
                {cart.map((itm) => {
                    return (
                        <Item key={itm.id}>
                            <ItemThumbnail>
                                <ItemImage>
                                    <img src={itm.image} alt="" />
                                </ItemImage>
                                <h3
                                    onClick={() =>
                                        navigate(`/Detail/${itm.id}`)
                                    }
                                >
                                    {itm.title}
                                </h3>
                            </ItemThumbnail>
                            <ItemCount>
                                <h4>{itm.price}$</h4>
                                <Count>
                                    <h4>{itm.count}</h4>
                                    <button
                                        onClick={() => {
                                            handleIncrease(itm.id, itm.count);
                                        }}
                                    >
                                        ⬆️
                                    </button>
                                    <button
                                        onClick={() => {
                                            handleDecrease(itm.id, itm.count);
                                        }}
                                    >
                                        ⬇️
                                    </button>
                                </Count>
                                <Delete onClick={() => handleDelete(itm.id)}>
                                    ✖️
                                </Delete>
                            </ItemCount>
                        </Item>
                    );
                })}
            </ListTop>
            <ListBottom>
                <p>총 금액: {totalPrice.toFixed(2)}$</p>
                <button>구매하기</button>
            </ListBottom>
        </List>
    );
}

export default Cart;
