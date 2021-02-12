import React, {useState, useEffect} from 'react';
import {API} from '../../axios';
import DataTable from '../data-table/data-table.component';
import AgentLogo from '../agent-logo/agent-logo.component';

const AgentListTable = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    (async function loadReport() {
      try {
        const {data, status} = await API.get(`/agent`);
        if (status === 200) {
          setTableData(
            data.reduce((arr, item) => {
              arr.push({
                photo: () => <AgentLogo name={item.lastName} src={item.photo} />,
                firstName: item.firstName,
                lastName: item.lastName,
                email: item.email,
                id: item.identifier,
              });
              return arr;
            }, [])
          );
        }
      } catch (e) {
        console.log('e: ', e);
      }
    })();
  }, []);

  const tableColumns = [
    {
      title: 'Photo',
      id: 'photo',
    },
    {
      title: 'First Name',
      id: 'firstName',
    },
    {
      title: 'Last Name',
      id: 'lastName',
    },
    {
      title: 'Email',
      id: 'email',
    },
  ];

  return <DataTable columns={tableColumns} data={tableData} />;
};

export default AgentListTable;
