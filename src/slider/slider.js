import React, { useRef } from "react";
import { SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import SwiperCore, { Navigation } from "swiper";
import { Image } from "/src/elements";
import { StyledSlider, SlyderWrapper, StyledButton } from "./styled";

function Slider({ images }) {
  SwiperCore.use([Navigation]);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  // для кноп наз и впер
  // return <div>Слайдер</div>;
  return (
    <SlyderWrapper>
      <StyledButton left ref={navigationPrevRef} title="Назад">
        &lt;
      </StyledButton>
      <StyledButton right ref={navigationNextRef} title="Вперёд">
        &gt;
      </StyledButton>
      <StyledSlider
        // Чтобы инициализировать кнопки, нужно использовать props Свайпера onBeforeInit и передать туда функцию:
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        // Далее через props navigation нужно указать Swiper кнопки для навигации:
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current
        }}
        freeMode
        watchSlidesProgressslidesPerView={1}
        spaceBetween={30}
        loop={true}
      >
        {images &&
          images.length &&
          images.map((image) => (
            <SwiperSlide key={image}>
              <Image
                src={image}
                alt="изображение продукта"
                width="200"
                height="257"
                maxWidth="200"
              />
            </SwiperSlide>
          ))}
      </StyledSlider>
    </SlyderWrapper>
  );
}

export default Slider;
// Использованные настройки слайдера SwiperSlide:

// slidesPerView — определяет, сколько слайдов нужно отобразить одновременно. В нашем случае это 1;
// spaceBetween — расстояние между слайдами (20px);
// loop — бесконечная прокрутка (true).
