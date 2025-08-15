function TDDstatusOfKeys(status) {
  if (status) {
    return console.log(status);
  }
  console.log(!status);
}
TDDstatusOfKeys();
module.exports = TDDstatusOfKeys;
