import * as S from "./styles";

import {
	Check,
	FileText,
	MagnifyingGlass,
	Trash,
	NotePencil,
	EyeSlash,
	Eye,
	Plus,
	CircleNotch,
	X
} from "phosphor-react";

const Icons = {
	find: <MagnifyingGlass size={24} color="#ffffff" />,
	cancel: <X size={24} color="#ffffff" />,
	remove: <Trash size={24} color="#ffffff" />,
	edit: <NotePencil size={24} color="#ffffff" />,
	hidden: <EyeSlash size={24} color="#ffffff" />,
	show: <Eye size={24} color="#ffffff" />,
	document: <FileText size={24} color="#ffffff" />,
	correct: <Check size={24} color="#ffffff" />,
	add: <Plus size={24} color="#ffffff" />
};

/**
 *
 * @param {typeStyle} typeStyle "add | find | cancel | remove | edit | hidden | show | correct | document"
 * @returns
 */
export const ButtonIcon = ({
	value,
	typeStyle = "normal",
	disable,
	onClick,
	loading
}) => {
	return (
		<S.ButtonIcon
			typeStyle={typeStyle}
			value={value}
			width={36}
			height={28}
			disabled={disable || loading}
			onClick={onClick}
		>
			{loading ? <CircleNotch size={24} color="#ffffff" /> : Icons[typeStyle]}
		</S.ButtonIcon>
	);
};
