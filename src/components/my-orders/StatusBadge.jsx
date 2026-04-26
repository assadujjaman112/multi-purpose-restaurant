import { STATUS_CONFIG } from "./orderConfig";

const StatusBadge = ({ status }) => {
  const cfg = STATUS_CONFIG[status];
  const Icon = cfg.icon;
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${cfg.bg} ${cfg.color}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
      <Icon className="text-sm" />
      {status}
    </span>
  );
};

export default StatusBadge;
