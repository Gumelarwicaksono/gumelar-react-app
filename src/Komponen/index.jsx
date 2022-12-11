import ClasKomponen from './partone/ClasKomponen';
import FungsiKomponen from './partone/FungsiKomponen';
function test() {
  const brand = 'gumelar react app componen';
  const lists = ['mongodb', 'exspres', 'react', 'nodejs'];
  return (
    <div>
      <div>
        <p>//componen 1// </p>
        <ClasKomponen nama={brand} />
         <p>//componen 2 // </p>
        <FungsiKomponen nama={lists} />
      </div>
    </div>
  );
}

export default test;
