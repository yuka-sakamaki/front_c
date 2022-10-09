export const LeftComponent = (props) => {
  const { lists, onClick } = props;
  return (
    <>
      <h1>左</h1>
      <ul>
        {lists.map((list, index) => (
          <>
            <div key={index}>{list.name}</div>
          </>
        ))}
      </ul>
      <button onClick={onClick}>右へ移動</button>
    </>
  );
};
