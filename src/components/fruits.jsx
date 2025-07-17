export default function Fruits() {
  const fruit = [
    { name: "Apple", price: 10, emoji: "🍎" },
    { name: "Mango", price: 10, emoji: "🥭" },
    { name: "Banana", price: 10, emoji: "🍌" }
  ];

  // function to handle button click
  const handleBuy = (fruitname) => {
    alert(`You bought a ${fruitname}!`);
  };

  return (
    <div>
      <ul>
        {fruit.map((fruitname, index) => (
          <li key={index}>
            {fruitname.emoji} {fruitname.price} {fruitname.name}
            <button onClick={() => handleBuy(fruitname.name)} style={{ marginLeft: '10px' }}>
              Buy
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
