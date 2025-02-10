const Contact = () => {
  return (
    <div>
      <h1>Contact us page</h1>
      <form>
        <input
          type="text"
          placeholder="Name"
          className="border border-black m-2 p-2"
        />
        <input
          type="text"
          placeholder="email"
          className="border border-black m-2 p-2"
        />
        <button className="border border-black m-2 p-2 bg-slate-300 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
