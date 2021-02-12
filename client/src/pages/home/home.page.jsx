import React, {useState, useEffect} from 'react';
import {useHistory, Link} from 'react-router-dom';
import {formatDate} from '../../utils';
import PageTitle from '../../components/page-title/page-title.component';
import PageContent from '../../components/page-content/page-content.component';
import DataTable from '../../components/data-table/data-table.component';
import AgentLook from '../../components/agent-look/agent-look';
import {useFetch} from '../../hooks/useFetch';

const HomePage = () => {
  const [tableData, setTableData] = useState([]);
  const history = useHistory();
  const {data, status} = useFetch('/');

  useEffect(() => {
    if (status === 'fetched') {
      setTableData(
        data.reduce((arr, item) => {
          arr.push({
            number: () => <Link to={`/call/${item.number.substring(1)}`}>{item.number}</Link>,
            callsCount: item.callsCount,
            lastCallTime: formatDate(item.lastCallTime),
            agent: () => <AgentLook {...item.agent} onClick={(id) => history.push(`/agent/${id}`)} />,
            id: item.identifier,
          });
          return arr;
        }, [])
      );
    }
  }, [status]);

  const tableColumns = [
    {
      title: 'Phone number',
      id: 'number',
    },
    {
      title: 'Number of calls',
      id: 'callsCount',
    },
    {
      title: 'Last call time',
      id: 'lastCallTime',
    },
    {
      title: 'Agent',
      id: 'agent',
    },
  ];

  return (
    <>
      <PageTitle title="General report" />
      <PageContent>
        <DataTable columns={tableColumns} data={tableData} />
      </PageContent>
    </>
  );
};

export default HomePage;
