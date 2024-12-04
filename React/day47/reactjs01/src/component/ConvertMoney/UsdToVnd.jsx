export default function UsdToVnd({ onChange, usd }) {
  return (
    <div>
      <label htmlFor="usd">USD</label>
      <input
        type="number"
        name="usd"
        id="usd"
        value={usd}
        onChange={onChange}
      />
    </div>
  );
}
