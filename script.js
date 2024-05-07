const analyzeBtn = document.getElementById('analyze-btn');
const indicatorSelect = document.getElementById('indicator-select');
const indicatorValueInput = document.getElementById('indicator-value');
const analysisResultElement = document.getElementById('analysis-result');

analyzeBtn.addEventListener('click', () => {
	const selectedIndicator = indicatorSelect.value;
	const indicatorValue = parseFloat(indicatorValueInput.value);
	const analysisResult = analyzeIndicator(selectedIndicator, indicatorValue);
	analysisResultElement.innerText = analysisResult;
});

function analyzeIndicator(name, value) {
	let analysisResult;
	switch (name) {
		case 'Strike Rate':
			analysisResult = value > 50 ? 'Bullish' : 'Bearish';
			break;
		case 'Bollinger Bands':
			analysisResult = value > 20 ? 'Bullish' : 'Bearish';
			break;
		case 'Moving Average':
			analysisResult = value > 50 ? 'Bullish' : 'Bearish';
			break;
		case 'RSI':
			analysisResult = value > 70 ? 'Overbought' : value < 30 ? 'Oversold' : 'Neutral';
			break;
		case 'MACD':
			analysisResult = value > 0 ? 'Bullish' : 'Bearish';
			break;
		case 'Stochastic':
			analysisResult = value > 80 ? 'Overbought' : value < 20 ? 'Oversold' : 'Neutral';
			break;
		case 'Stochastic RSI':
			analysisResult = value > 80 ? 'Overbought' : value < 20 ? 'Oversold' : 'Neutral';
			break;
		case 'Ichimoku Cloud':
			analysisResult = value > 50 ? 'Bullish' : 'Bearish';
			break;
		case 'ATR':
			analysisResult = value > 20 ? 'High Volatility' : 'Low Volatility';
			break;
		default:
			analysisResult = 'Unknown indicator';
	}
	return analysisResult;
}
