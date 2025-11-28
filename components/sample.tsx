"use client"

import { useAccount } from "wagmi"
import { useLotSizeContract } from "@/hooks/useContract"

const SampleIntegration = () => {
  const { isConnected } = useAccount()
  const { data, isLoading, error } = useLotSizeContract()

  if (!isConnected) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <h2 className="text-2xl font-bold text-foreground mb-3">
            FLARE Lot Size Reader
          </h2>
          <p className="text-muted-foreground">
            Please connect your wallet to read contract data.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background p-6 flex justify-center items-start">
      <div className="max-w-md w-full space-y-6">
        <h1 className="text-3xl font-bold text-foreground">Lot Size Contract</h1>

        <div className="bg-card border border-border rounded-lg p-4">
          <p className="text-muted-foreground text-xs uppercase tracking-wide mb-2">
            Contract Data
          </p>

          {isLoading ? (
            <p className="text-foreground">Loading...</p>
          ) : error ? (
            <p className="text-destructive">Error: {error.message}</p>
          ) : (
            <div className="space-y-2">
              <p className="text-foreground">
                <span className="font-semibold">Lot Size (AMG):</span>{" "}
                {data.lotSizeAMG}
              </p>
              <p className="text-foreground">
                <span className="font-semibold">Asset Decimals:</span>{" "}
                {data.assetDecimals}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SampleIntegration