const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  // get start location for each
  return this.journeys.map((item) => {
    return item.startLocation;
  });
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map(item => item.endLocation);
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((item) => {
    return item.transport === transport;
  })
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((item) => {
    return item.distance > minDistance;
  })
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  // total the distances
  const reducer = (acc, item) => acc += item.distance;
  return this.journeys.reduce(reducer, 0);
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  // find a list of unique modes of transport
  // use a reducer which builds up an array accumulator the name of any modes of transport
  // we only add a mode of transport if we haven't seen it
  // before.

  const reducer =  (acc, item) => {
    console.log(`acc is ${acc}`); // which is 1!!!?
    if (!acc.includes(item.transport)) {
      // not in so append
      acc.push(item.transport);
    }
    // pass back acc unchanged
    return acc;
  };
  let acc=[];
  return this.journeys.reduce(reducer, acc);
};


module.exports = Traveller;
