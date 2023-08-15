function requestFunds() {
    const address = document.getElementById('address').value;
    const gas = document.getElementById('gas').value;
    
    fetch('http://bemail2017.github.io/wed_DEMO:5000/faucet', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ address, gas }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.transactionHash) {
            document.getElementById('result').textContent = 'Giao dịch thành công. Hash: ' + data.transactionHash;
        } else {
            document.getElementById('result').textContent = 'Lỗi: ' + data.error;
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
