import React from 'react';
import AgentListTable from '../../components/agent-list-table/agent-list-table.component';
import PageTitle from '../../components/page-title/page-title.component';
import PageContent from '../../components/page-content/page-content.component';

const AgentListPage = () => {
  return (
    <>
      <PageTitle title="List of all agents" />
      <PageContent>
        <AgentListTable />
      </PageContent>
    </>
  );
};

export default AgentListPage;
