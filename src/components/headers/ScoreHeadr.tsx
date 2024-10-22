import React, {useEffect, useState} from 'react'
interface UserData {
    id: number;
    first_name: string;
    last_name?: string;
    username?: string;
    language_code: string;
    is_premium?: boolean;
}
interface scoreAt {
    className?: string,
    userData?:UserData | null,
    coinVal?:number | null;
    
}

const ScoreHeadr: React.FC<scoreAt> = ({ className, userData, coinVal }) => {
    const [coinValue, setCoinval] = useState<number | null | undefined>(0)

    useEffect(()=>{
        setCoinval(coinVal)
    },[coinVal])
    return (
        <>
            <div
                className={`relative bg-gray-800 text-yellow-200 px-6 pt-5 pb-5 shadow-xl ring-1 ring-gray-900/5 mx-auto rounded-lg border border-yellow-100  ${className}`}
                style={{ width: "90%" }}
            >
                <ul className="flex justify-between">
                    <li className="px-4 flex-col w-36 text-center">
                        <p>{coinValue}</p> 
                        <label className='absolute text-xs text-slate-400 -ml-4'>Score</label>
                    </li>
                    <li className="px-4 border-l border-yellow-200">
                    hi 👻 {`${userData?.first_name ?? ""} ${userData?.last_name ?? ""}`.trim() || "User"}
                    </li>
                </ul>
            </div>

        </>
    )
}

export default ScoreHeadr