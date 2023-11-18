/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type { SwapPair, SwapPairInterface } from "../../contracts/SwapPair";

const _abi = [
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "Burn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
    ],
    name: "Mint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0In",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1In",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0Out",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1Out",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "Swap",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint112",
        name: "reserve0",
        type: "uint112",
      },
      {
        indexed: false,
        internalType: "uint112",
        name: "reserve1",
        type: "uint112",
      },
    ],
    name: "Sync",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    constant: true,
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "MINIMUM_LIQUIDITY",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "PERMIT_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "burn",
    outputs: [
      {
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "factory",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getReserves",
    outputs: [
      {
        internalType: "uint112",
        name: "_reserve0",
        type: "uint112",
      },
      {
        internalType: "uint112",
        name: "_reserve1",
        type: "uint112",
      },
      {
        internalType: "uint32",
        name: "_blockTimestampLast",
        type: "uint32",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "_token0",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token1",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "kLast",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "liquidity",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "price0CumulativeLast",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "price1CumulativeLast",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "skim",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "amount0Out",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount1Out",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "swap",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "sync",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "token0",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "token1",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040526001600c5534801561001557600080fd5b50604051469080605261237c8239604080519182900360520182208282018252600883526753776170204c507360c01b6020938401528151808301835260018152603160f81b908401528151808401919091527fc65aada721325012a1dc40b5bb6b388bddeac9ea24a18af45cc2f9390f52364b818301527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6606082015260808101949094523060a0808601919091528151808603909101815260c09094019052825192019190912060035550600580546001600160a01b03191633179055612279806101036000396000f3fe608060405234801561001057600080fd5b50600436106101a95760003560e01c80636a627842116100f9578063ba9a7a5611610097578063d21220a711610071578063d21220a714610534578063d505accf1461053c578063dd62ed3e1461058d578063fff6cae9146105bb576101a9565b8063ba9a7a56146104fe578063bc25cf7714610506578063c45a01551461052c576101a9565b80637ecebe00116100d35780637ecebe001461046557806389afcb441461048b57806395d89b41146104ca578063a9059cbb146104d2576101a9565b80636a6278421461041157806370a08231146104375780637464fc3d1461045d576101a9565b806323b872dd116101665780633644e515116101405780633644e515146103cb578063485cc955146103d35780635909c0d5146104015780635a3d549314610409576101a9565b806323b872dd1461036f57806330adf81f146103a5578063313ce567146103ad576101a9565b8063022c0d9f146101ae57806306fdde031461023c5780630902f1ac146102b9578063095ea7b3146102f15780630dfe16811461033157806318160ddd14610355575b600080fd5b61023a600480360360808110156101c457600080fd5b8135916020810135916001600160a01b0360408301351691908101906080810160608201356401000000008111156101fb57600080fd5b82018360208201111561020d57600080fd5b8035906020019184600183028401116401000000008311171561022f57600080fd5b5090925090506105c3565b005b610244610b12565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561027e578181015183820152602001610266565b50505050905090810190601f1680156102ab5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102c1610b36565b604080516001600160701b03948516815292909316602083015263ffffffff168183015290519081900360600190f35b61031d6004803603604081101561030757600080fd5b506001600160a01b038135169060200135610b60565b604080519115158252519081900360200190f35b610339610b77565b604080516001600160a01b039092168252519081900360200190f35b61035d610b86565b60408051918252519081900360200190f35b61031d6004803603606081101561038557600080fd5b506001600160a01b03813581169160208101359091169060400135610b8c565b61035d610c26565b6103b5610c4a565b6040805160ff9092168252519081900360200190f35b61035d610c4f565b61023a600480360360408110156103e957600080fd5b506001600160a01b0381358116916020013516610c55565b61035d610cd8565b61035d610cde565b61035d6004803603602081101561042757600080fd5b50356001600160a01b0316610ce4565b61035d6004803603602081101561044d57600080fd5b50356001600160a01b0316610fe3565b61035d610ff5565b61035d6004803603602081101561047b57600080fd5b50356001600160a01b0316610ffb565b6104b1600480360360208110156104a157600080fd5b50356001600160a01b031661100d565b6040805192835260208301919091528051918290030190f35b6102446113b2565b61031d600480360360408110156104e857600080fd5b506001600160a01b0381351690602001356113d5565b61035d6113e2565b61023a6004803603602081101561051c57600080fd5b50356001600160a01b03166113e8565b610339611552565b610339611561565b61023a600480360360e081101561055257600080fd5b506001600160a01b03813581169160208101359091169060408101359060608101359060ff6080820135169060a08101359060c00135611570565b61035d600480360360408110156105a357600080fd5b506001600160a01b038135811691602001351661176d565b61023a61178a565b600c5460011461060d576040805162461bcd60e51b815260206004820152601060248201526f14ddd85c14185a5c8e881313d0d2d15160821b604482015290519081900360640190fd5b6000600c55841515806106205750600084115b61065b5760405162461bcd60e51b81526004018080602001828103825260248152602001806121fa6024913960400191505060405180910390fd5b600080610666610b36565b5091509150816001600160701b03168710801561068b5750806001600160701b031686105b6106dc576040805162461bcd60e51b815260206004820181905260248201527f53776170506169723a20494e53554646494349454e545f4c4951554944495459604482015290519081900360640190fd5b60065460075460009182916001600160a01b0391821691908116908916821480159061071a5750806001600160a01b0316896001600160a01b031614155b610762576040805162461bcd60e51b815260206004820152601460248201527353776170506169723a20494e56414c49445f544f60601b604482015290519081900360640190fd5b8a1561077357610773828a8d6118eb565b891561078457610784818a8c6118eb565b861561083f57886001600160a01b031663df9aee68338d8d8c8c6040518663ffffffff1660e01b815260040180866001600160a01b03166001600160a01b03168152602001858152602001848152602001806020018281038252848482818152602001925080828437600081840152601f19601f8201169050808301925050509650505050505050600060405180830381600087803b15801561082657600080fd5b505af115801561083a573d6000803e3d6000fd5b505050505b604080516370a0823160e01b815230600482015290516001600160a01b038416916370a08231916024808301926020929190829003018186803b15801561088557600080fd5b505afa158015610899573d6000803e3d6000fd5b505050506040513d60208110156108af57600080fd5b5051604080516370a0823160e01b815230600482015290519195506001600160a01b038316916370a0823191602480820192602092909190829003018186803b1580156108fb57600080fd5b505afa15801561090f573d6000803e3d6000fd5b505050506040513d602081101561092557600080fd5b5051925060009150506001600160701b0385168a90038311610948576000610957565b89856001600160701b03160383035b9050600089856001600160701b0316038311610974576000610983565b89856001600160701b03160383035b905060008211806109945750600081115b6109cf5760405162461bcd60e51b81526004018080602001828103825260238152602001806121b06023913960400191505060405180910390fd5b6000610a036109e584601963ffffffff611a8516565b6109f78761271063ffffffff611a8516565b9063ffffffff611ae816565b90506000610a1b6109e584601963ffffffff611a8516565b9050610a4d6305f5e100610a416001600160701b038b8116908b1663ffffffff611a8516565b9063ffffffff611a8516565b610a5d838363ffffffff611a8516565b1015610a9e576040805162461bcd60e51b815260206004820152600b60248201526a53776170506169723a204b60a81b604482015290519081900360640190fd5b5050610aac84848888611b38565b60408051838152602081018390528082018d9052606081018c905290516001600160a01b038b169133917fd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d8229181900360800190a350506001600c55505050505050505050565b6040518060400160405280600881526020016753776170204c507360c01b81525081565b6008546001600160701b0380821692600160701b830490911691600160e01b900463ffffffff1690565b6000610b6d338484611cfc565b5060015b92915050565b6006546001600160a01b031681565b60005481565b6001600160a01b038316600090815260026020908152604080832033845290915281205460001914610c11576001600160a01b0384166000908152600260209081526040808320338452909152902054610bec908363ffffffff611ae816565b6001600160a01b03851660009081526002602090815260408083203384529091529020555b610c1c848484611d5e565b5060019392505050565b7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b601281565b60035481565b6005546001600160a01b03163314610caa576040805162461bcd60e51b815260206004820152601360248201527229bbb0b82830b4b91d102327a92124a22222a760691b604482015290519081900360640190fd5b600680546001600160a01b039384166001600160a01b03199182161790915560078054929093169116179055565b60095481565b600a5481565b6000600c54600114610d30576040805162461bcd60e51b815260206004820152601060248201526f14ddd85c14185a5c8e881313d0d2d15160821b604482015290519081900360640190fd5b6000600c81905580610d40610b36565b50600654604080516370a0823160e01b815230600482015290519395509193506000926001600160a01b03909116916370a08231916024808301926020929190829003018186803b158015610d9457600080fd5b505afa158015610da8573d6000803e3d6000fd5b505050506040513d6020811015610dbe57600080fd5b5051600754604080516370a0823160e01b815230600482015290519293506000926001600160a01b03909216916370a0823191602480820192602092909190829003018186803b158015610e1157600080fd5b505afa158015610e25573d6000803e3d6000fd5b505050506040513d6020811015610e3b57600080fd5b505190506000610e5a836001600160701b03871663ffffffff611ae816565b90506000610e77836001600160701b03871663ffffffff611ae816565b90506000610e858787611e18565b60005490915080610ec257610eae6103e86109f7610ea9878763ffffffff611a8516565b611f8b565b9850610ebd60006103e8611fdd565b610f11565b610f0e6001600160701b038916610edf868463ffffffff611a8516565b81610ee657fe5b046001600160701b038916610f01868563ffffffff611a8516565b81610f0857fe5b04612073565b98505b60008911610f505760405162461bcd60e51b81526004018080602001828103825260278152602001806121d36027913960400191505060405180910390fd5b610f5a8a8a611fdd565b610f6686868a8a611b38565b8115610f9657600854610f92906001600160701b0380821691600160701b90041663ffffffff611a8516565b600b555b6040805185815260208101859052815133927f4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f928290030190a250506001600c5550949695505050505050565b60016020526000908152604090205481565b600b5481565b60046020526000908152604090205481565b600080600c5460011461105a576040805162461bcd60e51b815260206004820152601060248201526f14ddd85c14185a5c8e881313d0d2d15160821b604482015290519081900360640190fd5b6000600c8190558061106a610b36565b50600654600754604080516370a0823160e01b815230600482015290519496509294506001600160a01b039182169391169160009184916370a08231916024808301926020929190829003018186803b1580156110c657600080fd5b505afa1580156110da573d6000803e3d6000fd5b505050506040513d60208110156110f057600080fd5b5051604080516370a0823160e01b815230600482015290519192506000916001600160a01b038516916370a08231916024808301926020929190829003018186803b15801561113e57600080fd5b505afa158015611152573d6000803e3d6000fd5b505050506040513d602081101561116857600080fd5b5051306000908152600160205260408120549192506111878888611e18565b6000549091508061119e848763ffffffff611a8516565b816111a557fe5b049a50806111b9848663ffffffff611a8516565b816111c057fe5b04995060008b1180156111d3575060008a115b61120e5760405162461bcd60e51b815260040180806020018281038252602781526020018061221e6027913960400191505060405180910390fd5b611218308461208b565b611223878d8d6118eb565b61122e868d8c6118eb565b604080516370a0823160e01b815230600482015290516001600160a01b038916916370a08231916024808301926020929190829003018186803b15801561127457600080fd5b505afa158015611288573d6000803e3d6000fd5b505050506040513d602081101561129e57600080fd5b5051604080516370a0823160e01b815230600482015290519196506001600160a01b038816916370a0823191602480820192602092909190829003018186803b1580156112ea57600080fd5b505afa1580156112fe573d6000803e3d6000fd5b505050506040513d602081101561131457600080fd5b5051935061132485858b8b611b38565b811561135457600854611350906001600160701b0380821691600160701b90041663ffffffff611a8516565b600b555b604080518c8152602081018c905281516001600160a01b038f169233927fdccd412f0b1252819cb1fd330b93224ca42612892bb3f4f789976e6d81936496929081900390910190a35050505050505050506001600c81905550915091565b604051806040016040528060078152602001660537761702d4c560cc1b81525081565b6000610b6d338484611d5e565b6103e881565b600c54600114611432576040805162461bcd60e51b815260206004820152601060248201526f14ddd85c14185a5c8e881313d0d2d15160821b604482015290519081900360640190fd5b6000600c55600654600754600854604080516370a0823160e01b815230600482015290516001600160a01b0394851694909316926114e192859287926114dc926001600160701b03169185916370a0823191602480820192602092909190829003018186803b1580156114a457600080fd5b505afa1580156114b8573d6000803e3d6000fd5b505050506040513d60208110156114ce57600080fd5b50519063ffffffff611ae816565b6118eb565b600854604080516370a0823160e01b8152306004820152905161154892849287926114dc92600160701b90046001600160701b0316916001600160a01b038616916370a0823191602480820192602092909190829003018186803b1580156114a457600080fd5b50506001600c5550565b6005546001600160a01b031681565b6007546001600160a01b031681565b428410156115b5576040805162461bcd60e51b815260206004820152600d60248201526c14ddd85c0e8811561412549151609a1b604482015290519081900360640190fd5b6003546001600160a01b0380891660008181526004602090815260408083208054600180820190925582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98186015280840196909652958d166060860152608085018c905260a085019590955260c08085018b90528151808603909101815260e08501825280519083012061190160f01b6101008601526101028501969096526101228085019690965280518085039096018652610142840180825286519683019690962095839052610162840180825286905260ff89166101828501526101a284018890526101c28401879052519193926101e280820193601f1981019281900390910190855afa1580156116d0573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116158015906117065750886001600160a01b0316816001600160a01b0316145b611757576040805162461bcd60e51b815260206004820152601760248201527f537761703a20494e56414c49445f5349474e4154555245000000000000000000604482015290519081900360640190fd5b611762898989611cfc565b505050505050505050565b600260209081526000928352604080842090915290825290205481565b600c546001146117d4576040805162461bcd60e51b815260206004820152601060248201526f14ddd85c14185a5c8e881313d0d2d15160821b604482015290519081900360640190fd5b6000600c55600654604080516370a0823160e01b815230600482015290516118e4926001600160a01b0316916370a08231916024808301926020929190829003018186803b15801561182557600080fd5b505afa158015611839573d6000803e3d6000fd5b505050506040513d602081101561184f57600080fd5b5051600754604080516370a0823160e01b815230600482015290516001600160a01b03909216916370a0823191602480820192602092909190829003018186803b15801561189c57600080fd5b505afa1580156118b0573d6000803e3d6000fd5b505050506040513d60208110156118c657600080fd5b50516008546001600160701b0380821691600160701b900416611b38565b6001600c55565b604080518082018252601981527f7472616e7366657228616464726573732c75696e74323536290000000000000060209182015281516001600160a01b0385811660248301526044808301869052845180840390910181526064909201845291810180516001600160e01b031663a9059cbb60e01b1781529251815160009460609489169392918291908083835b602083106119985780518252601f199092019160209182019101611979565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146119fa576040519150601f19603f3d011682016040523d82523d6000602084013e6119ff565b606091505b5091509150818015611a2d575080511580611a2d5750808060200190516020811015611a2a57600080fd5b50515b611a7e576040805162461bcd60e51b815260206004820152601960248201527f53776170506169723a205452414e534645525f4641494c454400000000000000604482015290519081900360640190fd5b5050505050565b6000811580611aa057505080820282828281611a9d57fe5b04145b610b71576040805162461bcd60e51b815260206004820152601460248201527364732d6d6174682d6d756c2d6f766572666c6f7760601b604482015290519081900360640190fd5b80820382811115610b71576040805162461bcd60e51b815260206004820152601560248201527464732d6d6174682d7375622d756e646572666c6f7760581b604482015290519081900360640190fd5b6001600160701b038411801590611b5657506001600160701b038311155b611b9c576040805162461bcd60e51b815260206004820152601260248201527153776170506169723a204f564552464c4f5760701b604482015290519081900360640190fd5b60085463ffffffff42811691600160e01b90048116820390811615801590611bcc57506001600160701b03841615155b8015611be057506001600160701b03831615155b15611c51578063ffffffff16611c0e85611bf986612129565b6001600160e01b03169063ffffffff61213b16565b600980546001600160e01b03929092169290920201905563ffffffff8116611c3984611bf987612129565b600a80546001600160e01b0392909216929092020190555b600880546dffffffffffffffffffffffffffff19166001600160701b03888116919091176dffffffffffffffffffffffffffff60701b1916600160701b8883168102919091176001600160e01b0316600160e01b63ffffffff871602179283905560408051848416815291909304909116602082015281517f1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1929181900390910190a1505050505050565b6001600160a01b03808416600081815260026020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b038316600090815260016020526040902054611d87908263ffffffff611ae816565b6001600160a01b038085166000908152600160205260408082209390935590841681522054611dbc908263ffffffff61216016565b6001600160a01b0380841660008181526001602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b600080600560009054906101000a90046001600160a01b03166001600160a01b031663017e7e586040518163ffffffff1660e01b815260040160206040518083038186803b158015611e6957600080fd5b505afa158015611e7d573d6000803e3d6000fd5b505050506040513d6020811015611e9357600080fd5b5051600b546001600160a01b038216158015945091925090611f77578015611f72576000611ed6610ea96001600160701b0388811690881663ffffffff611a8516565b90506000611ee383611f8b565b905080821115611f6f576000611f166008610a41611f07868663ffffffff611ae816565b6000549063ffffffff611a8516565b90506000611f4b611f2e84600863ffffffff611a8516565b611f3f86601163ffffffff611a8516565b9063ffffffff61216016565b90506000818381611f5857fe5b0490508015611f6b57611f6b8782611fdd565b5050505b50505b611f83565b8015611f83576000600b555b505092915050565b60006003821115611fce575080600160028204015b81811015611fc857809150600281828581611fb757fe5b040181611fc057fe5b049050611fa0565b50611fd8565b8115611fd8575060015b919050565b600054611ff0908263ffffffff61216016565b60009081556001600160a01b03831681526001602052604090205461201b908263ffffffff61216016565b6001600160a01b03831660008181526001602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b60008183106120825781612084565b825b9392505050565b6001600160a01b0382166000908152600160205260409020546120b4908263ffffffff611ae816565b6001600160a01b038316600090815260016020526040812091909155546120e1908263ffffffff611ae816565b60009081556040805183815290516001600160a01b038516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef919081900360200190a35050565b6001600160701b0316600160701b0290565b60006001600160701b0382166001600160e01b0384168161215857fe5b049392505050565b80820182811015610b71576040805162461bcd60e51b815260206004820152601460248201527364732d6d6174682d6164642d6f766572666c6f7760601b604482015290519081900360640190fdfe53776170506169723a20494e53554646494349454e545f494e5055545f414d4f554e5453776170506169723a20494e53554646494349454e545f4c49515549444954595f4d494e54454453776170506169723a20494e53554646494349454e545f4f55545055545f414d4f554e5453776170506169723a20494e53554646494349454e545f4c49515549444954595f4255524e4544a265627a7a723158207d6c80632e2950308d7e35e6b5c8c001c6092006a28e88f82705365a677a8c0864736f6c63430005100032454950373132446f6d61696e28737472696e67206e616d652c737472696e672076657273696f6e2c75696e7432353620636861696e49642c6164647265737320766572696679696e67436f6e747261637429";

type SwapPairConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SwapPairConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SwapPair__factory extends ContractFactory {
  constructor(...args: SwapPairConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      SwapPair & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): SwapPair__factory {
    return super.connect(runner) as SwapPair__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SwapPairInterface {
    return new Interface(_abi) as SwapPairInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): SwapPair {
    return new Contract(address, _abi, runner) as unknown as SwapPair;
  }
}