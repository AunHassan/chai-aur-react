import React, { useEffect, useState } from 'react'


const useCurrencyInfo = (currency) => {
    // let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    // https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json
    let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    // let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/pkr.json`
    const [Data, setData] = useState({})
    useEffect(() => {
    fetch(url)
    .then((res) => res.json())
    .then((res)=> setData(res[currency]))
    // console.log(Data)

    }, [currency])
    // console.log(Data)
    return Data
}

export default useCurrencyInfo
