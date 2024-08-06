// Chuỗi dữ liệu ban đầu
const parameterValue =
  "$RUNID=1717056227428,$PHID=SHB_FTP_DAILY_BATCH_PARALLEL,$EXEID=1722425701678,$RUNSK=17,FCT_FTP_CIF_BY_M";
console.log(`parameterValue: ${parameterValue}`);
// Vị trí bắt đầu của 'RUNSK'
const runskPosition = parameterValue.indexOf("RUNSK");
console.log(`runskPosition: ${runskPosition}`);
// Tính toán vị trí bắt đầu của giá trị 'RUNSK'
const startPosition = runskPosition + "RUNSK=".length;
console.log(`startPosition: ${startPosition}`);
// Tính toán độ dài của giá trị 'RUNSK' bằng cách tìm vị trí dấu phẩy tiếp theo hoặc kết thúc chuỗi
let endPosition = parameterValue.indexOf(",", startPosition);
if (endPosition === -1) {
  endPosition = parameterValue.length;
}
console.log(`endPosition: ${endPosition}`);
// Trích xuất giá trị của 'RUNSK'
const runskValue = parameterValue.substring(startPosition, endPosition);

console.log(`RUNSK value: ${runskValue}`);
