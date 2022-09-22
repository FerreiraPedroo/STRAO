import styled from 'styled-components'

const props = {
  'navMenuButtonTextSize': '16px',
  'navMenuButtonSizeWidth': '100px',
  'navMenuButtonSizeHeight': '96px',
  'navMenuButtonBackColor': '#C0C0C0',

  'navMenuContainerBackColor': '	#D3D3D3',
}

export const Container = styled.div`
  width: 164px;
  height: calc(100vh - 40px);
  display: flex;
  flex-direction: column;
  place-items: center;
  padding: 8px 16px;
  background-color: ${props.navMenuContainerBackColor};
  `
export const StraoTitle = styled.p`
  font-size: 28px;
  font-weight: bolder;
  margin-bottom: 6px;
`;

export const Logout = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  background-color: red;
  cursor: pointer;
`;

export const UserAvatar = styled.div`
  width: 100%;
  min-height: 128px;
  height: 96px;

  display: flex;
  flex-direction: column;
  align-items: center;
  
  margin-bottom: 14px;
  `
export const UserAvatarImg = styled.img.attrs(props => ({
  src: './home-bg2.png'
}))`
  width: 80px;
  height: 96px;
  border-radius: 8px;
  border: 1px solid silver;
  margin-bottom: 4px;
  `
export const UserName = styled.p`
  text-align: center;
`;

export const NavContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`
export const BtnDepartment = styled.div`
  min-width: ${props.navMenuButtonSizeWidth};
  min-height: ${props.navMenuButtonSizeHeight};
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  word-wrap: break-word;
  background-color: ${({ select }) => select ? '#DCDCDC;' : props.navMenuButtonBackColor};
  border: ${({ select }) => select ? '1px solid #696969' : '1px solid #A9A9A9'};
  padding: 4px 2px;
  gap: 6px;
    
  &:hover{
    border: 1px solid black;
  }
`
export const ImgDepartment = styled.img`
min-width: 56px;
min-height: 56px;
width: 56px;
height: 56px;
`;
export const TextDepartment = styled.p`
  font-size: ${props.navMenuButtonTextSize};
`;

