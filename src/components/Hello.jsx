function Hello({names,message,emoji}) {
    return <div className="name">
    <h1>{message}{names}{emoji}</h1>;
    </div>
}
export default Hello;
