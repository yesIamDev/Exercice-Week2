
document.querySelector('#cp_area').addEventListener('input', function () {
    if (this.value.length == 5) {
        let url = `https://ge.api.gouv.fr/communes?codePostal=${this.value}&fields=nom,code,codesPostaux,siren,codeEpci,codeDepartement,codeRegion,population&format=json&geometry=centre`;
        
        fetch(url)
            .then(function(response){
                return response.json();
            })
            .then(function(data){
                
                console.log(data);

                let affichage = "<ul>";
                for(let ville of data){
                    affichage = affichage + `<li>${ville.nom}</li>`;
                }
                affichage = affichage + "</ul>";
                document.querySelector("#villes").innerHTML = affichage;
            })
            .catch(function(e){
                console.log("eror : " + e);
            })
    }
});