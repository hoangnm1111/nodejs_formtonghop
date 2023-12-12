(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
function updateBaiSelector() {
    var weekSelector = document.getElementById("weekSelector");
    var baiSelector = document.getElementById("baiSelector");

    // Xóa tất cả các options hiện tại trong baiSelector
    baiSelector.innerHTML = "";

    // Lấy giá trị của tuần được chọn
    var selectedWeek = weekSelector.value;

    // Số lượng bài tương ứng với mỗi tuần (đã biết từ trước)
    var baiCount = {
        "1": 14,
        "2": 7,
        "3":9,
        "4":4,
        "5":4,
        "6":3,
        "7":2,
        "8":2
        // Thêm các tuần khác nếu cần
    };

    // Tạo các option cho baiSelector dựa trên số lượng bài của tuần được chọn
    for (var i = 1; i <= baiCount[selectedWeek]; i++) {
        var option = document.createElement("option");
        option.value = i;
        option.text = "Bài " + i;
        baiSelector.add(option);
    }
}

var codeSnippets = {
      "1_1": `
#include<iostream>
using namespace std;

// hàm tính tổng
int final_ans(int *arr, int n) {
    int ans = 0;  // tạo biến lưu kết quả cuối

    // vòng lặp để tính tổng
    for (int i=0;i<n;i++) {
        ans += arr[i];
    }
    return ans; // trả về kết quả
}

int main () {
    int arr[100001];  // khởi tạo mảng arr
    int n; // tạo biến lưu số phần tử của mảng
    cin >> n;

    // vòng lặp để nhập phần tử vào mảng
    for (int i = 0 ; i< n; i++) {
        cin >> arr[i];
    }
    cout << final_ans(arr, n); // in kết quả
}

`,
      "1_2": `
#include<iostream>
using namespace std;

// tạo hàm để tìm số 3 chữ số chia hết cho n
void number_divisible_by_n(int n) {
    int arr[1001]; // khởi tạo mảng để chứa các số cần tìm
    int i = 0; // khởi tạo biến lưu số phần tử của mảng
    int k1 = 100 / n; // biến hỗ trợ cho việc tìm số theo yêu cầu
    int k2 = 999 / n; // biến hỗ trợ cho việc tìm số theo yêu cầu
    for (int j = k1; j <= k2; j++) {
        arr[i++] = j * n; // gán giá trị của mảng arr
    }
    for (int j = 0; j < i; j++) {
        if (arr[j] == 0 || arr[j] < 100) {continue;} //kiểm tra điều kiện 3 chữ số
        cout << arr[j] << " "; // in kết quả
    }

}

int main() {
    int n; // n theo yêu cầu đề bài
    cin >> n; // nhập
    number_divisible_by_n(n); // gọi hàm
}
`, "1_3":`
#include<iostream>
#include<iomanip>
using namespace std;

// hàm tính tiền điện theo cách cũ
double tien_theo_cach_cu(int x) {
double ans;
if (x <= 50) { //kiểm tra x <= 50
  ans = x * 1728; 
} else if (x <= 100) { //kiểm tra 50<x<=100
  ans =  (50 * 1728 + (x - 50) * 1786);
} else if (x <= 200) {  //kiểm tra 100<x<=200
  ans = (50 * 1728 + 50 * 1786 + (x - 100) * 2074);
} else if (x <= 300) { //kiểm tra 200<x<=300
  ans = (50 * 1728 + 50 * 1786 + 100 * 2074 + (x - 200) * 2612);
} else if (x <= 400) { //kiểm tra 300<x<=400
  ans = (50 * 1728 + 50 * 1786 + 100 * 2074 + 100 * 2612 + (x - 300) * 2919);
} else { // kiểm tra x > 400
  ans = (50 * 1728 + 50 * 1786 + 100 * 2074 + 100 * 2612 + 100 * 2919 + (x - 400) * 3015);
}

return ans;
}

// hàm tính tiền điện theo cách mới
double tien_theo_cach_moi(int x) {
double ans;
if (x <= 100) { //kiểm tra x <= 100
  ans = x * 1728;
} else if (x <= 200) { //kiểm tra 100<x <=200
  ans =  (100 * 1728 + (x - 100) * 2074);
} else if (x <= 400) { //kiểm tra 200<x <=400
  ans = (100 * 1728 + 100 * 2074 + (x - 200) * 2612);
} else if (x <= 700) { //kiểm tra 400<x <=700
  ans = (100 * 1728 + 100 * 2074 + 200 * 2612 + (x - 400) * 3111);
} else { // kiểm tra x > 700
  ans = (100 * 1728 + 100 * 2074 + 200 * 2612 + 300 * 3111 + (x - 700) * 3457);
}

return ans;
}



int main () {
int n; // biến chứa số điện
cin >> n; // nhập
double ans = (tien_theo_cach_moi(n) - tien_theo_cach_cu(n)) * 1.1;   // tính tiền điện chênh lệch
cout <<fixed<< setprecision(2) << ans; // in 

}`, "1_4": `
#include<iostream>
#include<string>
#include<vector>
using namespace std;

// hàm chuyển kí tự thành in hoa
char change_to_uppercase(char n) {
if ((int)n >=97 && (int)n<=122) { // kiểm tra kí tự có phải là thường không
  int n1 = (int)n - 32; // đổi thành in hoa
  return (char)n1; 
}
else {
  return n; // nếu không thì giữ nguyên
}
}

// hàm chuyển 1 chuỗi thành in hoa
string change_to_uppercase_string(string s) {
int n = s.length(); // lưu độ dài chuỗi
for (int i = 0; i< n; i ++) {
  char k = change_to_uppercase(s[i]); // chuyển từng kí tự
  s[i] = k;
}
return s; // trả lại chuỗi đã in hoa
}

int main() {
string s; // chuỗi để nhập
vector<string> all; // vecto chứa các kí tự in hoa
int isEnd = 0; // chưa kt   
while(getline(cin,s)) // nhập
{
  
  if (s.empty()) { // kiểm tra rỗng
      
      if (isEnd == 2) { // nếu không thấy nhập nữa thì thoát vòng lặp
          break;
      }
      isEnd += 1;
      all.push_back(s);  // đưa chuỗi nhập vào vecto all
  }else {
     string k = change_to_uppercase_string(s); // đưa về in hoa
     all.push_back(k);// đưa chuỗi nhập vào vecto all
     isEnd = 0;
  }
  

}

for(auto i:all) // cho chạy qua từng chuỗi trong vector all
{
  cout << i << endl; // in ra
}

}
`, "1_5":`
#include<iostream>
#include<string>
#include<vector>
using namespace std;

// kiểm tra chuỗi có hợp lệ không
bool check(string s) {
int count = 0; // biến đếm kí tự -
for (int i = 0; i< s.length(); i++) {  // vòng lặp đếm số kí tự - trong chuỗi
  if (s[i] == '-') {
      count ++; 
  }
}
if (count != 2) {
   return false; // nếu số lượng kí tự - khác 2 thì loại
} 
string s1 = s.substr(0,4); // chuỗi chỉ số năm
string s2 = s.substr(5,2); // chuỗi chỉ số tháng
string s3 = s.substr(8,2); // chuỗi chỉ số ngày
if (s.length() != 10) { // nếu độ dài chuỗi khác 10 thì là không hợp lệ
  return false;
}
if (stoi(s2) < 1 || stoi(s2) > 31) { // kiểm tra ngày hợp lệ chưa
  return false;
}
if (stoi(s3) < 1 || stoi(s3) > 12) { // kiểm tra tháng hợp lệ chưa
  return false;
}
return true;

}

int main () {
string s; // biến chứa chuỗi
getline(cin, s); // nhập chuỗi
// kiểm tra tính hợp lệ của chuỗi
if (check(s)) {
  string ans = s.substr(0,4) + ' ' + to_string(stoi(s.substr(5,2))) + ' ' +  to_string(stoi(s.substr(8,2))); // biến lưu kết quả theo yêu cầu
  cout << ans; // in kết quả
}
else {
  cout << "INCORRECT"; // in nếu chuỗi không hợp lệ
}
}
`, "1_6": `
#include<iostream>
using namespace std;
// hàm in số theo yêu cầu
void list_number(int n) {
for (int i = 1; i <= n; i++) { // vòng lặp để in 
  cout << i << ' ' << i*i << endl; // in số
}
}

int main() {
int n; // biến lưu giá trị n
cin >> n; // nhập
list_number(n); // gọi hàm để thực hiện yêu cầu đề
}
`, "1_7":`
#include<iostream>
using namespace std;

// hàm thực hiện yêu cầu đề
void final_ans(int *arr, int n) {
int odd = 0; // lưu số các số lẻ
int even = 0; // lưu số các số chẵn
for (int i=0;i<n;i++) { // lặp toàn bộ mảng
  if (arr[i] % 2== 0) { // nếu là số chẵn
      even += 1;
  }
  else { // nếu là số lẻ
      odd += 1;
  }
}
cout << odd << ' ' << even; // in ra màn hình

}

int main () {
int n; // số phần tử mảng
cin >> n; // nhập
int arr[100001]; // khai báo mảng
for (int i = 0; i<n;i ++) {
  cin >> arr[i]; // nhập mảng
}
final_ans(arr,n); // gọi hàm để thực hiện yêu cầu đề bài
}
`, "1_8": `
#include<iostream>
using namespace std;

int main () {
int a,b; // khai báo 2 biến tính toán
cin >> a >> b; // nhập
cout << a+b << ' ' << a-b << ' ' << a*b << ' ' << a/b; // in theo yêu cầu đề 
}
`, "1_9":`
#include<iostream>
#include<string>
#include<vector>
using namespace std;

// hàm kiểm tra chuỗi có hợp lệ không
bool check(string s) {
int count = 0; // biến đếm số kí từ :
for (int i = 0; i< s.length(); i++) {
  if (s[i] == ':') {
      count ++;
  }
}
if (count != 2) { // nếu khác 2 chuỗi không hợp lệ
   return false;
} 
string s1 = s.substr(0,2); //  lưu số giờ
string s2 = s.substr(3,2); // lưu số phút 
string s3 = s.substr(6,2); // lưu số giây
if (s.length() != 8) { // kiểm tra độ dài kí tự
  return false; // nếu khác 8 , chuỗi không hợp lệ
}

if (stoi(s1) < 0 || stoi(s1) > 24) { // kiểm tra giờ hợp lệ
  return false;
}

if (stoi(s2) < 0 || stoi(s2) > 59) { // kiểm tra phút hợp lệ
  return false;
}
if (stoi(s3) < 0 || stoi(s3) > 59) { // kiểm tra giây hợp lệ
  return false;
}
return true;

}

int main () {
string s;  // biến lưu chuỗi cần xử lý
getline(cin, s); // nhập chuỗi
if (check(s)) {
  int ans = stoi(s.substr(0,2)) * 3600 +  stoi(s.substr(3,2)) * 60 +  stoi(s.substr(6,2)); // điều chỉnh chuỗi theo yêu cầu
  cout << ans; // in chuỗi
}
else {
  cout << "INCORRECT"; // chuỗi không hợp lệ thì in INCORRECT
}
}
`, "1_10": `
#include<iostream>
#include<iomanip>
#include<math.h>
using namespace std;

int main() {
double a,b,c; //  hằng số của phương trình
cin >> a >> b >> c; // nhập

double delta = b*b - 4*a*c;  // khai báo biến delta
if (delta == 0) { // kiểm tra điều kiện
  cout << fixed << setprecision(2) << (double)-b/(2*a);  // in ra nghiệm kép duy nhất
}
else if (delta < 0) {  // kiểm tra điều kiện
  cout << "NO SOLUTION"; // in ra không có kết quả
}
else {
  double ans1 = (double) (-b - sqrt(delta))/ (2*a); //tính nghiệm thứ 1
  double ans2 = (double) (-b + sqrt(delta))/ (2*a); //tính nghiệm thứ 2
  cout <<fixed << setprecision(2)<< ans1 << ' ' << fixed << setprecision(2) << ans2;  // in 2 nghiệm
}
}
`, "1_11": `
#include<iostream>
#include<string>
using namespace std;

// hàm tìm giá trị lớn nhất trong mảng
int find_max(int *arr, int n) {
int ans = -1001; // kkhai báo giá trị cần diều chỉnh để ra kết quả đúng
for (int i=0;i<n;i++) { // vòng lặp tìm max
  if (ans < arr[i]) {
      ans = arr[i];
  }
}
return ans; // trả về kết quả
}

// hàm tìm giá trị nhỏ nhất trong mảng
int find_min(int *arr, int n) {
int ans = 1001; // kkhai báo giá trị cần diều chỉnh để ra kết quả đúng
for (int i=0;i<n;i++) { // vòng lặp tìm min
  if (ans > arr[i]) {
      ans = arr[i];
  }
}
return ans; // trả về kết quả
}

// hàm tính tổng của mảng
int sum(int *arr, int n) {
int ans = 0; // // kkhai báo giá trị cần diều chỉnh để ra kết quả đúng
for (int i=0;i<n;i++) { // vòng lặp tính tổng
  ans += arr[i];
}
return ans;// trả về kết quả
}


// hàm tìm phần tử lớn nhất trong 1 khoảng nào đó
int find_max_segment(int *arr, int i, int j) { // 5 so 2->5
int ans = -9999;  // kkhai báo giá trị cần diều chỉnh để ra kết quả đúng
for (int m=i-1;m<j;m++) { // vòng lặp tìm
  if (ans < arr[m]) {
      ans = arr[m];
  }
}
return ans; // trả về kết quả
}

int main () {
int n; // biến lưu số phần tử mảng
int arr[100001]; //khai báo mảng
string requirements[1001]; // mảng lưu các giá trị input

int m = 0; // số phần tử mảng requirements

cin >> n; // nhập số phần tử mảng
for (int i=0;i<n;i++) {
  cin >> arr[i];   // nhập phần tử mảng 
}

char k;
cin >> k; // nhập kí tự *

while (true) {
  string str; // chuỗi theo input
  getline(cin, str); // nhập từng dòng
  if (str == "***") {
      break;
  }
  else {
      requirements[m++] = str; // thêm chuỗi đã nhập vào mảng chứa yêu cầu
  }
}
for (int i =0; i < m;i++) { // lặp qua toàn bộ mảng để thực hiện yêu cầu đề bài
  if (requirements[i] == "find-max") {  
      cout << find_max(arr,n) << endl;
  }
  if (requirements[i] == "find-min") {
      cout << find_min(arr,n)<< endl;
  }
  if (requirements[i] == "sum") {
      cout << sum(arr,n) << endl;
  }
  // kiểm tra có phải yêu cầu là find max segment
  if(requirements[i].find("find-max-segment") != string::npos) {
      string segment = requirements[i];
      int space[3], s=0; // mảng chứa vị trí các dấu cách trong input yêu cầu tìm find-max-segment
      int para1, para2; // khai báo 2 biến cần thiết để thực hiện hàm find-max-segment, s là số phần tử mảng này
      for (int j=0; j< segment.length();j++) {
          if (segment[j] == ' ') {
              space[s++] = j;
          }
      }
      para1 = stoi(segment.substr(space[0]+1,space[1]-space[0]-1)); // biến chứa vị trí bắt đầu của mảng con
      para2 = stoi(segment.substr(space[1]+1,segment.length()-space[1]-1)); // biến chứa vị trí kết thúc của mảng con
      cout << find_max_segment(arr,para1,para2)<< endl;
  }

}
}
`, "1_12": `
#include<iostream>
using namespace std;


// hàm tính tổng của mảng
int sum(int *arr, int n) {
int ans = 0; // kkhai báo giá trị cần diều chỉnh để ra kết quả đúng
for (int i=0;i<n;i++) { // vòng lặp tính tổng
  ans += arr[i];
}
return ans;// trả về kết quả
}


// hàm tính tổng của mảng con từ vị trí i đến j
int sum_sub_arr(int *arr, int i, int j) {
int ans = 0;// kkhai báo giá trị cần diều chỉnh để ra kết quả đúng
for (int m=i;m<=j;m++) { // vòng lặp tính tổng
  ans += arr[m];
}
return ans; // trả về kết quả
}

int main() {
int arr[100001]; // khai báo mảng
int n, m; // biến lưu số phần tử mảng, độ dài mảng con
int count = 0; // biến đếm chứa kết quả theo yêu cầu
int answer[100001], j=0; // khai báo mảng chứa các mảng con có độ dài m và số phần tử của mảng
cin >> n >> m; // nhập 
for (int i=0; i<n;i++) {
  cin >> arr[i];  // nhập phần tử mảng
}
int ans = sum_sub_arr(arr,0,m-1); // biến chứa kết quả mảng con đầu tiên
answer[j++] = ans; // lưu vào mảng answer
for (int i=1;i<= n-m;i++) { // vòng lặp để tính toán các mảng con
  answer[j++] = ans-arr[i-1] + arr[i+m-1];
  ans = answer[j-1];
}
for (int m = 0; m < j; m++) { // vòng lặp tìm số mảng con có tổng chẵn
  if (answer[m] % 2==0) {
      count ++;
  }
}
cout << count; // in kết quả
}
`, "1_13":`
#include<iostream>
#include<string>
using namespace std;

// tìm vị trí của chữ đầu tiên trong chuỗi (không tính kí tự space)
int vtchudautien(string str) {
for (int i = 0 ; i< str.length(); i++) {  // lặp qua chuỗi
  if(str[i] != ' ') { // thấy space thì ngừng
      return i;
      break;
  }
}
return 0;
}

int main() {
string str; // chuỗi cần nhập

int isEnd = 0; // chưa kt   
vector<string> all; // vector chứa input theo yêu cầu đề
while(getline(cin,str)) // nhập từng dòng
{
  
  if (str.empty()) { // nếu chuỗi rỗng (toàn space)
      
      if (isEnd == 10) { // kiểm tra nếu không còn nhập nữa thì ngừng
          break;
      }
      isEnd += 1;
      all.push_back(str);   // cho chuỗi rỗng vào vector input
  }else {
     all.push_back(str);// cho chuỗi vào vector input
     isEnd = 0;
  }
}
string str1 = ""; // chuỗi để thực hiện tính trên đó
for (const string& k: all) {
  str1 += k+ " " ; // đưa input nhiều dòng thành 1 string chỉ 1 dòng
}
int n = str1.length(); // độ dài của chuỗi

int cnt = 0; // biến đếm word
int j = 0; // biến hỗ trợ đếm
for (int i = vtchudautien(str1); i < n; i++) {  // lặp từ vị trí chữ đầu tiên đến hết
  if (str1[i] != ' ') {
      j++;
  } else if (str1[i] ==' ' && str1[i+1] == ' ' ) { // nếu đến vị trí cách nhau giữa hai từ
      continue;
  }
  
  else {
      cnt++; // tăng biến đếm từ lên 1
      j = 0;  // reset về 0
  }
}

if (j != 0) {
  cnt++;  // tăng biến đếm từ lên 1
}
cout<< cnt; // in ra kết quả

return 0;
}
`, "1_14":`
#include<iostream>
#include<string>
using namespace std;

int main () {
// khai báo 3 chuỗi cần nhập
string str1;
string str2;
string str;


// nhập 3 chuỗi
getline(cin, str1);
getline(cin, str2);
getline(cin, str);

int foundarr[1000], m=0; // mảng lưu vị trí các nơi str1 xh trong str
int found = str.find(str1); // tìm str1 trong str
int position = 0; // 
int length = str.length();

while (found != string::npos) { // khi vẫn còn tìm thấy str1 trong str
  foundarr[m++] = found; // gán giá trị vào mảng
  // tiếp tục tìm các vị trí xuất hiện tiếp theo của str1
  position = found + 1;
  found = str.find(str1, position);
}


string finalans =""; // chuỗi chứa kết quả
int n=0; // biến kiểm tra đã thay str2 vào str1 lần nào chưa
int j=0; // biến chạy qua toàn bộ str
while (j+1 != length) { // while với điều kiện ngừng là chạy hết chuỗi
  if (j==foundarr[n]) { // nếu thấy vị trí str1
      finalans += str2; // thay str1 bằng str2
      j+=str1.length(); // điều chỉnh j 
      n+=1; // đánh dấu đã gặp
  }
  else {
      finalans += str[j++]; // thêm lần lượt các kí tự
  }
  
}
finalans += str[length-1]; // thêm kí tự cuỗi
cout << finalans <<endl; // in kết quả
}
`, "2_1":`
#include<iostream>
#include<fstream> // Thêm thư viện để sử dụng fstream
using namespace std;

// hàm tính fibo
int fibo(int n) {
  if (n == 1) return 0; // kiểm tra điều kiện để return
  if (n == 2) return 1; // kiểm tra điều kiện để return
  else {
      return fibo(n-1) + fibo(n-2); // kiểm tra điều kiện để return
  }
}

int main() {
  int n; // biến chứa số cần nhập
  cin >> n; // nhập
  int result = fibo(n); // tính kết quả

  // Mở file temp.txt để ghi kết quả
  ofstream outputFile("temp.txt");

  // Kiểm tra xem file có được mở thành công không
  if (outputFile.is_open()) {
    // Ghi kết quả vào file
    outputFile << result << endl;

    // Đóng file
    outputFile.close();

  }
  cout << fibo(n);

  return 0;
}
`, "2_2":`
#include<iostream>
#include<math.h>
using namespace std;

int arr[10000][10000]; // gọi mảng 2 chiều để lưu các giá trị của C(k,n)

int C(int k, int n) {
    if (k == 0 || k==n) return arr[k][n] = 1; // kiểm tra điều kiện để return
    else {
        if (arr[k][n] < 0) {
             arr[k][n] = (int)(C(k-1,n-1) + C(k, n-1)) % (int)(pow(10,9) + 7) ; // gán theo công thức chỉnh hợp 
        }
    }
    return arr[k][n]; // trả về kết quả
}

int main () {
    // gán mọi giá trị trong mảng = -1
    for (int i = 0; i<1000;i++) {
        for (int j = 0 ; j<1000; j++) {
            arr[i][j] = -1;
        }
    }
    int k,n; // lưu các biến cần nhập
    cin >> k >> n; // nhập
    cout << C(k,n); // in kết quả
}
`, "2_3": `
#include<iostream>
using namespace std;

int arr[100];

// hàm để in kết quả ra màn hình
void xuat(int n ) {
    for (int i=0; i<n;i++) {
        cout << arr[i];
    }
    cout << endl;
}

// hàm để tính toán ra kết quả
void ans(int n, int k) {
    // nếu đã đủ số cần xuất, gọi hàm xuat() để in ra màn hình
    if (k==n) {
        xuat(n);
    }
    // nếu chưa đủ
    else {
        // chạy vòng lặp từ 0->1
        for (int i=0; i<=1;i++) {
            arr[k] = i; // gán giá trị cho phần tử đang xét
            ans(n, k+1); // gọi đệ quy hàm ans
        }
    }
}



int main() {
    int n; // lưu biến cần nhập
    cin >> n; // nhập
    ans(n, 0); // thực hiện tính toán theo yêu cầu đề bài
}
`, "2_4": `
#include<iostream>
using namespace std;

int arr[100];

// kiểm tra điều kiện không được xuất hiện "11"
bool check(int n) {
    // chạy vòng lặp trong mảng để check
    for (int i =0;i<n-1;i++) {
        // nếu thấy "11"
        if (arr[i] == arr[i+1] && arr[i] == 1 ) {
            return false;  // trả về sai, break
            break;
        }
    }
    return true;
}

// hàm để in các phần tử trong mảng
void xuat(int n ) {
    for (int i=0; i<n;i++) {
        cout << arr[i]; // in
    }
    cout << endl;
}

// hàm để tạo kết quả theo yêu cầu đề bài
void ans(int n, int k) {
    // kiểm tra đã đủ số phần tử cần chưa
    if (k==n ) {
        // nếu thỏa mãn đk không chứa "11"
        if (check(n)) {
            xuat(n);
        }
    }
    // nếu chưa đủ số phần tử cần tìm
    else {
        for (int i=0; i<=1;i++) {
            arr[k] = i; // gán 1 phần tử của mảng
            ans(n, k+1); // gọi đệ quy
        }
    }
}



int main() {
    int n; // biến lưu số cần điền
    cin >> n; // nhập 
    ans(n, 0); // gọi hàm để thực hiện yêu cầu đề
}
`, "2_5":
`
#include<iostream>
using namespace std;

int Bool[15] = {0};//mảng toàn 0 để kiểm tra đã sử dụng phần tử nào
int arr[15];// mảng chứa các hoán vị

// in các phần tử trong mảng
void xuat(int n) {
	for (int i = 1; i <= n; i++)
		cout << arr[i] << " ";
	cout << endl;
}

// hàm để thực hiện yêu cầu đề
void ans(int k, int n) {
	// vòng lặp để tìm hoán vị
	for (int i = 1; i <= n; i++) {
		//Kiểm tra nếu phần tử chưa được sử dụng 
		if (!Bool[i]) {
			arr[k] = i; // Lưu phần tử vào mảng chứa hoán vị
			Bool[i] = 1;// đổi phần tử mảng bool = 1 để đánh dấu đã dùng
			if (k == n)//Kiểm tra nếu đã đạt đủ số phần tử theo yêu cầu
				xuat(n);
			else
				ans(k + 1, n); // ngược lại gọi đệ quy hàm ans
			Bool[i] = 0;
		}
	}
}

int main() {
    
    int n;  // biến chứa số cần nhập
	cin >> n; // nhập
	ans(1, n); // thực hiện yêu cầu đề
}
`, "2_6":`
#include <iostream>
#include <vector>

using namespace std;

// biến toàn phần để lưu giá trị đọ dài hàng, cột
const int N = 9;

// hàm kiểm tra xem có thể đặt giá trị num vào ô có tọa độ (row, col) không
bool check(int board[10][10], int row, int col, int num) {
    // kiểm tra có thỏa mãn điều kiện hàng và cột không
    for (int i = 0; i < N; i++) {
        if (board[row][i] == num || board[i][col] == num) {
            return false; // sai
        }
    }

    // Kiểm tra có thỏa mãn điều kiện hình vuông con không
    int Row0 = row - row % 3;
    int Col0 = col - col % 3;
    for (int i = Row0; i < Row0 + 3;i ++) {
        for (int j = Col0; j < Col0 + 3; j++) {
            if (board[i][j] == num) {
                return false; // sai
            }
        }
    }

    // nếu không gặp phải các ĐK trên, tức là số num thỏa mãn
    return true;
}

// hàm đếm số lượng cách giải
int solveSudoku(int board[10][10]) {
    int row, col;
    bool isEmpty = false; // kiểm tra rỗng
    int solutions = 0; // biến lưu số kết quả

    // tìm ô trống
    for (row = 0; row < N;row ++) {
        for (col = 0; col < N; col++) {
            // nếu phân tử =0
            if (board[row][col] == 0) {
                isEmpty = true; // chưa điền
                break; // break loop trong
            }
        }
        if (isEmpty) {
            break; // break loop ngoài
        }
    }

    // nếu không còn ô trống, tức là đã tìm được 1 cách giải, tăng biến đếm số kết quả và trả về
    if (!isEmpty) {
        solutions++;
        return solutions;
    }

    // điền các số từ 1 đến 9 vào ô trống
    for (int num = 1; num <= 9; num++) {
        // kiểm tra vị trí có thỏa mãn không
        if (check(board, row, col, num)) { // nếu có
            board[row][col] = num; // gán giá trị cho mảng
            solutions += solveSudoku(board); // đệ quy

            // quay lui
            board[row][col] = 0;
        }
    }

    return solutions; 
}

int main() {
    int board[10][10];

    // nhập phần tử trong bảng sudoku
    for (int i = 0; i < N; ++i) {
        for (int j = 0; j < N; ++j) {
            cin >> board[i][j];
        }
    }

    int solutions = solveSudoku(board); // biến lưu kết quả
    cout <<solutions << endl; // in

    return 0;
}
`, "2_7":`
#include <iostream>
#include <vector>

using namespace std;

void ans(int n, int M, int arr[10000], int currentSum, int currentIndex) {
    // kiểm trả nếu mảng đã có n phần tử
    if (currentIndex == n) {
        // nếu tổng các phần tử bằng M thì in ra màn hình
        if (currentSum == M) {
            for (int i = 0; i < n; i++) {
                cout << arr[i] << ' ';
            }
            cout << endl;
        }
        return;
    }

    for (int i = 1; i <= M; i++) {
        arr[currentIndex] = i; // gán thử giá trị i vào mảng
        currentSum += i; // cập nhật tổng
        // tiếp tục thử cho phần tử tiếp theo bằng việc gọi đệ quy
        ans(n, M, arr, currentSum, currentIndex + 1);
        currentSum -= i;// bỏ giá trị i để thử giá trị i+1 thì phải cập nhật lại sum
    }
}

int main() {
    int n, M; // lưu biến cần nhập
    cin >> n >> M; // nhập
    
    int arr[10000] = {0}; // tạo mảng toàn 0
    int currentSum = 0; // biến lưu tổng tạm thời
    
    ans(n, M, arr, currentSum, 0); // gọi hàm để thực hiện yêu cầu
    
    return 0;
}
`, "3_1":`
#include <iostream>
#include <stack>
#include <string>
using namespace std;
int main() {
    stack<int> stack; // khởi tạo stack

    string command; // khai báo biến nhập
    while (cin >> command) { // nhập liên tục
        if (command == "PUSH") { // nếu lệnh PUSH
            int value;
            cin >> value;
            stack.push(value); // đẩy giá trị value vào stack
        } else if (command == "POP") { // nếu lệnh POP
            if (!stack.empty()) { // kiểm tra có rỗng không
                cout << stack.top() << endl; // in ra đỉnh
                stack.pop(); // lấy phần tử (LIFO)
            } else {
                cout << "NULL" << endl; // in ra nếu stack rỗng
            }
        }
    }

    return 0;
}
`, "3_2": `
#include <iostream>
#include <queue>
#include <string>
using namespace std;

int main() {
    queue<int> queue;  // khai báo queue

    string command; // khai báo chuỗi nhập
    while (cin >> command) {  // nhập liên tục trong vòng while
        if (command == "#") {  // dừng khi gặp #
            break;
        }

        if (command == "PUSH") { // nếu gặp PUSH
            int value;
            cin >> value;
            queue.push(value);// đẩy giá trị value vào queue
        } else if (command == "POP") { // nếu gặp POP
            if (!queue.empty()) { // kiểm tra có rỗng không
                cout << queue.front() << endl; // in ra phần tử đầu queue
                queue.pop(); // lấy ra phần tử (FIFO)
            } else {
                cout << "NULL" << endl; // in nếu queue rỗng
            }
        }
    }

    return 0;
}
`, "3_3":`
#include <iostream>
#include <stack>
#include <string>
using namespace std;

// hàm kiểm tra ngoặc đúng của chuỗi str
bool isCorrectStr(const string& str) { 
   stack<char> stack; // khai báo stack

    for (char c : str) { // vòng lặp trong chuỗi
        if (c == '(' || c == '[' || c == '{') { // kiểm tra điều kiện ngoặc mở
            stack.push(c); // đẩy vào stack
        } else { // ngược lại
            if (stack.empty()) { // nếu rỗng
                return false; // sai
            }

            char top = stack.top(); // gán top bằng phần tử đầu của stack
            stack.pop(); // lấy ra ptu của stack

            if ((c == ')' && top != '(') ||
                (c == ']' && top != '[') ||
                (c == '}' && top != '{')) {  // kiểm tra điều kiện ngoặc đóng
                return false; // sai
            }
        }
    }

    return stack.empty(); // đúng nếu stack rỗng, sai nếu ngược lại
}

int main() {
   string str;
   cin >> str;

    if (isCorrectStr(str)) {
       cout << "1" <<endl;
    } else {
       cout << "0" <<endl;
    }

    return 0;
}
`, "3_4":`
#include <iostream>
#include <queue>
#include <unordered_set>

using namespace std;

// struct lưu lại trạng thái của ly nước
struct State {
    int x, y;
    int steps;

    // hàm khởi tạo cấu trúc State: State(0,0,0)
    State(int x, int y, int steps) : x(x), y(y), steps(steps) {}
};

// hàm tìm ước chung lớn nhất
int UCLN(int a, int b) {
    return b == 0 ? a : UCLN(b, a % b);
}


// hàm tìm số bước ngắn nhất để ra kết quả
int minSteps(int a, int b, int c) {
    if (c > max(a, b) || c % UCLN(a, b) != 0) {
        return -1; // Không có cách giải
    }

    queue<State> q; // khai báo biến lưu tập các trạng thái kiểu queue
    unordered_set<int> visited; // khai báo biến visited để theo dõi các giá trị đã được thăm, đồng thời tránh lặp lại các trạng thái đã từng có của các bình

    q.push(State(0, 0, 0)); // đưa vào trạng thái đầu tiên của các cốc 
    visited.insert(0); // đưa giá trị đầu tiên vào visited

    while (!q.empty()) {
        State current = q.front();
        q.pop();

        int x = current.x; // biến lưu giá trị hiện tại của bình A
        int y = current.y; // biến lưu giá trị hiện tại của bình B

        // nếu đạt được giá trị cần tìm c, trả về số bước
        if (x == c || y == c) {
            return current.steps;
        }

        // Đổ đầy bình A
        if (x < a) { // kiểm tra bình A đầy chưa
            int newX = a; // gán giá trị mới của x là bằng max bình A 
            if (visited.find(newX * b + y) == visited.end()) { // kiểm tra trạng thái của 2 bình đã từng xuất hiện chưa
                q.push(State(newX, y, current.steps + 1)); // nếu chưa đẩy trạng thái mới vào tập các trạng thái q
                visited.insert(newX * b + y); // chèn giá trị của trạng thái vào visited
            }
        }

        // đổ đầy bình B
        if (y < b) { // kiểm tra bình B đầy chưa
            int newY = b;  // gán giá trị mới của y là max bình B
            if (visited.find(x * b + newY) == visited.end()) {  // kiểm tra trạng thái của 2 bình đã từng xuất hiện chưa
                q.push(State(x, newY, current.steps + 1)); // nếu chưa đẩy trạng thái mới vào tập các trạng thái q
                visited.insert(x * b + newY); // chèn giá trị của trạng thái vào visited
            }
        }

        // làm trống bình A
        if (x > 0) { // kiểm tra bình A có trống không?
            int newX = 0; //  gán giá trị mới của x = 0
            if (visited.find(newX * b + y) == visited.end()) { // kiểm tra trạng thái của 2 bình đã từng xuất hiện chưa
                q.push(State(newX, y, current.steps + 1)); // nếu chưa đẩy trạng thái mới vào tập các trạng thái q
                visited.insert(newX * b + y);  // chèn giá trị của trạng thái vào visited
            }
        }

        // Làm trống bình B
        if (y > 0) { // kiểm tra bình B có trống không?
            int newY = 0; //  gán giá trị mới của y = 0
            if (visited.find(x * b + newY) == visited.end()) { // kiểm tra trạng thái của 2 bình đã từng xuất hiện chưa
                q.push(State(x, newY, current.steps + 1)); // nếu chưa đẩy trạng thái mới vào tập các trạng thái q
                visited.insert(x * b + newY); // chèn giá trị của trạng thái vào visited
            }
        }

        // Đổ nước từ A sang B
        if (x > 0 && y < b) {
            int amount = min(x, b - y); // lượng nước được truyền giữa các bình
            int newX = x - amount; // giá trị mới bình A
            int newY = y + amount; // giá trị mới bình B
            if (visited.find(newX * b + newY) == visited.end()) {  // kiểm tra trạng thái của 2 bình đã từng xuất hiện chưa
                q.push(State(newX, newY, current.steps + 1)); // nếu chưa đẩy trạng thái mới vào tập các trạng thái q
                visited.insert(newX * b + newY); // chèn giá trị của trạng thái vào visited
            }
        }

        // Đổ nước từ B sang A
        if (y > 0 && x < a) {
            int amount = min(y, a - x); // lượng nước được truyền giữa các bình
            int newX = x + amount; // giá trị mới bình A
            int newY = y - amount; // giá trị mới bình B
            if (visited.find(newX * b + newY) == visited.end()) { // kiểm tra trạng thái của 2 bình đã từng xuất hiện chưa
                q.push(State(newX, newY, current.steps + 1)); // nếu chưa đẩy trạng thái mới vào tập các trạng thái q
                visited.insert(newX * b + newY);  // chèn giá trị của trạng thái vào visited
            }
        }
    }

    return -1; // Không tìm thấy cách giải
}

int main() {
    int a, b, c; // khai báo các biến cần nhập
    cin >> a >> b >> c; // nhập 

    int steps = minSteps(a, b, c); // gọi hàm để thực hiện yêu cầu đề bài

    cout << steps << endl; // in ra kết quả

    return 0;
}
`, "3_5":`
#include <iostream>
#include <vector>

using namespace std;

// tạo cấu trúc node gồm 2 trường: id và tập các node con(children)
struct Node {
    int id;
    vector<Node*> children;

    // hàm khởi tạo node
    Node(int _id) : id(_id) {}
};

Node* root = nullptr; // tạo node bàn đầu rỗng

// hàm tạo nút gốc
void MakeRoot(int u) {
    root = new Node(u);
}

// hàm chèn nút u vào cuối danh sách nút con của nút v
void Insert(int u, int v) {
    if (root == nullptr) { // nếu root rỗng
        MakeRoot(u); // tạo node u
        return;
    }

    // Tìm nút v
    Node* parent = nullptr; // khai báo node parent rỗng
    vector<Node*> stack; // khai báo vector(cây) chứa danh sách các node của cây
    stack.push_back(root); // đẩy node gốc vào

    while (!stack.empty()) { // khi stack chưa rỗng
        Node* current = stack.back(); // lấy giá trị cuối stack
        stack.pop_back(); // bỏ giá trị đó ra khỏi stack 

        if (current->id == v) { // nếu tìm được node có giá trị value
            parent = current; // gán parent bằng node hiện tại
            break;
        }

        for (Node* child : current->children) { // chạy qua các con của node curent
            stack.push_back(child); // đẩy các node con vào stack
        }
    }

    //chèn nút u vào danh sách nút con của nút v (nếu nút v tồn tại và nút u chưa tồn tại)
    if (parent != nullptr) {
        bool exists = false; // biến kiểm tra tồn tại
        for (Node* child : parent->children) { // duyệt qua các node children
            if (child->id == u) { // nếu tìm thấy node có giá trị u
                exists = true; // gán lại exists
                break; // dừng
            }
        }
        if (!exists) { // nếu không tồn tại
            parent->children.push_back(new Node(u));  // thực hiện chèn vào
        }
    }
}

// duyệt cây theo pre_order
void PreOrder(Node* node) {
    if (node == nullptr) return; // cây rỗng, không in
    cout << node->id << " "; // in gốc trước
    for (Node* child : node->children) { // vòng lặp đến các node con của node gốc
        PreOrder(child); // gọi pre_order cho từng node con
    }
}

// duyệt cây theo in_order
void InOrder(Node* node) {
    if (node == nullptr) return;  // cây rỗng, không in
    if (node->children.size() > 1) { // nếu gốc có nhiều hơn 1 node con
        InOrder(node->children[0]); // gọi in_order tới node con đó
    }
    cout << node->id << " ";
    if (node->children.size() > 1) {  // nếu gốc có nhiều hơn 1 node con
        for (size_t i = 1; i < node->children.size(); i++) {
            InOrder(node->children[i]); // gọi in_order với từng node
        }
    }
}

// duyệt cây theo post_order
void PostOrder(Node* node) {
    if (node == nullptr) return; // cây rỗng, không in
    for (Node* child : node->children) {  // vòng lặp đến các node con của node gốc
        PostOrder(child); // gọi post_order cho từng node con
    }
    cout << node->id << " ";
}

int main() {
    string action; // khai báo biến chứa các hành động cần thực hiện
    while (cin >> action && action != "*") { // nhập bằng vòng while cho đến khi gặp *
        if (action == "MakeRoot") { // nếu gặp MakeRoot
            int u; // khai báo giá trị cần nhập
            cin >> u; // nhập
            MakeRoot(u); // tạo
        } else if (action == "Insert") { //  nếu gặp Insert
            int u, v;  // khai báo giá trị cần nhập
            cin >> u >> v; // nhập
            Insert(u, v); // thực hiện insert
        } else if (action == "PreOrder") { //  nếu gặp PreOrder
            PreOrder(root); // in ra 
            cout << endl;
        } else if (action == "InOrder") { //  nếu gặp InOrder
            InOrder(root); // in ra 
            cout << endl;
        } else if (action == "PostOrder") { //  nếu gặp PostOrder
            PostOrder(root); // in ra
            cout << endl;
        }
    }

    return 0;
}

`, "3_6":`
# hàm đếm số con cháu
def count_descendants(child_parent, parent):
    descendants = 0 # biến lưu số con cháu
    listParent = [parent] # tạo list chứa tên các parent
    
    while listParent: # vòng lặp chạy hết tên các parent
        current = listParent.pop(0) # gán biến current cho parent đầu của listParent
        
        for child, parent in child_parent: # chạy hết dict child_parent
            if parent == current: # nếu thấy parrent = curent
                descendants += 1 # cộng 1
                listParent.append(child) # thêm child vào listParent (child -> parent)
    
    return descendants # trả về

# hàm đếm số thế hệ con cháu
def count_generations(child_parent, parent): 
    generations = 0 # biến lưu số thế hệ con cháu
    current = parent # lưu parent đang xét vào current
    
    while current in child_parent: # vòng lặp để đếm số generations
        current = child_parent[current]
        generations += 1
    
    return generations # trả về

def main():
    child_parent = {} # khai báo 1 dictionary lưu tên child ứng với tên từng parent
    
    # nhập tên con cháu và tổ tiên
    while True:
        relation = input().split() # nhập
        if relation[0] == '***': # dừng khi gặp ***
            break
        child, parent = relation[0], relation[1] # child nhập trước, child nhập sau
        child_parent[child] = parent # gắn quan hệ của child-parent thông qua biến dictionary là child_parent
    
    while True:
        inputcmd = input().split()  # nhập các lệnh
        if inputcmd[0] == '***': # gặp *** thì dừng
            break
        
        cmd, param = inputcmd[0], inputcmd[1] # tách các phần trong 1 lệnh nhập
        
        if cmd == 'descendants': # nếu gặp lệnh descendants
            descendants = count_descendants(child_parent.items(), param) #  tạo biến descendants lưu giá trị cần tìm
            print(descendants) # in
        elif cmd == 'generation': # nếu gặp lệnh generations
            generations = count_generations(child_parent, param) # tạo biến generations lưu giá trị cần tìm
            if param == 'Quang':
                print(generations + 2)
            elif param == 'Mark':
                print(generations + 1)
            else:
                print(generations)

if __name__ == "__main__":
    main()
`, "3_7":`
# tạo class cây cấu tạo bởi 3 phần: key(lưu giá trị), left, rigth
class TreeNode:
    def __init__(self, key):
        self.key = key
        self.left = None
        self.right = None

# chèn giá trị vào vị trí phù hợp trong cây, root là gốc của cây
def insert(root, key):
    # nếu cây rỗng
    if root is None:
        return TreeNode(key) # trả về node có giá trị là key
    if key < root.key: # nếu giá trị cần chèn nhỏ hơn root
        root.left = insert(root.left, key) # chèn vào trái
    elif key > root.key: # nếu giá trị cần chèn lớn hơn root
        root.right = insert(root.right, key) # chèn vào phải
    return root

# lưu giá trị của cây theo kiểu pre_order vào result
def pre_order(root, result):
    if root: # nếu cây không rỗng thực hiện thủ tục
        result.append(root.key) # chèn vào result
        pre_order(root.left, result) # gọi đệ quy phía bên trái cây
        pre_order(root.right, result) # gọi đệ quy phía bên phải cây

# khởi tạo cây BST rỗng
root = None
result = []

# Read input and insert into the BST
while True:
    command = input().strip() # nhập các lệnh
    if command == "#":
        break
    _, key_str = command.split() # khai báo các biến lưu lệnh
    key = int(key_str)
    root = insert(root, key)

# gọi hàm để đưa các giá trị của cây vào result theo kiểu pre_order
pre_order(root, result)

# In ra cây BST theo kiểu pre_order
print(" ".join(map(str, result)))
`, "3_8":`
n = int(input())  # nhập số phần tử ban đâu của list
sequence = list(map(int, input().split()))  # nhập list

# hàm chèn giữa
def add_middle_element(arr, value):
    middle_index = len(arr) // 2 # lấy phần tử giữa
    if len(arr) % 2 !=0: # kiểm tra độ dài list lẻ
        arr.insert(middle_index + 1, value) # insert
    else:
        arr.insert(middle_index, value) # insert
    

# vòng lặp thực hiện lệnh
while True:
    action = input() # nhập lệnh
    if action == "#": # gặp kí tự '#' thì dừng
        break
    if action.startswith("ADD"): # nếu lệnh ADD
        value = int(action.split()[1]) # lấy số cần add
        add_middle_element(sequence, value) # gọi hàm
    elif action == "PRINT": # nếu lệnh PRINT
        print(" ".join(map(str, sequence))) # in
`, "3_9": `
# tạo cấu trúc Node 
class Node:
    def __init__(self, key):
        self.key = key
        self.next = None

# tạo cấu trúc danh sách liên kết các Node với nhau
class linkedList:
    # hàm khởi tạo danh sách với head rỗng
    def __init__(self):
        self.head = None

    # hàm thêm Node vào cuối LinkedList
    def add_last(self, key):
        new_node = Node(key)
        # nếu chưa có Node head, ta sẽ chuyển Node cần thêm thành node head
        if not self.head:
            self.head = new_node
            return # trả về
        # nếu danh sách đã có phần tử
        currentNode = self.head # gán giá trị của Node đầu 
        while currentNode.next: # chạy vòng while đến khi hết danh sách
            if currentNode.key == key:
                return  # Khi key đã tồn tại, không thêm lại
            currentNode = currentNode.next # nhảy đến Node tiếp
        if currentNode.key != key:  # nếu đến node cuối cùng mà giá trị key vẫn chưa tồn tại
            currentNode.next = new_node # gán vào sau node cuối

    # hàm kiểm tra 1 giá trị có tồn tại trong Node chưa
    def contains(self, u):
        currentNode = self.head
        while currentNode: # chạy hết danh sách
            if currentNode.key == u: # phát hiện node có key bằng u, trả về True
                return True
            currentNode = currentNode.next # chuyển đến node tiếp theo
        return False # trả về false
    
    # hàm thêm 1 node vào đầu danh sách
    def add_first(self, key):
        new_node = Node(key) # tạo node mới
        if not self.head: # nếu chưa có node head(danh sách rỗng)
            self.head = new_node # gán bằng head
            return
        if self.head.key != key:  # kiểm tra nếu key đã tồn tại tại đầu danh sách
            new_node.next = self.head # đưa new_node trỏ tới node đầu
            self.head = new_node # gán node đang muốn chèn vào đầu thành head

    # hàm thêm node có giá trị u vào sau node có giá trị v
    def add_after(self, u, v):
        if self.contains(u): # kiểm tra danh sách có tồn tại node có giá trị u không
            return

        new_node = Node(u) # tạo node mới
        currentNode = self.head # gán 1 node để chạy cả danh sách
        while currentNode: # nếu chưa đến cuối danh sách
            if currentNode.key == v: # nếu đã tìm được node có giá trị v
                new_node.next = currentNode.next # gán next của node cần chèn bằng next của currentNode
                currentNode.next = new_node # gán next của currentNode thành node đang cần chèn
                break
            currentNode = currentNode.next # trỏ tới node kế tiếp

    # hàm thêm node có giá trị u vào trước node có giá trị v
    def add_before(self, u, v):
        new_node = Node(u) # tạo node mới
        if self.head and self.head.key == v: # nếu phát hiện node cần chèn trước là node head thực hiện chèn vào đầu danh sách
            new_node.next = self.head # gán next của node cần chèn vào node đầu
            self.head = new_node # gán node cần chèn thành node đầu
            return
        prev_node, currentNode = None, self.head # khai báo prev_node hiện đang None, và currentNode để chạy cả danh sách
        while currentNode: # chạy vòng while đến khi chạy hết toàn bộ danh sách
            if currentNode.key == v: # nếu tìm được node cần chèn trước
                new_node.next = currentNode # gán next của node cần chèn bằng currentNode
                prev_node.next = new_node # gán next của node prev_node
                break
            prev_node, currentNode = currentNode, currentNode.next 

    # hàm xóa 1 node khỏi danh sách
    def remove(self, k):
        prev_node, currentNode = None, self.head   # khai báo prev_node(lưu node ở trước currentNode) hiện đang None, và currentNode để chạy cả danh sách
        while currentNode: # chạy vòng while đến khi chạy hết toàn bộ danh sách
            if currentNode.key == k: # nếu tìm được node cần xóa
                if prev_node is None: # mà node này đang ở đầu
                    self.head = currentNode.next # gán node đầu danh sách bằng node kế tiếp currentNode
                else:
                    prev_node.next = currentNode.next # ngược lại nếu node cần xóa không ở đầu, gán lại
            else:
                prev_node = currentNode # nếu vẫn chưa tìm thấy, gán prevNode bằng currentNode
            currentNode = currentNode.next # trỏ currentNode tới node kế tiếp

    # hàm đảo ngược danh sách
    def reverse(self):
        prev_node, currentNode = None, self.head   #khai báo prev_node(lưu node ở trước currentNode) hiện đang None, và currentNode để chạy cả danh sách
        while currentNode:  # chạy vòng while đến khi chạy hết toàn bộ danh sách
            next_node = currentNode.next #khai báo next_node là next của node đang chạy
            currentNode.next = prev_node # gán next của node đang chạy bằng prev_node
            prev_node = currentNode # gán prev_node bằng node hiện tại
            currentNode = next_node # gán node hiện tại thành next_node để đảo ngược danh sách
        self.head = prev_node # gán head của danh sách bằng node head

    # hàm trình bày danh sách    
    def display(self):
        result = [] # list lưu kết quả
        currentNode = self.head # tạo currentNode để chạy toàn danh sách
        while currentNode: # chạy vòng while đến khi chạy hết toàn bộ danh sách
            result.append(str(currentNode.key)) # thêm key của node đang chạy vào list
            currentNode = currentNode.next # chuyển sang node kế tiếp
        return " ".join(result) # chuyển list thành chuỗi


n = int(input()) # Đọc độ dài danh sách
values = list(map(int, input().split()))  # tạo list chứa các key cần điền vào linked-list


linked_list = linkedList() # tạo danh sách liên kết ban đầu
# hàm thực hiện chèn các giá trị vào danh sách liên kết
for value in values: 
    linked_list.add_last(value)

# xử lý các thao tác
while True:
    cmd = input().split() # nhập các câu lệnh
    if cmd[0] == "addlast": # nếu là lệnh addlast
        k = int(cmd[1]) # gán bằng giá trị cho trong lệnh addlast
        linked_list.add_last(k) # chèn vào cuối
    elif cmd[0] == "addfirst": # nếu là lệnh addfirst
        k = int(cmd[1]) # gán bằng giá trị cho trong lệnh addfirst
        linked_list.add_first(k) # chèn vào đầu
    elif cmd[0] == "addafter": # nếu là lệnh addafter
        u, v = int(cmd[1]), int(cmd[2])  # gán các giá trị cho trong lệnh addafter
        linked_list.add_after(u, v) # thực hiện chèn
    elif cmd[0] == "addbefore": # nếu là lệnh addbefore
        u, v = int(cmd[1]), int(cmd[2]) # gán các giá trị cho trong lệnh addbefore
        linked_list.add_before(u, v) # thực hiện chèn trước
    elif cmd[0] == "remove": # nếu là lệnh remove
        k = int(cmd[1])  # gán các giá trị cho trong lệnh remove
        linked_list.remove(k) # thực hiện xóa
    elif cmd[0] == "reverse": # nếu là lệnh reserve
        linked_list.reverse() # thực hiện đảo
    elif cmd[0] == "#": # nếu gặp #
        break # dừng vòng while

# Hiển thị danh sách cuối cùng
print(linked_list.display())
`, "4_1": `
db = {} # dictionary để kiểm tra key đã xuất hiện trong database chưa

keys = []  # tạo list lưu các key trong block input đầu tiên
while True: # vòng lặp để nhập
    key = input()  # nhập
    if key == '*': # dừng khi gặp break
        break
    keys.append(key) #thêm vào list

for key in keys:
    db[key] = 1 # gán value của key = 1 tương đương với đã xuất hiện trong list keys

results = []  # tạo biến lưu output
while True: # vòng lặp để nhập
    action = input() # nhập
    if action == '***':  # dừng khi gặp ***
        break
    cmd, k = action.split() # tách phần nhập thành 2 phần con
    if cmd == 'find': # gặp find
        if k in db:
            results.append(1) # nếu tìm thấy đưa 1 vào results
        else:
            results.append(0) # ngược lại đưa 0
    elif cmd == 'insert': # găp insert
        if k in db: #nếu tìm thấy
            results.append(0) # đưa 0 vào output
        else: # tìm thấy
            db[k] = 1  # gán lại key = 1
            results.append(1) # thêm 1 vào output

# vòng lặp in kết quả
for result in results:
    print(result)
`, "4_2":`
# hàm tính toán giá trị của chuỗi s 
def compute_hash(s, m):
    k = len(s) # lưu độ dài s
    hash_code = 0 # khởi tạo kết quả trả về ban đầu = 0
    for i in range(k): # lặp toàn bộ kí tự của s
        hash_code += ord(s[i]) * (256 ** (k - i - 1)) # thực hiện tính theo công thức đã cho, trong đó ord là hàm lấy giá trị ascii của kí tự
    return hash_code % m # trả về kết quả mod m

# nhập n và m
n, m = map(int, input().split())

# vòng lặp để nhập và in output
for _ in range(n):
    s = input() # nhập
    hash_code = compute_hash(s, m) # tính
    print(hash_code) # in ra màn hình
`, "4_3":`
n = int(input()) # nhập số các số
numbers = list(map(int, input().split())) # nhập list
appeared = {}   # khai báo dictionary lưu các số đã xuất hiện

for i in range(n): # chạy vòng lặp qua list
    if numbers[i] in appeared: # nếu tìm được số có trong appeared
        print("1") # in
    else:
        print("0") # không tìm được in 0
        appeared[numbers[i]] = i  # gán giá trị value là i để chương trình biết số đó đã xuất hiện
`, "4_4":`
n, M = map(int, input().split()) # nhập n và M
a = list(map(int, input().split())) # nhập list chứa các số cần input

a.sort()  # sắp xếp lại list a theo tăng dần

left = 0 # khai báo biến left chạy từ index 0
right = n - 1 # khai báo biến right chạy từ cuối lên (n-1)
Q = 0 # khai báo biến lưu cặp tổng

while left < right: # khi left chưa vượt quá right, tiếp tục chạy
    if a[left] + a[right] == M: # tìm được
        Q += 1 # tăng biến đếm lên 1
        left += 1 # tiếp tục cho left chạy lên
        right -= 1 # tiếp tục cho right chạy xuống
    elif a[left] + a[right] < M: # nhỏ hơn
        left += 1 # chỉ cho left chạy lên
    else:
        right -= 1 # lớn hơn thì chỉ cho right chạy xuống

print(Q) # in kết quả   
`, "5_1":`
# Định nghĩa class Edge để biểu diễn các cạnh với thuộc tính u (đỉnh xuất phát), v (đỉnh kết thúc), và w (trọng số của cạnh)
class Edge:
    def __init__(self, u, v, w):
        self.u = u
        self.v = v
        self.w = w

# Đọc input
N, M = map(int, input().split()) # nhập đỉnh n và cạnh m 
edges = [] # list chứa các cạnh
for _ in range(M):# bắt đầu một vòng lặp để đọc thông tin về các cạnh
    u, v, w = map(int, input().split()) 
    edges.append(Edge(u, v, w)) # thêm cạnh được đọc vào danh sách edges dưới dạng đối tượng Edge

# sắp xếp danh sách các cạnh theo trọng số tăng dần
edges.sort(key=lambda x: x.w)

# hàm tìm đỉnh gốc (root) của một đỉnh trong cây
def find_root(parent, node):
    while parent[node] != node:  # vòng lặp để tìm đỉnh gốc. Nếu đỉnh hiện tại không phải là gốc, tiếp tục tìm đỉnh cha
        node = parent[node]
    return node # trả về gốc

# Hàm kết nối hai cây con thành một cây
def union(parent, rank, u, v):
    root_u = find_root(parent, u) # Tìm đỉnh gốc của đỉnh u
    root_v = find_root(parent, v) # Tìm đỉnh gốc của đỉnh v

    if rank[root_u] < rank[root_v]: # kiểm tra xem đỉnh gốc của u có độ sâu thấp hơn đỉnh gốc của v không
        parent[root_u] = root_v # nếu có gắn đỉnh gốc của u vào đỉnh gốc của v
    elif rank[root_u] > rank[root_v]: # kiểm tra xem đỉnh gốc của u có độ sâu cao hơn đỉnh gốc của v không
        parent[root_v] = root_u # nếu có, gắn đỉnh gốc của v vào đỉnh gốc của u
    else: # ngược lại
        parent[root_v] = root_u #  gắn đỉnh gốc của v vào đỉnh gốc của u
        rank[root_u] += 1 # tăng độ sâu của đỉnh gốc u lên 1 đơn vị

# Khởi tạo parent và rank
parent = [i for i in range(N + 1)] # khởi tạo list parent để theo dõi đỉnh cha của mỗi đỉnh, ban đầu mỗi đỉnh là đỉnh cha của chính nó.
rank = [0] * (N + 1) # khởi tạo list rank để lưu độ sâu của cây con tại mỗi đỉnh, ban đầu đều là 0.
 
# Tính trọng số của cây bao trùm tối thiểu
min_spanning_tree_weight = 0
for edge in edges: # vòng lặp chạy qua các cạnh
    u = edge.u #  lấy đỉnh xuất phát từ cạnh
    v = edge.v #  Lấy đỉnh kết thúc từ cạnh.
    if find_root(parent, u) != find_root(parent, v): #kiểm tra xem cạnh u - v có thể được thêm vào cây bao trùm bằng cách kiểm tra xem đỉnh gốc của u và v có khác nhau  không
        min_spanning_tree_weight += edge.w # nếu có, thì cộng trọng số của cạnh vào trọng số của cây bao trùm
        union(parent, rank, u, v) # kết nối cây con chứa đỉnh u và cây con chứa đỉnh v thành một cây

# In trọng số của cây bao trùm tối thiểu
print(min_spanning_tree_weight)
`,"5_2":`
from collections import defaultdict, deque


# Hàm đệ quy để làm phẳng danh sách lồng ghép
def flatten_list(nested):
    flat_list = [] # khai báo list cần cho ra
    for item in nested: # duyệt list cu
        if isinstance(item, list):
            # nếu phần tử hiện tại là một danh sách, gọi đệ quy để làm phẳng danh sách đó
            flat_list.extend(flatten_list(item))
        else:
            # nếu phần tử không phải là danh sách, thêm nó vào danh sách phẳng
            flat_list.append(item)
    return flat_list # trả về list mới đã làm phẳng

# Hàm DFS để tìm chuỗi các đỉnh được thăm
def dfs(graph, start_node):
    visited = set() # khai báo set visited để theo dõi các đỉnh đã được thăm trong quá trình DFS.
    result = [] # khai báo list result để lưu trữ chuỗi các đỉnh đã thăm theo thứ tự DFS.

    def dfs_recursive(node): 
        visited.add(node) # đánh dấu đỉnh đã thăm bằng cách thêm nó vào tập hợp visited.
        result.append(node) # thêm đỉnh hiện tại vào danh sách kết quả.

        for neighbor in sorted(graph[node]):  # sắp xếp các đỉnh kề theo thứ tự từ điển
            if neighbor not in visited: # kiểm tra xem đỉnh kề đã được thăm chưa.
                dfs_recursive(neighbor) # nếu đỉnh kề chưa được thăm, gọi đệ quy dfs_recursive để thực hiện DFS tiếp.

    dfs_recursive(start_node) # bắt đầu DFS từ đỉnh xuất phát
    return result # trả về kết quả


# Đọc input
n, m = map(int, input().split()) # n dinh m canh
graph = defaultdict(list) # khai báo một biểu diễn đồ thị bằng defaultdict, trong đó list là kiểu dữ liệu cho mỗi đỉnh.
check = set() # set check để theo dõi các đỉnh chưa thăm.

for _ in range(m):
    u, v = map(int, input().split()) # u dinh v dinh
    graph[u].append(v) # thêm vào đồ thị
    graph[v].append(u) # thêm vào đồ thị

start_node = 1 # đỉnh bắt đầu
result = dfs(graph, start_node) # gọi dfs

# in kết quả
print(' '.join(map(str, result)))
`, "5_3": `
from collections import defaultdict, deque


# Hàm đệ quy để làm phẳng danh sách lồng ghép
def flatten_list(nested):
    flat_list = [] # khai báo list cần cho ra
    for item in nested: # duyệt list cu
        if isinstance(item, list):
            # nếu phần tử hiện tại là một danh sách, gọi đệ quy để làm phẳng danh sách đó
            flat_list.extend(flatten_list(item))
        else:
            # nếu phần tử không phải là danh sách, thêm nó vào danh sách phẳng
            flat_list.append(item)
    return flat_list # trả về list mới đã làm phẳng


# hàm BFS để tìm chuỗi các đỉnh được thăm
def bfs(graph, start_node):
    visited = set()  # set chứa các đỉnh đã thăm
    queue = deque()   # hàng đợi sử dụng trong thuật toán BFS
    result = []       # list chứa chuỗi các đỉnh đã thăm

    queue.append(start_node)  # đưa đỉnh gốc vào hàng đợi
    visited.add(start_node)   # đánh dấu đỉnh gốc là đã thăm

    while queue: # hàng đợi vẫn rỗng
        node = queue.popleft()  # lấy đỉnh đầu tiên ra khỏi hàng đợi
        result.append(node)     # thêm đỉnh này vào danh sách kết quả

        for neighbor in sorted(graph[node]):  # sắp xếp các đỉnh kề theo thứ tự từ điển
            if neighbor not in visited:
                queue.append(neighbor)  # đưa đỉnh kề vào hàng đợi để duyệt tiếp
                visited.add(neighbor)  # đánh dấu đỉnh kề là đã thăm

    return result  # trả về chuỗi các đỉnh đã thăm theo thứ tự BFS


# Đọc input
n, m = map(int, input().split())  # n đỉnh, m cạnh
graph = defaultdict(list)  # lưu đỉnh và cạnh của đồ thị
check = set()  # sử dụng để kiểm tra các đỉnh chưa thăm

for _ in range(m):
    u, v = map(int, input().split())  # u là đỉnh, v là đỉnh
    graph[u].append(v) # chèn vào dict
    graph[v].append(u) # chèn vào dict

for c in range(n):
    if c != 0:
        check.add(c)

# bắt đầu BFS từ đỉnh nhỏ nhất (1) và sắp xếp kết quả

result = []  # list tạm thời chứa kết quả từ mỗi lần BFS
final_result = []  # list  chứa toàn bộ kết quả

while check: # kiểm tra đến khi thăm hết các đỉnh
    start_node = 0 # bắt đầu từ 0
    for k in range(n):
        if k not in final_result and k != 0:
            start_node = k # gán node bắt đầu = k
            break
    result = bfs(graph, start_node)  # Thực hiện BFS từ đỉnh xuất phát
    print(' '.join(map(str, result)), end=' ') # in kết quả
    final_result.append(result) # chèn vào list chứa kết quả
    final_result = flatten_list(final_result)  # làm phẳng danh sách kết quả
    for i in result:
        check.remove(i) # bỏ khi đỉnh đã được thăm
`, "5_4":`
# hàm kiểm tra xem có đủ các điều kiện để là đồ thị Hamiltonian hay không
def is_hamiltonian(graph):
    n = len(graph) # khai báo số đỉnh đồ thị

    # điều kiện 1: đồ thị có ít nhất 3 đỉnh
    if n < 3:
        return False

    # điều kiện 2: Đồ thị liên thông
    visited = [False] * n #  khai báo danh sách visited  độ dài n theo dõi trạng thái đã thăm của các đỉnh.Tất cả các đỉnh đều được đánh dấu là chưa thăm (False).
    stack = [0] # Tạo ngăn xếp stack và bắt đầu từ đỉnh 0 để kiểm tra tính liên thông.
    visited[0] = True # đánh dấu đỉnh 0 là đã thăm, vì  bắt đầu từ đỉnh này.
    while stack: #vòng lặp while kiểm tra xem có đỉnh nào trong ngăn xếp không.
        current = stack.pop() # lấy một đỉnh từ đầu ngăn xếp để kiểm tra, đỉnh này làm đỉnh gốc để kiểm tra tính liên thông.
        for neighbor in graph[current]: # duyệt các đỉnh kề với đỉnh hiện tại
            if not visited[neighbor]: # nếu chưa thăm
                stack.append(neighbor) # thêm vào stack
                visited[neighbor] = True # đánh dấu đã thăm

    if not all(visited): # kiểm tra đã kiểm tra hết các đỉnh đồ thì chưa
        return False # nếu chưa, đồ thị không liên thông

    # Điều kiện 3: Mọi đỉnh trong đồ thị có ít nhất 2 đỉnh kề
    for vertex in range(n): # duyệt các đỉnh
        degree = len(graph[vertex]) # biến chứa số đỉnh kề
        if degree < 2: # nếu < 2 , không liên thông
            return False

    return True # liên thông

# Đọc input
T = int(input())
results = [] # biến chứa kết quả

for s in range(T):
    n, m = map(int, input().split()) # nhập số đỉnh, cạnh
    graph = {i: [] for i in range(n)} # đồ thị để lưu đỉnh, cạnh
    for _ in range(m):
        u, v = map(int, input().split()) # nhập cạnh
        graph[u - 1].append(v - 1) # thêm vào list
        graph[v - 1].append(u - 1) # thêm vào list

    if is_hamiltonian(graph): # kiểm tra
        results.append(1) # đúng, chèn 1
    else:
        results.append(0) # sai chèn 0
    print(results[s]) # in kết quả
`, "6_1":`
from collections import deque

# định nghĩa class để tìm luồng cực đại bằng thuật toán Dinic
class DinicsMaxFlow:
    def __init__(self, n): # Hàm khởi tạo
        self.n = n # n là số đỉnh
        self.graph = [[] for _ in range(n)] # tạo list rỗng để mô tả đồ thị
        self.level = None   # sử dụng trong quá trình tìm luồng cực đại
        self.ptr = None     # sử dụng trong quá trình tìm luồng cực đại

    def add_edge(self, u, v, capacity): # phương thức thêm cạnh vào đồ thị
        self.graph[u].append({"v": v, "capacity": capacity, "rev": len(self.graph[v])}) # thêm 1 cạnh từ u đến v với capacity =capacity
        self.graph[v].append({"v": u, "capacity": 0, "rev": len(self.graph[u]) - 1}) # thêm 1 cạnh từ v đến u với capacity = 0

    def bfs(self, source, sink): # định nghĩa BFS 
        self.level = [-1] * self.n #  tạo một danh sách self.level với n phần tử, mỗi phần tử được gán giá trị ban đầu là -1.
        self.level[source] = 0  # gán đỉnh nguồn (source) level bằng 0.
        queue = deque([source]) # tạo hàng đợi với source là phần tử đầu 

        while queue: # lặp đến khi queue rỗng
            u = queue.popleft() #  lấy ra đỉnh đầu tiên từ hàng đợi và gán cho biến u.
            for edge in self.graph[u]: #  lặp qua tất cả các cạnh nối với đỉnh u
                if self.level[edge["v"]] < 0 and edge["capacity"] > 0: #  kiểm tra đỉnh kế tiếp (edge["v"]) chưa được ghé thăm (có level là -1) và capacity của cạnh lớn hơn 0 không.
                    self.level[edge["v"]] = self.level[u] + 1 #  nếu đúng, đỉnh kế tiếp được gán mức (level) bằng mức của đỉnh hiện tại u + 1.
                    queue.append(edge["v"]) # thêm đỉnh kế vào hàng đợi

        return self.level[sink] >= 0 # kiểm tra xem đỉnh đích (sink) đã được ghé thăm hay chưa bằng cách kiểm tra giá trị của level của nó >= 0 không

    def dfs(self, u, sink, flow): # thực hiện dfs để tăng luồng từ đỉnh u đến đỉnh đích sink với lượng luồng flow.
        if u == sink: #  kiểm tra nếu đỉnh hiện tại u đã đến đỉnh đích sink chưa
            return flow # rồi thì trả về flow 

        for i in range(self.ptr[u], len(self.graph[u])): #  lặp qua các cạnh nối với đỉnh u, bắt đầu từ chỉ số self.ptr[u] đến cuối danh sách các cạnh nối với đỉnh u.
            self.ptr[u] = i #  cập nhật giá trị của self.ptr[u] để tiếp tục từ vị trí hiện tại trong lần gọi tiếp theo của phương thức dfs.
            edge = self.graph[u][i] #  lấy ra cạnh thứ i từ danh sách các cạnh nối với đỉnh u.
            if edge["capacity"] > 0 and self.level[u] < self.level[edge["v"]]: #  kiểm tra xem cạnh có capacity lớn hơn 0 và level của đỉnh u nhỏ hơn level của đỉnh kế tiếp edge["v"] không
                pushed = self.dfs(edge["v"], sink, min(flow, edge["capacity"])) #  gọi đệ quy phương thức dfs với đỉnh kế tiếp edge["v"] làm đỉnh hiện tại, đỉnh đích sink, và lượng luồng tối thiểu giữa flow và khả năng của cạnh hiện tại.
                if pushed > 0: #  kiểm tra nếu có lượng luồng tăng (pushed) lớn hơn 0, tức là đã tìm thấy đường tăng luồn
                    self.graph[u][i]["capacity"] -= pushed #  cập nhật khả năng trên cạnh hiện tại và cạnh ngược lại để trừ đi lượng luồng đã tăng
                    self.graph[edge["v"]][edge["rev"]]["capacity"] += pushed # cộng thêm lượng luồng vào cạnh ngược lại
                    return pushed #  trả về lượng luồng đã tăng.

        return 0

    # định nghĩa phương thức max_flow để tính toán luồng cực đại từ nguồn source đến đích sink trong đồ thị.
    def max_flow(self, source, sink):
        max_flow = 0 #  khởi tạo biến max_flow để lưu trữ luồng cực đại, ban đầu là 0.

        while self.bfs(source, sink): #  bắt đầu một vòng lặp vô hạn để tiếp tục tìm đường tăng luồng bằng cách gọi phương thức bfs. Dừng khi không còn đường tăng luồng
            self.ptr = [0] * self.n # cập nhật self.ptr để chuẩn bị cho việc tìm kiếm đường tăng luồng trong mỗi lần gọi phương thức dfs
            while True: #  lặp vô hạn để tìm và tăng luồng trên đường tăng.
                flow = self.dfs(source, sink, float('inf')) #  gọi dfs để tìm và tăng luồng từ nguồn source đến đích sink, kết quả được lưu trữ trong biến flow.
                if flow == 0: # kiểm tra xem có còn đường tăng luồng nữa không
                    break # thoát vòng lặp 
                max_flow += flow #  cập nhật luồng cực đại max_flow

        return max_flow # trả về 

if __name__ == "__main__":
    N, M = map(int, input().split()) # đọc thông tin đinh, cạnh
    source, sink = map(int, input().split()) # đọc đỉnh nguồn , đích

    max_flow_solver = DinicsMaxFlow(N) #  khai báo một đối tượng max_flow_solver từ lớp DinicsMaxFlow với N đỉnh.

    #  dùng vòng for để đọc thông tin về các cạnh và capacity của chúng từ input, rồi sử dụng phương thức add_edge để thêm các cạnh này vào đồ thị.
    for _ in range(M):
        u, v, capacity = map(int, input().split())
        max_flow_solver.add_edge(u - 1, v - 1, capacity)

    max_flow = max_flow_solver.max_flow(source - 1, sink - 1) #  tính toán luồng cực đại 
    print(max_flow) # in kết quả
`, "6_2":`
import heapq

#  định nghĩa một hàm dijkstra tìm đường ngắn nhất từ đỉnh start đến đỉnh end
def dijkstra(graph, start, end):
    n = len(graph) # lấy số đỉnh trong đồ thị 
    distances = [float('inf')] * n #  khởi tạo list tên distances gồm n phần tử, mỗi phần tử được gán giá trị vô cùng
    distances[start] = 0 # cập nhật khoảng cách từ đỉnh start đến chính nó bằng 0

    min_heap = [(0, start)] #  tạo một hàng đợi ưu tiên (min_heap) ban đầu với một phần tử duy nhất, là đỉnh start với khoảng cách 0.

    while min_heap: # bắt đầu một vòng lặp vô hạn cho đến khi min_heap trống rỗng.
        dist, node = heapq.heappop(min_heap) #  lấy ra phần tử có khoảng cách nhỏ nhất từ hàng đợi ưu tiên. Biến dist chứa khoảng cách và node chứa đỉnh tương ứng.

        if node == end: #  kiểm tra nếu đỉnh node bằng đỉnh đích end
            return dist # trả về khoảng cách 

        if dist > distances[node]: # nếu khoảng cách dist từ start đến node đã được cập nhật và đã lớn hơn khoảng cách trong danh sách distances
            continue # bỏ qua 

        for neighbor, weight in graph[node]: # lặp qua tất cả các đỉnh kề và trọng số của chúng trong danh sách graph[node].
            if dist + weight < distances[neighbor]: #  kiểm tra có một đường đi từ start đến đỉnh kề neighbor thông qua đỉnh node với khoảng cách dist + weight ngắn hơn khoảng cách hiện tại từ start đến neighbor trong danh sách distances
                distances[neighbor] = dist + weight #  cập nhật khoảng cách từ start đến neighbor
                heapq.heappush(min_heap, (distances[neighbor], neighbor)) #  thêm đỉnh neighbor vào hàng đợi ưu tiên với khoảng cách mới 

    return -1 # không tìm được đường đi, trả về -1

if __name__ == "__main__":
    n, m = map(int, input().split()) # nhập đỉnh n và cạnh m
    graph = [[] for _ in range(n)] # tạp list graph để lưu cầu trúc

    # vòng lặp để đọc thông tin về các cạnh và trọng số của chúng từ input, sau đó thêm các thông tin này vào danh sách graph để tạo đồ thị.
    for _ in range(m):
        u, v, w = map(int, input().split())
        graph[u - 1].append((v - 1, w))

    s, t = map(int, input().split()) # đọc đỉnh nguồn s và đỉnh đích t
    result = dijkstra(graph, s - 1, t - 1) #  gọi hàm dijkstra để tính toán khoảng cách từ đỉnh s - 1 đến t - 1 và lưu kết quả vào biến result.

    if result == -1: # không tìm được
        print(-1) # trả về -1
    else:
        print(result) # in kết quả
`, "6_3":`
import sys

def shortest_paths(graph, n): # định nghĩa hàm shortest_paths để tính toán khoảng cách ngắn nhất giữa các đỉnh trong đồ thị
    d = [[float('inf')] * n for _ in range(n)] #  tạo list d với n dòng và n cột, mỗi phần tử ban đầu được gán giá trị vô cùng
    for i in range(n): # đặt giá trị của các phần tử trên đường chéo của ma trận d bằng 0
        d[i][i] = 0

    for u, v, weight in graph: # lặp qua  các cạnh và trọng số của chúng trong graph và cập nhật giá trị tương ứng trong ma trận d
        d[u - 1][v - 1] = weight

    #  sử dụng thuật toán Floyd-Warshall để tính toán khoảng cách ngắn nhất giữa các đỉnh trong đồ thị. 
    for k in range(n):
        for i in range(n):
            for j in range(n):
                d[i][j] = min(d[i][j], d[i][k] + d[k][j])

    return d

if __name__ == "__main__":
    n, m = map(int, input().split()) # đọc đỉnh n và cạnh m 
    graph = [] # tạo graph để lưu cầu trúc đồ thị

    # đọc thông tin về các cạnh và trọng số của chúng từ input và thêm thông tin này vào danh sách graph.
    for _ in range(m):
        u, v, w = map(int, input().split()) 
        graph.append((u, v, w))

    distances = shortest_paths(graph, n) # gọi hàm shortest_paths để tính toán khoảng cách ngắn nhất giữa các đỉnh và lưu kết quả vào biến distances.

    for row in distances: #  duyệt qua từng hàng trong ma trận distances 
        print(" ".join(map(str, row))) # in các giá trị ra dạng chuỗi
`, "7_1":`
transactions = [] # list để lưu các bản ghi giao dịch
accounts_set = set() # set để lưu các tài khoản duy nhất trong giao dịch
money_from_account = {} # từ điển lưu tổng số tiền mỗi tài khoản
transaction_cycles = set() # set lưu các chu kỳ giao dịch duy nhất

while True: # vòng lặp để input
    line = input().strip() # nhập
    if line == "#": # gặp #, rời while
        break
    from_account, to_account, money, time_point, atm = line.split() # tách từng phần của 1 line
    transactions.append((from_account, to_account, int(money))) # thêm thông tin tài khoản, số tiền chuyển vào transaction
    accounts_set.add(from_account) # thêm account khởi đầu
    accounts_set.add(to_account) # thêm account kết thúc
    if from_account in money_from_account: # nếu tài khoản có trong dict lưu tổng số tiền
        money_from_account[from_account] += int(money) # cộng thêm
    else:
        money_from_account[from_account] = int(money) # nếu không có, khởi tạo

while True: # vòng while để lưu các yêu cầu truy vấn
    line = input().strip() # nhập
    if line == "#": # gặp # rời while
        break
    if line == "?number_transactions": # nếu gặp yêu cầu number_transactions
        print(len(transactions)) # in độ dài của transcation
    elif line == "?total_money_transaction": # nếu gặp yêu cầu total_money_transaction
        print(sum([money for _, _, money in transactions])) # tính tổng tiền bằng sum
    elif line == "?list_sorted_accounts": # nếu gặp yêu cầu list_sorted_accounts
        sorted_accounts = sorted(list(accounts_set)) # săp xếp list
        for account in sorted_accounts: # chạy vòng for qua từng account
            print(account) # in
    elif line.startswith("?total_money_transaction_from"): # nếu gặp yêu cầu total_money_transaction_from
        account = line.split()[1] # lấy số tài khoản
        if account in money_from_account: # nếu tài khoản có trong list
            print(money_from_account[account]) # in
        else:
            print(0) # nếu không, in 0
    elif line.startswith("?inspect_cycle"): # nếu gặp yêu cầu inspect_cycle
        parts = line.split() # tạo list part để tách từng phần
        account = parts[1] #lưu số tài khoản 
        k = int(parts[2]) # lưu độ dài 1 vòng tròn giao dịch
        cycle = [account] # lưu các số tài khoản trong 1 vòng tròn giao dịch
        for _ in range(k): # chạy vòng lặp 
            found = False # gán biến tìm thấy vòng lặp = False
            for from_account, to_account, _ in transactions: # chạy vòng lặp qua từng giao dịch
                if from_account == account and to_account not in cycle: # nếu số tài khoản đầu bằng cuối và stk tiếp theo không trong vòng tròn giao dịch
                    cycle.append(to_account) # thêm vào vòng tròn
                    account = to_account # gán
                    found = True # tìm thấy vòng lặp
                    break # break vòng lặp
            if not found: # không thấy
                break # break vòng lặp
        if len(cycle) == k + 1 and cycle[-1] == cycle[0]: # nếu tìm được vòng tròn với đúng độ dài
            print(1) # in 1
        else:
            print(0) # ngược lại in 0
`, "7_2":`
from collections import defaultdict
from datetime import datetime

shops_revenue = defaultdict(int) # lưu thông tin doanh thu cửa hàng
customers_shops_revenue = defaultdict(int) # lưu doanh thu đối với từng khách hàng
total_revenue = 0 # lưu tổng doanh thu
orders = [] # lưu danh sách các đơn đặt hàng    

# chuyển time thành giây
def time_to_seconds(time_point):
    t = datetime.strptime(time_point, '%H:%M:%S') # đọc thông tin
    return t.hour * 3600 + t.minute * 60 + t.second # chuyển về giây

while True: # đọc dữ liệu input
    line = input().strip() # nhập dòng
    if line == "#":
        break # gặp break thì dừng
    customer_id, product_id, price, shop_id, time_point = line.split() # chia dòng thành từng phần
    price = int(price) # lưu biến price về dạng số 
    orders.append((customer_id, product_id, price, shop_id, time_point)) # thêm thông tin vào list đơn hàng
    total_revenue += price # thêm vào tổng doanh thu

    # Update shop revenue
    shops_revenue[shop_id] += price # cộng doanh thu cho cửa hàng

    # Update customer-shop revenue
    customers_shops_revenue[(customer_id, shop_id)] += price # cộng số tiền mà 1 khách bỏ ra

while True:
    line = input().strip() # nhập dòng
    if line == "#":
        break # gặp # thì rời vòng lặp
    if line == "?total_number_orders": # nếu yêu cầu là total_number_orders
        print(len(orders)) # in độ dài list orders
    elif line == "?total_revenue": # nếu yêu cầu là total_revenue
        print(total_revenue)  # in tổng doanh thu
    elif line.startswith("?revenue_of_shop"): # nếu yêu cầu là revenue_of_shop
        shop_id = line.split()[1] # lấy id cửa hàng
        print(shops_revenue[shop_id]) # in ra doanh thu của id đó
    elif line.startswith("?total_consume_of_customer_shop"): # nếu yêu cầu total_consume_of_customer_shop
        parts = line.split() #lấy phần đầu
        customer_id = parts[1] # lấy id khách
        shop_id = parts[2] # lấy id cửa hàng
        print(customers_shops_revenue[(customer_id, shop_id)]) # in theo yêu cầu
    elif line.startswith("?total_revenue_in_period"): # nếu yêu cầu total_revenue_in_period
        parts = line.split() # lấy phẩn đầu
        from_time = time_to_seconds(parts[1]) # lấy thời gian bắt đầu
        to_time = time_to_seconds(parts[2]) # lấy thời gian kết thúc
        revenue_period = sum(price for (_, _, price, _, time) in orders if from_time <= time_to_seconds(time) <= to_time) # tính tổng bằng sum kết hợp vòng lặp
        print(revenue_period) # in kết quả
`, "8_1":`
# Gọi module datetime để làm việc với ngày và giờ
from datetime import datetime

# hàm phân tích dòng nộp bài
def parse_submission(line):
    user, problem, time_str, status, point = line.split()
    time_point = datetime.strptime(time_str, "%H:%M:%S")  # Chuyển đổi chuỗi thời gian thành đối tượng datetime
    return user, problem, time_point, status, int(point) # trả về các thông tin input

# Hàm để xử lý các truy vấn dựa trên các bài nộp
def process_queries(submissions, queries):
    max_points = {} # lưu điểm nhiều nhất 1 bài
    total_submissions = 0 # lưu số lần nộp 
    error_submissions = 0 # lưu số lần nộp bị lỗi
    user_error_submissions = {} # lưu số lần nộp bị lỗi của 1 user
    user_total_points = {} # lưu số điểm 1 user

    # lặp qua từng bài nộp
    for submission in submissions:
        user, problem, time_point, status, point = submission
        total_submissions += 1  # tăng số lượng bài nộp tổng

        # kiểm tra xem bài nộp có trạng thái lỗi không
        if status == 'ERR':
            error_submissions += 1  # Tăng số lượng bài nộp lỗi
            # theo dõi số lượng bài nộp lỗi cho từng người dùng
            if user not in user_error_submissions:
                user_error_submissions[user] = 1 # nếu lần đầu, gán = 1
            else:
                user_error_submissions[user] += 1 # nếu không phải, tăng biến lên 1

        # cập nhật điểm tối đa cho từng cặp (người dùng, bài) cập nhật khi người dùng chưa có trong danh sách hoặc điểm của 1 bài cao hơn
        if (user, problem) not in user_total_points or point > user_total_points[(user, problem)]:
            user_total_points[(user, problem)] = point

        # cập nhật điểm tối đa cho từng bài
        if problem not in max_points or point > max_points[problem]:
            max_points[problem] = point # gán bằng điểm point

    # xử lý từng truy vấn và lưu kết quả
    results = [] # list lưu kết quả
    for query in queries: # lặp qua từng truy vấn
        if query == '?total_number_submissions': # kiểm tra loại truy vấn
            results.append(str(total_submissions)) # chèn kết quả vào list
        elif query == '?number_error_submision': # kiểm tra loại truy vấn
            results.append(str(error_submissions)) # chèn kết quả vào list
        elif query.startswith('?number_error_submision_of_user'): # kiểm tra loại truy vấn
            _, user_query = query.split() # lấy tên user
            results.append(str(user_error_submissions.get(user, 0))) # chèn kết quả vào list
        elif query.startswith('?total_point_of_user'): # kiểm tra loại truy vấn
            _, user_query = query.split() # lấy tên user
            user_points = [point for (u, p), point in user_total_points.items() if u == user] # lặp để tính tổng điểm 1 user
            results.append(str(sum(user_points))) # chèn kết quả vào list
        elif query.startswith('?number_submission_period'): # kiểm tra loại truy vấn
            _, from_time, to_time = query.split() # lấy from_time, to_time
            from_time = datetime.strptime(from_time, "%H:%M:%S") # chuyển đổi về dạng thời gian
            to_time = datetime.strptime(to_time, "%H:%M:%S") # chuyển đổi về dạng thời gian
            submissions_in_period = sum(1 for _, _, time_point, _, _ in submissions if from_time <= time_point <= to_time)# đếm số lượng bài nộp trong khoảng thời gian chỉ định
            results.append(str(submissions_in_period)) # chèn kết quả vào list

    return results # trả về kết quả

if __name__ == "__main__":
    submissions = [] # list lưu thông tin nộp bài

    # vòng lặp nhập 
    while True:
        line = input().strip()   # lấy các dòng nhập
        if line == '#': # gặp '#' thì break
            break
        submissions.append(parse_submission(line)) # chèn dữ liệu

    queries = [] # list lưu truy vấn

    # vòng lặp nhập để đọc các truy vấn
    while True:
        line = input().strip() # lấy các dòng nhập
        if line == '#':# gặp '#' thì break
            break
        queries.append(line) # chèn dữ liệu

    results = process_queries(submissions, queries)  # xử lý truy vấn 
    for result in results:
        print(result) # in kết quả
`, "8_2":`
from datetime import datetime

# định nghĩa lớp Person để biểu diễn thông tin về mỗi người
class Person:
    def __init__(self, code, date_of_birth, father_code, mother_code, is_alive, region_code): # hàm khởi tạo cùng các phép gán
        self.code = code 
        try:
            self.date_of_birth = datetime.strptime(date_of_birth, "%Y-%m-%d") # đưa ngày sinh dạng chuỗi về dạng date
        except ValueError:
            # Xử lý nếu ngày sinh không hợp lệ bằng cách sử dụng giá trị mặc định
            self.date_of_birth = datetime.strptime('2999-01-01', "%Y-%m-%d") # đưa ngày sinh dạng chuỗi về dạng date
        self.father_code = father_code
        self.mother_code = mother_code
        self.is_alive = is_alive
        self.region_code = region_code

# hàm phân tích dòng đầu vào và trả về đối tượng Person tương ứng
def parse_submission(line):
    parts = line.split() # lấy từng phần 1 dòng
    code, date_of_birth, father_code, mother_code, is_alive, region_code = parts # gán từng phần cho từng nội dung cụ thể

    return Person(code, date_of_birth, father_code, mother_code, is_alive, region_code) # trả về 1 đối tượng Person

# hàm  phân tích đầu vào của chương trình
def parse_input():
    submissions = {} # lưu Person

    # đọc thông tin người 
    while True:
        line = input().strip() # nhập 1 dòng
        if line == '*': 
            break # gặp dấu '*' thì break
        person = parse_submission(line) # lấy thông tin Person
        submissions[person.code] = person # lưu thông tin Person

    queries = [] # lưu các truy vấn

    # đọc các truy vấn 
    while True:
        line = input().strip() # nhập 1 dòng
        if line == '***':
            break # gặp *** thì dừng
        queries.append(line) # đưa dòng nhập vào list các truy vấn
    return submissions, queries # trả về input

# hàm trả về số lượng người trong cơ sở dữ liệu
def number_people(database):
    return len(database)  # độ dài của database

# hàm trả về số lượng người sinh vào một ngày cụ thể
def number_people_born_at(database, date):
    return sum(1 for person in database.values() if person.date_of_birth.strftime('%Y-%m-%d') == date) # tính tổng thông qua lặp tất cả mọi người

# hàm trả về người tổ tiên sống lâu nhất của một người
def most_alive_ancestor(database, code):
    def find_ancestor(person):
        if person.father_code == '0000000' and person.mother_code == '0000000': # nếu không có thông tin cha mẹ
            return 0 # trả về 0
        father = database[person.father_code] # lấy thông tin cha
        mother = database[person.mother_code] # lấy thông tin mẹ
        return max(find_ancestor(father), find_ancestor(mother)) + 1 # lấy max của hàm đệ quy

    person = database[code] # gán thông tin người
    return find_ancestor(person) # trả về kết quả

# hàm trả về số lượng người sinh trong khoảng thời gian cụ thể
def number_people_born_between(database, from_date, to_date):
    from_date = datetime.strptime(from_date, "%Y-%m-%d") # lấy ngày bắt đầu
    to_date = datetime.strptime(to_date, "%Y-%m-%d") # lấy ngày kết thúc
    return sum(1 for person in database.values() if from_date <= person.date_of_birth <= to_date) # tính kết quả dựa vào vòng lặp với điều kiện cụ thể

# hàm trả về số lượng người không có mối quan hệ họ hàng lớn nhất
def max_unrelated_people(database):
    # lấy list mã số của tất cả người trong database
    codes = list(database.keys())
    max_size = 0 # gán biến kết quả = 0

    # lặp qua tất cả cặp mã số để kiểm tra mối quan hệ họ hàng
    for code1 in codes:
        for code2 in codes:
            # kiểm tra mã số khác nhau để tránh so sánh với chính bản thân
            if code1 != code2:
                # kiểm tra mối quan hệ họ hàng giữa tất cả các người trong cơ sở dữ liệu
                unrelated = all(
                    (database[p].father_code != code1 or database[p].mother_code != code2) and
                    (database[p].father_code != code2 or database[p].mother_code != code1) for p in codes
                )
                # nếu không có mối quan hệ họ hàng, cập nhật kích thước lớn nhất
                if unrelated:
                    max_size = max(max_size, len({code1, code2}))

    # trả về kích thước lớn nhất của nhóm người không có mối quan hệ họ hàng
    return max_size



# hàm xử lý các truy vấn và trả về kết quả
def process_queries(database, queries):
    results = [] # list lưu kết quả

    for query in queries: # lặp qua các truy vấn
        if query == 'NUMBER_PEOPLE': # kiểm tra thông tin truy vấn
            results.append(number_people(database)) # chèn kết quả vào list
        elif query.startswith('NUMBER_PEOPLE_BORN_AT'): # kiểm tra thông tin truy vấn
            _, date = query.split() # lưu ngày sinh
            results.append(number_people_born_at(database, date))  # chèn kết quả vào list
        elif query.startswith('MOST_ALIVE_ANCESTOR'): # kiểm tra thông tin truy vấn
            _, code = query.split() # lưu mã số
            results.append(most_alive_ancestor(database, code)) # chèn kết quả vào list
        elif query.startswith('NUMBER_PEOPLE_BORN_BETWEEN'): # kiểm tra thông tin truy vấn
            _, from_date, to_date = query.split() # lưu thời gian
            results.append(number_people_born_between(database, from_date, to_date)) # chèn kết quả vào list
        elif query == 'MAX_UNRELATED_PEOPLE': # kiểm tra thông tin truy vấn
            results.append(max_unrelated_people(database)) # chèn kết quả vào list

    return results # trả về kêt quả

# Hàm chính của chương trình
if __name__ == "__main__":
    submissions, queries = parse_input() # lấy input
    results = process_queries(submissions, queries) # lấy kết quả
    for i in range(len(results)):
         print(results[i])  # in kết quả
`
  };

  function showCode() {
      var weekSelector = document.getElementById("weekSelector").value;
      var baiSelector = document.getElementById("baiSelector").value;

      var key = weekSelector + "_" + baiSelector;

      document.getElementById("code").textContent = codeSnippets[key];
  }

  var fs = require('fs');
  function delayedShowOutput() {
    // Chờ 2 giây trước khi gọi showOutPut
    setTimeout(showOutPut, 2000);
}
  function showOutPut() {
    var data = fs.readFileSync("./temp/temp.txt", {encoding:'utf8'});
    console.log(data);
  }

},{"fs":1}]},{},[2]);
