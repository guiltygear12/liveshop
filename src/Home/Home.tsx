import { Container, Wrapper } from "../GlobalStyled";
import "swiper/swiper.min.css";
import "swiper/css/scrollbar";
import "./slide.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Scrollbar } from "swiper";
import styled from "styled-components";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MainEvent from "./Components/MainEvent";
import MainNotice from "./Components/MainNotice";
import MainNewProduct from "./Components/MainNewProduct";
import MainBestSeller from "./Components/MainBestSeller";

const SlideStyleRoot = styled.div`
    width: 100%;
    height: 100vh;
    .swiper {
        height: inherit;
        .swiper-slide:nth-of-type(2n) {
            background-color: tomato;
        }
    }
`;
const ImageBanner = styled.section`
    position: relative;
    width: 100%;
    height: 500px;
`;
const Grid = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    div:first-child,
    div:last-child {
        grid-column: span 2;
    }
`;
const BannerBox = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    background-color: #fcfcfc;
    border-radius: 16px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
    background-color: ${(props) => props.theme.boxColor};
`;
const Overlay = styled(motion.div)`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
`;
function Home() {
    const [ClickedId, setClickedId] = useState<null | string>(null);
    return (
        <Container>
            <SlideStyleRoot className="slideroot">
                <Swiper
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    scrollbar={{
                        hide: true,
                    }}
                    modules={[Autoplay, Scrollbar]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src="img/Slide_img-1.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="img/Slide_img-2.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="img/Slide_img-3.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="img/Slide_img-4.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="img/Slide_img-5.jpg" alt="" />
                    </SwiperSlide>
                </Swiper>
            </SlideStyleRoot>
            <Wrapper>
                {/* 이벤트 베너 - 행사 안내,특가상품 */}
                <ImageBanner>
                    <Grid>
                        <BannerBox
                            key={`Event`}
                            layoutId={`Event`}
                            onClick={() => setClickedId(`Event`)}
                        >
                            EVENT!
                        </BannerBox>
                        <BannerBox
                            key={`Notice`}
                            layoutId={`Notice`}
                            onClick={() => setClickedId(`Notice`)}
                        >
                            Notice
                        </BannerBox>
                        <BannerBox
                            key={`NewProduct`}
                            layoutId={`NewProduct`}
                            onClick={() => setClickedId(`NewProduct`)}
                        >
                            NewProduct
                        </BannerBox>
                        <BannerBox
                            key={`BestSeller`}
                            layoutId={`BestSeller`}
                            onClick={() => setClickedId(`BestSeller`)}
                        >
                            BestSeller
                        </BannerBox>
                    </Grid>
                    <AnimatePresence>
                        {ClickedId ? (
                            <Overlay
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setClickedId(null)}
                            >
                                {ClickedId === "Event" ? (
                                    <BannerBox
                                        layoutId={"Event"}
                                        style={{ width: "80%", height: "80%" }}
                                    >
                                        <MainEvent />
                                    </BannerBox>
                                ) : null}
                                {ClickedId === "Notice" ? (
                                    <BannerBox
                                        layoutId={"Notice"}
                                        style={{ width: "80%", height: "80%" }}
                                    >
                                        <MainNotice />
                                    </BannerBox>
                                ) : null}
                                {ClickedId === "NewProduct" ? (
                                    <BannerBox
                                        layoutId={"NewProduct"}
                                        style={{ width: "80%", height: "80%" }}
                                    >
                                        <MainNewProduct />
                                    </BannerBox>
                                ) : null}
                                {ClickedId === "BestSeller" ? (
                                    <BannerBox
                                        layoutId={"BestSeller"}
                                        style={{ width: "80%", height: "80%" }}
                                    >
                                        <MainBestSeller />
                                    </BannerBox>
                                ) : null}
                            </Overlay>
                        ) : null}
                    </AnimatePresence>
                </ImageBanner>
                {/* 추천 상품 / 신상품 */}
            </Wrapper>
        </Container>
    );
}
export default Home;
