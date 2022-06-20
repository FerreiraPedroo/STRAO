import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1920px;
  width: 100%;
  height: 80px;
  display: flex;
  place-items: center;
  padding: 32px 20px;
  `

export const UserAvatar = styled.div`
  min-width: 48px;
  min-height: 48px;
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
  background-color: ${({ select }) => select && '#DCDCDC;'};
  border: ${({ select }) => select ? '1px solid #696969' : '1px solid #A9A9A9'};
`

export const SubCategory = styled(Category)`
  background-color: ${({ select }) => select && '#DCDCDC'};
  border: ${({ select }) => select ? '1px solid #696969' : '1px solid #A9A9A9'};
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

  background-color: #DCDCDC;
  margin-right: 8px;
  padding: 4px;
  word-wrap: break-word;
  border: 1px solid #A9A9A9;
  box-shadow: 2px 2px 5px rgba(0,0,0,0.4);
`