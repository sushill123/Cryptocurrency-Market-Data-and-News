
import "./Heatmap.css"


const HeatMap = () => {
    return (
      
     <div className="heatmap-container">
        <h1> Real-Time Forex Market Price</h1>
        <p>Our Forex Heatmap is designed to give you a visual representation of price movements, making it easy to spot trends and identify trading opportunities</p>
            <iframe src="https://www.tradingview.com/embed-widget/forex-cross-rates/?locale=en#%7B%22width%22%3A%22100%25%22%2C%22height%22%3A%22450%22%2C%22currencies%22%3A%5B%22EUR%22%2C%22USD%22%2C%22JPY%22%2C%22GBP%22%2C%22CHF%22%2C%22AUD%22%2C%22CAD%22%2C%22NZD%22%5D%2C%22isTransparent%22%3Atrue%2C%22colorTheme%22%3A%22dark%22%2C%22utm_source%22%3A%22www.tpglobalfx.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22forex-cross-rates%22%2C%22page-uri%22%3A%22www.tpglobalfx.com%2F%22%7D" title="description"></iframe>
     </div>

    )
}

export default HeatMap;