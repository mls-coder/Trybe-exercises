const bbbParticipant = {
    name: 'Gilberto',
    birthplace: 'Jaboatão - Pernambuco',
    nickname: 'Gil do Vigor',
    jobs: [
      'Economista',
      'Missionário',
      'Futuro ex BBB',
      'Digital Influencer',
      'Blogueiro',
    ],
};

const { name, birthplace, nickname, jobs } = bbbParticipant;

const [first, second, third, ...rest] = jobs;

console.log(`${name} - ${nickname}`);
console.log(`${jobs}`);
console.log(`${first} // ${second} // ${third} --- resto dos jobs -> ${rest}`);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

const lion = {
    name: 'Panthera leo',
    commonName: 'Lion',
    weightRange: {
        min: 186.55,
        max: 225,
        measurementUnit: 'kg',
    },
};

const blueWhale = {
    name: 'Balaenoptera musculus',
    commonName: 'Blue whale',
    weightRange: {
        min: 45,
        max: 173,
        measurementUnit: 't',
    },
};

const polarBear = {
    name: 'Ursus maritimus',
    commonName: 'Polar Bear',
    weightRange: {
        min: 350,
        max: 700,
    },
};

const animals = ({ name, commonName, weightRange : {min, max, measurementUnit = 'kg'} })  => `${commonName} (${name}) weighs around ${min} - ${max}${measurementUnit}`;

console.log(animals(polarBear));
console.log(animals(lion));
console.log(animals(blueWhale));