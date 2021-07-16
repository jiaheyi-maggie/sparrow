import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";

const sdk = new ChartsEmbedSDK({
  baseUrl: "https://charts.mongodb.com/charts-sparrow-development-apwxe",
});

const chart = sdk.createChart({
  chartId: "d84988a9-a5e6-4e0e-8954-22a930270b5c",
  height: "400px",
});

async function renderChart() {
    await chart.render(document.getElementById("chart"));
}

renderChart().catch((e) => window.alert(e.message));
