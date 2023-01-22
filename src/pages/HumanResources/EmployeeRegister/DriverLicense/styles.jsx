import styled from "styled-components";

export const Container = styled.details`
	display: flex;
	width: 100%;
	align-items: center;
	background-color: #e5e5e5;
	gap: 2px;
	border: 1px solid rgba(0, 0, 0, 0.25);
	box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
	border-radius: 8px;
`;
export const Title = styled.summary`
	width: 100%;
	height: 40px;
	display: flex;
	align-items: center;
	font-size: 1.25rem;

	padding-left: 6px;
	border-radius: 6px;
	cursor: pointer;

	&:before {
		content: "+";
		font-weight: bolder;
		width: 32px;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	[open] & {
		border-radius: 0px;
		border-bottom: 1px solid rgba(0, 0, 0, 0.25);
		&:before {
			content: "-";
		}
	}
`;

export const TitleBox = styled.div`
	display: flex;
	align-items: center;
	font-size: 1.25rem;
`;
export const NotLicenceInput = styled.input`
	margin-left: 40px;
	outline: 0;
`;
export const NotLicence = styled.p`
	padding: 6px;
	font-size: 1rem;
`;

export const DataContainer = styled.div`
	display: flex;
	// justify-content: center;
	flex-wrap: wrap;
	width: 100%;
	padding: 8px;
	gap: 0px 16px;
`;

export const CNHRegisterBox = styled.div`
	min-width: 160px;
	width: 100%;
	max-width: 256px;
	margin: 4px;
`;

export const CNHRegisterPhoto = styled.input`
	width: 148px;
	height: 32px;
	padding: 4px;
	border: 1px solid #696969;
`;

export const CategoryBox = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	margin: 4px;
`;
export const Box = styled.div`
	width: 48px;
	display: flex;
	align-items: center;
	margin: 8px;
`;
export const CategoryText = styled.p`
	width: 100%;
	font-size: 1.15rem;
`;
export const CategoryCheck = styled.input`
	margin: 0 8px;
`;
export const CategoryOther = styled.input`
	width: 48px;
	border: 1px solid #696969;
	padding: 4px;
	margin: 0 8px;
	outline: 0;
	border-radius: 4px;
`;
