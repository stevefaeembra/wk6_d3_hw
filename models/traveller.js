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

};

Traveller.prototype.calculateTotalDistanceTravelled = function () {

};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
