import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  place-items: center;
  color: white;
  background-color: #091034;
  padding: 32px 20px;
  border-bottom: 1px solid white;
`

export const UserAvatar = styled.div`
width: 48px;
height: 48px;
margin-right: 12px;
border-radius: 8px;
border: 1px solid white;
`
export const UserAvatarImg = styled.img.attrs(props => ({
  src: './home-bg2.png'
}))`
width: 100%;
height: 100%;
border-radius: 8px;

`
export const NavContainer = styled.div`
width: 100%;
height: 48px;
display: flex;
background-color: #091034;
`

export const Category = styled.div`
min-width: 80px;
height: 46px;
display: flex;
text-align: center;
align-items: center;
justify-content: center;
cursor: pointer;
user-select: none;
margin-right: 8px;
padding: 4px 12px;
word-wrap: break-word;
box-shadow: 2px 2px 5px rgba(0,0,0,0.4);

background-color: #1430B8;
background-color: ${({ select }) => select && 'rgba(0,0,0,0.5);'};
border: ${({ select }) => select ? '1px solid rgba(255,255,255,0.4);' : '1px solid rgba(0,0,0,0.2)'};
`

export const SubCategory = styled(Category)`
background-color: ${({ select }) => select && 'rgba(0,0,0,0.5)'};
border: ${({ select }) => select ? '1px solid rgba(255,255,255,0.4)' : '1px solid rgba(0,0,0,0.2)'};
`

export const Arrow = styled.div`
width: 16px;
height: 46px;
display: flex;
align-items: center;
justify-content: center;
background-color: transparent;
margin-right: 4px;
`

export const BackArrowCategory = styled.div`
min-width: 32px;
height: 46px;
display: flex;
align-items: center;
justify-content: center;
cursor: ${({ noPointer }) => noPointer ? "normal" : "pointer"};

background-color: #1430B8;
margin-right: 8px;
padding: 4px;
word-wrap: break-word;
border: 1px solid rgba(0,0,0,0.2);
box-shadow: 2px 2px 5px rgba(0,0,0,0.4);
`