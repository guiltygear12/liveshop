import styled from "styled-components";
import { Container, Wrapper } from "../GlobalStyled";
import { useForm } from "react-hook-form";
import { ILogin, checkToken } from "../atom";
import { fetchToken, fetchToken2 } from "../Api";
import { useMutation, useQuery } from "react-query";
import { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

const FormWrapper = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.bgColor};
`;
const LoginForm = styled.form`
    width: 100%;
    max-width: 400px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
    align-items: center;
    font-family: "LINESeedKR-Bd";
    background-color: ${(props) => props.theme.boxColor};
    border-radius: 16px;
    box-shadow: 0 0 16px ${(props) => props.theme.pointColor2};
`;
const FormTitle = styled.h3`
    font-size: 24px;
`;
const FormItem = styled.div`
    width: 80%;
    height: 36px;
    display: flex;
    flex-direction: row-reverse;
    gap: 8px;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #aaa;
`;

const FormLabel = styled.label`
    flex: 1;
    text-align: right;
    font-size: 14px;
    font-family: "LINESeedKR-Th";
`;
const FormInput = styled.input`
    flex: 3;
    border: none;
    outline: none;
    height: 100%;
    :focus {
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    }
`;
const FormErrorText = styled.p`
    color: crimson;
    font-weight: 100;
    font-size: 14px;
`;
const LoginBtn = styled.button`
    padding: 8px 24px;
    font-size: 12px;
    border: none;
    border-radius: 8px;
    box-shadow: 0 2px 4px ${(props) => props.theme.pointColor2};
    cursor: pointer;
`;
function Login() {
    const [errorMsg, setErrorMsg] = useState("");
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        setError,
        watch,
        formState: { errors },
    } = useForm<ILogin>();
    const [token, setToken] = useRecoilState(checkToken);
    const loginMutation = useMutation(
        async (data: ILogin) => {
            return await fetch("https://fakestoreapi.com/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username: data.username,
                    password: data.password,
                }),
            })
                .then((res) => res.json())
                .then((json) => {
                    setToken(json.token);
                    localStorage.setItem("token", json.token);
                });
            // .then(() => console.log(token));
        },
        {
            onSuccess: () => {
                navigate("/");
            },
            onError: () => {
                setErrorMsg("등록되지않은 이메일 혹은 잘못된 비밀번호입니다.");
                console.log("실패임 수고");
            },
        }
    );
    const onValid = (user: any) => {
        localStorage.setItem("token", "");
        loginMutation.mutate(user);
    };
    useEffect(() => {
        localStorage.setItem("token", "");
    }, []);
    return (
        <Container>
            <FormWrapper>
                <LoginForm onSubmit={handleSubmit(onValid)}>
                    <FormTitle>로그인</FormTitle>
                    <FormErrorText>{errorMsg}</FormErrorText>
                    <FormItem>
                        <FormInput
                            {...register("username", { required: true })}
                            type="text"
                        />
                        <FormLabel>아이디</FormLabel>
                    </FormItem>
                    <FormItem>
                        <FormInput
                            {...register("password", { required: true })}
                            type="password"
                        />
                        <FormLabel>비밀번호</FormLabel>
                    </FormItem>
                    <LoginBtn>로그인</LoginBtn>
                </LoginForm>
            </FormWrapper>
        </Container>
    );
}
export default Login;
