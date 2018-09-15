const modelArray = ['MG Char\'s Zaku', 'RG Char\'s Zaku', 'RG Banshee', 'HG Kshatryia', 'HG Zeta', 'HG Zaku', 'MG GM Space', "MG Gundam Ground", 'MG Gundam Alex', 'MG EFSF Zaku', 'Supernova HeavyArms', 'Supernova Nataku', 'Petit Guys']

function getAmodel(theArray) {

  let model = theArray[Math.floor(Math.random()*theArray.length)];

  console.log(model);
}

getAmodel(modelArray)