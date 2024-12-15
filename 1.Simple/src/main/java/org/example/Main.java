package org.example;

import java.util.Random;

public class Main {
    public static void main(String[] args) {
        DatabaseManager dm = new DatabaseManager();
        dm.createTables();

//        int n = getRandom(5,10);
//        int [] array = new int[n];
//        for (int i=0;i<n;i++) {
//            array[i]=getRandom(18,60);
//        }
//        for(var item : array) {
//            System.out.print(item+"\t");
//        }
//        System.out.println();
    }

//    private static int getRandom(int min, int max) {
//        Random random = new Random();
//        // Generate random integer between min (inclusive) and max (exclusive)
//        return random.nextInt(max - min + 1) + min;
//
//    }
}