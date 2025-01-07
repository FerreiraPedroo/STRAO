import { useMemo } from "react";
import * as S from "./styles.jsx";

export function Tabs({ tabChanged, tabButtons, tabSelected, tabSelectButton }) {
	const buttons = useMemo(() => {
		return tabButtons.map((button) => {
			return (
				<S.TabsButton
					key={button.name}
					data-selected={tabSelected == button.name}
					data-selected-change={tabChanged[button.name] && !(tabSelected == button.name)}
					onClick={() => tabSelectButton(button.name)}
				>
					{button.name}
				</S.TabsButton>
			);
		});
	}, [tabChanged, tabSelected]);
	return <S.TabsContainer>{buttons}</S.TabsContainer>;
}
