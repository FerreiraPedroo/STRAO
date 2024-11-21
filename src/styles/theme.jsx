import { buttonsStyle } from "./component/buttons/buttonText";

import { pageListStyle } from "./component/container/pageList";
import { pageTitleStyle } from "./component/container/pageTitle";
import { pageActionStyle } from "./component/container/pageAction";

const theme = {
    pageList: pageListStyle,
	pageTitle: pageTitleStyle.pageTitle,
    pageAction: pageActionStyle.pageAction,
	buttonText: buttonsStyle.buttonText
};

export { theme };
