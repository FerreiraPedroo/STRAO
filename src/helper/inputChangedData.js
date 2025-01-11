/**
 * Este utilitário serve para verificar se algum input teve seus dados alterado
 * rebendo o event handle do input e os dados originais ele compara e utiliza a função setIsData...
 * para informar a quem está chamando qual campo foi alterado retornando um array contendo nome do input
 * @param {{}} event Handle do evento do input.
 * @param {{}} originalData Dados originais, sendo um objeto.
 * @param {{}} dataInfoChange O Array contendo os campos que foram alterados.
 */
export function checkInputChangedDataInfo(event, originalData, isDataInfoChanged) {
	let originalValue;

	if (
		typeof originalData[event.target.name] == "string" ||
		originalData[event.target.name] == null
	) {
		originalValue = originalData[event.target.name];
	} else {
		originalValue = originalData[event.target.name]._id;
	}

	// VERIFICA SE OS VALORES SÃO IGUAIS.
	if (
		event.target.value == originalValue ||
		(event.target.value == "" && originalData[event.target.name] == null)
	) {
		// SE FOR IGUAL, VERIFICA SE O NOME DO EVENT ESTÁ NA LISTA E FILTRA.
		const dataChangedFind = isDataInfoChanged.find((value) => value == event.target.name);
		// SE O NOME DO EVENT ESTIVER NA LISTA ELE REMOVE.
		if (dataChangedFind) {
			return isDataInfoChanged.filter((info) => info != event.target.name);
		}
	} else {
		const dataChangedFind = isDataInfoChanged.find((value) => value == event.target.name);
		if (!dataChangedFind) {
			return [...isDataInfoChanged, event.target.name];
		}
	}

	return null;
}
/**
 * HISTORICO
 * 1 - Função primeiramente feita dentro do componente e utilizando Yup.
 * 2 - Foi elevado ao status de utilitário pois pode ser utilizado em outros componentes que irão prescisar da mesma função.
 * 3 - Foi atualizado para em vez de todo digito ele altera o useState, agora ele verifica antes se é nessesário alterar o useState,
 *     ex: se o valor original de um input é "Material" e o usuario digitou alterando para "Material de Limpeza" em cada digito de letra
 *         o useState é alterado, mas com essa modificação ele verifica antes se o status é o mesmo que o anterior ou se o estado é diferente
 *         podendo alterar o useState, assim se o estado desejado for alcançado antes não se faz necessário alterar o useState. :)
 * 4 - Retirada a função "setIsDataInfoChanged" para fora da função, assim retornando um objeto com um array e se foi modificado o atual
 *     caso não tenha sido feito alguma alteração retorna 'null'.
 */
