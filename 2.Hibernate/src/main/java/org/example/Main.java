package org.example;


import org.example.entities.Dog;
import org.example.util.HibernateUtil;
import org.hibernate.Transaction;

public class Main {
    public static void main(String[] args) {

        try {
            var session = HibernateUtil.getSession();

            Transaction transaction = session.beginTransaction();
            Dog dog = new Dog();

            dog.setName("Бім бім");
            dog.setAge(4);
            dog.setBreed("Простий мальок");

            session.persist(dog);
            // Закриваємо сесію
            transaction.commit();

            session.close();

        } catch (Exception e) {
            // Обробляємо помилки
            System.err.println("Сталася помилка при роботі з Hibernate: " + e.getMessage());
        } finally {
            // Завжди виконується
            HibernateUtil.shutdown();
            //System.out.println("Hibernate завершив роботу.");
        }

    }
}