const pageListStyle = {
	container: {
		light: `
      color: #4E5F8F;
      border: 1px solid #4E5F8F;
      background-color: #D3D9E1;
      box-shadow: 2px 2px 0px rgba(78, 95, 143, 0.9);
      `,
		dark: `
      color: #407;
      background-color: transparent;
      `
	},
	rowHeaderBox: {
		light: `
      background-color: #e5e5e5;
      color: #767676;
      border-top: 1px solid #c0c0c0;
      border-bottom: 1px solid #c0c0c0;
      &:first-child {
		   border-left: 1px solid #c0c0c0;
         }
      &:last-child {
         border-right: 1px solid #c0c0c0;
      }
      `
	},
	rowBox: {
		light: `
	   border-top: 1px solid #c0c0c0;
	   border-left: 1px solid #c0c0c0;
	   border-right: 1px solid #c0c0c0;
	   &:last-child {
		   border-bottom: 1px solid #c0c0c0;
	   }
      `
	}
};

// justify-content: center;
export { pageListStyle };
