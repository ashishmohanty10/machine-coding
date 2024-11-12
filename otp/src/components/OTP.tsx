import { useRef, useState } from "react";

const OTP = ({ numberOfDigits }: { numberOfDigits: number }) => {
  const [otp, setOtp] = useState(new Array(numberOfDigits).fill(""));
  const otpBoxRef = useRef<HTMLInputElement[]>([]);

  const handleChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < numberOfDigits - 1)
      otpBoxRef.current[index + 1]?.focus();
  };

  const handleBackspaceAndEnter = (e: any, index: number) => {
    if (e.key === "Backspace" && !e.target.value && index > 0)
      otpBoxRef.current[index - 1]?.focus();
    if (e.key === "Enter" && e.target.value && index < numberOfDigits - 1)
      otpBoxRef.current[index + 1]?.focus();
  };

  return (
    <article className="w-1/2">
      <p className="text-2xl font-medium text-white mt-12">
        OTP Input With Validation
      </p>

      <div className="flex items-center gap-4">
        {otp.map((digit, index) => (
          <input
            style={{ height: "40px", width: "60px", font: "32px" }}
            key={index}
            value={digit}
            maxLength={1}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyUp={(e) => handleBackspaceAndEnter(e, index)}
            ref={(ref) => (otpBoxRef.current[index] = ref!)}
          />
        ))}
      </div>
    </article>
  );
};

export default OTP;
