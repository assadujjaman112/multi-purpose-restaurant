import { STATUS_CONFIG, STEPS } from "./orderConfig";

const ProgressTracker = ({ status }) => {
  const currentStep = STATUS_CONFIG[status].step;
  return (
    <div className="flex items-center mt-4">
      {STEPS.map((step, i) => {
        const Icon = step.icon;
        const done = i <= currentStep;
        const active = i === currentStep;
        return (
          <div key={step.label} className="flex items-center flex-1 last:flex-none">
            <div className="flex flex-col items-center gap-1">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-colors
                ${done ? "border-[#FFDE9F] bg-[#FFDE9F]/10 text-[#FFDE9F]" : "border-zinc-600 bg-zinc-800 text-zinc-600"}
                ${active ? "ring-2 ring-[#FFDE9F]/30" : ""}`}
              >
                <Icon className="text-sm" />
              </div>
              <span className={`text-[10px] whitespace-nowrap ${done ? "text-[#FFDE9F]" : "text-zinc-600"}`}>
                {step.label}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <div className={`flex-1 h-[2px] mx-1 mb-4 rounded ${i < currentStep ? "bg-[#FFDE9F]" : "bg-zinc-700"}`} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ProgressTracker;
