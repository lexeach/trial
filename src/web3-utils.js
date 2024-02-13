export const ICO = {
    address: '0x256Ba324D0cA8288C445C75885fb5e4119132D99',
    ABI: [{
            "inputs": [{
                    "internalType": "address",
                    "name": "_token",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "stableCoin_",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "exam_",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_baseTokenPrice",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_percentage",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_times",
                    "type": "uint256"
                },
                {
                    "internalType": "address payable",
                    "name": "_swapAddress",
                    "type": "address"
                },
                {
                    "internalType": "address payable",
                    "name": "_projectAddress",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_luckyReward",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [{
                    "indexed": true,
                    "internalType": "address",
                    "name": "sender",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "referrer",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "height",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "time",
                    "type": "uint256"
                }
            ],
            "name": "AutopoolIncome",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [{
                    "indexed": true,
                    "internalType": "address",
                    "name": "_sender",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_referrer",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_community",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_time",
                    "type": "uint256"
                }
            ],
            "name": "CoreMemberEntry",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [{
                    "indexed": true,
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_referral",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "_level",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_time",
                    "type": "uint256"
                }
            ],
            "name": "LevelsIncome",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [{
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "winner",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "luckyReward",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "startID",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "endID",
                    "type": "uint256"
                }
            ],
            "name": "LuckyDrawWin",
            "type": "event"
        },
        {
            "inputs": [{
                    "internalType": "uint256",
                    "name": "_referrerID",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_coreferrerID",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "Identity",
                    "type": "string"
                }
            ],
            "name": "Registration",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [{
                    "internalType": "address",
                    "name": "_rfrerAddress",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_coreferrerID",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "Identity",
                    "type": "string"
                }
            ],
            "name": "Registration2",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [{
                    "indexed": true,
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_partner",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "SendBalance",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [{
                    "indexed": false,
                    "internalType": "address",
                    "name": "_newProject",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "sender",
                    "type": "address"
                }
            ],
            "name": "SetProjectAddress",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [{
                    "indexed": false,
                    "internalType": "address",
                    "name": "_newSwap",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "sender",
                    "type": "address"
                }
            ],
            "name": "SetSwapAddress",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [{
                    "indexed": true,
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_referrer",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_time",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "Identity",
                    "type": "string"
                }
            ],
            "name": "SponsorIncome",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [{
                    "indexed": true,
                    "internalType": "address",
                    "name": "sender",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "partnerFee",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "now",
                    "type": "uint256"
                }
            ],
            "name": "partnerFeePaid",
            "type": "event"
        },
        {
            "inputs": [{
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            }],
            "name": "payPartnerFee",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [{
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            }],
            "name": "regCoreMember",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "setBeforeTime",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [{
                "internalType": "address",
                "name": "_exam",
                "type": "address"
            }],
            "name": "setExamContract",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [{
                "internalType": "bool",
                "name": "_status",
                "type": "bool"
            }],
            "name": "setMintStutus",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [{
                "internalType": "uint256",
                "name": "fess",
                "type": "uint256"
            }],
            "name": "setPartnerFee",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [{
                "internalType": "address payable",
                "name": "_newProject",
                "type": "address"
            }],
            "name": "setProjectAddress",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [{
                "internalType": "uint256",
                "name": "fess",
                "type": "uint256"
            }],
            "name": "setRegistrationFess",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [{
                "internalType": "address",
                "name": "_token",
                "type": "address"
            }],
            "name": "setRegStableCoin",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [{
                "internalType": "uint256",
                "name": "part",
                "type": "uint256"
            }],
            "name": "setReleasePart",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [{
                "internalType": "bool",
                "name": "_status",
                "type": "bool"
            }],
            "name": "setRewardNoRBCD",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [{
                "internalType": "bool",
                "name": "_status",
                "type": "bool"
            }],
            "name": "setRewardStutus",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [{
                "internalType": "address payable",
                "name": "_newSwap",
                "type": "address"
            }],
            "name": "setSwapAddress",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [{
                "internalType": "bool",
                "name": "_status",
                "type": "bool"
            }],
            "name": "setUnfreezingStutus",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [{
                "internalType": "bool",
                "name": "_status",
                "type": "bool"
            }],
            "name": "setUnfreezingStutusCoreTeam",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [{
                    "indexed": true,
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_partner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "_stage",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_time",
                    "type": "uint256"
                }
            ],
            "name": "stageIncome",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "takeClaim",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "unfreezeCoreTeamToken",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "unfreezeYourToken",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "Autopool_Level_Income",
            "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "beforeTime",
            "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [{
                "internalType": "address",
                "name": "_user",
                "type": "address"
            }],
            "name": "claimAvailable",
            "outputs": [{
                "internalType": "uint256",
                "name": "_token",
                "type": "uint256"
            }],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [{
                "internalType": "address",
                "name": "",
                "type": "address"
            }],
            "name": "claimTaken",
            "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "name": "coreList",
            "outputs": [{
                "internalType": "address",
                "name": "",
                "type": "address"
            }],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [{
                "internalType": "address",
                "name": "",
                "type": "address"
            }],
            "name": "coreusers",
            "outputs": [{
                    "internalType": "bool",
                    "name": "isExist",
                    "type": "bool"
                },
                {
                    "internalType": "uint256",
                    "name": "coreID",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "referrerID",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "referredUsers",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "income",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenPrice",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "receivedToken",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "regTime",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "currCoreID",
            "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "currUserID",
            "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [{
                "internalType": "address",
                "name": "",
                "type": "address"
            }],
            "name": "eligibleClaimPercentage",
            "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [{
                "internalType": "address",
                "name": "",
                "type": "address"
            }],
            "name": "eligibleCorePercentage",
            "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "exam",
            "outputs": [{
                "internalType": "contract Exam",
                "name": "",
                "type": "address"
            }],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getNextReward",
            "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "gettrxBalance",
            "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "isMinting",
            "outputs": [{
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "isRewarding",
            "outputs": [{
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "isRewardingNoRBCD",
            "outputs": [{
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "isUnfreezing",
            "outputs": [{
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "isUnfreezingCoreTeam",
            "outputs": [{
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "level_income",
            "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "name": "LEVEL_PRICE",
            "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "ownerWallet",
            "outputs": [{
                "internalType": "address",
                "name": "",
                "type": "address"
            }],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "partnerFee",
            "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [{
                "internalType": "address",
                "name": "",
                "type": "address"
            }],
            "name": "partnerID",
            "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "name": "partnerNo",
            "outputs": [{
                "internalType": "address",
                "name": "",
                "type": "address"
            }],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "REGESTRATION_FESS",
            "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [{
                "internalType": "address",
                "name": "",
                "type": "address"
            }],
            "name": "regTime",
            "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "releasePart",
            "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [{
                "internalType": "address",
                "name": "",
                "type": "address"
            }],
            "name": "releasePartTaken",
            "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "stableCoin",
            "outputs": [{
                "internalType": "contract IBEP20",
                "name": "",
                "type": "address"
            }],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "tokenPrice",
            "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "tokenReward",
            "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "total_rbcd",
            "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [{
                "internalType": "address",
                "name": "",
                "type": "address"
            }],
            "name": "totalFreeze",
            "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "totalQulifiedUser",
            "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "name": "userList",
            "outputs": [{
                "internalType": "address",
                "name": "",
                "type": "address"
            }],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [{
                "internalType": "address",
                "name": "",
                "type": "address"
            }],
            "name": "users",
            "outputs": [{
                    "internalType": "bool",
                    "name": "isExist",
                    "type": "bool"
                },
                {
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "referrerID",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "coreferrerID",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "referredUsers",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "coreferredUsers",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "income",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "batchPaid",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "autoPoolPayReceived",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "missedPoolPayment",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "autopoolPayReciever",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "levelIncomeReceived",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "stageIncomeReceived",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "incomeMissed",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]
}
export const BEP20 = {
    address: '0x072178f8229d19A3517F439bC9Ba23A29d3EB649',
    ABI: [
        { inputs: [], stateMutability: 'nonpayable', type: 'constructor' },
        {
            anonymous: false,
            inputs: [{
                    indexed: true,
                    internalType: 'address',
                    name: 'owner',
                    type: 'address',
                },
                {
                    indexed: true,
                    internalType: 'address',
                    name: 'spender',
                    type: 'address',
                },
                {
                    indexed: false,
                    internalType: 'uint256',
                    name: 'value',
                    type: 'uint256',
                },
            ],
            name: 'Approval',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{
                    indexed: true,
                    internalType: 'address',
                    name: 'previousOwner',
                    type: 'address',
                },
                {
                    indexed: true,
                    internalType: 'address',
                    name: 'newOwner',
                    type: 'address',
                },
            ],
            name: 'OwnershipTransferred',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{
                    indexed: true,
                    internalType: 'address',
                    name: 'from',
                    type: 'address',
                },
                { indexed: true, internalType: 'address', name: 'to', type: 'address' },
                {
                    indexed: false,
                    internalType: 'uint256',
                    name: 'value',
                    type: 'uint256',
                },
            ],
            name: 'Transfer',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{
                    indexed: true,
                    internalType: 'address',
                    name: '_unfreezer',
                    type: 'address',
                },
                {
                    indexed: true,
                    internalType: 'address',
                    name: '_to',
                    type: 'address',
                },
                {
                    indexed: false,
                    internalType: 'uint256',
                    name: '_amount',
                    type: 'uint256',
                },
            ],
            name: 'Unfreeze',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{
                    indexed: false,
                    internalType: 'address',
                    name: 'sender',
                    type: 'address',
                },
                {
                    indexed: false,
                    internalType: 'uint256',
                    name: '_percent',
                    type: 'uint256',
                },
            ],
            name: 'UnfreezePercent',
            type: 'event',
        },
        {
            inputs: [{ internalType: 'address', name: '', type: 'address' }],
            name: '_frozenBalance',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: 'owner', type: 'address' },
                { internalType: 'address', name: 'spender', type: 'address' },
            ],
            name: 'allowance',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: 'spender', type: 'address' },
                { internalType: 'uint256', name: 'amount', type: 'uint256' },
            ],
            name: 'approve',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
            name: 'balanceOf',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'uint256', name: '_amount', type: 'uint256' }],
            name: 'burn',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: 'account', type: 'address' },
                { internalType: 'uint256', name: 'amount', type: 'uint256' },
            ],
            name: 'burnFrom',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'decimals',
            outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: 'spender', type: 'address' },
                { internalType: 'uint256', name: 'subtractedValue', type: 'uint256' },
            ],
            name: 'decreaseAllowance',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: 'account', type: 'address' },
                { internalType: 'uint256', name: 'amount', type: 'uint256' },
            ],
            name: 'freezeToken',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'getOwner',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: 'spender', type: 'address' },
                { internalType: 'uint256', name: 'addedValue', type: 'uint256' },
            ],
            name: 'increaseAllowance',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: '_to', type: 'address' },
                { internalType: 'uint256', name: 'amount', type: 'uint256' },
            ],
            name: 'mint',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'name',
            outputs: [{ internalType: 'string', name: '', type: 'string' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'owner',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '', type: 'address' }],
            name: 'owners',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'renounceOwnership',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_owner', type: 'address' }],
            name: 'setOwners',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'symbol',
            outputs: [{ internalType: 'string', name: '', type: 'string' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'totalFreezeToken',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'totalSupply',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: 'recipient', type: 'address' },
                { internalType: 'uint256', name: 'amount', type: 'uint256' },
            ],
            name: 'transfer',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: 'sender', type: 'address' },
                { internalType: 'address', name: 'recipient', type: 'address' },
                { internalType: 'uint256', name: 'amount', type: 'uint256' },
            ],
            name: 'transferFrom',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }],
            name: 'transferOwnership',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'uint256', name: '_percent', type: 'uint256' }],
            name: 'unfreezePercent',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: 'account', type: 'address' },
                { internalType: 'uint256', name: 'amount', type: 'uint256' },
            ],
            name: 'unfreezeToken',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'nonpayable',
            type: 'function',
        },
    ],
}
export const USDT = {
    address: '0x55d398326f99059fF775485246999027B3197955',
    ABI: [{
            inputs: [],
            payable: false,
            stateMutability: 'nonpayable',
            type: 'constructor',
        },
        {
            anonymous: false,
            inputs: [{
                    indexed: true,
                    internalType: 'address',
                    name: 'owner',
                    type: 'address',
                },
                {
                    indexed: true,
                    internalType: 'address',
                    name: 'spender',
                    type: 'address',
                },
                {
                    indexed: false,
                    internalType: 'uint256',
                    name: 'value',
                    type: 'uint256',
                },
            ],
            name: 'Approval',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{
                    indexed: true,
                    internalType: 'address',
                    name: 'previousOwner',
                    type: 'address',
                },
                {
                    indexed: true,
                    internalType: 'address',
                    name: 'newOwner',
                    type: 'address',
                },
            ],
            name: 'OwnershipTransferred',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{
                    indexed: true,
                    internalType: 'address',
                    name: 'from',
                    type: 'address',
                },
                { indexed: true, internalType: 'address', name: 'to', type: 'address' },
                {
                    indexed: false,
                    internalType: 'uint256',
                    name: 'value',
                    type: 'uint256',
                },
            ],
            name: 'Transfer',
            type: 'event',
        },
        {
            constant: true,
            inputs: [],
            name: '_decimals',
            outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
            payable: false,
            stateMutability: 'view',
            type: 'function',
        },
        {
            constant: true,
            inputs: [],
            name: '_name',
            outputs: [{ internalType: 'string', name: '', type: 'string' }],
            payable: false,
            stateMutability: 'view',
            type: 'function',
        },
        {
            constant: true,
            inputs: [],
            name: '_symbol',
            outputs: [{ internalType: 'string', name: '', type: 'string' }],
            payable: false,
            stateMutability: 'view',
            type: 'function',
        },
        {
            constant: true,
            inputs: [
                { internalType: 'address', name: 'owner', type: 'address' },
                { internalType: 'address', name: 'spender', type: 'address' },
            ],
            name: 'allowance',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            payable: false,
            stateMutability: 'view',
            type: 'function',
        },
        {
            constant: false,
            inputs: [
                { internalType: 'address', name: 'spender', type: 'address' },
                { internalType: 'uint256', name: 'amount', type: 'uint256' },
            ],
            name: 'approve',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            payable: false,
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            constant: true,
            inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
            name: 'balanceOf',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            payable: false,
            stateMutability: 'view',
            type: 'function',
        },
        {
            constant: false,
            inputs: [{ internalType: 'uint256', name: 'amount', type: 'uint256' }],
            name: 'burn',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            payable: false,
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            constant: true,
            inputs: [],
            name: 'decimals',
            outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
            payable: false,
            stateMutability: 'view',
            type: 'function',
        },
        {
            constant: false,
            inputs: [
                { internalType: 'address', name: 'spender', type: 'address' },
                { internalType: 'uint256', name: 'subtractedValue', type: 'uint256' },
            ],
            name: 'decreaseAllowance',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            payable: false,
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            constant: true,
            inputs: [],
            name: 'getOwner',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            payable: false,
            stateMutability: 'view',
            type: 'function',
        },
        {
            constant: false,
            inputs: [
                { internalType: 'address', name: 'spender', type: 'address' },
                { internalType: 'uint256', name: 'addedValue', type: 'uint256' },
            ],
            name: 'increaseAllowance',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            payable: false,
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            constant: false,
            inputs: [{ internalType: 'uint256', name: 'amount', type: 'uint256' }],
            name: 'mint',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            payable: false,
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            constant: true,
            inputs: [],
            name: 'name',
            outputs: [{ internalType: 'string', name: '', type: 'string' }],
            payable: false,
            stateMutability: 'view',
            type: 'function',
        },
        {
            constant: true,
            inputs: [],
            name: 'owner',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            payable: false,
            stateMutability: 'view',
            type: 'function',
        },
        {
            constant: false,
            inputs: [],
            name: 'renounceOwnership',
            outputs: [],
            payable: false,
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            constant: true,
            inputs: [],
            name: 'symbol',
            outputs: [{ internalType: 'string', name: '', type: 'string' }],
            payable: false,
            stateMutability: 'view',
            type: 'function',
        },
        {
            constant: true,
            inputs: [],
            name: 'totalSupply',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            payable: false,
            stateMutability: 'view',
            type: 'function',
        },
        {
            constant: false,
            inputs: [
                { internalType: 'address', name: 'recipient', type: 'address' },
                { internalType: 'uint256', name: 'amount', type: 'uint256' },
            ],
            name: 'transfer',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            payable: false,
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            constant: false,
            inputs: [
                { internalType: 'address', name: 'sender', type: 'address' },
                { internalType: 'address', name: 'recipient', type: 'address' },
                { internalType: 'uint256', name: 'amount', type: 'uint256' },
            ],
            name: 'transferFrom',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            payable: false,
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            constant: false,
            inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }],
            name: 'transferOwnership',
            outputs: [],
            payable: false,
            stateMutability: 'nonpayable',
            type: 'function',
        },
    ],
}
export const EXAM = {
    address: '0x49051d23a86039cF682c032cE891043a99c7D158',
    ABI: [{
            inputs: [],
            stateMutability: 'nonpayable',
            type: 'constructor',
        },
        {
            anonymous: false,
            inputs: [{
                    indexed: false,
                    internalType: 'address',
                    name: 'sender',
                    type: 'address',
                },
                {
                    indexed: false,
                    internalType: 'address',
                    name: '_to',
                    type: 'address',
                },
                {
                    indexed: false,
                    internalType: 'uint256',
                    name: 'amount',
                    type: 'uint256',
                },
            ],
            name: 'Withdrawal',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{
                    indexed: true,
                    internalType: 'address',
                    name: 'sender',
                    type: 'address',
                },
                {
                    indexed: false,
                    internalType: 'uint256',
                    name: 'partnerFee',
                    type: 'uint256',
                },
                {
                    indexed: false,
                    internalType: 'uint256',
                    name: 'now',
                    type: 'uint256',
                },
            ],
            name: 'paidPartnerFee',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{
                    indexed: true,
                    internalType: 'address',
                    name: 'sender',
                    type: 'address',
                },
                {
                    indexed: false,
                    internalType: 'string',
                    name: 'status',
                    type: 'string',
                },
                {
                    indexed: false,
                    internalType: 'uint256',
                    name: 'now',
                    type: 'uint256',
                },
            ],
            name: 'result',
            type: 'event',
        },
        {
            inputs: [{
                internalType: 'uint256',
                name: '_qPercent',
                type: 'uint256',
            }, ],
            name: 'setPassPercent',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{
                    internalType: 'uint256[]',
                    name: 'questions',
                    type: 'uint256[]',
                },
                {
                    internalType: 'uint256[]',
                    name: 'corr_choices',
                    type: 'uint256[]',
                },
            ],
            name: 'setQuestion',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{
                    internalType: 'uint256[]',
                    name: 'setQuest',
                    type: 'uint256[]',
                },
                {
                    internalType: 'uint256[]',
                    name: 'answer',
                    type: 'uint256[]',
                },
            ],
            name: 'subAnswer',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{
                internalType: 'address',
                name: '_student',
                type: 'address',
            }, ],
            name: 'isPass',
            outputs: [{
                internalType: 'bool',
                name: '',
                type: 'bool',
            }, ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{
                internalType: 'address',
                name: '',
                type: 'address',
            }, ],
            name: 'isPassedPercent',
            outputs: [{
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            }, ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{
                internalType: 'address',
                name: '_student',
                type: 'address',
            }, ],
            name: 'lastAttempt',
            outputs: [{
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            }, ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{
                internalType: 'address',
                name: '_student',
                type: 'address',
            }, ],
            name: 'noOfAttempts',
            outputs: [{
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            }, ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'owner',
            outputs: [{
                internalType: 'address',
                name: '',
                type: 'address',
            }, ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'passPercent',
            outputs: [{
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            }, ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'totalPassedUser',
            outputs: [{
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            }, ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'totalQuestions',
            outputs: [{
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            }, ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'totalQulifiedUser',
            outputs: [{
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            }, ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{
                internalType: 'address',
                name: '',
                type: 'address',
            }, ],
            name: 'user',
            outputs: [{
                    internalType: 'uint256',
                    name: 'obtainMarks',
                    type: 'uint256',
                },
                {
                    internalType: 'uint256',
                    name: 'lastAttain',
                    type: 'uint256',
                },
                {
                    internalType: 'uint256',
                    name: 'totalMarks',
                    type: 'uint256',
                },
                {
                    internalType: 'string',
                    name: 'status',
                    type: 'string',
                },
                {
                    internalType: 'uint256',
                    name: 'percentage',
                    type: 'uint256',
                },
                {
                    internalType: 'uint256',
                    name: 'attempts',
                    type: 'uint256',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
    ],
}