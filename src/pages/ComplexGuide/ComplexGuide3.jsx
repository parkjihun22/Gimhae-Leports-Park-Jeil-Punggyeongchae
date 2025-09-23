import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./ComplexGuide.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";


import page1 from "../../assets/ComplexGuide/ComplexGuide3/page1.jpg";

const ComplexGuide3 = () => {
  const menuContents = [
    { title: "단지 배치도", url: "/ComplexGuide/intro" },
    { title: "호수 배치도", url: "/ComplexGuide/detailintro" },
    { title: "커뮤니티", url: "/ComplexGuide/community" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const [isImage2Loaded, setIsImage2Loaded] = useState(false); // 이미지 로딩 상태 추가
  const { pathname } = useLocation(); // 현재 경로를 가져옴

  // 이미지가 로드되면 호출되는 함수
  const handleImageLoad = () => {
    setIsImage2Loaded(true); // 이미지가 로드되면 상태 업데이트
  };

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
  }, [pathname]); // pathname이 변경될 때마다 실행

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      <Helmet>
        {/* 기본 설정 */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="index, follow" />
        <html lang="ko" />

        {/* SEO 핵심 */}
        <title>김해 테크노밸리 제일풍경채 – 커뮤니티</title>
        <meta
          name="description"
          content="김해 테크노밸리 제일풍경채 커뮤니티 시설: 피트니스, 독서실, 카페 등 편의시설을 소개합니다."
        />
        <link rel="canonical" href="https://www.diarivalencia.com/ComplexGuide/community" />

        {/* Open Graph (필수만) */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="김해 테크노밸리 제일풍경채" />
        <meta property="og:title" content="김해 테크노밸리 제일풍경채 – 커뮤니티" />
        <meta property="og:description" content="커뮤니티 시설과 편의시설을 한눈에 확인하세요." />
        <meta property="og:url" content="https://www.diarivalencia.com/ComplexGuide/community" />
        <meta property="og:image" content="https://www.diarivalencia.com/Main1.png" />

        {/* Twitter (간단히) */}
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>


      <Header isChanged={isScroll} />
      <FixIcon />
      <Bener title="단지안내" />
      <MenuBar contents={menuContents} />
      {/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
      <h1 className={styles.screenReaderOnly}>
        김해 테크노밸리 제일풍경채- 커뮤니티
      </h1>
      <p className={styles.screenReaderOnly}>
        김해 테크노밸리 제일풍경채의 커뮤니티 페이지에서는 단지 내 다양한
        커뮤니티 시설을 소개합니다. 헬스장, 독서실, 카페 등 주민들의 편리한
        생활을 위한 다양한 시설들이 준비되어 있습니다. 이러한 시설들이
        입주민들의 삶의 질을 높이고, 더 나은 공동체 생활을 만들어주는 역할을
        합니다.
      </p>

      <div className={styles.textBox}>
        <div>테크노밸리 제일풍경채가 눈부신 가치 위에</div>
        <div>새로운 자부심으로 찾아옵니다.</div>
      </div>

      {/* 이미지에 애니메이션 효과 추가 */}
      <img
				className={`${styles.image2} ${isImage2Loaded ? styles.showImage2 : ''}`}
				src={page1}
				alt="김해 테크노밸리 제일풍경채커뮤니티 안내 -image1"
				onLoad={handleImageLoad}  // 이미지 로드 후 애니메이션 실행
			/>

 


      <Footer />
    </div>
  );
};

export default ComplexGuide3;
