export const InputTheme = {
	input: (theme) => `
  color: var(--input-text-color-${theme});
  border: var(--input-border-${theme});
  background-color: var(--input-background-color-${theme});
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
	padding: 4px 2px 2px 6px;
	outline: 0;
  `,
	text: (theme) => `
  color: var(--input-title-text-color-${theme});
  border: var(--input-title-text-border-${theme});
  `
};
