"use client"

import { useReadContract } from "wagmi"
import { contractABI, contractAddress } from "@/lib/contract"

export const useLotSizeContract = () => {
  const { data, isLoading, error, refetch } = useReadContract({
    address: contractAddress,
    abi: contractABI,
    functionName: "getLotSize",
  })

  return {
    data: data
      ? {
          lotSizeAMG: Number((data as any)[0] ?? 0),
          assetDecimals: Number((data as any)[1] ?? 0),
        }
      : { lotSizeAMG: 0, assetDecimals: 0 },
    isLoading,
    error,
    refetch,
  }
}