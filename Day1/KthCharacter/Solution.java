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
        String[] nAndK = br.readLine().split(" ");
        int n = Integer.parseInt(nAndK[0]);
        int k = Integer.parseInt(nAndK[1]);

        String str = br.readLine();
        System.out.println(str.charAt(n-k));


    }
}