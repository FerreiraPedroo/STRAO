import React, { useState, useContext } from "react";
import { GlobalUseContext } from "../../../provider/app";
import { useNavigate } from "react-router-dom";


import findEmployee from "../../../assets/img/find-employee.svg";

import * as S from "./styles";
import { useEffect } from "react";

const yearData = ["2022", "2021", "2020"];

export const RhEmployeeSheet = () => {
  const navigate = useNavigate();
  const { userData } = useContext(GlobalUseContext);
  const [searchFilter, setSearchFilter] = useState({ month: "janeiro", year: "2022", contract: userData.contracts[0].name });
  const [searchEmployeeSheet, setSearchEmployeeSheet] = useState(
    [
      {
        employee_id: 12344,
        employee_fullName: "Pedro Henrique de Assis Ferreira",
        contract_id: "12345648",
        contract_name: "Ministério da Econômia",
        status: "Enviado",
        month: "Janeiro",
        year: "2022",
        sheetFile: [],
        documentFile: [],
      },
      {
        employee_id: 12344,
        employee_fullName: "Pedro Henrique de Assis Ferreira",
        contract_id: "12345648",
        contract_name: "Ministério da Econômia",
        status: "Enviado",
        month: "Janeiro",
        year: "2022",
        sheetFile: [],
        documentFile: [],
      },
      {
        employee_id: 12344,
        employee_fullName: "Pedro Henrique de Assis Ferreira",
        contract_id: "12345648",
        contract_name: "Ministério da Econômia",
        status: "Pendente",
        month: "Janeiro",
        year: "2022",
        sheetFile: [],
        documentFile: [],
      },
      {
        employee_id: 12344,
        employee_fullName: "Pedro Henrique de Assis Ferreira",
        contract_id: "12345648",
        contract_name: "Ministério da Econômia",
        status: "Pendente",
        month: "Janeiro",
        year: "2022",
        sheetFile: [],
        documentFile: [],
      },
 
    ]
  );

  const handleFilter = (filterName, filterData) => {
    const filter = { ...searchFilter, [filterName]: filterData };
    setSearchFilter(filter);
  }

  useEffect(() => {

  }, [])

  return (
    <S.Container>

      <S.Title>FOLHA DE PONTO</S.Title>

      <S.Box>
        <S.InputBox>
          <S.FindText>Contrato</S.FindText>
          <S.FindSelect onChange={(e) => handleFilter("contract", e.target.value)}>
            {userData.hasOwnProperty("contract") &&
              userData.contract.map((contract) => (
                <S.FindOption key={contract.name} value={contract.name}>{contract.name}</S.FindOption>
              ))}
          </S.FindSelect>
        </S.InputBox>
        <S.InputBox w="256px">
          <S.FindText>Mês</S.FindText>
          <S.FindSelect onChange={(e) => handleFilter("month", e.target.value)}>
            <S.FindOption value={"janeiro"}>Janeiro</S.FindOption>
            <S.FindOption value={"fevereiro"}>Fevereiro</S.FindOption>
            <S.FindOption value={"marco"}>Março</S.FindOption>
            <S.FindOption value={"abril"}>Abril</S.FindOption>
            <S.FindOption value={"maio"}>Maio</S.FindOption>
            <S.FindOption value={"junho"}>Junho</S.FindOption>
            <S.FindOption value={"julho"}>Julho</S.FindOption>
            <S.FindOption value={"agosto"}>Agosto</S.FindOption>
            <S.FindOption value={"setembro"}>Setembro</S.FindOption>
            <S.FindOption value={"outubro"}>Outubro</S.FindOption>
            <S.FindOption value={"novembro"}>Novembro</S.FindOption>
            <S.FindOption value={"dezembro"}>Dezembro</S.FindOption>
          </S.FindSelect>
        </S.InputBox>
        <S.InputBox w="256px">
          <S.FindText>Ano</S.FindText>
          <S.FindBoxFind>
            <S.FindSelect onChange={(e) => handleFilter("year", e.target.value)}>
              <S.FindOption value="2022">2022</S.FindOption>
            </S.FindSelect>
            <S.FindIcon type="image" src={findEmployee} onClick={() => 'sendFilter'} disabled={false} />
          </S.FindBoxFind>
        </S.InputBox>
      </S.Box>

      <S.SheetHead>
        <S.SheetHeadText>Registro</S.SheetHeadText>
        <S.SheetHeadText>Nome</S.SheetHeadText>
        <S.SheetHeadText>Ações</S.SheetHeadText>
        <S.SheetHeadText>Status</S.SheetHeadText>
      </S.SheetHead>

      {searchEmployeeSheet.length !== 0 ?
        searchEmployeeSheet.map((employee) => (
          <S.FindEmployeeList key={employee.employee_id}>
            <S.EmployeeRegister>{employee.employee_id}</S.EmployeeRegister>
            <S.EmployeeName>{employee.employee_fullName}</S.EmployeeName>
            <S.EmployeeAction>
              {employee.status === "Pendente" && <S.EmployeeButton>Adicionar</S.EmployeeButton>}
              {employee.status === "Enviado" && <>
                <S.EmployeeButton>Alterar</S.EmployeeButton>
                <S.EmployeeButton>Visualizar</S.EmployeeButton>
              </>
              }
              {/* {employee.sheetFile.length == 0 && <S.EmployeeButton>escaneado</S.EmployeeButton>} */}
            </S.EmployeeAction>
            <S.EmployeeStatus status={employee.status}>{employee.status}</S.EmployeeStatus>
          </S.FindEmployeeList>
        ))
        : (
          <>Não encontrado...</>
        )
      }
    </S.Container >
  )
}





