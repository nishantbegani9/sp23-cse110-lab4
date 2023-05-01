let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for (const i in statistics) {
    const j = statistics[i];
    if (property.startsWith('r') || j % 2 == 1) {
      console.log(j);
    }
}