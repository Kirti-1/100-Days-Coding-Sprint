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
        int n = Integer.parseInt(br.readLine().trim());
        String[] ar = new String[n];
        for(int i=0;i<n;i++){
            ar[i] = br.readLine();
        }
        int k = Integer.parseInt(br.readLine().trim());
    
        //add all the string with the number of occurances
        
        Map<String,Integer> map = new HashMap<>();
        for(int i=0;i<n;i++){
            if(map.containsKey(ar[i])){
                map.put(ar[i], map.get(ar[i]) + 1);
                
            }else{
                map.put(ar[i], 1);
            }
        }
        //remove the extra occurring string
        for(int i=0;i<n;i++){
            if(map.containsKey(ar[i]) && map.get(ar[i]) == 1){
                if(k > 1){
                    k--;
                }else if(k==1){
                    System.out.println(ar[i]);
                    break;
                }
            }else if(map.containsKey(ar[i]) && map.get(ar[i]) > 1){
                map.remove(ar[i]);
            }
        }
    }
}