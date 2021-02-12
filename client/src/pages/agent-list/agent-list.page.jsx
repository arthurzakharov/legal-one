import React from 'react';
import AgentListTable from '../../components/agent-list-table/agent-list-table.component';
import PageTitle from '../../components/page-title/page-title.component';

const AgentListPage = () => {
  return (
    <>
      <PageTitle title="List of all agents" />
      <AgentListTable />
    </>
  );
};

export default AgentListPage;
