import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

class Main {

    public static void main(String[] args) throws Exception {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
        Solution.answer();
    }
}

class Solution{
    public static void answer() throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        //n
        int n = Integer.parseInt(br.readLine().trim());
        
        //gain array input
        String[] gain = br.readLine().split(" ");
        
        int maxGain = -1;
        int netGain = Integer.parseInt(gain[0]); // for keeping tabs on the net gain
        for(int i=1;i<n;i++){
            int localNetGain = (netGain + Integer.parseInt(gain[i]));

            if(localNetGain > maxGain){
                maxGain = localNetGain;
            }
            netGain = localNetGain;
        }
        if(maxGain<0){
            //In case of all the downward terrains the highest gain encountered would be 0
            System.out.println(0);
        }else{
            System.out.println(maxGain);
        }
        
    }
}