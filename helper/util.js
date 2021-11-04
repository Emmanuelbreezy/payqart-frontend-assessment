
export default function removeWhiteSpace(obj) {
    if (typeof obj !== "object") return obj;
    for (var prop in obj) {
       if (obj.hasOwnProperty(prop)) {
          obj[prop.replaceAll(" ", "_")] = removeWhiteSpace(obj[prop]);
          if (prop.indexOf(" ") > -1) {
             delete obj[prop];
          }
       }
    }
    return obj;
 }