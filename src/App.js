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
  for(i=0;i<data.value.length;i++){
    return data.value[i]
  }
  console.table(data.value);
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
                <h2>{getProduit}</h2>
                  <form>
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
