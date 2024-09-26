document.querySelector('#donation-now-btn').addEventListener('click', function () {

    const inputDonate = getInputElementById('input-value');

    if (isNaN(inputDonate) || inputDonate < 0) {
        alert('invalid Donation Amount')
        return document.getElementById('input-value').value = ''
    } else {

        my_modal_1.showModal()

    }

    const donateAmount = getInnerTextElementById('add-donation');
    let totalAmount = donateAmount + inputDonate
    document.getElementById('add-donation').innerText = totalAmount
    document.getElementById('input-value').value = ''

    // main  balance minus
    const balance = getInnerTextElementById('balance');
    const remainingBalance = balance - totalAmount;
    document.getElementById('balance').innerText = remainingBalance

    // History 
    const noakhaliText = document.getElementById('noakhali-text').innerText;
    console.log(noakhaliText);
    const div = document.createElement('div');
    div.className = 'p-6 box-border border rounded-md mb-4';
    div.innerHTML = `
    <h3 class="font-bold">${totalAmount} ${noakhaliText}</h3>
    <p class='text-gray-500 mt-1'>Date: ${new Date().toDateString()} ${new Date().toTimeString()}</p>
    `
    const historyDonation = document.getElementById('history-donation');
    historyDonation.appendChild(div)
})


// history Tab
const donationTabBtn = document.getElementById('donation-tab-btn');
const historyTabBtn = document.getElementById('history-tab-btn');
historyTabBtn.addEventListener('click', function () {
    // bg-[#B4F461] font-bold rounded-lg text-[17px]
    // history btn
    //  border-gray-500 border-opacity-30 border-2 box-border
    historyTabBtn.classList.add(
        'bg-[#B4F461]'
    )
    historyTabBtn.classList.remove('border-2')
    donationTabBtn.classList.remove(
        'bg-[#B4F461]'
    )
    donationTabBtn.classList.add(
        'border-2',
        'border-gray-500',
        'border-opacity-30',
        'box-border',
        'text-gray-900',
        'opacity-80'
    )
    document.getElementById('donation-container').classList.add('hidden')
    document.getElementById('history-donation').classList.remove('hidden')

})

donationTabBtn.addEventListener('click', function(){
    donationTabBtn.classList.add(
        'bg-[#B4F461]'
    )
    donationTabBtn.classList.remove(
        'border-2',
        'border-gray-500',
        'border-opacity-30',
        'box-border',
        'text-gray-900',
        'opacity-80'
    )
    historyTabBtn.classList.remove(
        "bg-[#B4F461]"
    )
    historyTabBtn.classList.add(
        'border-2',
        'border-gray-500',
        'border-opacity-30',
        'box-border',
        'text-gray-900',
        'opacity-80'
    )
    document.getElementById('donation-container').classList.remove('hidden')
    document.getElementById('history-donation').classList.add('hidden')
})


// donation feni 

document.querySelector('#donation-now-btn-feni').addEventListener('click', function () {

    const inputDonate = getInputElementById('input-value-feni');

    if (isNaN(inputDonate) || inputDonate < 0) {
        alert('invalid Donation Amount')
        return document.getElementById('input-value').value = ''
    } else {

        my_modal_1.showModal()

    }

    const donateAmount = getInnerTextElementById('add-donation-feni');
    let totalAmount = donateAmount + inputDonate
    document.getElementById('add-donation-feni').innerText = totalAmount
    document.getElementById('input-value-feni').value = ''

    // main  balance minus
    const balance = getInnerTextElementById('balance');
    const remainingBalance = balance - totalAmount;
    document.getElementById('balance').innerText = remainingBalance

    // History 
    const feniText = document.getElementById('feni-text').innerText;
    const div = document.createElement('div');
    div.className = 'p-6 box-border border rounded-md mb-4';
    div.innerHTML = `
    <h3 class="font-bold">${totalAmount} ${feniText}</h3>
    <p class='text-gray-500 mt-1'>Date: ${new Date().toDateString()} ${new Date().toTimeString()}</p>
    `
    const historyDonation = document.getElementById('history-donation');
    historyDonation.appendChild(div)
})
