export const contractAddress =
  "0x39472130651Ff14FF471B7Cb0B362ee9c1Af318e";

export const contractABI = [
  {
    inputs: [],
    name: "getLotSize",
    outputs: [
      { internalType: "uint64", name: "lotSizeAMG", type: "uint64" },
      { internalType: "uint8", name: "assetDecimals", type: "uint8" },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;