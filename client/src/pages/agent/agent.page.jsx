import React from 'react';
import AgentTable from '../../components/agent-table/agent-table.component';
import PageTitle from '../../components/page-title/page-title.component';

const AgentPage = () => {
  return (
    <>
      <PageTitle title="Report by agent" />
      <AgentTable />
    </>
  );
};

export default AgentPage;
