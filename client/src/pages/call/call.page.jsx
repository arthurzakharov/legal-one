import React, {useState, useEffect} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {formatDate} from '../../utils';
import PageTitle from '../../components/page-title/page-title.component';
import PageContent from '../../components/page-content/page-content.component';
import DataTable from '../../components/data-table/data-table.component';
import AgentLook from '../../components/agent-look/agent-look';
import {useFetch} from '../../hooks/useFetch';

const CallPage = () => {
  const [tableData, setTableData] = useState([]);
  const {phone} = useParams();
  const history = useHistory();
  const {data, status} = useFetch(`/call/${phone}`);

  useEffect(() => {
    if (status === 'fetched') {
      setTableData(
        data.reduce((arr, item) => {
          arr.push({
            number: item.number,
            dateTime: formatDate(item.dateTime),
            duration: item.duration,
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
      title: 'Call time',
      id: 'dateTime',
    },
    {
      title: 'Duration (sec)',
      id: 'duration',
    },
    {
      title: 'Agent',
      id: 'agent',
    },
  ];

  return (
    <>
      <PageTitle title="Report by phone number" />
      <PageContent>
        <DataTable columns={tableColumns} data={tableData} />
      </PageContent>
    </>
  );
};

export default CallPage;
