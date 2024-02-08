export const PageTitleStyle = {
	normal: `
  color: var(--page-title-text-color-normal);
  background-color: var(--page-title-background-color-normal);
  `,
	dark: `
  color: var(--page-title-text-color-dark);
  background-color: var(--page-title-background-color-dark);
  `
};

export const PageStyle = {
	container: (theme) =>
		`
    color: var(--page-container-text-color-${theme});
    border: var(--page-container-border-${theme});
    background-color: var(--page-container-background-color-${theme});
    box-shadow: var(--page-container-box-shadow-${theme});
    padding: 6px 12px 6px 12px;
    border-radius: 4px;
    `,
	containerTitle: (theme) =>
		`
    align-self: center;
    font-style: italic;
    font-size: 1rem;
    font-weight: 600;
    color: var(--page-container-title-text-color-${theme});
    `,
	buttonBoxText: (theme) =>
		`
    color: var(--page-container-text-color-disabled-${theme});
    `
};
