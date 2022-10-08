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
      <div className="list">
        <ul>{list}</ul>
      </div>
    </>
  );
}

export default lis;
