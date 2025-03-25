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
          document.getElementById("produits").style.display="block";
          document.getElementById("connexion").style.display="none";
          document.getElementById("message").style.display="none";
        }
        else{
          document.getElementById("message").style.display="block";
        }
        }
}
async function getProduit(){
  const endpoint = '/data-api/rest/Produit';
  const response = await fetch(endpoint);
  const data = await response.json();
  
  var i=0;
  var list;
  while(i<data.value.length){
    list.push(data.value[i].toString);
    i=i+1;
  }
  return list;
}

async function create() {

  const data = {
    nomProduit: document.getElementById("nomProduit").value,
    description: document.getElementById("description").value,
    prix: document.getElementById("prix").value,
    restant: document.getElementById("restant").value
  };

  const endpoint = `/data-api/rest/Produit/`;
  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "C`ontent-Type": "application/json" },
    body: JSON.stringify(data)
  });
  const result = await response.json();
  console.table(result.value);
}
  return     <div id='background'>
  <div id="connexion">
  <h1>Connexion</h1>
      <form onSubmit={Submit}>
            <input type="text" id="nom" class="input" placeholder="Nom"/>
            <input type="text" id="telephone" class="input" placeholder="Telephone"/>
            <input type="text" id="courriel" class="input" placeholder="Courriel"/>
            <input type="text" id="password" class="input" placeholder="Mot de passe"/>
                        <button id="submit" class="button" color="primary" type="submit">Connexion</button>
                        

                </form>
                </div>
                <h2 id="message">Ce compte n'est pas celui de l'administrateur.</h2>
                <div id="produits">
                <h1>Produits</h1>
                {getProduit}
                  <form onSubmit={create}>
            <input type="text" id="nomProduit" class="input" placeholder="Nom"/>
            <input type="text" id="description" class="input" placeholder="Description"/>
            <input type="text" id="prix" class="input" placeholder="Prix"/>
            <input type="text" id="restant" class="input" placeholder="Restant"/>
                        <button id="submit" class="button" color="primary" type="submit">Ajouter le produit</button>
                        

                </form></div>

  </div>
  ;
}

export default App;
