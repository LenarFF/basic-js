
module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)) return false
  let dtName = [];
  for (let member of members) {
    if (typeof member === "string") {
      dtName.push(member.trim()[0].toUpperCase());
    }
  }
  return dtName.sort().join('')
}
