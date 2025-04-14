import { useDispatch } from "react-redux";
import { setLoginReset } from "services/store/features/actions/actions";

/**
 *	TRATA OS STATUS DO RETORNO DA REQUISIÇÃO
 * @param {*} response - os dados de resposta da requisição.
 * @param {*} setNotification - notifica o usuário de algum status.
 * @param {*} navigate - para ser redirecionado a outra página.
 * @param {*} setData - seta o estado onde os dados de resposta devem ser armazenados.
 * @param {*} transformData *optional - se não tiver os dados são passados diretamente para setData.
 * @returns
 */
export async function handleApiResponse({
	response,
	setNotification,
	setData,
	transformData = null
}) {
	const dispatch = useDispatch();
	if (response.codStatus == 201) {
		if (!transformData) {
			setData(response.data);
		} else {
			setData(transformData(response.data));
		}
	} else if (response.codStatus == 401) {
		dispatch(setLoginReset(true));
	} else if (response.codStatus == 422) {
		setNotification({ title: "Titulo", messagem: response.messagem });
	} else {
		setNotification({ tile: "titulo", msg: "outra mensagem" });
	}

	return null;
}
