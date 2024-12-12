import React from 'react'


    export async function GET(request: Request) {
        
      
        const { userWalletAddress } = await request.json();
      
        const url = `https://c227651d.engine-usw2.thirdweb.com/contract/167000/0x16C5ff9C18314dC977ABc8E12f7915Be541ca6F3/erc20/balance-of?wallet_address=0x3C9B7bDdDb65a1543aa3E56F8539ac48ACDF9Ac1`;
    
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':`Bearer ${process.env.ACCESS_TOKEN}`,
                    'x-backend-wallet-address': `${process.env.BACKEND_WALLET_ADDRESS}`
                }
      
            });
      
            
      
            const data = await response.json();
            return data; // Access the first item in the array and get its result
          } catch (error) {
            console.error('Error:', error);
            throw error;
          }
        }
    // async function getERC20Balance(walletAddress:any) {
    
    //   const url = `https://c227651d.engine-usw2.thirdweb.com/contract/167000/0x16C5ff9C18314dC977ABc8E12f7915Be541ca6F3/erc20/balance-of?wallet_address=0x3C9B7bDdDb65a1543aa3E56F8539ac48ACDF9Ac1`;
    
    //   try {
    //       const response = await fetch(url, {
    //           method: 'GET',
    //           headers: {
    //               'Content-Type': 'application/json',
    //               'Authorization':`Bearer ${process.env.ACCESS_TOKEN}`,
    //               'x-backend-wallet-address': `${process.env.BACKEND_WALLET_ADDRESS}`
    //           }
    
    //       });
    
          
    
    //       const data = await response.json();
    //       return data.result.displayValue; // Access the first item in the array and get its result
    //     } catch (error) {
    //       console.error('Error:', error);
    //       throw error;
    //     }
    //   }
  
