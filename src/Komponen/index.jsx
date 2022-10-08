import ClasKomponen from './partone/ClasKomponen';
import FungsiKomponen from './partone/FungsiKomponen';
function test() {
  const brand = 'gumelar react app';
  const lists = ['mongodb', 'exspres', 'react', 'nodejs'];
  return (
    <div>
      <div>
        <ClasKomponen nama={brand} />
        <FungsiKomponen nama={lists} />
      </div>
    </div>
  );
}

export default test;
