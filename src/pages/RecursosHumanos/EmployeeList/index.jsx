import React from "react"
import * as S from "./styles"

import findEmployee from '../../../assets/img/find-employee.svg'

export const EmployeeList = () => {



  return (
    <S.Container>
      <S.Title>LISTA DE FUNCIONÁRIOS</S.Title>

      <S.FindEmployeeBox>

        <S.FindEmployeeInputBox>
          <S.FindEmployeeText>Contrato</S.FindEmployeeText>
          <S.FindEmployeeSelect >
            <S.FindEmployeeOption value=""></S.FindEmployeeOption>
            <S.FindEmployeeOption value="Assistente">Limpeza</S.FindEmployeeOption>
            <S.FindEmployeeOption value="Auxiliar">Manutenção</S.FindEmployeeOption>
            <S.FindEmployeeOption value="Coordenador">Recepção</S.FindEmployeeOption>
            <S.FindEmployeeOption value="Assistente">Segurança</S.FindEmployeeOption>
          </S.FindEmployeeSelect>
        </S.FindEmployeeInputBox>

        <S.FindEmployeeInputBox>
          <S.FindEmployeeText>Procurar pelo</S.FindEmployeeText>
          <S.FindEmployeeSelect >
            <S.FindEmployeeOption value=""></S.FindEmployeeOption>
            <S.FindEmployeeOption value="Assistente">ID</S.FindEmployeeOption>
            <S.FindEmployeeOption value="Auxiliar">Nome</S.FindEmployeeOption>
          </S.FindEmployeeSelect>
        </S.FindEmployeeInputBox>

        <S.FindEmployeeInputBox>
          <S.FindEmployeeText>Procurar</S.FindEmployeeText>
          <S.FindEmployeeBoxFind>
            <S.FindEmployeeInput />
            <S.FindEmployeeIcon type="image" src={findEmployee} />
          </S.FindEmployeeBoxFind>
        </S.FindEmployeeInputBox>

      </S.FindEmployeeBox>


      <S.FindEmployeeList>
        <S.EmployeePhoto />
        <S.EmployeeName>Pedro Henrique de Assis Ferreira</S.EmployeeName>
        <S.EmployeeRegister>1234567899874</S.EmployeeRegister>
      </S.FindEmployeeList>

      <S.FindEmployeeList>
        <S.EmployeePhoto />
        <S.EmployeeName>Pedro Henrique de Assis Ferreira</S.EmployeeName>
        <S.EmployeeRegister>1234567899874</S.EmployeeRegister>
      </S.FindEmployeeList>



    </S.Container>
  )
}