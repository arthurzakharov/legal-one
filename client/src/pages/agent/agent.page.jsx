import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {formatDate} from '../../utils';
import PageTitle from '../../components/page-title/page-title.component';
import PageContent from '../../components/page-content/page-content.component';
import DataTable from '../../components/data-table/data-table.component';
import {useFetch} from '../../hooks/useFetch';

const AgentPage = () => {
  const [tableData, setTableData] = useState([]);
  const {id} = useParams();
  const {data, status} = useFetch(`/agent/${id}`);
  useEffect(() => {
    if (status === 'fetched') {
      setTableData(
        data.reduce((arr, item) => {
          arr.push({
            number: item.number,
            dateTime: formatDate(item.dateTime),
            duration: item.duration,
            resolution: item.resolution.resolution,
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
      title: 'Duration',
      id: 'duration',
    },
    {
      title: 'Resolution',
      id: 'resolution',
    },
  ];

  return (
    <>
      <PageTitle title="Report by agent" />
      <PageContent>
        <DataTable columns={tableColumns} data={tableData} />
      </PageContent>
    </>
  );
};

export default AgentPage;
