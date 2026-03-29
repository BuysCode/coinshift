import { useState } from "react"

export default function Card () {
  const [fromCurrency, setFromCurrency] = useState<string>("USD")
  const [toCurrency, setToCurrency] = useState<string>("EUR")

  const [loading, setLoading] = useState<boolean>(false)

  const [amount, setAmount] = useState<number>(0)
  const [finalValue, setFinalValue] = useState<number>(0)

  const handleClick = async () => {
    setLoading(true)
    const baseAPI = `https://v6.exchangerate-api.com/v6/${import.meta.env.VITE_API_KEY as string}/latest`

    try {
      const response = await fetch(`${baseAPI}/${fromCurrency}`)
      const data = await response.json()

      if (data.result === "success") {
        const exchangeRate = data.conversion_rates[toCurrency]
        const convertedAmount = amount * exchangeRate

        const formattedConvertedAmount = parseFloat(convertedAmount.toFixed(2))

        setLoading(false)
        setFinalValue(formattedConvertedAmount)
      } else {
        console.error("Error fetching exchange rates:", data.error)
      }
    } catch (error) {
      console.error("Error fetching exchange rates:", error)
      setLoading(false)
    }
  }

  return (
    <div className="card">
      <h2 className="card-title">Currency Converter</h2>
      <div className="currency-selects">
        <div className="select-group">
          <label htmlFor="from-currency">From:</label>
          <select 
            id="from-currency"
            value={fromCurrency} 
            onChange={(e) => setFromCurrency(e.target.value)}
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </select>
        </div>
        <div className="select-group">
          <label htmlFor="to-currency">To:</label>
          <select 
            id="to-currency"
            value={toCurrency} 
            onChange={(e) => setToCurrency(e.target.value)}
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </select>
        </div>
      </div>
      <div className="fields-div">
        <div className="input-group">
          <label htmlFor="amount">Amount:</label>
          <input 
            id="amount"
            type="number" 
            value={amount} 
            onChange={(e) => setAmount(Number(e.target.value))} 
            placeholder="Enter amount" 
          />
        </div>
        <div className="result-group">
          <label>Converted Amount:</label>
          <div className="result">
            {finalValue === 0 ? "Exchange rate will appear here" : `${finalValue.toLocaleString("en-US", {
              style: "currency", currency: toCurrency
            })}`}
          </div>
        </div>
      </div>

      <button onClick={handleClick} disabled={loading}>
        {!loading ? "Convert" : (
          <div className="loading-status">
            <span className="spinner"></span>
            Converting...
          </div>
        )}
      </button>
    </div>
  )
}