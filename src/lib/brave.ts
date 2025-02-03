export default function isBrave() {
  const maybeBrave = (window.navigator as { brave?: any }).brave;

  return maybeBrave != undefined && maybeBrave.isBrave.name == 'isBrave';
}
