import { useRecoilState } from "recoil";
import styled from "styled-components";
import { INotice, noticeState } from "../../atom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAllNotice } from "../../Api";
import Paging from "./Paging";

const BoardNum = styled.p``;
const BoardTitle = styled.h3`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
`;
const BoardItem = styled.div`
    width: 80%;
    padding: 4px;
    display: flex;
    justify-content: space-between;
    gap: 8px;
    border-bottom: 1px dashed #ccc;
    @media (max-width: 769px) {
        width: 100%;
    }
`;
const Board = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
`;

function Event() {
    const [notice, setNotice] = useRecoilState(noticeState); // 게시글
    const [count, setCount] = useState(0); // 아이템 총 개수
    const [currentPage, setCurrentPage] = useState(1); // 현재 페이지. default 값으로 1
    const [postPerPage, setPostPerPage] = useState(10); // 한 페이지에 보여질 아이템 수
    const [indexOfLastPost, setIndexOfLastPost] = useState(0); // 현재 페이지의 마지막 아이템 인덱스
    const [indexOfFirstPost, setIndexOfFirstPost] = useState(0); // 현재 페이지의 첫번째 아이템 인덱스
    const [currentPosts, setCurrentPosts] = useState<INotice[]>(); // 현재 페이지에서 보여지는 아이템들
    const navigate = useNavigate();

    const onBody = (id: number) => {
        navigate(`/Board/BoardBody/${id}`);
    };
    const loadNotice = async () => {
        console.log("게시글 불러오기");
        setNotice(await fetchAllNotice());
    };
    const handlePageChange = (page: number) => {
        console.log(page);
        setCurrentPage(page);
    };
    useEffect(() => {
        // 페이지 접속시 게시물을 저장
        loadNotice();
    }, []);
    useEffect(() => {
        // 최초접속, 페이지변경등에서 실행 페이지에 적합한 게시물을 보여줌
        setCount(notice.length);
        setIndexOfLastPost(currentPage * postPerPage);
        setIndexOfFirstPost(indexOfLastPost - postPerPage);
        setCurrentPosts(() => {
            const newNotice = [...notice];
            return newNotice.slice(indexOfFirstPost, indexOfLastPost);
        });
    }, [currentPage, indexOfLastPost, indexOfFirstPost, notice, postPerPage]);
    return (
        <Board>
            {currentPosts && notice.length > 0 ? (
                currentPosts.map((itm, idx) => {
                    return (
                        <BoardItem key={currentPosts[idx].id}>
                            <BoardTitle
                                onClick={() => onBody(currentPosts[idx].id)}
                            >
                                {itm.title}
                            </BoardTitle>
                            <BoardNum>{itm.id}</BoardNum>
                        </BoardItem>
                    );
                })
            ) : (
                <h2>Loading...</h2>
            )}
            <Paging
                page={currentPage}
                count={count}
                postPerPage={postPerPage}
                setPage={handlePageChange}
            />
        </Board>
    );
}
export default Event;
