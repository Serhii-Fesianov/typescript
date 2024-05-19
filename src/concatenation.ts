function concatenation(firstWord: string, secondWord: string) {
  console.log(`${firstWord} ${secondWord}`);
}

export { concatenation };

interface AnimalWOT {
  noob: number;
  pro?: number;
  expert: number;
}

interface ExtendedAnimalWot extends AnimalWOT {
  medium: number;
}

function getStat(stat: AnimalWOT): ExtendedAnimalWot {
  const object: ExtendedAnimalWot = { ...stat, medium: 52 };
  console.log(object);

  return object;
}

getStat({ noob: 45, pro: 60, expert: 68 });
getStat({ expert: 70, noob: 38 });
export {};
