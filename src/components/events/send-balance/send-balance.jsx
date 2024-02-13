import React, { useState, useEffect } from "react";
import "./send-balance.css";
import Moralis from "moralis";
// import dotenv from "dotenv";
// dotenv.config(); // Load environment variables
const ENV = require("./../../../utils/data");
// require("dotenv").config();
function SendBalance({ ...props }) {
  const [transactions, setTransactions] = useState([]);
  const [transactionData, setTransactionData] = useState([]);
  console.log("Props before useeffect: ", props);
  useEffect(() => {
    const runApp = async () => {
      if (!Moralis.Core.isStarted)
        await Moralis.start({
          apiKey: ENV.binanceKey,
        });
      const address = ENV.contractAddress; //"0xe184a68428072f0102f073a098af8ee7705519dc";
      const chain = ENV.chainID;
      const topic =
        "0xa7eecec694b4144f4c7de3d21418bc45bd631e03acf0edd749a32d6a96e1f66a";
      const abi = {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "user",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "_partner",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "SendBalance",
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
      console.log("event Response ", response.toJSON().result);
      let datas = response.toJSON().result.map((transaction) => ({
        referrer: transaction.data._partner,
        amount: parseFloat(
          props.web3.utils.fromWei(transaction.data.amount, "ether")
        ).toFixed(4),
        transactionHash: transaction.transaction_hash,
      }));
      setTransactionData(datas);
      console.log("setting data : ", datas);
      const filteredTransactions = datas.filter(
        (transaction) =>
          transaction.amount != 0 &&
          transaction.referrer ==
            (props.account ? props.account.toLowerCase() : props.account)
      );
      console.log("Data of transaction: ", filteredTransactions);
      setTransactions(filteredTransactions);
    };
    runApp();
  }, [props.account]);

  console.log("Props account :", props.account);
  const handleLinkClick = (url) => {
    window.open(ENV.baseUrl + url, "_blank");
  };
  return (
    <div className="PoolIncome-SendBalance">
      <h1>Transaction History Of Send Balance</h1>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Referrer</th>
              <th>amount</th>
              <th>Transaction Hash</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.user}>
                <td>{transaction.referrer}</td>
                <td>{transaction.amount}</td>
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

export default SendBalance;
