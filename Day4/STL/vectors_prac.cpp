#include <iostream>
#include <vector>
#include <random>

using namespace std;


void makePair(int arr[], vector<pair<int, int> > &out, int i, int j, int n, int& countOp) {
    if (j == n) {  // Terminating condition for j
        if (i < n - 1) {  // Move to the next i
            i = i + 1;
            j = i + 1;
        } else {
            return;
        }
    }

    if (j < n && i < n-1) {  // Only push if j is within bounds
        out.push_back(pair<int, int>(arr[i], arr[j]));
        makePair(arr, out, i, j + 1, n, countOp);  
        countOp++;
    // Increment j
    }

}
int main(){


    // Initially initiazed as zero  when defined
    vector<int> vec(10);
    /*
    for(int i=0;i<vec.size();i++){
        cout << vec[i] << ", ";
    }
    */
    // all associated functions

    for(int i=0;i<vec.size();i++){
        vec[i] = rand() % 100 ;
    }

    for(int i=0;i<vec.size();i++){
        cout << vec[i] << ", ";
    }
    cout << endl;
    
    cout << "Who is in the front of the queue? " << vec.front() << endl;
    cout << "Who is at the back?? " << vec.back() << endl;
    cout << "Is the queue empty? " << (vec.empty() == 1 ? " Yes ": " No ") << endl;

    //Let's push one element at the end
    vec.push_back(400);
    //Let's check what's at the back now
    cout << "Who is at the back now after insertion of some element?? " << vec.back() << endl;
    //Let's delete one element - pop_back deletes from back of the queue

    vec.pop_back();

    //Let's show you, now Let's see who is at the back now.
    cout << "Who's at the back now after popping the element from the back?? "<< vec.back() << endl;
   
   //Clearing the queue
    vec.clear();
    //Lets see now is the queue empty now?
    cout << "Is the queue empty after clearing it? " << (vec.empty() == 1 ? " Yes ": " No ") << endl;


    int arr[6] = {2, 3, 5, 6, 7, 9};
    vector<pair<int, int> > out;
    int count = 0; 
    makePair(arr, out, 0, 1, 6, count);


    // Printing the pairs
    for (size_t i=0;i<out.size();i++) {
        cout << "(" << out[i].first << ", " << out[i].second << ") ";
    }


    cout<< "\n" << count;
    return 0;
}
