import React, {useState, useEffect} from 'react';
import PageTitle from '../../components/page-title/page-title.component';
import PageContent from '../../components/page-content/page-content.component';
import AgentLogo from '../../components/agent-logo/agent-logo.component';
import DataTable from '../../components/data-table/data-table.component';
import {useFetch} from '../../hooks/useFetch';

const AgentListPage = () => {
  const [tableData, setTableData] = useState([]);
  const {data, status} = useFetch('/agent');

  useEffect(() => {
    if (status === 'fetched') {
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
  }, [status]);

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

  return (
    <>
      <PageTitle title="List of all agents" />
      <PageContent>
        <DataTable columns={tableColumns} data={tableData} />
      </PageContent>
    </>
  );
};

export default AgentListPage;
