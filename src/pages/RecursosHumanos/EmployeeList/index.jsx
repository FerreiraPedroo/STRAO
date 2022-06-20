import React, { useState, useContext } from "react";
import { GlobalUseContext } from "../../../provider/app";
import api from "../../../services/api";

import findEmployee from "../../../assets/img/find-employee.svg";

import * as S from "./styles";

export const EmployeeList = () => {
  const { userData } = useContext(GlobalUseContext);

  const [searchFilter, setSearchFilter] = useState({ findBy: "fullName", contract: userData.contract[0].name });
  const [employeeFind, setEmployeeFind] = useState('');
  const [findStatus, setFindStatus] = useState(false);
  const [findEmployeeResponse, setFindEmployeeResponse] = useState([]);

  const handleFilter = (filterName, filterData) => {
    const filter = { ...searchFilter, [filterName]: filterData };
    setSearchFilter(filter);
  }

  const sendFilter = async () => {
    setFindStatus(true);
    try {
      const { data } = await api.get('/rh/employee/find',
        {
          params: { ...searchFilter, employee: employeeFind }
        }
      )
      console.log(data.data)
      setFindEmployeeResponse(data.data)
      setFindStatus(false);
    } catch (error) {
      console.log("ERROR: ", error);
      setFindStatus(false);
    }
  }


  return (
    <S.Container>
      <S.Title>LISTA DE FUNCIONÁRIOS</S.Title>

      <S.FindEmployeeBox>

        <S.FindEmployeeInputBox>
          <S.FindEmployeeText>Contrato</S.FindEmployeeText>
          <S.FindEmployeeSelect onChange={(e) => handleFilter("contract", e.target.value)}>
            {userData.hasOwnProperty("contract") &&
              userData.contract.map((contract) => (
                <S.FindEmployeeOption key={contract.name} value={contract.name}>{contract.name}</S.FindEmployeeOption>
              ))}
          </S.FindEmployeeSelect>
        </S.FindEmployeeInputBox>

        <S.FindEmployeeInputBox>
          <S.FindEmployeeText>Procurar pelo</S.FindEmployeeText>
          <S.FindEmployeeSelect onChange={(e) => handleFilter("findBy", e.target.value)}>
            <S.FindEmployeeOption value="fullName">Nome</S.FindEmployeeOption>
            <S.FindEmployeeOption value="identification">ID</S.FindEmployeeOption>
          </S.FindEmployeeSelect>
        </S.FindEmployeeInputBox>

        <S.FindEmployeeInputBox>
          <S.FindEmployeeText>Procurar</S.FindEmployeeText>
          <S.FindEmployeeBoxFind>
            <S.FindEmployeeInput onChange={(e) => setEmployeeFind(e.target.value)} value={employeeFind} />
            <S.FindEmployeeIcon type="image" src={findEmployee} onClick={sendFilter} disabled={findStatus} />
          </S.FindEmployeeBoxFind>
        </S.FindEmployeeInputBox>
      </S.FindEmployeeBox>

      {findEmployeeResponse.map((employee) => (
        <S.FindEmployeeList key={employee._id}>
          <S.EmployeePhoto src={employee.photo} />
          <S.EmployeeName>{employee.fullName}</S.EmployeeName>
          <S.EmployeeRegister>{employee.status}</S.EmployeeRegister>
        </S.FindEmployeeList>
      ))
      }
    </S.Container >
  )
}