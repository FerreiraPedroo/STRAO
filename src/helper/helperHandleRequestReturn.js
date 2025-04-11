import { useDispatch } from "react-redux";
import { changeLoginReset } from "services/store/features/actions/actions";

/**
 *	TRATA OS STATUS DO RETORNO DA REQUISIÇÃO
 * @param {*} request - os dados de resposta da trquisição.
 * @param {*} notification - notifica o usuário de algum status.
 * @param {*} navigate - para ser redirecionado a outra página.
 * @param {*} setData - seta o estado onde os dados de resposta devem ser armazenados.
 * @param {*} transformData *optional - se não tiver os dados são passados diretamente para setData.
 * @returns
 */
export function helperRequestReturn(request, notification, setData, transformData = null) {
	const dispatch = useDispatch();
	if (request.codStatus == 201) {
		if (!transformData) {
			setData(request.data);
		} else {
			setData(transformData(request.data));
		}
	} else if (request.codStatus == 401) {
		dispatch(changeLoginReset(true));
	} else if (request.codStatus == 422) {
		notification({ title: "Titulo", msg: "Mensagem" });
	} else {
		notification({ tile: "titulo", msg: "outra mensagem" });
	}

	return null;
}
