import { useRecoilState, useRecoilValue } from "recoil";
import { likelistState } from "../../atom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ItemCount = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    @media (max-width: 769px) {
        justify-content: end;
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
function LikeList() {
    const [likelist, setLikelist] = useRecoilState(likelistState);
    const navigate = useNavigate();
    const handleDelete = (id: number) => {
        setLikelist(likelist.filter((product) => product.id !== id));
    };
    return (
        <List>
            <ListTop>
                {likelist.map((itm) => {
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
                                <Delete onClick={() => handleDelete(itm.id)}>
                                    ✖️
                                </Delete>
                            </ItemCount>
                        </Item>
                    );
                })}
            </ListTop>
        </List>
    );
}

export default LikeList;
