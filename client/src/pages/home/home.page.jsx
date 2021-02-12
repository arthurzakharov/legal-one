import React from 'react';
import HomeTable from '../../components/home-table/home-table.component';
import PageTitle from '../../components/page-title/page-title.component';

const HomePage = () => {
  return (
    <>
      <PageTitle title="General report" />
      <HomeTable />
    </>
  );
};

export default HomePage;
