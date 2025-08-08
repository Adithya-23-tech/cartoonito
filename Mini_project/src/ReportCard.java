import java.util.Scanner;

public class ReportCard {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter the Student Name: ");
        String name = sc.nextLine();

        System.out.print("Enter the Roll Number: ");
        int rollNumber = sc.nextInt();

        System.out.print("Enter number of subjects: ");
        int numSubjects = sc.nextInt();

        String[] subjects = new String[numSubjects];
        int[] marks = new int[numSubjects];

        sc.nextLine();

        for (int i = 0; i < numSubjects; i++) {
            System.out.println("Enter Subject " + (i + 1) + " Name: ");
            subjects[i] = sc.nextLine();

            System.out.print("Enter marks for " + subjects[i] + ": ");
            marks[i] = sc.nextInt();
            sc.nextLine(); 
        }

        int total = 0;
        for (int mark : marks) {
            total += mark;
        }

        double percentage = (double) total / numSubjects;
        String grade;

        if (percentage >= 90) {
            grade = "A+";
        } else if (percentage >= 80) {
            grade = "A";
        } else if (percentage >= 70) {
            grade = "B";
        } else if (percentage >= 60) {
            grade = "C";
        } else if (percentage >= 50) {
            grade = "D";
        } else {
            grade = "F";
        }

        System.out.println("\n----- Student Report Card -----");
        System.out.println("Name: " + name);
        System.out.println("Roll Number: " + rollNumber);
        System.out.println("-------------------------------");

        for (int i = 0; i < numSubjects; i++) {
            System.out.println(subjects[i] + ": " + marks[i]);
        }

        System.out.println("-------------------------------");
        System.out.println("Total Marks: " + total);
        System.out.println("Percentage: " + String.format("%.2f", percentage) + "%");
        System.out.println("Grade: " + grade);
        System.out.println("-------------------------------");

        sc.close();
    }
}

