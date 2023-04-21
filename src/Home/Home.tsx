import { Container, Wrapper } from "../GlobalStyled";
import "swiper/swiper.min.css";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Scrollbar } from "swiper";
import styled from "styled-components";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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
    height: 400px;
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
    background-color: #fcfcfc;
    border-radius: 16px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
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
            <SlideStyleRoot>
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
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                </Swiper>
            </SlideStyleRoot>
            <Wrapper>
                {/* 이벤트 베너 - 행사 안내,특가상품 */}
                <ImageBanner>
                    <Grid>
                        {["이벤트안내", "공지사항", "특가행사", "배너"].map(
                            (itm, index) => {
                                return (
                                    <BannerBox
                                        key={`${itm}-${index}`}
                                        layoutId={`${itm}-${index}`}
                                        onClick={() =>
                                            setClickedId(`${itm}-${index}`)
                                        }
                                    >
                                        {itm}
                                    </BannerBox>
                                );
                            }
                        )}
                    </Grid>
                    <AnimatePresence>
                        {ClickedId ? (
                            <Overlay
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setClickedId(null)}
                            >
                                <BannerBox
                                    layoutId={ClickedId}
                                    style={{ width: "80%", height: "80%" }}
                                ></BannerBox>
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
