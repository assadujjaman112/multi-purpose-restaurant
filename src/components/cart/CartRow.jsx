import PropTypes from "prop-types";
import { useState } from "react";
import { FiTrash2, FiMinus, FiPlus, FiEdit2, FiCheck } from "react-icons/fi";

const CartRow = ({
  item,
  quantity,
  onRemove,
  // onQuantityChange,
  onQuantityInput,
  onConfirm,
}) => {
  const [editing, setEditing] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const rowTotal = (parseFloat(item.price) * quantity).toFixed(2);

  const startEditing = () => {
    setInputValue(String(quantity));
    setError("");
    setEditing(true);
  };

  const handleMinus = () => {
    const current = parseInt(inputValue, 10);
    if (!isNaN(current) && current > 1) {
      const next = current - 1;
      setInputValue(String(next));
      onQuantityInput(item, String(next));
    }
  };

  const handlePlus = () => {
    const current = parseInt(inputValue, 10);
    const base = isNaN(current) ? quantity : current;
    const next = base + 1;
    setInputValue(String(next));
    onQuantityInput(item, String(next));
  };

  const handleCheck = () => {
    const parsed = parseInt(inputValue, 10);
    if (isNaN(parsed) || parsed < 1) {
      setError("Quantity must be at least 1");
      return;
    }
    setError("");
    onConfirm(item, parsed);
    setEditing(false);
  };

  return (
    <div className="bg-zinc-800/40 px-4 md:px-6 py-4 grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr_5rem] gap-4 items-center">
      {/* Item info */}
      <div className="flex items-center gap-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-16 h-16 object-cover rounded-lg shrink-0"
        />
        <div className="min-w-0">
          <p className="text-white font-elsie text-lg leading-tight truncate">
            {item.name}
          </p>
          <p className="text-[#99A9AD] text-sm mt-0.5 line-clamp-1">
            {item.description}
          </p>
          <p className="text-[#FFDE9F] text-sm font-medium md:hidden mt-1">
            ${parseFloat(item.price).toFixed(2)}
          </p>
        </div>
      </div>

      {/* Unit price (desktop) */}
      <p className="hidden md:block text-[#FFDE9F] font-elsie text-xl text-center">
        ${parseFloat(item.price).toFixed(2)}
      </p>

      {/* Quantity — read-only or stepper */}
      <div className="flex flex-col items-start md:items-center gap-1">
        {editing ? (
          <div className="flex items-center gap-2">
            <button
              onClick={handleMinus}
              disabled={parseInt(inputValue, 10) <= 1}
              className="w-8 h-8 rounded-md border border-zinc-600 flex items-center justify-center text-white hover:border-[#FFDE9F] hover:text-[#FFDE9F] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <FiMinus className="text-sm" />
            </button>
            <div className="flex flex-col items-center">
              <input
                type="text"
                inputMode="numeric"
                value={inputValue}
                autoFocus
                onChange={(e) => {
                  setInputValue(e.target.value);
                  setError("");
                }}
                className={`w-12 text-center text-white font-medium bg-zinc-700 border rounded-md py-0.5 focus:outline-none transition-colors [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none ${
                  error ? "border-red-400" : "border-zinc-600 focus:border-[#FFDE9F]"
                }`}
              />
              {error && (
                <span className="text-red-400 text-[10px] mt-0.5 whitespace-nowrap">
                  {error}
                </span>
              )}
            </div>
            <button
              onClick={handlePlus}
              className="w-8 h-8 rounded-md border border-zinc-600 flex items-center justify-center text-white hover:border-[#FFDE9F] hover:text-[#FFDE9F] transition-colors"
            >
              <FiPlus className="text-sm" />
            </button>
          </div>
        ) : (
          <span className="w-8 text-center text-white font-medium tabular-nums">
            {quantity}
          </span>
        )}
      </div>

      {/* Row total (desktop) */}
      <p className="hidden md:block text-white font-elsie text-xl text-center">
        ${rowTotal}
      </p>

      {/* Actions: edit toggle + remove */}
      <div className="flex items-center gap-2 justify-end md:justify-center">
        <button
          onClick={editing ? handleCheck : startEditing}
          aria-label={editing ? "Done editing" : "Edit quantity"}
          className={`w-8 h-8 rounded-md border flex items-center justify-center transition-colors ${
            editing
              ? "border-[#FFDE9F] text-[#FFDE9F] hover:bg-[#FFDE9F]/10"
              : "border-zinc-600 text-zinc-400 hover:border-[#FFDE9F] hover:text-[#FFDE9F]"
          }`}
        >
          {editing ? (
            <FiCheck className="text-sm" />
          ) : (
            <FiEdit2 className="text-sm" />
          )}
        </button>
        <button
          onClick={() => onRemove(item._id, item.name)}
          className="w-8 h-8 rounded-md border border-zinc-600 flex items-center justify-center text-zinc-400 hover:border-red-400 hover:text-red-400 transition-colors"
          aria-label="Remove item"
        >
          <FiTrash2 className="text-sm" />
        </button>
      </div>
    </div>
  );
};

CartRow.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  quantity: PropTypes.number.isRequired,
  onRemove: PropTypes.func.isRequired,
  onQuantityChange: PropTypes.func.isRequired,
  onQuantityInput: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default CartRow;
