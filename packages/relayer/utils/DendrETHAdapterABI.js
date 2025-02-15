export default [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'dendrETHAddress',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'sourceChainId',
        type: 'uint256'
      },
      {
        internalType: 'address',
        name: 'sourceYaho',
        type: 'address'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'slot',
        type: 'uint256'
      }
    ],
    name: 'BlockHeaderNotAvailable',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'blockNumber',
        type: 'uint256'
      },
      {
        internalType: 'bytes32',
        name: 'blockHash',
        type: 'bytes32'
      },
      {
        internalType: 'bytes32',
        name: 'storedBlockHash',
        type: 'bytes32'
      }
    ],
    name: 'ConflictingBlockHeader',
    type: 'error'
  },
  {
    inputs: [],
    name: 'ErrorParseReceipt',
    type: 'error'
  },
  {
    inputs: [],
    name: 'InvalidBlockHashProof',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'length',
        type: 'uint256'
      }
    ],
    name: 'InvalidBlockHeaderLength',
    type: 'error'
  },
  {
    inputs: [],
    name: 'InvalidBlockHeaderRLP',
    type: 'error'
  },
  {
    inputs: [],
    name: 'InvalidBlockNumberProof',
    type: 'error'
  },
  {
    inputs: [],
    name: 'InvalidEventSignature',
    type: 'error'
  },
  {
    inputs: [],
    name: 'InvalidEventSource',
    type: 'error'
  },
  {
    inputs: [],
    name: 'InvalidReceiptsRoot',
    type: 'error'
  },
  {
    inputs: [],
    name: 'InvalidUpdate',
    type: 'error'
  },
  {
    inputs: [],
    name: 'UnsupportedTxType',
    type: 'error'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'id',
        type: 'uint256'
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'hash',
        type: 'bytes32'
      }
    ],
    name: 'HashStored',
    type: 'event'
  },
  {
    inputs: [],
    name: 'DENDRETH_ADDRESS',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'SOURCE_CHAIN_ID',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'SOURCE_YAHO',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'domain',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256'
      }
    ],
    name: 'getHash',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'chainId',
        type: 'uint256'
      },
      {
        internalType: 'bytes[]',
        name: 'blockHeaders',
        type: 'bytes[]'
      }
    ],
    name: 'proveAncestralBlockHashes',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint64',
        name: 'slot',
        type: 'uint64'
      },
      {
        internalType: 'uint256',
        name: 'blockNumber',
        type: 'uint256'
      },
      {
        internalType: 'bytes32[]',
        name: 'blockNumberProof',
        type: 'bytes32[]'
      },
      {
        internalType: 'bytes32',
        name: 'blockHash',
        type: 'bytes32'
      },
      {
        internalType: 'bytes32[]',
        name: 'blockHashProof',
        type: 'bytes32[]'
      },
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'attestedHeaderRoot',
            type: 'bytes32'
          },
          {
            internalType: 'uint256',
            name: 'attestedHeaderSlot',
            type: 'uint256'
          },
          {
            internalType: 'bytes32',
            name: 'finalizedHeaderRoot',
            type: 'bytes32'
          },
          {
            internalType: 'bytes32',
            name: 'finalizedExecutionStateRoot',
            type: 'bytes32'
          },
          {
            internalType: 'uint256[2]',
            name: 'a',
            type: 'uint256[2]'
          },
          {
            internalType: 'uint256[2][2]',
            name: 'b',
            type: 'uint256[2][2]'
          },
          {
            internalType: 'uint256[2]',
            name: 'c',
            type: 'uint256[2]'
          }
        ],
        internalType: 'struct LightClientUpdate',
        name: 'update',
        type: 'tuple'
      }
    ],
    name: 'storeBlockHeader',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint64',
        name: 'slot',
        type: 'uint64'
      },
      {
        internalType: 'uint256',
        name: 'blockNumber',
        type: 'uint256'
      },
      {
        internalType: 'bytes32[]',
        name: 'blockNumberProof',
        type: 'bytes32[]'
      },
      {
        internalType: 'bytes32',
        name: 'blockHash',
        type: 'bytes32'
      },
      {
        internalType: 'bytes32[]',
        name: 'blockHashProof',
        type: 'bytes32[]'
      }
    ],
    name: 'storeBlockHeader',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint64',
        name: 'srcSlot',
        type: 'uint64'
      },
      {
        internalType: 'uint64',
        name: 'txSlot',
        type: 'uint64'
      },
      {
        internalType: 'bytes32[]',
        name: 'receiptsRootProof',
        type: 'bytes32[]'
      },
      {
        internalType: 'bytes32',
        name: 'receiptsRoot',
        type: 'bytes32'
      },
      {
        internalType: 'bytes[]',
        name: 'receiptProof',
        type: 'bytes[]'
      },
      {
        internalType: 'bytes',
        name: 'txIndexRLPEncoded',
        type: 'bytes'
      },
      {
        internalType: 'uint256',
        name: 'logIndex',
        type: 'uint256'
      }
    ],
    name: 'verifyAndStoreDispatchedMessage',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  }
]
