import styled from "styled-components";
import { ILogin, IRegister } from "../atom";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

interface IForm {
    email: string;
    username: string;
    password: string;
    passwordcheck: string;
    firstname: string;
    lastname: string;
    city: string;
    street: string;
    zipcode: string;
    phone: string;
}
const FormWrapper = styled.section`
    width: 100%;
    height: fit-content;
    padding: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.bgColor};
`;
const RegisterForm = styled.form`
    margin-top: 80px;
    width: 100%;
    max-width: 500px;
    height: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
    align-items: center;
    font-family: "LINESeedKR-Bd";
    background-color: ${(props) => props.theme.boxColor};
    border-radius: 16px;
    box-shadow: 0 0 8px ${(props) => props.theme.pointColor2};
`;
const FormTitle = styled.h3`
    font-size: 24px;
    color: ${(props) => props.theme.textColor};
`;
const FormItem = styled.div`
    width: 80%;
    height: 36px;
    display: flex;
    flex-direction: row-reverse;
    gap: 8px;
    justify-content: center;
    align-items: center;
    border-bottom: 1px dashed #aaa;
    flex-wrap: wrap;
`;

const FormLabel = styled.label`
    flex: 1;
    text-align: right;
    font-size: 12px;
    font-family: "LINESeedKR-Th";
    color: ${(props) => props.theme.textColor};
`;
const FormInput = styled.input`
    flex: 3;
    border: 1px solid ${(props) => props.theme.pointColor1};
    outline: none;
    height: 100%;
    :focus {
        box-shadow: 0 0 4px ${(props) => props.theme.pointColor2};
    }
`;
const FormErrorText = styled.p`
    width: 80%;
    color: crimson;
    font-weight: 100;
    font-size: 14px;
`;
const FormBtn = styled.button`
    padding: 8px 24px;
    font-size: 12px;
    border: none;
    border-radius: 8px;
    box-shadow: 0 2px 4px ${(props) => props.theme.pointColor2};
    cursor: pointer;
`;

function Register() {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const RegisterMutation = useMutation(
        async (data: IRegister) => {
            return await fetch("https://fakestoreapi.com/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: "John@gmail.com",
                    username: "johnd",
                    password: "m38rmF$",
                    name: {
                        firstname: "John",
                        lastname: "Doe",
                    },
                    address: {
                        city: "kilcoole",
                        street: "7835 new road",
                        number: 3,
                        zipcode: "12926-3874",
                        geolocation: {
                            lat: "-37.3159",
                            long: "81.1496",
                        },
                    },
                    phone: "1-570-236-7033",
                }),
            })
                .then((res) => res.json())
                .then((json) => console.log(json));
        },
        {
            onSuccess: () => {
                navigate("/");
            },
            onError: () => {
                console.log("실패임 수고");
            },
        }
    );
    const onValid = (user: any) => {
        console.log(errors);
        RegisterMutation.mutate(user);
    };
    return (
        <FormWrapper>
            <RegisterForm onSubmit={handleSubmit(onValid)}>
                <FormTitle>회원가입</FormTitle>
                <FormItem>
                    <FormInput
                        {...register("email", {
                            required: true,
                            pattern: {
                                value: /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
                                message: "잘못된 이메일 형식입니다.",
                            },
                        })}
                    />
                    <FormLabel>이메일</FormLabel>
                </FormItem>
                <FormErrorText>
                    {errors?.email?.message?.toString()}
                </FormErrorText>
                <FormItem>
                    <FormInput
                        {...register("username", {
                            required: true,
                            minLength: {
                                value: 4,
                                message:
                                    "길이가 짧습니다, 4자 이상으로 작성해주세요",
                            },
                        })}
                    />
                    <FormLabel>아이디</FormLabel>
                </FormItem>
                <FormErrorText>
                    {errors?.username?.message?.toString()}
                </FormErrorText>
                <FormItem>
                    <FormInput
                        {...register("password", {
                            required: true,
                            pattern: {
                                value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!%*#?&])[A-Za-z\d@!%*#?&]{8,}$/,
                                message:
                                    "비밀번호는 최소 8자, 1개의 숫자,문자,특수문자를 포함하여야 합니다.",
                            },
                        })}
                    />
                    <FormLabel>비밀번호</FormLabel>
                </FormItem>
                <FormErrorText>
                    {errors?.password?.message?.toString()}
                </FormErrorText>
                <FormItem>
                    <FormInput
                        {...register("passwordcheck", {
                            required: "필수요소입니다.",
                        })}
                    />
                    <FormLabel>
                        비밀번호
                        <br /> 확인
                    </FormLabel>
                </FormItem>
                <FormErrorText>
                    {errors?.passwordcheck?.message?.toString()}
                </FormErrorText>
                <FormItem>
                    <FormInput {...register("firstname", { required: true })} />
                    <FormLabel>
                        (FirstName)
                        <br />
                        이름
                    </FormLabel>
                </FormItem>
                <FormErrorText>
                    {errors?.firstname?.message?.toString()}
                </FormErrorText>
                <FormItem>
                    <FormInput {...register("lastname", { required: true })} />
                    <FormLabel>
                        (LastName)
                        <br />성
                    </FormLabel>
                </FormItem>
                <FormErrorText>
                    {errors?.lastname?.message?.toString()}
                </FormErrorText>
                <FormItem>
                    <FormInput {...register("city", { required: true })} />
                    <FormLabel>도시</FormLabel>
                </FormItem>
                <FormErrorText>
                    {errors?.city?.message?.toString()}
                </FormErrorText>
                <FormItem>
                    <FormInput {...register("street", { required: true })} />
                    <FormLabel>도로명</FormLabel>
                </FormItem>
                <FormErrorText>
                    {errors?.street?.message?.toString()}
                </FormErrorText>
                <FormItem>
                    <FormInput
                        {...register("zipcode", { required: "필수요소입니다" })}
                    />
                    <FormLabel>우편번호</FormLabel>
                </FormItem>
                <FormErrorText>
                    {errors?.zipcode?.message?.toString()}
                </FormErrorText>
                <FormItem>
                    <FormInput
                        {...register("phone", {
                            required: "필수요소입니다",
                            pattern: {
                                value: /\d{3}-\d{3,4}-\d{4}/,
                                message: "잘못된형식입니다.",
                            },
                        })}
                    />
                    <FormLabel>전화번호</FormLabel>
                </FormItem>
                <FormErrorText>
                    {errors?.phone?.message?.toString()}
                </FormErrorText>
                <FormBtn>회원가입</FormBtn>
            </RegisterForm>
        </FormWrapper>
    );
}
export default Register;
