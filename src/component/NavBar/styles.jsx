import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
height: 60px;
display: flex;
place-items: center;

padding: 0 4px;

border: 1px solid red;
`

export const UserAvatar = styled.div`
width: 48px;
height: 48px;
margin-right: 12px;
border-radius: 8px;
border: 1px solid silver;
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
// border: 1px solid red;
`
export const ModuleBox = styled.div`
min-width: 80px;
height: 46px;
display: flex;
text-align: center;
align-items: center;
justify-content: center;
cursor: pointer;
user-select: none;

margin-right: 4px;
padding: 4px;
word-wrap: break-word;


border: 1px solid silver;
`
export const Arrow = styled.div`
width: 16px;
height: 46px;
display: flex;
align-items: center;
justify-content: center;

margin-right: 4px;
// border: 1px solid green;
`