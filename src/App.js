import React from 'react';
import './app.css';

function App() {
  async function Submit(event) {
    if (event) {
        event.preventDefault();   
        const id = 1;
        const endpoint = `/data-api/rest/Vendeur/VendeurID`;
        const response = await fetch(`${endpoint}/${id}`);
        const result = await response.json();
        if(result.value[0].nomVendeur===document.getElementById("nom").value && 
        result.value[0].telephone===document.getElementById("telephone").value && 
        result.value[0].email===document.getElementById("courriel").value && 
        result.value[0].password===document.getElementById("password").value){
          alert("yes");
        }
        else{
          document.getElementById("non").style.display="block";
        }
        }
}
  return     <div id='background'>
    <h1>Static Web Apps Database Connections</h1>
  <div>
      <form onSubmit={Submit}>
            <input type="text" id="nom" class="input" placeholder="Nom"/>
            <input type="text" id="telephone" class="input" placeholder="Telephone"/>
            <input type="text" id="courriel" class="input" placeholder="Courriel"/>
            <input type="text" id="password" class="input" placeholder="Mot de passe"/>
                        <button id="submit" class="button" color="primary" type="submit">Connexion</button>
                        

                </form>
                <h2 id="non">Ce compte n'est pas celui de l'administrateur.</h2>
                <div id="hidden"><form onSubmit={Submit}>
            <input type="text" id="nom" class="input" placeholder="Nom"/>
            <input type="text" id="telephone" class="input" placeholder="Telephone"/>
            <input type="text" id="courriel" class="input" placeholder="Courriel"/>
            <input type="text" id="password" class="input" placeholder="Mot de passe"/>
                        <button id="submit" class="button" color="primary" type="submit">Connexion</button>
                        

                </form></div>

  </div>
  <script>
    

</script>
  </div>;
}

export default App;
