import GoldCoinbtn from "../components/buttons/GoldCoinBtn";
import ScoreHeadr from "../components/headers/ScoreHeadr";
import coinSoundFile1 from "../assets/sound/coin1.mp3"; // Corrected import
import coinSoundFile2 from "../assets/sound/coin2.mp3";
import "./home.css";
import WebApp from "@twa-dev/sdk";
import React, { useEffect, useState } from "react";
import client from "../apollo/client";
import { gql } from "@apollo/client";

interface UserData {
    id: number;
    first_name: string;
    last_name?: string;
    username?: string;
    language_code: string;
    is_premium?: boolean;
}

const GET_COIN_META_DATA = gql`
  query GetCoinMetaDataByUserId($userId: ID!) {
    getCoinMetaDataByUserId(userId: $userId) {
      coinCount
      userId
    }
  }
`;

const incrimentCoin = gql`
  query incrimentCoin($userId: ID!) {
    incrimentCoin(userId: $userId) {
      coinCount
    }
  }
`;

export const Home: React.FC = () => {
    const [userData, setUserData] = useState<UserData | null>(null);
    const [coinVal, setCoinVal] = useState<number>(0);

    // Fetch coin data when userData is available
    useEffect(() => {
        if (userData) {
            client
                .query({
                    query: GET_COIN_META_DATA,
                    variables: { userId: "" + userData.id }, // Pass userId as a variable
                })
                .then((result) => {
                    const coinData = result.data?.getCoinMetaDataByUserId;
                    if (coinData) {
                        console.log("coinDatacoinDatacoinData==>>>", coinData)
                        setCoinVal(coinData.coinCount);
                    }
                })
                .catch((error) => console.error("Error fetching coin data:", error));
        }
    }, [userData]); // Re-run the effect when userData changes

    // Load Telegram SDK dynamically
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://telegram.org/js/telegram-web-app.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script); // Cleanup on unmount
        };
    }, []);

    // Initialize user data from Telegram SDK
    useEffect(() => {
        const user = WebApp.initDataUnsafe?.user;
        if (user) {
            setUserData(user as UserData);
        }
    }, []);

    // Play coin sound
    const playCoinSound = () => {
        if (userData) {
            
            client
                .mutate({
                    mutation: incrimentCoin,
                    variables: { userId: "" + userData.id }, // Pass userId as a variable
                })
        }
        const audio1 = new Audio(coinSoundFile1);
        const audio2 = new Audio(coinSoundFile2);
        setCoinVal((prevVal) => prevVal + 1);
        audio1.play()
        audio2.play();
        



    };

    return (
        <>
            <div className="w-full h-screen bg-gray-900 fixed">
                <div>
                    <ScoreHeadr className="mt-10" userData={userData} coinVal={coinVal} />
                    <div className="flex justify-center items-center h-screen">
                        <div className="goldShedo"></div>
                        <div className="scale-125 active:scale-110 active:rotate-6">
                            <GoldCoinbtn onClick={playCoinSound} />
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
};
