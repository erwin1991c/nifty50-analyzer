const apiUrl = 'https://api.upstox.com/';
const apiKey = 'e934f443-251b-4aa8-a719-4e81a8ca0d99';
const apiSecret = 'ksd69zdcef';

fetch(apiUrl, {
	headers: {
		'Authorization': 'Bearer ' + apiKey,
		'Secret': apiSecret
	}
})
.then(response => response.json())
.then(data => {
	const nifty50Value = data.last;
	const trend = getTrend(nifty50Value);
	document.getElementById('nifty50-value').innerText = nifty50Value;
	document.getElementById('trend').innerText = trend;
});

function getTrend(value) {
	// Implement your logic to determine bearish or bullish trend based on the value
	// For example:
	if (value < 17000) {
		return 'Bearish';
	} else {
		return 'Bullish';
	}
}
