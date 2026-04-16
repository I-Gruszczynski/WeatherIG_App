const From = (props) => {
  return (
    <form onSubmit={props.submit}>
      <input
        type="text"
        value={props.value}
        placeholder="Input the city name"
        onChange={props.onChange}
        name={props.name}
      />
      <button>Check the weather</button>
    </form>
  );
};

export default From;
