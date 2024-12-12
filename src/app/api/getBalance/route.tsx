// import { Taiko } from "@thirdweb-dev/chains";
// import { NextResponse } from "next/server";

// const {
//   BACKEND_WALLET_ADDRESS,
//   CONTRACT_ADDRESS,
//   ENGINE_URL,
//   THIRDWEB_SECRET_KEY,
//   ACCESS_TOKEN
// } = process.env;



// const contractAddress = "0x16C5ff9C18314dC977ABc8E12f7915Be541ca6F3"


// export async function GET(request: Request) {
//   if (
//     !BACKEND_WALLET_ADDRESS ||
//     !CONTRACT_ADDRESS ||
//     !ENGINE_URL ||
//     !THIRDWEB_SECRET_KEY
//   ) {
//     throw 'Server misconfigured. Did you forget to add a ".env.local" file?';
//   }

//   const { userWalletAddress, amount } = await request.json();

//   const resp = await fetch(
//     `${ENGINE_URL}/contract/167000/${contractAddress}/erc20/balance-of`,
//     {
//       method: "GET",
//       headers: {
      
//         Authorization: `Bearer ${ACCESS_TOKEN}`,
      
//       },
//       body: JSON.stringify({
//         recipient: userWalletAddress
//       })
//     }
//   );


// }