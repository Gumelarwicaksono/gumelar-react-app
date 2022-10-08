function lis({ nama }) {
  const list = nama.map((e) => {
    return (
      <li style={{ color: 'red' }} key={e.toString()}>
        {e}
      </li>
    );
  });
  return (
    <>
      <h3 style={{marginLeft : 20}}> <i>list learning path</i> </h3>
      <div className="list">
        <ul>{list}</ul>
      </div>
    </>
  );
}

export default lis;
