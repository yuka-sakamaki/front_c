export const RightComponent = (props) => {
  const { lists, onClick } = props;
  const rightLists = lists.reverse();
  return (
    <>
      <h1>右</h1>
      <ul>
        {rightLists.map((list, index) => (
          <>
            <div key={index}>{list.name}</div>
          </>
        ))}
      </ul>
      <button onClick={onClick}>左へ移動</button>
    </>
  );
};
