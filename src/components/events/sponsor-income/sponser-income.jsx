import React, { useState, useEffect } from "react";
import "./sponser-income.css";
import Moralis from "moralis";
// require("dotenv").config();
// import dotenv from "dotenv";
// dotenv.config(); // Load environment variables
const ENV = require("./../../../utils/data");
function SponserIncome({ ...props }) {
  console.log("Called Sponsor income Components");
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    const runApp = async () => {
      if (!Moralis.Core.isStarted)
        await Moralis.start({
          apiKey: ENV.binanceKey,
        });
      const address = ENV.contractAddress; //"0xe184a68428072f0102f073a098af8ee7705519dc";
      const chain = ENV.chainID;
      const topic =
        "0x23b5ce99046ef19224b4cbceac4f2c894c141e5e60c2e62e7f3edff030f85645";
      const abi = {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "_user",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "_referrer",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "_time",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "string",
            name: "Identity",
            type: "string",
          },
        ],
        name: "SponsorIncome",
        type: "event",
      };
      let limit = 10000;
      const response = await Moralis.EvmApi.events.getContractEvents({
        address,
        chain,
        limit,
        topic,
        abi,
      });
      let datas = response.toJSON().result.map((transaction) => ({
        user: transaction.data._user,
        referrer: transaction.data._referrer,
        date: new Date(transaction.data._time * 1000)
          .toISOString()
          .split("T")[0], // Adjust the format as needed
        time: new Date(transaction.data._time * 1000)
          .toTimeString()
          .split(" ")[0],
        identity: transaction.data.Identity,
        transactionHash: transaction.transaction_hash,
      }));
      setTransactions(datas);
    };
    runApp();
  }, [props.account]);

  const handleLinkClick = (url) => {
    window.open(ENV.baseUrl + url, "_blank");
  };
  const filteredTransactions = transactions.filter(
    (transaction) =>
      transaction.referrer.toLowerCase() === props.account.toLowerCase()
  );
  return (
    <div className="PoolIncome-Sponsor">
      <h1>Transaction History Of Sponsor Income</h1>
      <div className="table-container">
        <div>
          <label>Filter by Referrer:</label>
        </div>
        <table>
          <thead>
            <tr>
              <th>User</th>
              <th>Time</th>
              <th>Identity</th>
              <th>Transaction Hash</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.map((transaction) => (
              <tr key={transaction.user}>
                <td>{transaction.user}</td>
                <td>
                  {transaction.date} <br /> {transaction.time}
                </td>
                <td>{transaction.identity}</td>
                <td className="scrollable-column">
                  <a
                    onClick={() => handleLinkClick(transaction.transactionHash)}
                    className="transaction-link"
                  >
                    {transaction.transactionHash}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SponserIncome;
