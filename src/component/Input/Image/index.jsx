import React, { useState } from "react";
import * as S from "./styles";

export const InputFile = ({
	id,
	name,
	value = null,
	onChange,
	placeholder,
	showInfo = false,
	width = "320px",
	errorMsg,
	onBlur = () => "",
	disabled,
	readOnly
}) => {
	const [files, setFiles] = useState([]);

	function change(e) {
		const newBlobImg = new Blob([e.target.files[0]]);

		const newImgs = [...files];
		newImgs.push(newBlobImg);

		setFiles(newImgs);
		onChange({ target: { value: newImgs, name: name } });
	}

	return (
		<S.Container width={width}>
			<S.TitleText disabled={disabled}>
				{((value && showInfo) || showInfo) && placeholder}
			</S.TitleText>

			<S.ContainerImg width={width}>
				<S.InputImg
					id={id}
					width={width}
					type="file"
					name={name}
					// value={value}
					accept="image/*"
					onChange={change}
					onBlur={onBlur}
					placeholder={!showInfo ? placeholder : ""}
					disabled={disabled}
					readOnly={readOnly}
					userSelect={false}
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
