package com.wirelesscar.vw.cdis;

import java.util.Scanner;

public class TestForCheckingDuplicates {

    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        String data = sc.nextLine();
        String outputData = data.isEmpty() ? "" : getData(data);
        System.out.println(outputData);
    }

    private static String getData(String inputData) {
        String outputString = "";
        for (int i = 1; i <= inputData.length()-1; i++) {
        if(inputData.charAt(i-1) != inputData.charAt(i)){
            outputString += inputData.charAt(i-1);
        }
        if( i == inputData.length()-1 && !outputString.endsWith(String.valueOf(inputData.charAt(i)))){
            outputString += inputData.charAt(i);
        }
        }
        return outputString;
    }
}
