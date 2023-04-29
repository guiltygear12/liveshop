import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { IProducts, bestSellersState, productsState } from "../../atom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAllProducts } from "../../Api";

const BannerItem = styled.div`
    padding: 8px;
    flex: 1;
    gap: 8px;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    box-shadow: 0 0 4px ${(props) => props.theme.shadowColor};
    div {
        height: 200px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        background-color: #fff;
        img {
            height: 100%;
        }
    }
    h3 {
        font-size: 18px;
        cursor: pointer;
        overflow: hidden;
        white-space: normal;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        word-break: keep-all;
    }
    p {
        font-size: 16px;
    }
`;
const BannerProduct = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 16px;
    & > div {
        display: flex;
        gap: 8px;
        border-radius: 8px;
        @media (max-width: 1024px) {
            padding: 12px;
            overflow-x: scroll;
        }
    }
`;

function MainBestSeller() {
    const [products, setProducts] = useRecoilState(productsState);
    const bestSellers = useRecoilValue(bestSellersState);
    const navigate = useNavigate();
    const loadProducts = async () => {
        setProducts(await fetchAllProducts());
    };

    useEffect(() => {
        loadProducts();
    }, []);
    return (
        <BannerProduct>
            <h4>BestSeller</h4>
            <div>
                {bestSellers.map((itm, idx) => {
                    return (
                        <BannerItem key={`BestSeller-${idx}`}>
                            <div>
                                <img src={itm.image} alt="" />
                            </div>
                            <h3 onClick={() => navigate(`/Detail/${itm.id}`)}>
                                {itm.title}
                            </h3>
                            <p>{itm.price}</p>
                        </BannerItem>
                    );
                })}
            </div>
        </BannerProduct>
    );
}
export default MainBestSeller;
