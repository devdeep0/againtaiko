import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { Taiko } from '@thirdweb-dev/chains';
import { utils, Contract } from 'ethers';

interface TokenBalanceProps {
  walletAddress: string;
  contractAddress: string;
}

// Minimal ABI for balance checking
const minABI = [
  {
    "constant": true,
    "inputs": [{ "name": "_owner", "type": "address" }],
    "name": "balanceOf",
    "outputs": [{ "name": "balance", "type": "uint256" }],
    "type": "function"
  }
];

const TokenBalance: React.FC<TokenBalanceProps> = ({ walletAddress, contractAddress }) => {
  const [balance, setBalance] = useState<string>('0');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBalance = async () => {
      if (!walletAddress || !contractAddress) {
        setLoading(false);
        return;
      }

      try {
        // Using providers.JsonRpcProvider for ethers v5
        const provider = new ethers.providers.JsonRpcProvider(Taiko.rpc[0]);
        
        // Create contract instance
        const contract = new Contract(contractAddress, minABI, provider);
        
        // Fetch balance
        const rawBalance = await contract.balanceOf(walletAddress);
        // Using utils.formatUnits for ethers v5
        const formattedBalance = utils.formatUnits(rawBalance, 18);
        setBalance(formattedBalance);
      } catch (err) {
        console.error('Error fetching balance:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBalance();
  }, [walletAddress, contractAddress]);

  if (loading) {
    return <span className="ml-2">Loading...</span>;
  }

  return <span className="ml-2">{balance} TTKO</span>;
};

export default TokenBalance;