const ButtonColorGroup = {
	red: `
    background: #DA532C;
    border: 1px solid #FA734C;
    &:disabled{
        color: #D1D1D1;
        border: 2px solid #CC826D;
        background-color: #BF6E56;
        box-shadow: 0px 0px 0px #000000;
        margin-top: 3px;
    }
    &:hover:disabled{
        cursor: default;
    } 

  `,
	green: `
    background: #00A300;
    border: 1px solid #20C320;
    &:disabled{
        color: #9F9F9F;
        border: 2px solid #6BA76B;
        background-color: #4E744E;
        box-shadow: 0px 0px 0px #000000;
        margin-top: 3px;
    }
    &:hover:disabled{
        cursor: default;
    }  
  `,
	blue: `
    background: #1E90FF;
    border: 1px solid #ADD8E6;
    &:disabled{
        color: #9F9F9F;
        border: 2px solid #A5C2CC;
        background-color: #81ADD8;
        box-shadow: 0px 0px 0px #000000;
        margin-top: 3px;
    }
    &:hover:disabled{
        cursor: default;
    } 
  `,
	gray: `
    background: #908E8E;
    border: 1px solid #C9C9C9;
    &:disabled{
        color: #D1D1D1;
        border: 2px solid #DEDEDE;
        background-color: #AFACAC;
        box-shadow: 0px 0px 0px #000000;
        margin-top: 3px;
    }
    &:hover:disabled{
        cursor: default;
    } 
  `
};

export const ButtonIconTheme = {
	find: ButtonColorGroup.gray,
	cancel: ButtonColorGroup.red,
	remove: ButtonColorGroup.red,
	edit: ButtonColorGroup.blue,
	document: ButtonColorGroup.blue,
	hidden: ButtonColorGroup.blue,
	show: ButtonColorGroup.blue,
	add: ButtonColorGroup.green,
	correct: ButtonColorGroup.green
};
