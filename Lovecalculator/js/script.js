const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;



xhr.addEventListener('readystatechange', function () {
    if (this.readyState === this.DONE) {
        let resultado = JSON.parse(this.response)
        document.getElementById("p").innerHTML = resultado.percentage + "%"
        document.getElementById("frase").innerText = resultado.result
        if(parseInt(resultado.percentage)<50){document.getElementById("foto").src = "../img/roto.webp"
        }
        if(parseInt(resultado.percentage)>50 && resultado.percentage <80){document.getElementById("foto").src = "../img/normal.png"
        }
        if(parseInt(resultado.percentage)>80){document.getElementById("foto").src = "../img/enamorao.webp"
        }
    }
});

document.getElementById("bot").addEventListener("click", function () {
    let amor1 = document.getElementById('amor1').value
    let amor2 = document.getElementById('amor2').value

    xhr.open('GET', 'https://love-calculator.p.rapidapi.com/getPercentage?sname=' + amor1 + '&fname=' + amor2);
    xhr.setRequestHeader('x-rapidapi-key', '156dc7c21amshceb4339cc52e91ap191ff3jsne46ebe0d4ccf');
    xhr.setRequestHeader('x-rapidapi-host', 'love-calculator.p.rapidapi.com');

    xhr.send();
})

document.getElementById("frase").innerText = resultado.result


