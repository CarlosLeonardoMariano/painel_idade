function verificar() {
var data= new Date()
var ano=data.getFullYear()
var formulario_ano=document.getElementById("nascimento")
var res = document.getElementById("res")
var img = document.getElementById("foto")
if(formulario_ano.value.length == 0 || formulario_ano.value > ano) {
    window.alert(`[ERRO] Verifique os Dados Novamente!`)
}
else{
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(formulario_ano.value)
    var genero = ''
    if(fsex[0].checked){
        genero = 'Masculino'
        if(idade >=0 && idade < 12){
            //criaça
            img.src="crianca-homem.jpg"
            res.innerHTML=`Detectamos uma criança de Sexo <strong> ${genero} </strong> com a idade de <strong>${idade} Anos ! </strong>`
            
        }
            else if(idade >= 12 && idade <22){
                //adolescente
                img.src="adolescente-homem.jpg"
                res.innerHTML=`Detectamos um Adolescente de Sexo <strong> ${genero} </strong> com a idade de <strong>${idade} Anos ! </strong>`
            }
            else if(idade >=22 && idade < 50){
                //adulto
                img.src='aduto-homem.jpg'
                res.innerHTML=`Detectamos um Adulto de Sexo <strong> ${genero} </strong> com a idade de <strong>${idade} Anos ! </strong>`
            }
            else{
            //idoso
            img.src="homem-idoso.jpg"
             res.innerHTML=`Detectamos um Idoso de Sexo <strong> ${genero} </strong> com a idade de <strong>${idade} Anos ! </strong>`
            }



    } else if(fsex[1].checked){
        genero = 'Feminino'
        if(idade >=0 && idade < 12){
            //criaça
            img.src="crianca-f.jpg"
    res.innerHTML=`Detectamos uma Criança de Sexo <strong> ${genero} </strong> com a idade de <strong>${idade} Anos </strong>`
        }
            else if(idade >=12 && idade < 22){
                //adolescente
                img.src="adolesente-f.jpg"
res.innerHTML=`Detectamos uma Adolescente de Sexo <strong> ${genero} </strong> com a idade de <strong>${idade} Anos </strong>`
            }
            else if(idade >=22 && idade <50){
                //adulto
                img.src="adulta-f.jpg"
     res.innerHTML=`Detectamos uma Adulta de Sexo <strong> ${genero} </strong> com a idade de <strong>${idade} Anos </strong>`            
            }
            else{
            //idoso
            img.src="senhora-f.jpg"
             res.innerHTML=`Detectamos uma Idosa de Sexo <strong> ${genero} </strong> com a idade de <strong>${idade} Anos </strong>`
            }
    }
    
    res.appendChild(img)
  
}

}


