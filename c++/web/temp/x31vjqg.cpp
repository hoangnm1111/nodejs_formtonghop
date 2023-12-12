// Nguyễn Nam Hoàng - 20215382
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
    outputFile << "Nguyễn Nam Hoàng" << endl;
    outputFile << result << endl;

    // Đóng file
    outputFile.close();

  }
  cout << fibo(n);

  return 0;
}
