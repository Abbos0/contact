




// ============================ Contact===============================

const Username = document.querySelector("#username")
const Email = document.querySelector("#email")
const Call = document.querySelector("#call")
const Calculate = document.querySelector("#calculate")
const Messagetext = document.querySelector("#messagetext")
const Checkbox = document.querySelector("#checkbox")
const Form = document.querySelector("#form")

const GetValue = (event) =>{
    event.preventDefault()
    console.log(Username.value, Email.value, Call.value, Calculate.value, Messagetext.value);
}
const SendMessage = (e) =>{
    e.preventDefault()
    text = `%0A 👦 Username: ${Username.value}  %0A 📩Email:  ${Email.value} %0A 📞 Phone: ${Call.value} %0A 📝 Calculate: ${Calculate.value} %0A 📝 Message: ${Messagetext.value}  %0A ✅ Calculate: ${Checkbox.value} `
    chat_id = -1002128588085
    token = `6834109969:AAEhUkHL4MsMs8Be2CWGY9oC7KXSbW8JHAM`
    url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${text}&parse_mode=html`
    let api = new   XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    Username.value = ""
    Email.value = ""
    Call.value = ""
    Calculate.value = ""
    Messagetext.value = ""
    Checkbox.value = ""
}  
Form.addEventListener("submit" , SendMessage )

// ===================================Contact===============================

