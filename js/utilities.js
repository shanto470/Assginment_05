function getInputFieldById(id){
    const addMoney = document.getElementById(id).value;
    const addMoneyNumber = parseFloat(addMoney);
    return addMoneyNumber;
}
function getTextById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber=parseFloat(textValue);
    return textNumber;
}
function showSectionById(id){
    document.getElementById('show-donation').classList.add("hidden");
    document.getElementById('show-history').classList.add('hidden');

    // show the button 
    document.getElementById(id).classList.remove('hidden')
}
        


