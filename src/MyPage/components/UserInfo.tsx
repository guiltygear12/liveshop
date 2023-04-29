import styled from "styled-components";
import { dummyUserData } from "../../dummyData";

const UserInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    div {
        width: 100%;
        display: flex;
        gap: 8px;
        p {
            :nth-of-type(1) {
                width: 80px;
                border-right: 3px solid;
            }
        }
    }
    @media (max-width: 769px) {
        gap: 8px;
        div {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 2px;
            p {
                font-size: 12px;
                :nth-of-type(1) {
                    width: 70px;
                    border-right: none;
                    border-bottom: 2px solid #ccc;
                }
            }
        }
    }
`;
const ProfileImage = styled.div`
    display: flex;
    justify-content: center;
    div {
        width: 400px;
        height: 400px;
        border-radius: 50%;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 2px 2px 8px ${(props) => props.theme.pointColor2};
        img {
            width: 500px;
        }
    }
    @media (max-width: 769px) {
        div {
            width: 200px;
            height: 200px;
            img {
                width: 300px;
            }
        }
    }
`;
const InfoTop = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 24px;
    @media (max-width: 769px) {
        flex-direction: column;
    }
`;
const Profile = styled.section`
    padding: 24px;
    display: flex;
    gap: 8px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
function UserInfo() {
    return (
        <Profile>
            <InfoTop>
                <ProfileImage>
                    <div>
                        <img src="https://picsum.photos/500" alt="" />
                    </div>
                </ProfileImage>
                <UserInfoWrapper>
                    <div>
                        <p>이름</p>
                        <p>{dummyUserData.name}</p>
                    </div>
                    <div>
                        <p>이메일</p>
                        <p>{dummyUserData.email}</p>
                    </div>
                    <div>
                        <p>전화번호</p>
                        <p>{dummyUserData.phone}</p>
                    </div>
                    <div>
                        <p>주소</p>
                        <p>
                            {dummyUserData.address.city}{" "}
                            {dummyUserData.address.street}{" "}
                            {dummyUserData.address.zipcode}
                        </p>
                    </div>
                </UserInfoWrapper>
            </InfoTop>
        </Profile>
    );
}
export default UserInfo;
