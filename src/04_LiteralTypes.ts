// String Literal Types
type Easing = 'ease-in' | 'ease-out' | 'ease-in-out'

function testEasing(ease: Easing) {
  console.log('ease', ease);
}

testEasing('ease-in');
// testEasing('ease-none');

// Numeric Literal Types
interface MapConfig {
  lng: number;
  lat: number;
  tileSize: 8 | 16 | 32;
}
