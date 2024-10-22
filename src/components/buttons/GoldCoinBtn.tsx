import "./goldCoinBtn.css"
import React from 'react'

interface ate{
    className?:string,
    onClick?:() => void
}

const GoldCoinbtn:React.FC<ate> = ({className,onClick}) => {
    return (
        <>
            <div className={`coin-3d relative w-40 h-40 ${className}`} onClick={onClick}>
                {/* Coin Front Face */}
                <div
                    className="absolute w-40 h-40 rounded-full gold-coin shadow-lg border-4 border-yellow-600 flex items-center justify-center"
                    style={{ transform: "translateZ(20px)" }}
                >
                    
                    <span className="text-9xl text-yellow-900 font-extrabold">₹</span>
                </div>
                {/* Coin Edge (Thickness Layer) */}
                <div className="absolute w-40 h-40 rounded-full coin-edge scale-105" />
            </div>

        </>
    )
}

export default GoldCoinbtn