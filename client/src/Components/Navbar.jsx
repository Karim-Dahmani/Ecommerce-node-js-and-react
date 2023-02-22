import React from 'react';
import { Badge } from "@material-ui/core";
import styled from 'styled-components';
import {Search ,ShoppingCartOutlined}from '@material-ui/icons';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container=styled.div`
height: 60px;
// background-color:black;
`;
const Logo=styled.h1`
font-weight: bold;`;
const SearchContainer=styled.div`
 border: 0.5px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;`;
const Wrapper= styled.div`
padding: 10px 20px;
display: flex;
align-items: center;
justify-content: space-between;
`;
const Input=styled.div`
border: none;
`;
const Left=styled.div`
flex: 1;
display: flex;
align-items: center;`;
const Center=styled.div`
flex: 1;
text-align: center;
display: flex;
align-items: center;`;
const Right=styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;`;
const Language=styled.span`
font-size:14px;
cursor: pointer;`
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;`;
const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity)
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                     <Input  placeholder="Search"/>
                        <Search style={{ color: "gray", fontSize: 16 }} ></Search>
                
                    </SearchContainer>
                </Left>
                <Center>
                  <Logo>Melliani.</Logo>
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    
                    <Link to="/cart">
                    <MenuItem>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
          </Link>
                </Right>

            </Wrapper>
            
        </Container>
    );
}

export default Navbar;
