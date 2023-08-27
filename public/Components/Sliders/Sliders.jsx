import React, { useState, useEffect } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Sliders.css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

import SurveyImg from './../../Assets/Images/Survey.svg';
import SurveyBlueImg from './../../Assets/Images/SurveyBlue.svg';
import SurveyPurpleImg from './../../Assets/Images/SurveyPurple.svg';
import SurveyPurpleFilledImg from './../../Assets/Images/SurveyPurpleFilled.svg';

import StockingImg from './../../Assets/Images/Stocking.svg';
import StockingBlueImg from './../../Assets/Images/StockingBlue.svg';
import StockingPurpleImg from './../../Assets/Images/StockingPurple.svg';
import StockingPurpleFilledImg from './../../Assets/Images/StockingPurpleFilled.svg';
import MerchandisingImg from './../../Assets/Images/Merchandising.svg';
import MerchandisingBlueImg from './../../Assets/Images/MerchandisingBlue.svg';
import MerchandisingPurpleImg from './../../Assets/Images/MerchandisingPurple.svg';
import MerchandisingPurpleFilledImg from './../../Assets/Images/MerchandisingPurpleFilled.svg';
import WarehousingImg from './../../Assets/Images/Warehousing.svg';
import WarehousingBlueImg from './../../Assets/Images/WarehousingBlue.svg';
import WarehousingPurpleImg from './../../Assets/Images/WarehousingPurple.svg';
import WarehousingPurpleFilledImg from './../../Assets/Images/WarehousingPurpleFilled.svg';
import CleansingImg from './../../Assets/Images/Cleansing.svg';
import CleansingBlueImg from './../../Assets/Images/CleansingBlue.svg';
import CleansingPurpleImg from './../../Assets/Images/CleansingPurple.svg';
import CleansingPurpleFilledImg from './../../Assets/Images/CleansingPurpleFilled.svg';
import FoodSteamImg from './../../Assets/Images/FoodSteam.svg';
import FoodSteamBlueImg from './../../Assets/Images/FoodSteamBlue.svg';
import FoodSteamPurpleImg from './../../Assets/Images/FoodSteamPurple.svg';
import FoodSteamPurpleFilledImg from './../../Assets/Images/FoodSteamPurpleFilled.svg';
import MealImg from './../../Assets/Images/Meal.svg';
import MealBlueImg from './../../Assets/Images/MealBlue.svg';
import MealPurpleImg from './../../Assets/Images/MealPurple.svg';
import MealPurpleFilledImg from './../../Assets/Images/MealPurpleFilled.svg';
import ManProfileImg from './../../Assets/Images/ManProfile.svg';
import ManProfileBlueImg from './../../Assets/Images/ManProfileBlue.svg';
import ManProfilePurpleImg from './../../Assets/Images/ManProfilePurple.svg';
import ManProfilePurpleFilledImg from './../../Assets/Images/ManProfilePurpleFilled.svg';
import PeopleBackgroundImg from './../../Assets/Images/PeopleBackground.jpg';
import HyerLineBlackImg from './../../Assets/Images/HyerLineBlack.png';
import HyerLineWhiteImg from './../../Assets/Images/HyerLineWhite.png';
import PepsiImg from './../../Assets/Images/Pepsi.png';
import AcostaImg from './../../Assets/Images/Acosta.png';
import MarriottImg from './../../Assets/Images/Marriott.png';
import ServeSuccessImg from './../../Assets/Images/ServeSuccess.png';
import SparklingIceImg from './../../Assets/Images/SparklingIce.png';
import DriveLineImg from './../../Assets/Images/DriveLine.png';
import DoordashImg from './../../Assets/Images/Doordash.png';
import CompassImg from './../../Assets/Images/Compass.png';
import HyattImg from './../../Assets/Images/Hyatt.png';
import MeijerImg from './../../Assets/Images/Meijer.png';
import AnimatedCards from './../../Components/AnimatedCards/AnimatedCards';
export const AmazingPartners = (props) => {
  return (
    <>
      {props.PartnersSliderBlue && (
        <div className="AmazingPartnersContainer">
          <div className="PartnersSwiperContainer">
            <div className="PartnersHeader">
              <span>{props.PartnersSliderBlue}</span>
              <img src={HyerLineWhiteImg} />
            </div>

            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              navigation={true}
              modules={[Autoplay]}
              slidesPerView={5}
            >
              <SwiperSlide>
                <AnimatedCards ImgCard={PepsiImg} />
              </SwiperSlide>
              <SwiperSlide>
                <AnimatedCards ImgCard={AcostaImg} />
              </SwiperSlide>
              <SwiperSlide>
                <AnimatedCards ImgCard={MarriottImg} />
              </SwiperSlide>
              <SwiperSlide>
                <AnimatedCards ImgCard={MeijerImg} />
              </SwiperSlide>
              <SwiperSlide>
                <AnimatedCards ImgCard={ServeSuccessImg} />
              </SwiperSlide>

              <SwiperSlide>
                <AnimatedCards ImgCard={DriveLineImg} />
              </SwiperSlide>
              <SwiperSlide>
                <AnimatedCards ImgCard={SparklingIceImg} />
              </SwiperSlide>
              <SwiperSlide>
                <AnimatedCards ImgCard={HyattImg} />
              </SwiperSlide>
              <SwiperSlide>
                <AnimatedCards ImgCard={CompassImg} />
              </SwiperSlide>
              <SwiperSlide>
                <AnimatedCards ImgCard={DoordashImg} />
              </SwiperSlide>
            </Swiper>
          </div>
          <div
            className="PartnersSwiperResponsive"
            id="PartnersSwiperResponsive"
          >
            <div className="PartnersHeader">
              <span>Amazing Partners</span>
              <img src={HyerLineWhiteImg} />
            </div>
            <Swiper
              spaceBetween={0}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              navigation={true}
              modules={[Autoplay]}
              slidesPerView={1}
            >
              <SwiperSlide>
                <AnimatedCards ImgCard={PepsiImg} />
              </SwiperSlide>
              <SwiperSlide>
                <AnimatedCards ImgCard={AcostaImg} />
              </SwiperSlide>
              <SwiperSlide>
                <AnimatedCards ImgCard={MarriottImg} />
              </SwiperSlide>
              <SwiperSlide>
                <AnimatedCards ImgCard={MeijerImg} />
              </SwiperSlide>
              <SwiperSlide>
                <AnimatedCards ImgCard={ServeSuccessImg} />
              </SwiperSlide>

              <SwiperSlide>
                <AnimatedCards ImgCard={DriveLineImg} />
              </SwiperSlide>
              <SwiperSlide>
                <AnimatedCards ImgCard={SparklingIceImg} />
              </SwiperSlide>
              <SwiperSlide>
                <AnimatedCards ImgCard={HyattImg} />
              </SwiperSlide>
              <SwiperSlide>
                <AnimatedCards ImgCard={CompassImg} />
              </SwiperSlide>
              <SwiperSlide>
                <AnimatedCards ImgCard={DoordashImg} />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      )}
      {props.PartnersSliderPurple && (
        <div className="AmazingPartnersContainerPurple">
          <div className="PartnersSwiperContainer">
            <div className="PartnersHeader">
              <span>{props.PartnersSliderPurple}</span>
              <img src={HyerLineWhiteImg} />
            </div>

            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              navigation={true}
              modules={[Autoplay]}
              slidesPerView={5}
            >
              <SwiperSlide>
                <AnimatedCards ImgCard={PepsiImg} />
              </SwiperSlide>
              <SwiperSlide>
                <AnimatedCards ImgCard={AcostaImg} />
              </SwiperSlide>
              <SwiperSlide>
                <AnimatedCards ImgCard={MarriottImg} />
              </SwiperSlide>
              <SwiperSlide>
                <AnimatedCards ImgCard={MeijerImg} />
              </SwiperSlide>
              <SwiperSlide>
                <AnimatedCards ImgCard={ServeSuccessImg} />
              </SwiperSlide>

              <SwiperSlide>
                <AnimatedCards ImgCard={DriveLineImg} />
              </SwiperSlide>
              <SwiperSlide>
                <AnimatedCards ImgCard={SparklingIceImg} />
              </SwiperSlide>
              <SwiperSlide>
                <AnimatedCards ImgCard={HyattImg} />
              </SwiperSlide>
              <SwiperSlide>
                <AnimatedCards ImgCard={CompassImg} />
              </SwiperSlide>
              <SwiperSlide>
                <AnimatedCards ImgCard={DoordashImg} />
              </SwiperSlide>
            </Swiper>
          </div>
          <div
            className="PartnersSwiperResponsive"
            id="PartnersSwiperResponsive"
          >
            <div className="PartnersHeader">
              <span>Amazing Partners</span>
              <img src={HyerLineWhiteImg} />
            </div>
            <Swiper
              spaceBetween={0}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              navigation={true}
              modules={[Autoplay]}
              slidesPerView={1}
            >
              <SwiperSlide>
                <AnimatedCards ImgCard={PepsiImg} />
              </SwiperSlide>
              <SwiperSlide>
                <AnimatedCards ImgCard={AcostaImg} />
              </SwiperSlide>
              <SwiperSlide>
                <AnimatedCards ImgCard={MarriottImg} />
              </SwiperSlide>
              <SwiperSlide>
                <AnimatedCards ImgCard={MeijerImg} />
              </SwiperSlide>
              <SwiperSlide>
                <AnimatedCards ImgCard={ServeSuccessImg} />
              </SwiperSlide>

              <SwiperSlide>
                <AnimatedCards ImgCard={DriveLineImg} />
              </SwiperSlide>
              <SwiperSlide>
                <AnimatedCards ImgCard={SparklingIceImg} />
              </SwiperSlide>
              <SwiperSlide>
                <AnimatedCards ImgCard={HyattImg} />
              </SwiperSlide>
              <SwiperSlide>
                <AnimatedCards ImgCard={CompassImg} />
              </SwiperSlide>
              <SwiperSlide>
                <AnimatedCards ImgCard={DoordashImg} />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
};

export const Tasks = (props) => {
  const [showSection, setShowSection] = useState(false);
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!animationTriggered) {
        const halfScreenHeight = window.innerHeight / 1.3;
        const sectionOffset = document
          .querySelector('.Tasks')
          .getBoundingClientRect().top;

        if (sectionOffset <= halfScreenHeight) {
          setShowSection(true); // Trigger the animation
          setAnimationTriggered(true); // Set the flag to indicate animation has been triggered
          window.removeEventListener('scroll', handleScroll); // Remove scroll listener after animation is triggered
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [animationTriggered]);
  return (
    <div className={`Tasks ${showSection ? 'show animated' : ''}`}>
      {props.TasksBlue && (
        <div className="SwiperContainer">
          <div className="SwiperHeader">
            <span>{props.TasksBlue}</span>
          </div>
          {/*  */}
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            loop={true}
            navigation={true}
            modules={[Autoplay, Pagination]}
            slidesPerView={5}
            className="mySwiper"
          >
            <SwiperSlide>
              <AnimatedCards
                AnimeHoverOneTextImg="Surveys"
                VisImage={SurveyImg}
                InvisImage={SurveyBlueImg}
                AnimeHoverTextInvis={null}
              />
            </SwiperSlide>
            <SwiperSlide>
              <AnimatedCards
                AnimeHoverOneTextImg="Stocking"
                VisImage={StockingImg}
                InvisImage={StockingBlueImg}
                AnimeHoverTextInvis={null}
              />
            </SwiperSlide>
            <SwiperSlide>
              <AnimatedCards
                AnimeHoverOneTextImg="Merchandising"
                VisImage={MerchandisingImg}
                InvisImage={MerchandisingBlueImg}
                AnimeHoverTextInvis={null}
              />
            </SwiperSlide>
            <SwiperSlide>
              <AnimatedCards
                AnimeHoverOneTextImg="Warehouse"
                VisImage={WarehousingImg}
                InvisImage={WarehousingBlueImg}
                AnimeHoverTextInvis={null}
              />
            </SwiperSlide>
            <SwiperSlide>
              <AnimatedCards
                AnimeHoverOneTextImg="Hospitality"
                VisImage={CleansingImg}
                InvisImage={CleansingBlueImg}
                AnimeHoverTextInvis={null}
              />
            </SwiperSlide>
            <SwiperSlide>
              <AnimatedCards
                AnimeHoverOneTextImg="Event Support"
                VisImage={FoodSteamImg}
                InvisImage={FoodSteamBlueImg}
                AnimeHoverTextInvis={null}
              />
            </SwiperSlide>
            <SwiperSlide>
              <AnimatedCards
                AnimeHoverOneTextImg="Food Service"
                VisImage={MealImg}
                InvisImage={MealBlueImg}
                AnimeHoverTextInvis={null}
              />
            </SwiperSlide>
            <SwiperSlide>
              <AnimatedCards
                AnimeHoverOneTextImg="General Labour"
                VisImage={ManProfileImg}
                InvisImage={ManProfileBlueImg}
                AnimeHoverTextInvis={null}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      )}
      {props.TasksBlueRespnv && (
        <div className="SwiperResponsive">
          <div className="SwiperHeader">
            <span>{props.TasksBlueRespnv}</span>
          </div>
          <div className="FeaturesContainer">
            <AnimatedCards
              AnimeHoverOneTextImg="Surveys"
              VisImage={SurveyImg}
              InvisImage={SurveyBlueImg}
              AnimeHoverTextInvis={null}
            />

            <AnimatedCards
              AnimeHoverOneTextImg="Stocking"
              VisImage={StockingImg}
              InvisImage={StockingBlueImg}
              AnimeHoverTextInvis={null}
            />

            <AnimatedCards
              AnimeHoverOneTextImg="Merchandising"
              VisImage={MerchandisingImg}
              InvisImage={MerchandisingBlueImg}
              AnimeHoverTextInvis={null}
            />

            <AnimatedCards
              AnimeHoverOneTextImg="Warehouse"
              VisImage={WarehousingImg}
              InvisImage={WarehousingBlueImg}
              AnimeHoverTextInvis={null}
            />

            <AnimatedCards
              AnimeHoverOneTextImg="Cleaning"
              VisImage={CleansingImg}
              InvisImage={CleansingBlueImg}
              AnimeHoverTextInvis={null}
            />

            <AnimatedCards
              AnimeHoverOneTextImg="Event Support"
              VisImage={FoodSteamImg}
              InvisImage={FoodSteamBlueImg}
              AnimeHoverTextInvis={null}
            />

            <AnimatedCards
              AnimeHoverOneTextImg="Food Service"
              VisImage={MealImg}
              InvisImage={MealBlueImg}
              AnimeHoverTextInvis={null}
            />

            <AnimatedCards
              AnimeHoverOneTextImg="General Labour"
              VisImage={ManProfileImg}
              InvisImage={ManProfileBlueImg}
              AnimeHoverTextInvis={null}
            />
          </div>
        </div>
      )}
      {props.TasksPurple && (
        <div className="SwiperContainer">
          <div className="SwiperHeader">
            <span>{props.TasksPurple}</span>
          </div>
          {/*  */}
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            loop={true}
            navigation={true}
            modules={[Autoplay, Pagination]}
            slidesPerView={5}
            className="mySwiper"
          >
            <SwiperSlide>
              <AnimatedCards
                AnimeHoverOneTextImgPurple="Surveys"
                VisImage={SurveyPurpleImg}
                InvisImage={SurveyPurpleFilledImg}
                AnimeHoverTextInvis={null}
              />
            </SwiperSlide>
            <SwiperSlide>
              <AnimatedCards
                AnimeHoverOneTextImgPurple="Stocking"
                VisImage={StockingPurpleImg}
                InvisImage={StockingPurpleFilledImg}
                AnimeHoverTextInvis={null}
              />
            </SwiperSlide>
            <SwiperSlide>
              <AnimatedCards
                AnimeHoverOneTextImgPurple="Merchandising"
                VisImage={MerchandisingPurpleImg}
                InvisImage={MerchandisingPurpleFilledImg}
                AnimeHoverTextInvis={null}
              />
            </SwiperSlide>
            <SwiperSlide>
              <AnimatedCards
                AnimeHoverOneTextImgPurple="Warehouse"
                VisImage={WarehousingPurpleImg}
                InvisImage={WarehousingPurpleFilledImg}
                AnimeHoverTextInvis={null}
              />
            </SwiperSlide>
            <SwiperSlide>
              <AnimatedCards
                AnimeHoverOneTextImgPurple="Cleaning"
                VisImage={CleansingPurpleImg}
                InvisImage={CleansingPurpleFilledImg}
                AnimeHoverTextInvis={null}
              />
            </SwiperSlide>
            <SwiperSlide>
              <AnimatedCards
                AnimeHoverOneTextImgPurple="Event Support"
                VisImage={FoodSteamPurpleImg}
                InvisImage={FoodSteamPurpleFilledImg}
                AnimeHoverTextInvis={null}
              />
            </SwiperSlide>
            <SwiperSlide>
              <AnimatedCards
                AnimeHoverOneTextImgPurple="Food Service"
                VisImage={MealPurpleImg}
                InvisImage={MealPurpleFilledImg}
                AnimeHoverTextInvis={null}
              />
            </SwiperSlide>
            <SwiperSlide>
              <AnimatedCards
                AnimeHoverOneTextImgPurple="General Labour"
                VisImage={ManProfilePurpleImg}
                InvisImage={ManProfilePurpleFilledImg}
                AnimeHoverTextInvis={null}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      )}
      {props.TasksPurpleRespnv && (
        <div className="SwiperResponsive">
          <div className="SwiperHeader">
            <span>{props.TasksPurpleRespnv}</span>
          </div>
          <div className="FeaturesContainer">
            <AnimatedCards
              AnimeHoverOneTextImgPurple="Surveys"
              VisImage={SurveyPurpleImg}
              InvisImage={SurveyPurpleFilledImg}
              AnimeHoverTextInvis={null}
            />

            <AnimatedCards
              AnimeHoverOneTextImgPurple="Stocking"
              VisImage={StockingPurpleImg}
              InvisImage={StockingPurpleFilledImg}
              AnimeHoverTextInvis={null}
            />

            <AnimatedCards
              AnimeHoverOneTextImgPurple="Merchandising"
              VisImage={MerchandisingPurpleImg}
              InvisImage={MerchandisingPurpleFilledImg}
              AnimeHoverTextInvis={null}
            />

            <AnimatedCards
              AnimeHoverOneTextImgPurple="Warehouse"
              VisImage={WarehousingPurpleImg}
              InvisImage={WarehousingPurpleFilledImg}
              AnimeHoverTextInvis={null}
            />

            <AnimatedCards
              AnimeHoverOneTextImgPurple="Cleaning"
              VisImage={CleansingPurpleImg}
              InvisImage={CleansingPurpleFilledImg}
              AnimeHoverTextInvis={null}
            />

            <AnimatedCards
              AnimeHoverOneTextImgPurple="Event Support"
              VisImage={FoodSteamPurpleImg}
              InvisImage={FoodSteamPurpleFilledImg}
              AnimeHoverTextInvis={null}
            />

            <AnimatedCards
              AnimeHoverOneTextImgPurple="Food Service"
              VisImage={MealPurpleImg}
              InvisImage={MealPurpleFilledImg}
              AnimeHoverTextInvis={null}
            />

            <AnimatedCards
              AnimeHoverOneTextImgPurple="General Labour"
              VisImage={ManProfilePurpleImg}
              InvisImage={ManProfilePurpleFilledImg}
              AnimeHoverTextInvis={null}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export const TalkingTaskers = (props) => {
  const TalkingTaskersStyles = {
    background: `url("${PeopleBackgroundImg}")`,
    backgroundRepeat: 'no-Repeat',
    backgroundSize: 'cover',
  };
  return (
    <div className="TalkingTaskersContainer" style={TalkingTaskersStyles}>
      {props.TalkingTaskers && (
        <div className="TalkingTaskers">
          <div className="TalkingTaskersHeader">
            <span>{props.TalkingTaskers}</span>
            <img src={HyerLineBlackImg} />
          </div>
          <div className="TaskersSwiper">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 10000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              loop={true}
              navigation={true}
              modules={[Autoplay, Pagination]}
              slidesPerView={1}
            >
              <SwiperSlide>
                <div className="TaskersPOV">
                  <span>{props.FirstTaskerTalk}</span>
                  <span>{props.FirstTalker}</span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="TaskersPOV">
                  <span>{props.SecondTalkerTalk}</span>
                  <span>{props.SecondTalker}</span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="TaskersPOV">
                  <span>{props.ThirdTalkerTalk}</span>
                  <span>{props.ThirdTalker}</span>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tasks;
