import styled from "styled-components";

export const Card = styled.div`

background-color: #FCFCFC;
box-shadow: 0px 4px 4px 0px #00000040;
padding: 16px;
margin-bottom: 32px;
border-radius: 16px;
;

`

export const Title = styled.h3`

font-size: 18px;
font-weight: bold;
margin-bottom: 16px;

`

export const Tag = styled.span`

padding: 4px 8px;
color: #ffff;
font-weight: bold;
font-size: 10px;
background-color: #E1A32A;
border-radius: 8px;
margin-right: 16px;
display: inline-block;



`

export const Description = styled.textarea`

color: #8B8B8B;
font-size: 14px;
line-height: 24px;
font-family: 'Roboto Mono', monospace;
display: block;
width: 100%;
margin-bottom: 16px;
margin-top: 16px;
resize: none;
border: none;
background-color: transparent;

`

export const ActionBar = styled.div`

border-top: 1px solid rgba(0, 0, 0, 0.1);
padding-top: 16px;

`

export const Button = styled.button`

font-weight: bold;
font-size: 12px;
color: #ffff;
padding: 8px 12px;
border: none;
cursor: pointer;
background-color: #2f3640;
border-radius: 8px;
margin-right: 8px;

`