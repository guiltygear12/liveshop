import { useRecoilState } from "recoil";
import { IProducts, productsState } from "../../atom";
import { fetchAllProducts } from "../../Api";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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
function MainNewProduct() {
    const [products, setProducts] = useRecoilState(productsState);
    const [currentProducts, setCurrentProducts] = useState<IProducts[]>();
    const navigate = useNavigate();
    const loadProducts = async () => {
        setProducts(await fetchAllProducts());
        setCurrentProducts(products.slice(0, 3));
    };
    useEffect(() => {
        setCurrentProducts(products.slice(0, 3));
    }, [products]);
    useEffect(() => {
        loadProducts();
    }, []);
    return (
        <BannerProduct>
            <h4>NewProducts</h4>
            <div>
                {currentProducts?.map((itm, idx) => {
                    return (
                        <BannerItem key={`NewProducts-${idx}`}>
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

export default MainNewProduct;
