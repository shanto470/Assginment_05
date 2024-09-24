const history = [];

// card one
document.getElementById('btn-donate-1').addEventListener("click",function(){
        
        const donatedMoney =getInputFieldById('input-donate1')
        const totalMoney = getTextById('donated-in-noakhali')
        const myBalance = getTextById('account-balance')
        const myBalanceSm = getTextById('account-balance-sm')
    
        if(myBalance < donatedMoney){
            alert('you do not have enough money')
            return;
        }
        if(isNaN(donatedMoney)){
            alert('please provide a number')
            return;      
        }
        else{
            const newTotalMoney = totalMoney + donatedMoney;
            document.getElementById('donated-in-noakhali').innerText= newTotalMoney;    
        } 
        const afterDonateMyBalance = myBalance - donatedMoney;
        document.getElementById('account-balance').innerText = afterDonateMyBalance;
        const afterDonateMyBalanceSm = myBalanceSm - donatedMoney;
        document.getElementById('account-balance-sm').innerText = afterDonateMyBalanceSm;

        // showing the success modal
        document.getElementById("success-modal").showModal();

        const genratedHistory = {
            title: `${donatedMoney} TK Donated for Flood at Noakhali, Bangladesh`,
            date: new Date(),
        }
        history.push(genratedHistory);
   
})
// card two
document.getElementById('btn-donate-2').addEventListener("click",function(){
    const donatedMoney = getInputFieldById('input-donate2');
    const totalMoney = getTextById('donated-in-feni');
    const myBalance = getTextById('account-balance');
    const myBalanceSm = getTextById('account-balance-sm')

    if(myBalance < donatedMoney){
        alert('you do not have enough money')
        return;
    }
    if(isNaN(donatedMoney)){
        alert("please provide a number")
        return;
    }
    else{
        const newTotalMoney = totalMoney + donatedMoney;
        document.getElementById('donated-in-feni').innerText = newTotalMoney;
    }
    const afterDonateMyBalance = myBalance - donatedMoney;
    document.getElementById('account-balance').innerText = afterDonateMyBalance;
    const afterDonateMyBalanceSm = myBalanceSm -donatedMoney;
    document.getElementById("account-balance-sm").innerText = afterDonateMyBalanceSm;

    // showing the success modal
    document.getElementById("success-modal").showModal();
    
    
    const genratedHistory = {
        title: `${donatedMoney} TK Donated for Flood Relief in Feni,Bangladesh`,
        date: new Date(),
    }
    history.push(genratedHistory);

    
})
// card three 
document.getElementById('btn-donate-3').addEventListener('click',function(){
    const donatedMoney = getInputFieldById('input-donate3')
    const totalMoney = getTextById('donated-in-quota');
    const myBalance = getTextById('account-balance');
    const myBalanceSm =getTextById('account-balance-sm')

    
    if(myBalance < donatedMoney){
        alert('you don not have enough money');
        return;
    }
    if(isNaN(donatedMoney)){
        alert('please provide a number');
        return;
    }
    else{
        const newTotalMoney =totalMoney + donatedMoney ;
        document.getElementById('donated-in-quota').innerText = newTotalMoney;
    }
    const afterDonateMyBalance = myBalance - donatedMoney;
    document.getElementById('account-balance').innerText = afterDonateMyBalance;
    const afterDonateMyBalanceSm = myBalanceSm -donatedMoney;
    document.getElementById('account-balance-sm').innerText = afterDonateMyBalanceSm;

    // showing the success modal
    document.getElementById("success-modal").showModal();

    const genratedHistory = {
        title: `${donatedMoney} TK Donated for Aid for Injured in the Quota Movement`,
        date: new Date(),
    }
    history.push(genratedHistory);


})

// history part
document.getElementById('donation-btn').addEventListener('click',function(){
    showSectionById('show-donation');
})

document.getElementById('history-btn').addEventListener('click',function(){
    showSectionById('show-history');
    showHistory();
})

function showHistory(){
    for(let i = 0 ; i < history.length; i++){

        const div = document.createElement('div');

        div.innerHTML = `
            <div class="my-4 p-8 border-[1px] border-gray-300 rounded-lg">
                <p class="mb-4 font-bold text-black text-[20px]">${history[i].title}</p>
                <p class="font-light text-[#585858] ">${history[i].date}</p>
            </div>
        `;

        document.getElementById('history-container').appendChild(div);

    }
}
const donationBtn = document.getElementById('donation-btn');
  const historyBtn = document.getElementById('history-btn');
  function resetBackground() {
    donationBtn.classList.remove('bg-[#B4F461]', 'text-black');
    historyBtn.classList.remove('bg-[#B4F461]', 'text-black');
  }
  donationBtn.addEventListener('click', function() {
    resetBackground();
    donationBtn.classList.add('bg-[#B4F461]', 'text-black');
  });
  historyBtn.addEventListener('click',function() {
    resetBackground();
    historyBtn.classList.add('bg-[#B4F461]', 'text-black'); 
  });