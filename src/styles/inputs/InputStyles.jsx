export const InputStyles = {
	container: `
	width: 100%;
	min-width: 160px;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
    gap:2px;
    `,
	textBox: `
	position:relative;
    width: 100%;
	padding: 0 2px;
    display: flex;
    flex-wrap: no-wrap;
    justify-content: space-between;
    `,
	text: `
    font-size: 0.8rem;
    `,
	input: `
    min-width: 160px;
	min-height: 30px;
    color: #4E5F8F;
    border: 1px solid #888888;
    background-color: #fff; 
    border-radius: 4px;
    font-size: 0.8rem;
    font-weight: 500;
	padding: 4px 6px;
	outline: 0;
    `,
	errorMessage: `
	position: relative;
	font-size: 0.7rem;
	user-select: none;
	width: 15px;
	border-radius: 10px;
	background-color: #f7c2b9;

    &:hover {
		cursor: pointer;
		background-color: #f49d8e;
	}

        
	&:hover:after {
		z-index: 10;		
		position: absolute;
		width: 128px;
		font-size: 1rem;
		text-align: center;
		top: -14px;
		left: 20px;
		background-color: #fff;
		padding: 4px 12px;
		border: 1px solid #aaa;
		border-radius: 6px;
	}
    `
};
