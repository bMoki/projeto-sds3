import Footer from 'components/footer';
import NavBar from 'components/navbar';
import DataTable from 'components/DataTable';
import React from 'react';

function App() {
  return (
    <>
      <NavBar />
      <div className='container'>
        <h1 className="text-primary">Ola Mundo!</h1>
        <DataTable/>
      </div>
      <Footer/>
    </>
  );

}

export default App;
