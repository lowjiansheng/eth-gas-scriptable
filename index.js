const API_KEY = "";
const url =
	"https://ethgasstation.info/api/ethgasAPI.json?api-key=XX" + API_KEY + "XXX";
const ETH_URL = "https://api.coinmarketcap.com/v1/ticker/ethereum";

const TITLE = "Gas Prices";
const AVERAGE_TITLE = "Average";
const FAST_TITLE = "Fast";
const GWEI_TEXT = "GWEI";

let widget = new ListWidget();

let response = await new Request(url).loadJSON();

widget.addStack();
titleElement = widget.addText(TITLE);
titleElement.font = Font.title1();
titleElement.textColor = Color.black();

widget.addStack();

headerElement = widget.addText(AVERAGE_TITLE);
headerElement.font = Font.title2();
headerElement.textColor = Color.blue();

const averageGWEI = (response["average"] / 10).toString();
widget.addText(averageGWEI + " " + GWEI_TEXT);

fastHeaderElement = widget.addText(FAST_TITLE);
fastHeaderElement.font = Font.title2();
fastHeaderElement.textColor = Color.blue();

const fastGWEI = (response["fast"] / 10).toString();
widget.addText(fastGWEI + " " + GWEI_TEXT);

widget.backgroundColor = Color.darkGray();

const timeNow = new Date().toString();
timeRefreshElement = widget.addText(timeNow);
timeRefreshElement.font = new Font("small", 6);

Script.setWidget(widget);

Script.complete();
