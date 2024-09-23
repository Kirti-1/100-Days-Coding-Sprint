#include <iostream>
#include <vector>
#include <random>

using namespace std;

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




    return 0;
}
