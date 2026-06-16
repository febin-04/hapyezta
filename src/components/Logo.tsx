import React from "react";
import logoImg from "@/assets/logo.png";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  withSlogan?: boolean;
  size?: "sm" | "md" | "lg";
}

export function LogoIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <img
      src={logoImg}
      alt="Hapyezta Logo Icon"
      className={`${className} object-contain`}
    />
  );
}

export function LogoText({ className = "" }: { className?: string }) {
  // Mapping of each letter in HAPYEZTA to its specific color
  const letters = [
    { char: "H", color: "text-orange" },
    { char: "A", color: "text-yellow" },
    { char: "P", color: "text-teal" },
    { char: "Y", color: "text-purple" },
    { char: "E", color: "text-coral" },
    { char: "Z", color: "text-purple" },
    { char: "T", color: "text-teal" },
    { char: "A", color: "text-orange" },
  ];

  return (
    <span className={`font-display select-none tracking-normal ${className}`}>
      {letters.map((item, index) => (
        <span key={index} className={item.color}>
          {item.char}
        </span>
      ))}
    </span>
  );
}

export function Logo({
  className = "",
  iconOnly = false,
  withSlogan = true,
  size = "md",
}: LogoProps) {
  const iconSizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-14 h-14",
  };

  const textSizes = {
    sm: "text-xl sm:text-2xl",
    md: "text-2xl sm:text-3xl",
    lg: "text-4xl sm:text-5xl",
  };

  const sloganSizes = {
    sm: "text-[7px] tracking-[0.06em] sm:text-[8px] sm:tracking-[0.12em]",
    md: "text-[9px] tracking-[0.15em]",
    lg: "text-xs tracking-[0.18em]",
  };

  if (iconOnly) {
    return <LogoIcon className={iconSizes[size]} />;
  }

  return (
    <div className={`inline-flex flex-col items-center justify-center ${className}`}>
      {/* Logo Icon on Top */}
      <LogoIcon className={`${iconSizes[size]} mb-1.5 transition-transform hover:scale-105 duration-300`} />
      
      {/* Brand Text */}
      <LogoText className={`${textSizes[size]} font-bold tracking-tight leading-none`} />

      {/* Slogan */}
      {withSlogan && (
        <span
          className={`mt-1.5 uppercase font-bold text-orange leading-none select-none text-center ${sloganSizes[size]}`}
          style={{ fontFamily: "var(--font-display)" }}
        >
          Where Happy Creation Begin
        </span>
      )}
    </div>
  );
}
