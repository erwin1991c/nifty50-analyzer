const analyzeBtn = document.getElementById('analyze-btn');
const analysisResultElement = document.getElementById('analysis-result');

analyzeBtn.addEventListener('click', () => {
	const strikeRateValue = parseFloat(document.getElementById('strike-rate-value').value);
	const bollingerBandsUpperValue = parseFloat(document.getElementById('bollinger-bands-upper-value').value);
	const bollingerBandsMiddleValue = parseFloat(document.getElementById('bollinger-bands-middle-value').value);
	const bollingerBandsLowerValue = parseFloat(document.getElementById('bollinger-bands-lower-value').value);
	const bollingerBandsSignalValue = parseFloat(document.getElementById('bollinger-bands-signal-value').value);
	const movingAverageValue = parseFloat(document.getElementById('moving-average-value').value);
	const rsiValue = parseFloat(document.getElementById('rsi-value').value);
	const macdValue = parseFloat(document.getElementById('macd-value').value);
	const macdSignalValue = parseFloat(document.getElementById('macd-signal-value').value);
	const macdHistogramValue = parseFloat(document.getElementById('macd-histogram-value').value);
	const stochasticValue = parseFloat(document.getElementById('stochastic-value').value);
	const stochasticSlowValue = parseFloat(document.getElementById('stochastic-slow-value').value);
	const stochasticRsiValue = parseFloat(document.getElementById('stochastic-rsi-value').value);
	const stochasticRsiSlowValue = parseFloat(document.getElementById('stochastic-rsi-slow-value').value);
	const ichimokuCloudTenkanSenValue = parseFloat(document.getElementById('ichimoku-cloud-tenkan-sen-value').value);
	const ichimokuCloudKijunSenValue = parseFloat(document.getElementById('ichimoku-cloud-kijun-sen-value').value);
	const ichimokuCloudSenkouSpanAValue = parseFloat(document.getElementById('ichimoku-cloud-senkou-span-a-value').value);
	const ichimokuCloudSenkouSpanBValue = parseFloat(document.getElementById('ichimoku-cloud-senkou-span-b-value').value);
	const ichimokuCloudChikouSpanValue = parseFloat(document.getElementById('ichimoku-cloud-chikou-span-value').value);
	const ichimokuCloudLaggingSpanValue = parseFloat(document.getElementById('ichimoku-cloud-lagging-span-value').value);
	const atrValue = parseFloat(document.getElementById('atr-value').value);
	
	const analysisResult = analyzeIndicators(
		strikeRateValue,
		bollingerBandsUpperValue,
		bollingerBandsMiddleValue,
		bollingerBandsLowerValue,
		bollingerBandsSignalValue,
		movingAverageValue,
		rsiValue,
		macdValue,
		macdSignalValue,
		macdHistogramValue,
		stochasticValue,
		stochasticSlowValue,
		stochasticRsiValue,
		stochasticRsiSlowValue,
		ichimokuCloudTenkanSenValue,
		ichimokuCloudKijunSenValue,
		ichimokuCloudSenkouSpanAValue,
		ichimokuCloudSenkouSpanBValue,
		ichimokuCloudChikouSpanValue,
		ichimokuCloudLaggingSpanValue,
		atrValue
	);
	
	analysisResultElement.innerText = analysisResult;
});

function analyzeIndicators(
	strikeRateValue,
	bollingerBandsUpperValue,
	bollingerBandsMiddleValue,
	bollingerBandsLowerValue,
	bollingerBandsSignalValue,
	movingAverageValue,
	rsiValue,
	macdValue,
	macdSignalValue,
	macdHistogramValue,
	stochasticValue,
	stochasticSlowValue,
	stochasticRsiValue,
	stochasticRsiSlowValue,
	ichimokuCloudTenkanSenValue,
	ichimokuCloudKijunSenValue,
	ichimokuCloudSenkouSpanAValue,
	ichimokuCloudSenkouSpanBValue,
	ichimokuCloudChikouSpanValue,
	ichimokuCloudLaggingSpanValue,
	atrValue
) {
	let bullishCount = 0;
	let bearishCount = 0;
	
	if (strikeRateValue > 50) bullishCount++;
	if (bollingerBandsUpperValue > 20 && bollingerBandsLowerValue < 20) bullishCount++;
	if (movingAverageValue > 50) bullishCount++;
	if (rsiValue < 30) bullishCount++;
	if (macdValue > 0 && macdSignalValue > 0) bullishCount++;
	if (stochasticValue < 20 && stochasticSlowValue < 20) bullishCount++;
	if (stochasticRsiValue < 20 && stochasticRsiSlowValue < 20) bullishCount++;
	if (ichimokuCloudTenkanSenValue > 50 && ichimokuCloudKijunSenValue > 50) bullishCount++;
	if (atrValue < 20) bullishCount++;
	if (strikeRateValue < 50) bearishCount++;
if (bollingerBandsUpperValue < 20 && bollingerBandsLowerValue > 20) bearishCount++;
if (movingAverageValue < 50) bearishCount++;
if (rsiValue > 70) bearishCount++;
if (macdValue < 0 && macdSignalValue < 0) bearishCount++;
if (stochasticValue > 80 && stochasticSlowValue > 80) bearishCount++;
if (stochasticRsiValue > 80 && stochasticRsiSlowValue > 80) bearishCount++;
if (ichimokuCloudTenkanSenValue < 50 && ichimokuCloudKijunSenValue < 50) bearishCount++;
if (atrValue > 20) bearishCount++;

if (bullishCount > bearishCount) return 'Bullish';
if (bullishCount < bearishCount) return 'Bearish';
return 'Neutral';
}
