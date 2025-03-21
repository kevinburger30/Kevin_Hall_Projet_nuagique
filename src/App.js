import React from 'react';

function App() {
  async function list() {
  const endpoint = '/data-api/rest/Produit';
  const response = await fetch(endpoint);
  const data = await response.json();
  console.table(data.value);
}

  return     <div><h1>Static Web Apps Database Connections</h1>
  <div>
      <button id="list" onclick="list()">List</button>
      <button id="get" onclick="get()">Get</button>
      <button id="update" onclick="update()">Update</button>
      <button id="create" onclick="create()">Create</button>
      <button id="delete" onclick="del()">Delete</button>
  </div>
  </div>;
}

export default App;
