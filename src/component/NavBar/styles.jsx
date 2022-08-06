import styled from 'styled-components'

const props = {
  'navMenuButtonTextSize': '16px',
  'navMenuButtonSizeWidth': '100px',
  'navMenuButtonSizeHeight': '96px',
  'navMenuButtonBackColor': '#C0C0C0',

  'navMenuContainerBackColor': '	#D3D3D3',
}

export const Container = styled.div`
  width: 142px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  place-items: center;
  padding: 8px 16px;
  background-color: ${props.navMenuContainerBackColor};
  `

export const UserAvatar = styled.div`
  min-width: 80px;
  min-height: 96px;
  width: 80px;
  height: 96px;
  margin-bottom: 20px;
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
  gap: 8px;
    
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

export const Category2 = styled.div`
  min-width: 92px;
  height: 80px;
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
  background-color: ${({ select }) => select && '#DCDCDC;'};
  border: ${({ select }) => select ? '1px solid #696969' : '1px solid #A9A9A9'};
`

