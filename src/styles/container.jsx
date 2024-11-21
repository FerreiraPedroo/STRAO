
export const PageStyle = {
	pageTitle: (theme) =>
		`
    color: var(--page-title-text-color-${theme});
    `,
	container: (theme) =>
		`
    color: var(--page-container-text-color-${theme});
    border: var(--page-container-border-${theme});
    background-color: var(--page-container-background-color-${theme});
    box-shadow: var(--page-container-box-shadow-${theme});
    padding: 6px 12px 8px 12px;
    border-radius: 4px;
    `,
	containerTitle: (theme) =>
		`
    align-self: center;
    font-style: italic;
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--page-container-title-text-color-${theme});
    `,
	buttonIconText: (theme) =>
		`
    color: var(--page-container-text-color-disabled-${theme});
    `
};

export const PageActionStyle = {
	pageTitle: (theme) => {
		if (theme == "dark") {
			return `
      color: var(--page-title-text-color-${theme});
      background-color: var(--page-title-background-color-${theme});
      `;
		} else {
			return `
      color: var(--page-title-text-color-${theme});
      background-color: var(--page-title-background-color-${theme});
      `;
		}
	},
	container: (theme) =>
		`
    color: var(--page-container-text-color-${theme});
    border: var(--page-container-border-${theme});
    background-color: var(--page-container-background-color-${theme});
    box-shadow: var(--page-container-box-shadow-${theme});
    padding: 16px;
    border-radius: 4px;
    `,
	containerTitle: (theme) =>
		`
    align-self: center;
    font-style: italic;
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--page-container-title-text-color-${theme});
    `,
	buttonIconText: (theme) =>
		`
    color: var(--page-container-text-color-disabled-${theme});
    `
};

export const BlockInfoContainerStyle = {
	container: (theme) =>
		`
  color: var(--page-container-text-color-${theme});
  border: var(--page-container-border-${theme});
  background-color: var(--page-container-background-color-${theme});
  box-shadow: var(--page-container-box-shadow-${theme});
  padding: 16px;

  border-radius: 4px;
  `,
	containerTitle: (theme) =>
		`
  font-style: italic;
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--page-container-title-text-color-${theme});
  margin-bottom: 8px;
  `
};
