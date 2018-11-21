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

};


module.exports = Traveller;
