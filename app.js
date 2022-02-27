const ButtonGenerator = document.getElementById('setAdvice');
let ButtonGeneratoricon = document.getElementById('setAdvice i');
const AdviceArea = document.querySelector('.advice')
const AdviceNumber = document.querySelector('.number')


const BASEURL = `https://api.adviceslip.com`;


const LoadAdvice = async () => {
    let response = await fetch(`${BASEURL}/advice`)
    let json = await response.json();

    let data = json.slip.id
    AdviceNumber.innerHTML = `# ${data}`

    let advice = json.slip.advice
    AdviceArea.innerHTML = `> ${advice}`
}

ButtonGenerator.onclick = () => {
    LoadAdvice()
    ButtonGenerator.classList.add("active")
}



LoadAdvice()



