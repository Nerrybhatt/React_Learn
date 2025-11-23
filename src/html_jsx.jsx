export  function Fun1(){
   return (<>
    {/* <h1>Hello React!</h1>
    <img src="react.svg" alt="logo of react app"/>
    <p>It is the best and most powerful tool for frontend development. It connect both javascript logic and html</p> */}
   </>
    );
}


export const design = {
    name: " Jordan Walker",
    style: {
        backgroundColor: 'yellow',
        color: 'red'
    }
};

export default function Fun2() {
    return (
        <div style={design.style}>
            <h1 style={{ color: 'green' }}>Hello React!</h1>
            <h2>Author:{design.name}</h2>
            <img src="react.svg" alt="logo of react app" />
            <p>It is the best and most powerful tool for frontend development. It connect both javascript logic and html</p>

        </div>

    );
}

export function Fun3(){
    return(
        <div className="fun3">
        <h1>This is function two!</h1>
        <p>It has a feature of solving componrnts problems!</p>
        </div>
    );
}

//  1. Pricing Card
export function PricingCard() {
  return (
    <div style={{ border: "1px solid #e0e0e0", borderRadius: 16, padding: 32, textAlign: "center", maxWidth: 380, margin: "40px auto", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" ,backgroundColor:"cyen" }}>
      <h2 style={{ fontSize: 28, margin: "0 0 16px" }}>Pro Plan</h2>
      <div style={{ fontSize: 48, fontWeight: "bold", color: "#6366f1" }}>$49<span style={{ fontSize: 20, color: "#999" }}>/month</span></div>
      <ul style={{ listStyle: "none", padding: 0, margin: "24px 0" }}>
        {["Unlimited projects", "Priority support", "Advanced analytics", "API access"].map(item => (
          <li key={item} style={{ padding: "8px 0", display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
            <span style={{ color: "#10b981" }}>✓</span> {item}
          </li>
        ))}
      </ul>
      <button style={{ background: "#6366f1", color: "white", border: "none", padding: "14px 40px", borderRadius: 8, fontSize: 18, cursor: "pointer" }}>
        Get Started
      </button>
    </div>
  );
}