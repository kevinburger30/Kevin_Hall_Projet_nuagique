import React from 'react';

function App() {
  async function get() {
  const id = 1;
  const endpoint = `/data-api/rest/Vendeur/VendeurID`;
  const response = await fetch(`${endpoint}/${id}`);
  const result = await response.json();
  console.log(result.value.VendeurID);
  }
  return     <div><h1>Static Web Apps Database Connections</h1>
  <div>
      <button id="list" onClick={get}>List</button>
      <button id="get" onclick="get()">Get</button>
      <button id="update" onclick="update()">Update</button>
      <button id="create" onclick="create()">Create</button>
      <button id="delete" onclick="del()">Delete</button>
  </div>
  <script>
    

</script>
  </div>;
}

export default App;
