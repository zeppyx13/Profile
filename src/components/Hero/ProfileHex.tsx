"use client";
import React from "react";

/**
 * Hexagon profile component.
 * Props can be extended later to accept image URL, size, ringColor, etc.
 */
const ProfileHex: React.FC<{ imgSrc?: string; size?: number }> = ({ imgSrc = "/profile.jpeg", size = 450 }) => {
    const style: React.CSSProperties = {
        clipPath: "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
    };

    return (
        <div className="flex-1 flex justify-center relative">
            <div className={`relative w-[${size}px] h-[${size}px]`} style={{ width: size, height: size }}>
                {/* glow */}
                <div className="absolute inset-0 bg-red-600/40 blur-3xl rounded-full -z-10" />
                <div className="relative w-full h-full overflow-hidden shadow-2xl" style={style}>
                    <img
                        src={imgSrc}
                        alt="Profile"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            (e.currentTarget as HTMLImageElement).src = "/profile.jpeg";
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent" />
                </div>
            </div>
        </div>
    );
};

export default ProfileHex;
