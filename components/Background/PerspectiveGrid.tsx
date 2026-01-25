'use client'

import React from 'react'

export default function PerspectiveGrid() {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            <style jsx>{`
        .perspective-container {
          perspective: 1000px;
          height: 100%;
          width: 100%;
          position: absolute;
          inset: 0;
          overflow: hidden;
          background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(240,249,255,0.5) 100%);
        }

        .grid-plane {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background-image: 
            linear-gradient(to right, rgba(100, 116, 139, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(100, 116, 139, 0.08) 1px, transparent 1px);
          background-size: 50px 50px;
          transform-origin: 50% 100%;
          animation: plane-move 15s linear infinite;
        }

        @keyframes plane-move {
          0% {
            transform: rotateX(60deg) translateY(0);
          }
          100% {
            transform: rotateX(60deg) translateY(50px);
          }
        }

        /* Add a vignette/mask so it's not too harsh */
        .vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, transparent 40%, white 100%);
        }
      `}</style>

            <div className="perspective-container">
                <div className="grid-plane" />
                <div className="vignette" />
            </div>
        </div>
    )
}
