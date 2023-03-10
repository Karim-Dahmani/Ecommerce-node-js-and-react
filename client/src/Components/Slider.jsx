import { ArrowLeftOutlined ,ArrowRightOutlined} from "@material-ui/icons";
import styled from "styled-components";
import { useState } from "react";
import{sliderItems} from"../data"
const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
position: relative;
overflow: hidden;`;

const Arrow= styled.div`
width: 50px;
height: 50px;
background-color: #fff7f7; 
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
margin :auto;
left:${props=> props.direction==="left"&&"10px"};
right:${props=> props.direction==="right"&&"10px"};
cursor:pointer;
opacity:0.5;
z-index: 2;
`;
const Wrapper= styled.div`
height: 100%;
display: flex;
// transform:translatex(-0Vw);
transform: translateX(${(props) => props.slideIndex * -100}Vw);
transition: all 1.5s ease;`
 const  Slide =styled.div`
 width:100Vw;
 height:100Vh;
 display:flex;
 align-items: center;
 background-color:#${props=>props.bg}`;
 const  ImgContainer =styled.div`
 height: 100%;
 flex: 1;`
  
  
 const  Image =styled.img`
 height: 80%;
 `;
 const  InfoContainer =styled.div`
 flex: 1;
  padding: 50px;`
 const Title=styled.h1`font-size: 70px;`;
 const Desc=styled.p`
 margin: 50px 0px;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 3px;`;
 const Button=styled.button`
 padding: 10px;
 font-size: 20px;
 background-color: transparent;
 cursor: pointer;`;

const Slider = () => {
    const [slideIndex,setSlideIndex]=useState(0);
    const handleClick=(direction)=>{
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
          } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
          }

    }
    return (
        <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOW NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
        // <Container>
        //     <Arrow direction="left" onClick={()=>handleClick("left")}>
        //         <ArrowLeftOutlined/>
        //     </Arrow>
        //     <Wrapper>
        //         <Slide bg="f5fafd">
        //         <ImgContainer>
        //         <Image src="/images/pic2.jpg"/>
        //         </ImgContainer>
        //         <InfoContainer>
        //             <Title>SUMMER SALE</Title>
        //             <Desc>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</Desc>
        //             <Button>SHOP NOW</Button>
        //         </InfoContainer>
        //         </Slide>
        //         <Slide bg="fcf1ed">
        //         <ImgContainer>
        //         <Image src="/images/pic2.jpg"/>
        //         </ImgContainer>
        //         <InfoContainer>
        //             <Title>WINTER SALE</Title>
        //             <Desc>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</Desc>
        //             <Button>SHOP NOW</Button>
        //         </InfoContainer>
        //         </Slide>
        //         <Slide bg="fbf0f4">
        //         <ImgContainer>
        //         <Image src="/images/pic2.jpg"/>
        //         </ImgContainer>
        //         <InfoContainer>
        //             <Title>POPULAR SALE</Title>
        //             <Desc>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</Desc>
        //             <Button>SHOP NOW</Button>
        //         </InfoContainer>
        //         </Slide>
        //     </Wrapper>
        //     <Arrow direction="right" onClick={()=>handleClick("right")}>
        //         <ArrowRightOutlined/>
        //     </Arrow>
        // </Container>
        
    );
}

export default Slider;
