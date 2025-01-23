import React, { useState } from "react";
import * as S from "./styles";

export const InputImages = ({
	id,
	name,
	onChange,
	placeholder,
	showInfo = false,
	width = "320px",
	errorMsg,
	onBlur = () => "",
	disabled,
	readOnly,
	theme = "normal"
}) => {
	const [files, setFiles] = useState([]);

	function change(e) {
		const newImgs = [...files];
		newImgs.push(e.target.files[0]);

		setFiles(newImgs);
		onChange({ target: { value: newImgs, name: name } });
		console.log(newImgs)
	}

	return (
		<S.Container width={width}>
			<S.TitleText disabled={disabled} theme={theme}>
				{showInfo && placeholder}
			</S.TitleText>

			<S.ContainerImg width={width}>
				<S.InputImg
					id={id}
					width={width}
					type="file"
					name={name}
					accept="image/png, image/jpeg"
					onChange={change}
					onBlur={onBlur}
					placeholder={!showInfo ? placeholder : ""}
					disabled={disabled}
					readOnly={readOnly}
					userSelect={false}
					theme={theme}
				/>
				<S.ErrorMsg>{errorMsg}</S.ErrorMsg>

				<S.FilesContainer>
					{files.map((file, index) => (
						<S.FileLoadedImgBox key={index}>
							<S.FileLoadedImg src={URL.createObjectURL(file)} />
							<S.DeleteFile />
						</S.FileLoadedImgBox>
					))}
				</S.FilesContainer>
			</S.ContainerImg>
		</S.Container>
	);
};
