// Nguyễn Nam Hoàng - 20215382
      #include<iostream>
#include<fstream> // Thêm thư viện fstream
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

    int result = final_ans(arr, n); // Lưu kết quả vào biến result
    cout << result << endl; // in kết quả

    // Tạo và mở file temp.txt
    ofstream outFile("temp.txt");
    
    // Ghi kết quả vào file
    outFile << "Nguyễn Nam Hoàng" << endl;
    outFile << result;

    // Đóng file
    outFile.close();
    
    return 0;
}

