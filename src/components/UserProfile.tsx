import React, { JSX } from "react";

export default function UserProfile(): JSX.Element {
  return (
    <div className="relative rounded-4xl overflow-hidden min-h-[350px] shadow-xl h-full">
      {/* Full background image (clear) */}
      <div className="absolute inset-0">
        <img
          src="/images/user-profile-background.png"
          alt="Background"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Bottom blur overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 via-black/30 to-transparent backdrop-blur-md" />

      {/* Content overlay (on top of blur) */}
      <div className="relative h-full flex flex-col justify-end">
        <div className="flex justify-between items-center p-6">
          {/* Left: Name + Role */}
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Lora Piterson</h3>
            <p className="text-sm text-white/90 font-medium">UX/UI Designer</p>
          </div>

          {/* Right: Salary Badge */}
          <div className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm border border-white/40 font-bold shadow-lg">
            $1,200
          </div>
        </div>
      </div>
    </div>
  );
}
